// Работа без сети: страницы и картинки сайта берутся из кэша, каталог — сначала из сети (он всегда свежий).
// Игры (play/<игра>/): тяжёлые файлы (движок .wasm, данные .pck, .js) — в отдельном кэше «game-<игра>-<версия>»
// по версии из каталога: второй запуск на iPhone не качает 10+ МБ заново, а новая версия берёт новые файлы целиком
// (старые и новые части не смешиваются). Страница игры — всегда из сети и заодно освежает каталог.
const CACHE = "lavka-v10";
const GAME_FILE = /\/play\/([a-z0-9-]+)\/(index\.(wasm|pck|js)|index\.audio\.(position\.)?worklet\.js)$/;

/** Версия игры из сохранённого каталога (или null — тогда просто сеть). */
async function gameVersion(id) {
  const r = await caches.match("catalog.json");
  if (!r) return null;
  try { const c = await r.json(); const a = (c.apps || []).find(x => x.id === id); return (a && a.web && a.version_name) || null; }
  catch (err) { return null; }
}

async function gameFile(req, id) {
  const v = await gameVersion(id);
  if (!v) return fetch(req);
  const name = `game-${id}-${v}`, c = await caches.open(name);
  const hit = await c.match(req, { ignoreSearch: true });
  if (hit) return hit;
  const resp = await fetch(req);
  if (resp.ok && resp.status === 200) {
    await c.put(req, resp.clone());
    // старые версии этой игры больше не нужны
    for (const k of await caches.keys()) if (k.startsWith(`game-${id}-`) && k !== name) caches.delete(k);
  }
  return resp;
}

function refreshCatalog() {
  return fetch(new Request("catalog.json", { cache: "no-cache" })).then(r => { if (r.ok) return caches.open(CACHE).then(c => c.put("catalog.json", r)); })
    .catch(() => {});
}
const SHELL = ["./", "index.html", "app.html", "install.html", "roadmap.html", "privacy.html", "join.html", "me.html", "help.html", "people.html", "ideas.html",
  "assets/site.css", "assets/site.js", "assets/lavka.css", "assets/lavka.js", "assets/ideas.js", "assets/qr.js", "assets/accounts.js", "assets/apppage.js",
  ...["levsha", "shooter", "enemy", "tower", "flea", "lens", "horseshoe", "samovar", "pryanik", "shop"].map(a => `assets/av/${a}.png`), "assets/install-steps.js", "assets/fonts/Nunito-500.ttf", "assets/fonts/Nunito-800.ttf", "assets/fonts/Nunito-900.ttf",
  "assets/kremlin_px.png", "assets/mascot_idle.png", "assets/mascot_blink.png", "assets/mascot_wave1.png",
  "assets/stamp_256.png", "assets/store_icon_192.png", "assets/levsha_sm.webp", "assets/qr.png"];

self.addEventListener("install", e => {
  // cache: "reload" — новая служба берёт свежие файлы с сайта, а не старые из кэша браузера
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  // кэши игр (game-…) переживают обновление сайта — их чистит gameFile при смене версии
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && !k.startsWith("game-")).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  if (url.pathname.includes("/play/")) {
    const m = url.pathname.match(GAME_FILE);
    if (m && !m[1].endsWith("-test") && m[1] !== "bt-test") { e.respondWith(gameFile(e.request, m[1])); return; }
    // страница игры — из сети; заодно свежий каталог, чтобы следующий запуск знал новую версию
    if (url.pathname.endsWith("/") || url.pathname.endsWith(".html")) e.waitUntil(refreshCatalog());
    return;
  }
  // страницы, каталог, скрипты и стили — сначала из сети (чтобы никто не застрял на старой версии), без сети — из кэша
  if (url.pathname.endsWith("catalog.json") || url.pathname.endsWith(".html") || url.pathname.endsWith("/")
      || /\.(js|css|webmanifest)$/.test(url.pathname)) {
    // сеть в первую очередь, кэш — если сети нет
    // no-cache — всегда сверяемся с сайтом (не изменилось — короткий ответ 304), иначе браузер до 10 минут отдаёт старый файл
    e.respondWith(fetch(new Request(url.href, { cache: "no-cache", credentials: "same-origin" })).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(url.pathname.endsWith("catalog.json") ? "catalog.json" : e.request, copy));
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("catalog.json"))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
    if (resp.ok && /\.(png|jpg|svg|ttf|css|js)$/.test(url.pathname)) { const copy = resp.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return resp;
  })));
});

// Уведомления (iPhone с экрана «Домой», iOS 16.4+, и браузеры компьютера): сервер присылает {title, body, url}.
self.addEventListener("push", e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Лавка Левши", {
    body: d.body || "", icon: "assets/store_icon_192.png", badge: "assets/store_icon_192.png", tag: "lavka", renotify: true,
    data: { url: d.url || "me.html#notes" } }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = e.notification.data && e.notification.data.url || "me.html#notes";
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const c of list) if (c.url.includes("me.html") && "focus" in c) { c.navigate(url).catch(() => {}); return c.focus(); }
    return self.clients.openWindow(url);
  }));
});

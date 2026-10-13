// Работа без сети: страницы и картинки сайта берутся из кэша, каталог — сначала из сети (он всегда свежий).
// Игру (play/…) кэширует сам браузер — она большая, держим её отдельно.
const CACHE = "lavka-v3";
const SHELL = ["./", "index.html", "app.html", "install.html", "roadmap.html", "privacy.html", "join.html", "me.html", "help.html", "people.html",
  "assets/site.css", "assets/site.js", "assets/lavka.css", "assets/lavka.js",
  ...["levsha", "shooter", "enemy", "tower", "flea", "lens", "horseshoe", "samovar", "pryanik", "shop"].map(a => `assets/av/${a}.png`), "assets/install-steps.js", "assets/fonts/Nunito-500.ttf", "assets/fonts/Nunito-800.ttf", "assets/fonts/Nunito-900.ttf",
  "assets/kremlin_px.png", "assets/mascot_idle.png", "assets/mascot_blink.png", "assets/mascot_wave1.png",
  "assets/stamp_256.png", "assets/store_icon_192.png", "assets/levsha.png", "assets/qr.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin || url.pathname.includes("/play/")) return;
  if (url.pathname.endsWith("catalog.json") || url.pathname.endsWith(".html") || url.pathname.endsWith("/")) {
    // сеть в первую очередь, кэш — если сети нет
    e.respondWith(fetch(e.request).then(r => {
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

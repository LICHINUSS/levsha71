// Сайт «Лавки Левши»: язык (RU/EN), какой телефон, каталог, подсказки, работа без сети (PWA).
"use strict";
// на компьютере мастера (localhost) можно проверить сайт с пробным сервером: localStorage.api = "http://127.0.0.1:8772/rest/v1/rpc/"
const API = (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && (() => { try {
    if (/[?&]mock=1/.test(location.search)) localStorage.setItem("api", "http://127.0.0.1:8772/rest/v1/rpc/");
    return localStorage.getItem("api"); } catch (e) { return null; } })())
  || "https://rzrdanmylecmkafgekye.supabase.co/rest/v1/rpc/";
const API_KEY = "sb_publishable_ELCLv7tzPupTFN0b7DpcnQ_viX4aUMS"; // открытый ключ: только «окошки» сервера

const T = {
  ru: {
    brand: "Лавка Левши", join_ios: "На iPhone группа открывается в лавке прямо в браузере.",
    inside_title: "Лавка изнутри", inside_sub: "Так выглядит «Лавка Левши» на телефоне", app_trailer: "Трейлер",
    nav_catalog: "Каталог", nav_install: "Как установить", nav_road: "Планы", nav_privacy: "Конфиденциальность",
    hero_sub: "Игры и приложения мастерской «Левша 71». Бесплатно, без рекламы — подковано с душой.",
    get_android: "Скачать «Лавку Левши»", get_ios: "Установить на iPhone", play_web: "Играть в браузере",
    how_link: "Как установить", for_android: "Для Android", for_iphone: "Для iPhone",
    store_ver: "Версия {v} · {s} · Android 8 и новее", ios_note: "На iPhone лавка открывается как приложение с экрана «Домой», а игры — прямо в браузере.",
    desktop_note: "Лавка — для Android. Наведите камеру телефона на код справа или откройте сайт на телефоне.",
    live: "Сейчас в лавке: {n} · профилей: {p}",
    cat_title: "Каталог", cat_sub: "Игры и приложения мастерской", search: "Найти игру или приложение…",
    all: "Все", games: "Игры", tools: "Приложения", nothing: "Ничего не нашлось — попробуйте другое слово.",
    download: "Скачать", play: "Играть", more: "Подробнее", soon: "Скоро", android_only: "Только для Android",
    version: "Версия {v}", reviews: "{n} отз.", updated: "обновлено {d}",
    road_title: "Что мастер делает дальше", road_sub: "Открытые планы мастерской", road_all: "Все планы →",
    st_done: "готово", st_now: "сейчас", st_soon: "скоро", st_idea: "идея",
    how_title: "Как установить", how_sub: "Один раз — и дальше всё обновляется само.", how_all: "Подробная инструкция →",
    share_title: "Поделиться лавкой", share_sub: "Покажите код другу — он наведёт камеру телефона и попадёт сюда.",
    share_card: "Скачать карточку с кодом", about_title: "О мастерской",
    about_text: "Как Левша подковал блоху, так и мы собираем свои игры из маленьких деталей — с душой и для своих. Никакой рекламы и покупок внутри: просто играйте. Каждое изделие отмечено клеймом — золотой подковой «71».",
    footer: "Подковано Левшой.",
    app_whatsnew: "Что нового в {v}", app_history: "История версий", app_about: "Об игре", app_shots: "Снимки экрана",
    f_rating: "оценка", f_size: "размер", f_ver: "версия", f_android: "Android",
    h_added: "Добавлено", h_fixed: "Исправлено", h_changed: "Изменено", approx: "описание примерное (восстановлено по истории кода)",
    back: "← Каталог", notfound: "Такого изделия нет в каталоге.",
    hint_get: "Начните отсюда: эта кнопка ставит лавку, а лавка — все игры.", hint_lang: "English? Switch here.",
    hint_search: "Ищите по названию — по-русски или по-английски.", ok: "Понятно",
    ios_sheet: "Добавьте лавку на экран «Домой»: нажмите «Поделиться» внизу Safari, затем «На экран „Домой“».",
    ios_more: "Как это сделать", offline: "Нет связи — показываю сохранённое.",
    join_title: "Приглашение в группу", join_text: "Вас позвали в группу «Лавки Левши». Код:",
    join_open: "Открыть в лавке", join_how: "Если лавка не открылась: откройте её → «Мои» → «Друзья и группы» → «Войти по коду» и введите код.",
    join_noapp: "Лавки ещё нет? Сначала поставьте её:", copy: "Скопировать код", copied: "Скопировано!",
    open_shop: "Открыть лавку", web_shop: "Лавка в браузере", nav_people: "Люди", nav_help: "Помощь", nav_me: "Моя лавка", nav_ideas: "Идеи", ideas_done_t: "Сделано по вашим идеям", idea_by: "по идее {n}", ideas_all: "Все идеи →",
    live_dl: "Сейчас в лавке: {n} · профилей: {p} · скачиваний: {d}", join_web: "Вступить в браузере",
    join_web_s: "Нет Android? Вступите в группу прямо в лавке в браузере — на iPhone и компьютере.",
  },
  en: {
    brand: "Levsha's Shop", join_ios: "On iPhone the group opens in the shop right in the browser.",
    inside_title: "Inside the shop", inside_sub: "This is what Levsha's Shop looks like on a phone", app_trailer: "Trailer",
    nav_catalog: "Catalog", nav_install: "How to install", nav_road: "Roadmap", nav_privacy: "Privacy",
    hero_sub: "Games and apps from the “Levsha 71” workshop. Free, no ads — forged with care.",
    get_android: "Download Levsha's Shop", get_ios: "Install on iPhone", play_web: "Play in the browser",
    how_link: "How to install", for_android: "For Android", for_iphone: "For iPhone",
    store_ver: "Version {v} · {s} · Android 8 or newer", ios_note: "On iPhone the shop opens like an app from the Home Screen, and the games run right in the browser.",
    desktop_note: "The shop is for Android. Point your phone camera at the code or open this site on your phone.",
    live: "In the shop now: {n} · profiles: {p}",
    cat_title: "Catalog", cat_sub: "The workshop's games and apps", search: "Find a game or an app…",
    all: "All", games: "Games", tools: "Apps", nothing: "Nothing found — try another word.",
    download: "Download", play: "Play", more: "Details", soon: "Soon", android_only: "Android only",
    version: "Version {v}", reviews: "{n} reviews", updated: "updated {d}",
    road_title: "What's next in the workshop", road_sub: "The workshop's open roadmap", road_all: "Full roadmap →",
    st_done: "done", st_now: "now", st_soon: "soon", st_idea: "idea",
    how_title: "How to install", how_sub: "Do it once — everything updates by itself afterwards.", how_all: "Step-by-step guide →",
    share_title: "Share the shop", share_sub: "Show the code to a friend — their phone camera brings them here.",
    share_card: "Download the code card", about_title: "About the workshop",
    about_text: "Just like Levsha shod a flea, we build our games from tiny parts — with care, for our own people. No ads, no in-app purchases: just play. Every item carries the workshop's stamp — a golden horseshoe “71”.",
    footer: "Forged by Levsha.",
    app_whatsnew: "What's new in {v}", app_history: "Version history", app_about: "About", app_shots: "Screenshots",
    f_rating: "rating", f_size: "size", f_ver: "version", f_android: "Android",
    h_added: "Added", h_fixed: "Fixed", h_changed: "Changed", approx: "approximate description (restored from code history)",
    back: "← Catalog", notfound: "There's no such item in the catalog.",
    hint_get: "Start here: this button installs the shop, and the shop installs all the games.", hint_lang: "По-русски? Переключите здесь.",
    hint_search: "Search by name — in English or Russian.", ok: "Got it",
    ios_sheet: "Add the shop to your Home Screen: tap “Share” at the bottom of Safari, then “Add to Home Screen”.",
    ios_more: "Show me how", offline: "No connection — showing the saved copy.",
    join_title: "Group invitation", join_text: "You've been invited to a group in Levsha's Shop. Code:",
    join_open: "Open in the shop", join_how: "If the shop didn't open: open it → Library → Friends & groups → Join by code and enter the code.",
    join_noapp: "No shop yet? Install it first:", copy: "Copy the code", copied: "Copied!",
    open_shop: "Open the shop", web_shop: "Shop in the browser", nav_people: "People", nav_help: "Help", nav_me: "My shop", nav_ideas: "Ideas", ideas_done_t: "Done thanks to your ideas", idea_by: "idea by {n}", ideas_all: "All ideas →",
    live_dl: "In the shop now: {n} · profiles: {p} · downloads: {d}", join_web: "Join in the browser",
    join_web_s: "No Android? Join the group right in the browser shop — on iPhone or a computer.",
  },
};

const Lavka = {
  lang: "ru",
  catalog: null,

  t(key, vars = {}) {
    let s = (T[this.lang] && T[this.lang][key]) || T.ru[key] || key;
    for (const [k, v] of Object.entries(vars)) s = s.replace("{" + k + "}", v);
    return s;
  },
  store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } },

  /** android | ios | desktop */
  platform() {
    const ua = navigator.userAgent || "";
    if (/android/i.test(ua)) return "android";
    if (/iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) return "ios";
    return "desktop";
  },
  standalone() { return matchMedia("(display-mode: standalone)").matches || navigator.standalone === true; },

  applyLang() {
    document.documentElement.lang = this.lang;
    for (const el of document.querySelectorAll("[data-i18n]")) el.textContent = this.t(el.dataset.i18n);
    for (const el of document.querySelectorAll("[data-i18n-ph]")) el.placeholder = this.t(el.dataset.i18nPh);
    const b = document.getElementById("lang");
    if (b) b.textContent = this.lang === "ru" ? "EN" : "RU";
  },
  setLang(l) { this.lang = l; this.store("lang", l); this.applyLang(); document.dispatchEvent(new Event("lavka:lang")); },

  fmtSize(b) { return b ? (b / 1048576).toFixed(1).replace(".", this.lang === "ru" ? "," : ".") + (this.lang === "ru" ? " МБ" : " MB") : ""; },
  fmtDate(iso) {
    if (!iso) return "";
    try { return new Date(iso + "T12:00:00").toLocaleDateString(this.lang === "ru" ? "ru-RU" : "en-GB", { day: "numeric", month: "long", year: "numeric" }); }
    catch (e) { return iso; }
  },
  L(o, k) { return (this.lang === "en" && o[k + "_en"]) || o[k] || ""; },
  esc(s) { return String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); },
  shoe: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 20c-1.5-2-3-5-3-9a10 10 0 0 1 20 0c0 4-1.5 7-3 9h-3.2c1.6-2.2 3-5 3-9a6.8 6.8 0 0 0-13.6 0c0 4 1.4 6.8 3 9z"/></svg>',

  async loadCatalog() {
    let url = "catalog.json";
    const q = new URLSearchParams(location.search).get("cat");
    if (q && /^(localhost|127\.0\.0\.1)$/.test(location.hostname)) url = q;   // проверка с пробным каталогом
    try {
      const r = await fetch(url, { cache: "no-store" });
      this.catalog = await r.json();
    } catch (e) {
      const r = await caches.match("catalog.json").catch(() => null);   // без сети — сохранённый service worker'ом
      if (r) { this.catalog = await r.json(); this.toast(this.t("offline")); }
    }
    return this.catalog;
  },
  async rpc(fn, body = {}) {
    const r = await fetch(API + fn, { method: "POST", body: JSON.stringify(body),
      headers: { apikey: API_KEY, "Content-Type": "application/json" } });
    if (!r.ok) throw new Error(fn + " " + r.status);
    return r.json();
  },
  /** Сколько раз скачали лавку и игры (GitHub считает сам; храним час). */
  async downloads() {
    try {
      const c = JSON.parse(this.store("dl_cache") || "null");
      if (c && Date.now() - c.at < 3600e3) return c.n;
      const ac = new AbortController(); setTimeout(() => ac.abort(), 5000);   // GitHub не ответил — без этой цифры
      const r = await fetch("https://api.github.com/repos/LICHINUSS/levsha71/releases?per_page=100", { signal: ac.signal });
      if (!r.ok) return c ? c.n : null;
      const n = (await r.json()).reduce((s, rel) => s + rel.assets.reduce((t, a) => t + (a.name.endsWith(".apk") ? a.download_count : 0), 0), 0);
      this.store("dl_cache", JSON.stringify({ n, at: Date.now() }));
      return n;
    } catch (e) { return null; }
  },
  async ratings() {
    try { const list = await this.rpc("review_summaries"); return Object.fromEntries(list.map(x => [x.app_id, x])); }
    catch (e) { return {}; }
  },
  ratingHtml(r) { return r && r.count ? `<span class="rating">${this.shoe.replace("<svg", '<svg width="15" height="15"')}${String(r.avg).replace(".", this.lang === "ru" ? "," : ".")}</span>` : ""; },

  /** Кнопки изделия для этого телефона. */
  appButtons(a, small = true) {
    const p = this.platform(), sz = small ? " small" : "", out = [];
    if (a.web) out.push(`<a class="btn${sz}${p === "android" && a.apk ? " ghost" : ""}" href="${a.web}">${this.t("play")}</a>`);
    if (p === "android") {
      out.unshift(a.apk ? `<a class="btn${sz}" href="${a.apk}">${this.shoe}${this.t("download")}</a>`
                        : `<span class="btn${sz} off">${this.t("soon")}</span>`);
    } else if (!a.web) out.push(`<span class="badge">${this.t("android_only")}</span>`);
    return out.join("");
  },

  /** Подсказка при первом посещении — показывается один раз. */
  hint(el, key, text) {
    if (!el || this.store("hint_" + key) || document.querySelector(".hint, .sheet")) return;   // по одной за раз
    const box = document.createElement("div");
    box.className = "hint";
    box.innerHTML = `${this.esc(text)} <button>${this.t("ok")}</button>`;
    document.body.appendChild(box);
    const place = () => { const r = el.getBoundingClientRect(); box.style.left = Math.max(8, Math.min(innerWidth - box.offsetWidth - 8, r.left + scrollX)) + "px"; box.style.top = (r.bottom + scrollY + 10) + "px"; };
    place(); addEventListener("resize", place);
    const close = () => { this.store("hint_" + key, "1"); box.remove(); };
    box.querySelector("button").onclick = close;
    setTimeout(close, 12000);
  },
  toast(text) {
    const d = document.createElement("div");
    d.className = "sheet"; d.textContent = text;
    document.body.appendChild(d); setTimeout(() => d.remove(), 3500);
  },
  /** iPhone в Safari (не с экрана «Домой») — мягко предлагаем добавить лавку на экран. */
  iosSheet() {
    if (this.platform() !== "ios" || this.standalone() || this.store("ios_sheet")) return;
    const d = document.createElement("div");
    d.className = "sheet";
    d.innerHTML = `<button class="x" aria-label="×">×</button><img src="assets/store_icon_192.png" alt="" width="40" style="float:left;margin:0 12px 6px 0;border-radius:10px">
      ${this.t("ios_sheet")} <a href="install.html#iphone">${this.t("ios_more")}</a>`;
    document.body.appendChild(d);
    d.querySelector(".x").onclick = () => { this.store("ios_sheet", "1"); d.remove(); };
  },

  /** Беззвучное видео: само крутится, но не у тех, кто просил «меньше движения». */
  video(src, poster, cls = "trailer") {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    return `<video class="${cls}" src="${src}" poster="${poster || ""}" ${still ? "controls" : "autoplay loop"} muted playsinline preload="metadata"></video>`;
  },
  promoFor(a) { return (a.promo || []).map(x => x.replace("{lang}", this.lang)); },

  init() {
    const saved = this.store("lang");
    this.lang = saved || ((navigator.language || "ru").toLowerCase().startsWith("ru") ? "ru" : "en");
    this.applyLang();
    const lb = document.getElementById("lang");
    if (lb) {
      lb.onclick = () => this.setLang(this.lang === "ru" ? "en" : "ru");
      // язык выбран сам по браузеру и это не русский — подскажем, где переключить
      if (!saved && this.lang === "en") setTimeout(() => this.hint(lb, "lang", this.t("hint_lang")), 2500);
    }
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
    setTimeout(() => this.iosSheet(), 3000);
  },
};

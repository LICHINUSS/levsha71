// «Лавка Левши» в браузере — для iPhone (с экрана «Домой») и компьютера. Тот же сервер и профиль, что у лавки на Android:
// витрина, лента, друзья, группы, люди, профиль, уведомления, итоги недели. Работает поверх site.js (Lavka).
"use strict";

const W = {
  ru: {
    tab_home: "Главная", tab_feed: "Лента", tab_friends: "Друзья", tab_me: "Мои",
    hello: "Добрый день", hello_m: "Доброе утро", hello_e: "Добрый вечер", hello_n: "Доброй ночи",
    for_you: "Новое для вас", nothing_new: "Пока тихо. Позовите друзей — будет веселее!",
    catalog: "Каталог", all_apps: "Все изделия", open: "Открыть",
    add_home: "Добавьте лавку на экран «Домой» — она откроется как приложение и сможет присылать уведомления.", how: "Как",
    welcome_t: "Профиль в лавке", welcome_s: "Один профиль для лавки и игр — на Android, iPhone и компьютере.",
    perks: ["Рекорды в таблицах мира", "Отзывы, посты и подковки", "Друзья, группы и уведомления", "Вернуть всё по коду на любом телефоне"],
    create: "Создать профиль", restore: "Войти по коду", later: "Позже",
    nick: "Ник", nick_ph: "Как вас называть (3–16 знаков)", pick_av: "Аватар", code_ph: "Код восстановления, например ABCD-EFGH-JKMN",
    need_profile: "Для этого нужен профиль — это минута.", made: "Профиль готов! Запишите код восстановления — он в «Мои».",
    welcome_back: "С возвращением, {n}!",
    write_ph: "Что нового в мастерской?", post: "Опубликовать", more: "Показать ещё", empty_feed: "В ленте пока пусто.",
    rec_new: "Новый рекорд: ", waves: "{n} волн", place_world: "место №{p} в мире", place_day: "место №{p} за день",
    rated: "Оценил(а) «{a}»", release: "Новая подкова: «{a}»", version: "версия {v}", workshop: "Мастерская Левши", master: "Мастер",
    comments: "Обсуждение", comment_ph: "Ваш комментарий…", send: "Отправить", no_comments: "Комментариев пока нет — будьте первым.",
    report: "Пожаловаться", reported: "Спасибо! Мастер посмотрит.", del: "Удалить", deleted: "Удалено.", block: "Заблокировать",
    unblock: "Разблокировать", blocked: "Заблокирован(а): больше не увидите его(её) посты и заявки.", sure_del: "Удалить навсегда?",
    friends: "Друзья", groups: "Группы", people: "Люди", search_ph: "Найти по нику…", found: "Нашлось", none_found: "Никого с таким ником.",
    requests: "Заявки в друзья", accept: "Принять", decline: "Отклонить", outgoing: "Ждут ответа", cancel: "Отменить",
    add_friend: "В друзья", sent: "Заявка отправлена", is_friend: "Друг", remove_friend: "Убрать из друзей",
    no_friends: "Друзей пока нет. Найдите человека по нику выше или пошлите ссылку на лавку.", share_shop: "Поделиться лавкой",
    online: "в сети", playing: "играет в «{g}»", playing_min: "играет в «{g}» · {m}", seen: "заходил(а) {t}", best: "рекорд {n}",
    blocks: "Заблокированные", blocks_s: "Кого вы не хотите видеть", no_blocks: "Никого не заблокировали.",
    my_groups: "Мои группы", no_groups: "Вы пока ни в одной группе. Создайте свою — например, для учебной группы — и позовите друзей по коду.",
    g_create: "Создать группу", g_join: "По коду", g_name_ph: "Название (3–30 знаков)", g_about_ph: "О чём группа (можно пусто)",
    g_code_ph: "Код приглашения", members: "{n} участн.", g_online: "{n} в сети", owner: "хозяин",
    g_feed: "Лента", g_board: "Рекорды", g_members: "Участники", g_invite: "Приглашение", g_copy: "Скопировать ссылку", copied: "Скопировано!",
    g_share: "Позвать", g_reset: "Новый код", g_leave: "Выйти из группы", g_kick: "Исключить", g_edit: "Изменить", save: "Сохранить",
    g_post_ph: "Написать группе…", g_empty: "В группе пока тихо — напишите первым!", board_empty: "Рекордов пока нет.",
    g_invite_text: "Заходи в мою группу «{g}» в «Лавке Левши»: {u}", join_t: "Приглашение в группу", joined: "Вы в группе «{g}»!",
    people_s: "Здесь только те, кто сам включил «Показывать меня в «Людях»».", people_me: "Показать меня здесь", people_empty: "Пока никого.",
    st_online: "сейчас в лавке", st_reg: "профилей", st_dl: "скачиваний", st_groups: "групп", since: "в мастерской с {d}",
    pf_android: "Android", pf_iphone: "iPhone", pf_web: "браузер",
    notes: "Уведомления", notes_empty: "Новых уведомлений нет.", n_reply: "Мастер ответил на ваш отзыв о «{a}»",
    n_req: "{n} зовёт вас в друзья", n_acc: "{n} теперь ваш друг", n_beat: "{n} побил(а) ваш рекорд!", n_rec: "Новый рекорд у {n}",
    n_group: "{n} — в группе «{g}»", n_comment: "{n} — в обсуждении", tap_answer: "Нажмите, чтобы ответить",
    me_profile: "Мой профиль", me_edit: "Изменить профиль", status_ph: "Статус (до 40 знаков)", about_ph: "О себе (до 200 знаков)",
    frame: "Рамка", frame_locked: "откроется: {h}", photo: "Своё фото", photo_s: "Все видят пиксельный значок, друзья — настоящее фото.",
    photo_pick: "Выбрать фото", photo_clear: "Убрать фото", photo_real: "Друзьям — настоящее фото", photo_save: "Поставить",
    week: "Итоги недели", week_s: "Забеги, рекорды, место среди друзей — и картинка для друзей",
    w_runs: "забегов", w_wins: "побед", w_best: "лучший результат", w_kills: "врагов", w_time: "в игре", w_likes: "подковок",
    w_friends: "друзей", w_new: "новых друзей", w_place: "место среди друзей", w_top: "Самый заядлый друг: {n} ({r} заб.)", w_share: "Поделиться картинкой",
    settings: "Настройки", privacy: "Приватность", pr_people: "Показывать меня в «Людях»", pr_presence: "Друзья видят «в сети» и «играет в…»",
    pr_requests: "Принимать заявки в друзья", pr_photo: "Друзья видят моё настоящее фото",
    push: "Уведомления на этом устройстве", push_on: "Включить уведомления", push_off: "Выключить", push_ok: "Уведомления включены.",
    push_ios: "На iPhone уведомления работают, когда лавка добавлена на экран «Домой» (iOS 16.4 и новее).",
    push_no: "Этот браузер не умеет уведомления.", push_denied: "Уведомления запрещены в настройках телефона для этого сайта.",
    push_soon: "Уведомления включатся в ближайшем обновлении сервера.", quiet: "Тихие часы: ночью (23:00–8:00) не беспокоить",
    k_friend_request: "Заявки в друзья", k_friend_accept: "Заявку приняли", k_friend_record: "Рекорды друзей",
    k_group_post: "Посты в группах", k_comment: "Комментарии", k_reply: "Ответы мастера",
    code: "Код восстановления", code_s: "По нему профиль вернётся на любом телефоне. Никому не показывайте.", show: "Показать", copy: "Скопировать",
    rotate: "Сменить код", rotated: "Новый код: {c}. Старый больше не работает.", logout: "Выйти на этом устройстве",
    logout_s: "Профиль останется — войти снова можно по коду.", delete: "Удалить профиль навсегда",
    delete_s: "Удалятся рекорды, отзывы, посты, фото, друзья и группы. Вернуть будет нельзя. Впишите свой ник для подтверждения:",
    help: "Помощь", points: "{n} очк.", achievements: "Достижения", games: "Игры", runs: "забегов", report_avatar: "Пожаловаться на аватар",
    err_net: "Нет связи с сервером — попробуйте ещё раз.", back: "Назад", ago_now: "только что", ago_m: "{n} мин назад", ago_h: "{n} ч назад", ago_d: "{n} дн назад",
    min: "{n} мин", hour: "{h} ч {m} мин", frames: { "": "Без рамки", wood: "Дерево", bronze: "Бронза", silver: "Серебро", gold: "Золото", master: "Мастер" },
  },
  en: {
    tab_home: "Home", tab_feed: "Feed", tab_friends: "Friends", tab_me: "Library",
    hello: "Good afternoon", hello_m: "Good morning", hello_e: "Good evening", hello_n: "Good night",
    for_you: "New for you", nothing_new: "It's quiet so far. Invite your friends — it's more fun together!",
    catalog: "Catalog", all_apps: "All items", open: "Open",
    add_home: "Add the shop to your Home Screen — it opens like an app and can send notifications.", how: "How",
    welcome_t: "Your shop profile", welcome_s: "One profile for the shop and the games — on Android, iPhone and computer.",
    perks: ["World leaderboards", "Reviews, posts and horseshoes", "Friends, groups and notifications", "Restore everything with a code on any phone"],
    create: "Create a profile", restore: "Sign in with a code", later: "Later",
    nick: "Nickname", nick_ph: "What should we call you (3–16 characters)", pick_av: "Avatar", code_ph: "Recovery code, e.g. ABCD-EFGH-JKMN",
    need_profile: "You need a profile for this — it takes a minute.", made: "Your profile is ready! Write down the recovery code — it's in Library.",
    welcome_back: "Welcome back, {n}!",
    write_ph: "What's new in the workshop?", post: "Post", more: "Show more", empty_feed: "The feed is empty so far.",
    rec_new: "New record: ", waves: "{n} waves", place_world: "#{p} worldwide", place_day: "#{p} today",
    rated: "Rated “{a}”", release: "New release: “{a}”", version: "version {v}", workshop: "Levsha's workshop", master: "Master",
    comments: "Discussion", comment_ph: "Your comment…", send: "Send", no_comments: "No comments yet — be the first.",
    report: "Report", reported: "Thanks! The master will take a look.", del: "Delete", deleted: "Deleted.", block: "Block",
    unblock: "Unblock", blocked: "Blocked: you won't see their posts and requests any more.", sure_del: "Delete forever?",
    friends: "Friends", groups: "Groups", people: "People", search_ph: "Find by nickname…", found: "Found", none_found: "Nobody with that nickname.",
    requests: "Friend requests", accept: "Accept", decline: "Decline", outgoing: "Waiting for an answer", cancel: "Cancel",
    add_friend: "Add friend", sent: "Request sent", is_friend: "Friend", remove_friend: "Remove friend",
    no_friends: "No friends yet. Find someone by nickname above or send them a link to the shop.", share_shop: "Share the shop",
    online: "online", playing: "playing “{g}”", playing_min: "playing “{g}” · {m}", seen: "seen {t}", best: "best {n}",
    blocks: "Blocked", blocks_s: "People you don't want to see", no_blocks: "You haven't blocked anyone.",
    my_groups: "My groups", no_groups: "You're not in any group yet. Create one — say, for your class — and invite friends with a code.",
    g_create: "Create a group", g_join: "By code", g_name_ph: "Name (3–30 characters)", g_about_ph: "What's the group about (optional)",
    g_code_ph: "Invite code", members: "{n} members", g_online: "{n} online", owner: "owner",
    g_feed: "Feed", g_board: "Records", g_members: "Members", g_invite: "Invitation", g_copy: "Copy the link", copied: "Copied!",
    g_share: "Invite", g_reset: "New code", g_leave: "Leave the group", g_kick: "Remove", g_edit: "Edit", save: "Save",
    g_post_ph: "Write to the group…", g_empty: "It's quiet here — write first!", board_empty: "No records yet.",
    g_invite_text: "Join my group “{g}” in Levsha's Shop: {u}", join_t: "Group invitation", joined: "You're in “{g}”!",
    people_s: "Only people who turned on “Show me in People” are listed here.", people_me: "Show me here", people_empty: "Nobody yet.",
    st_online: "in the shop now", st_reg: "profiles", st_dl: "downloads", st_groups: "groups", since: "in the workshop since {d}",
    pf_android: "Android", pf_iphone: "iPhone", pf_web: "browser",
    notes: "Notifications", notes_empty: "No new notifications.", n_reply: "The master replied to your review of “{a}”",
    n_req: "{n} sent you a friend request", n_acc: "{n} is now your friend", n_beat: "{n} beat your record!", n_rec: "New record by {n}",
    n_group: "{n} — in “{g}”", n_comment: "{n} — in a discussion", tap_answer: "Tap to answer",
    me_profile: "My profile", me_edit: "Edit profile", status_ph: "Status (up to 40 characters)", about_ph: "About me (up to 200 characters)",
    frame: "Frame", frame_locked: "unlocks: {h}", photo: "Your photo", photo_s: "Everyone sees a pixel icon, friends see the real photo.",
    photo_pick: "Choose a photo", photo_clear: "Remove the photo", photo_real: "Friends see the real photo", photo_save: "Set",
    week: "Weekly summary", week_s: "Runs, records, your place among friends — and a picture to share",
    w_runs: "runs", w_wins: "wins", w_best: "best result", w_kills: "enemies", w_time: "played", w_likes: "horseshoes",
    w_friends: "friends", w_new: "new friends", w_place: "place among friends", w_top: "Keenest friend: {n} ({r} runs)", w_share: "Share the picture",
    settings: "Settings", privacy: "Privacy", pr_people: "Show me in People", pr_presence: "Friends see “online” and “playing…”",
    pr_requests: "Accept friend requests", pr_photo: "Friends see my real photo",
    push: "Notifications on this device", push_on: "Turn on notifications", push_off: "Turn off", push_ok: "Notifications are on.",
    push_ios: "On iPhone, notifications work when the shop is added to the Home Screen (iOS 16.4 or newer).",
    push_no: "This browser can't show notifications.", push_denied: "Notifications are blocked for this site in the phone settings.",
    push_soon: "Notifications will turn on with the next server update.", quiet: "Quiet hours: don't disturb at night (23:00–8:00 Moscow)",
    k_friend_request: "Friend requests", k_friend_accept: "Request accepted", k_friend_record: "Friends' records",
    k_group_post: "Group posts", k_comment: "Comments", k_reply: "Master's replies",
    code: "Recovery code", code_s: "It brings your profile back on any phone. Don't show it to anyone.", show: "Show", copy: "Copy",
    rotate: "Change the code", rotated: "New code: {c}. The old one no longer works.", logout: "Sign out on this device",
    logout_s: "Your profile stays — sign back in with the code.", delete: "Delete the profile forever",
    delete_s: "Records, reviews, posts, photo, friends and groups will be deleted for good. Type your nickname to confirm:",
    help: "Help", points: "{n} pts", achievements: "Achievements", games: "Games", runs: "runs", report_avatar: "Report the avatar",
    err_net: "No connection to the server — please try again.", back: "Back", ago_now: "just now", ago_m: "{n} min ago", ago_h: "{n} h ago", ago_d: "{n} d ago",
    min: "{n} min", hour: "{h} h {m} min", frames: { "": "No frame", wood: "Wood", bronze: "Bronze", silver: "Silver", gold: "Gold", master: "Master" },
  },
};
const AVATARS = ["levsha", "shooter", "enemy", "tower", "flea", "lens", "horseshoe", "samovar", "pryanik", "shop"];
const FRAMES = ["", "wood", "bronze", "silver", "gold", "master"];
const FRAME_HINT = { bronze: [10], silver: [40], gold: [120], master: ["master"] };
const KINDS = ["friend_request", "friend_accept", "friend_record", "group_post", "comment", "reply"];
const RANKS_EN = { "Новичок": "Novice", "Подмастерье": "Apprentice", "Мастеровой": "Craftsman", "Умелец": "Expert", "Левша": "Levsha" };
const PALETTE = [0x1c0e0e, 0x5a1430, 0x8e1a26, 0xc3271b, 0xe5502f, 0xf98a5a, 0x4a1f12, 0x874013, 0xc47216, 0xeba92a, 0xffdc6e,
  0xfffbe2, 0x3b1b14, 0x6b3015, 0xa1561f, 0xcd8340, 0xeab26c, 0xfff7e8, 0xf3dfba, 0xd3b48a, 0xa88a68, 0x20243a, 0x3d4663, 0x6b7898,
  0xaab6cf, 0xeef3fb, 0x7a3a2c, 0xc47a52, 0xefba8c, 0x141a3a, 0x1f2a5c, 0x2f4590, 0x5677cf, 0x8fb0f0, 0xffffff, 0xd4dbea, 0x9aa6c4,
  0x2a1410, 0x43201a, 0x6a3424, 0x15452e, 0x237841, 0x4fae4c, 0x9ad66a];

const $ = (id) => document.getElementById(id);
const esc = (s) => Lavka.esc(s);
function w(key, vars = {}) {
  let s = (W[Lavka.lang] || W.ru)[key] ?? W.ru[key] ?? key;
  if (typeof s === "string") for (const [k, v] of Object.entries(vars)) s = s.split("{" + k + "}").join(v);
  return s;
}
/** 1 волна, 2 волны, 5 волн (по-английски: 1 wave, 2 waves). */
function plural(n, forms) {
  n = Math.abs(+n || 0);
  if (Lavka.lang === "en") return n === 1 ? forms[3] : forms[4];
  const d = n % 10, dd = n % 100;
  return d === 1 && dd !== 11 ? forms[0] : d >= 2 && d <= 4 && (dd < 12 || dd > 14) ? forms[1] : forms[2];
}
const wavesTxt = (n) => n + " " + plural(n, ["волна", "волны", "волн", "wave", "waves"]);
const rank = (r) => (Lavka.lang === "en" && RANKS_EN[r]) || r || "";

const App = {
  me: null,          // { id, code, nick, avatar }
  info: null,        // ответ me(): статус, рамка, приватность…
  cat: null, posts: new Map(), pixels: new Map(), pending: null,

  // ---------- сервер ----------
  async rpc(fn, body = {}) {
    let r;
    try {
      r = await fetch(API + fn, { method: "POST", body: JSON.stringify(body), headers: { apikey: API_KEY, "Content-Type": "application/json" } });
    } catch (e) { throw new Error(w("err_net")); }
    const text = await r.text();
    let data = null; try { data = text ? JSON.parse(text) : null; } catch (e) { /* пусто */ }
    if (!r.ok) {
      if (data && data.code === "28000") { this.signOut(true); }
      throw new Error((data && data.message) || w("err_net"));
    }
    return data;
  },
  auth(extra = {}) { return { p_id: this.me.id, p_code: this.me.code, ...extra }; },
  save() { Lavka.store("lavka_profile", this.me ? JSON.stringify(this.me) : ""); },
  load() { try { this.me = JSON.parse(Lavka.store("lavka_profile") || "null"); } catch (e) { this.me = null; } },
  signOut(silent) {
    this.me = null; this.info = null; this.save();
    if (!silent) location.hash = "#me";
  },
  async refreshMe() {
    if (!this.me) return;
    try {
      this.info = await this.rpc("me", this.auth());
      Object.assign(this.me, { nick: this.info.nick, avatar: this.info.avatar, photo_ver: this.info.photo_ver }); this.save();
    } catch (e) { /* без сети — работаем с сохранённым */ }
  },

  // ---------- мелочи интерфейса ----------
  toast(text) { Lavka.toast(text); },
  ago(iso) {
    if (!iso) return "";
    const s = (Date.now() - new Date(iso)) / 1000;
    if (s < 60) return w("ago_now");
    if (s < 3600) return w("ago_m", { n: Math.floor(s / 60) });
    if (s < 86400) return w("ago_h", { n: Math.floor(s / 3600) });
    if (s < 86400 * 30) return w("ago_d", { n: Math.floor(s / 86400) });
    return new Date(iso).toLocaleDateString(Lavka.lang === "ru" ? "ru-RU" : "en-GB", { day: "numeric", month: "short", year: "numeric" });
  },
  dur(sec) {
    const m = Math.max(1, Math.floor(sec / 60));
    return m < 60 ? w("min", { n: m }) : w("hour", { h: Math.floor(m / 60), m: m % 60 });
  },
  gameName(id) { const a = this.cat && this.cat.apps.find(x => x.id === id); return a ? Lavka.L(a, "name") : id; },
  presence(o) {
    if (o.playing) {
      const g = this.gameName(o.playing);
      return o.playing_since ? w("playing_min", { g, m: this.dur((Date.now() - new Date(o.playing_since)) / 1000) }) : w("playing", { g });
    }
    if (o.online) return w("online");
    if (o.last_seen) return w("seen", { t: this.ago(o.last_seen) });
    return "";
  },
  /** Аватар: своё пиксельное фото или значок из набора; в рамке; с зелёной точкой «в сети». */
  av(o, size = 44, extra = "") {
    const id = o.player_id || o.id;
    const px = id && o.photo_ver ? this.pixels.get(id + "_" + o.photo_ver) : null;
    if (id && o.photo_ver && !px) this.wantPixels(id, o.photo_ver);
    const src = px || `assets/av/${AVATARS.includes(o.avatar) ? o.avatar : "levsha"}.png`;
    return `<span class="av f-${esc(o.frame || "")} ${extra}" style="--s:${size}px" data-av="${esc(id || "")}_${o.photo_ver || 0}">
      <img class="px" src="${src}" alt="" loading="lazy">${o.online ? '<i class="dot"></i>' : ""}</span>`;
  },
  _want: new Set(), _wantTimer: 0,
  wantPixels(id, ver) {
    const key = id + "_" + ver;
    const cached = Lavka.store("px_" + key);
    if (cached) { this.pixels.set(key, cached); return; }
    this._want.add(id);
    clearTimeout(this._wantTimer);
    this._wantTimer = setTimeout(async () => {
      const ids = [...this._want]; this._want.clear();
      try {
        const rows = await this.rpc("avatars_pixels", { p_players: ids });
        for (const r of rows || []) {
          const k = r.player_id + "_" + r.ver, uri = "data:image/png;base64," + r.pixel;
          this.pixels.set(k, uri); Lavka.store("px_" + k, uri);
          for (const el of document.querySelectorAll(`[data-av="${k}"] img`)) el.src = uri;
        }
      } catch (e) { /* значки из набора остаются */ }
    }, 60);
  },
  needProfile() {
    if (this.me) return false;
    this.toast(w("need_profile")); location.hash = "#me"; return true;
  },
  busy(btn, on) { if (btn) { btn.disabled = on; btn.classList.toggle("off", on); } },
  async act(btn, fn) {
    this.busy(btn, true);
    try { return await fn(); } catch (e) { this.toast(e.message); } finally { this.busy(btn, false); }
  },
  copy(text) {
    (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(() => this.toast(w("copied")))
      .catch(() => prompt("", text));
  },
  share(text, url) {
    if (navigator.share) navigator.share({ text, url }).catch(() => {});
    else this.copy(text);
  },
  site() { return location.href.replace(/[^/]*([?#].*)?$/, ""); },

  // ---------- навигация ----------
  route() {
    const h = decodeURIComponent(location.hash.slice(1)) || "home";
    const [view, arg] = h.split("/");
    const tab = { home: "home", feed: "feed", post: "feed", friends: "friends", group: "friends", player: "friends", blocks: "friends",
      join: "friends", me: "me", week: "me", notes: "me", settings: "me", edit: "me" }[view] || "home";
    for (const b of document.querySelectorAll(".tabbar a")) b.toggleAttribute("aria-current", b.dataset.tab === tab);
    const main = $("app");
    main.innerHTML = '<div class="skel"></div><div class="skel"></div><div class="skel short"></div>';
    window.scrollTo(0, 0);
    const views = { home: () => this.home(), feed: () => this.feed(), post: () => this.post(+arg), friends: () => this.friends(arg || "friends"),
      group: () => this.group(+arg), player: () => this.player(arg), blocks: () => this.blocks(), join: () => this.join(arg),
      me: () => this.mine(), week: () => this.week(), notes: () => this.notes(), settings: () => this.settings(), edit: () => this.edit() };
    (views[view] || views.home)().catch(e => { main.innerHTML = `<p class="empty">${esc(e.message)}</p>`; });
  },
  page(html) { $("app").innerHTML = html; },
  head(title, back) {
    return `<div class="vhead">${back ? `<a class="iconbtn" href="${back}" aria-label="${w("back")}">‹</a>` : ""}<h1>${esc(title)}</h1></div>`;
  },

  // ---------- Главная ----------
  async home() {
    const hour = new Date().getHours();
    const hi = hour < 5 ? w("hello_n") : hour < 12 ? w("hello_m") : hour < 18 ? w("hello") : w("hello_e");
    const cat = this.cat || await Lavka.loadCatalog(); this.cat = cat;
    const ratings = await Lavka.ratings();
    const ios = Lavka.platform() === "ios" && !Lavka.standalone();
    let html = `<div class="homehead">
        <img class="px mascot-s" src="assets/mascot_idle.png" alt="">
        <div><h1>${esc(Lavka.t("brand"))}</h1><p>${esc(hi)}${this.me ? ", " + esc(this.me.nick) : ""}!</p></div>
      </div>`;
    if (ios) html += `<div class="panel tip">${w("add_home")} <a href="install.html#iphone">${w("how")}</a></div>`;
    if (this.me) html += `<h2 class="sec">${w("for_you")}</h2><div id="foryou"><div class="skel short"></div></div>`;
    else html += this.welcomeCard();
    html += `<h2 class="sec">${w("catalog")}</h2><div class="list">`;
    for (const a of (cat ? cat.apps : [])) {
      const r = ratings[a.id];
      html += `<a class="row card-row" href="app.html?id=${encodeURIComponent(a.id)}">
        <img class="icon" src="${esc(a.icon)}" alt="">
        <div class="grow"><b>${esc(Lavka.L(a, "name"))}</b><span class="muted">${esc(Lavka.L(a, "tagline"))}</span>
          <span class="meta">${Lavka.ratingHtml(r)} ${a.version_name ? esc(Lavka.t("version", { v: a.version_name })) : ""}</span></div>
        <span class="chev">›</span></a>`;
    }
    html += `</div>`;
    this.page(html);
    this.bindWelcome();
    if (this.me) this.forYou();
  },
  async forYou() {
    const box = $("foryou");
    try {
      const notes = (await this.rpc("notifications2", this.auth())) || [];
      box.innerHTML = notes.length ? `<div class="list">${notes.slice(0, 4).map(n => this.noteRow(n)).join("")}</div>`
        : `<p class="muted pad">${w("nothing_new")}</p>`;
    } catch (e) { box.innerHTML = `<p class="muted pad">${esc(e.message)}</p>`; }
  },

  // ---------- Профиль: создать или войти ----------
  welcomeCard() {
    return `<div class="panel welcome">
      <img class="px" src="assets/mascot_wave1.png" alt="" width="84">
      <h2>${w("welcome_t")}</h2><p class="muted">${w("welcome_s")}</p>
      <ul class="perks">${w("perks").map(p => `<li>${esc(p)}</li>`).join("")}</ul>
      <div id="wform"><div class="btns"><button class="btn" id="wCreate">${w("create")}</button>
        <button class="btn ghost" id="wRestore">${w("restore")}</button></div></div></div>`;
  },
  bindWelcome() {
    const c = $("wCreate"), r = $("wRestore");
    if (!c) return;
    c.onclick = () => {
      $("wform").innerHTML = `<label class="field"><span>${w("nick")}</span><input id="wNick" maxlength="16" autocomplete="nickname" placeholder="${w("nick_ph")}"></label>
        <span class="lbl">${w("pick_av")}</span><div class="avgrid">${AVATARS.map((a, i) =>
          `<button class="avpick" data-a="${a}" aria-pressed="${i === 0}"><img class="px" src="assets/av/${a}.png" alt="${a}"></button>`).join("")}</div>
        <button class="btn wide" id="wGo">${w("create")}</button>`;
      let av = AVATARS[0];
      for (const b of document.querySelectorAll(".avpick")) b.onclick = () => {
        av = b.dataset.a; for (const x of document.querySelectorAll(".avpick")) x.setAttribute("aria-pressed", x === b);
      };
      $("wNick").focus();
      $("wGo").onclick = (e) => this.act(e.target, async () => {
        const p = await this.rpc("register_player", { p_nick: $("wNick").value.trim(), p_avatar: av });
        this.me = { id: p.id, code: p.code, nick: p.nick, avatar: p.avatar }; this.save();
        await this.afterSignIn(); this.toast(w("made"));
      });
    };
    r.onclick = () => {
      $("wform").innerHTML = `<label class="field"><span>${w("code")}</span><input id="wCode" autocapitalize="characters" autocomplete="off" placeholder="${w("code_ph")}"></label>
        <button class="btn wide" id="wGo">${w("restore")}</button>`;
      const inp = $("wCode"); inp.focus();
      inp.oninput = () => {   // дефисы сами, как в лавке на Android
        const raw = inp.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
        inp.value = raw.match(/.{1,4}/g)?.join("-") || "";
      };
      $("wGo").onclick = (e) => this.act(e.target, async () => {
        const p = await this.rpc("restore_player", { p_code: inp.value.trim() });
        this.me = { id: p.id, code: p.code || inp.value.trim(), nick: p.nick, avatar: p.avatar }; this.save();
        await this.afterSignIn(); this.toast(w("welcome_back", { n: p.nick }));
      });
    };
  },
  async afterSignIn() {
    await this.refreshMe(); this.here();
    const next = this.pending ? "#join/" + this.pending : null;
    this.pending = null;
    if (next && location.hash !== next) location.hash = next;   // смена адреса сама перерисует экран
    else this.route();
  },

  // ---------- Лента ----------
  async feed(before) {
    const list = await this.rpc("feed", { p_viewer: this.me ? this.me.id : null, p_before: before || null, p_limit: 20 });
    for (const p of list) this.posts.set(p.id, p);
    const html = list.map(p => this.postCard(p)).join("");
    if (before) {
      $("more")?.remove();
      $("posts").insertAdjacentHTML("beforeend", html + this.moreBtn(list));
    } else {
      this.page(this.head(w("tab_feed")) + (this.me ? `<div class="panel composer">${this.av(this.me, 40)}
          <textarea id="pBody" rows="2" maxlength="300" placeholder="${w("write_ph")}"></textarea>
          <button class="btn small" id="pSend">${w("post")}</button></div>` : "")
        + `<div id="posts">${html || `<p class="empty">${w("empty_feed")}</p>`}${this.moreBtn(list)}</div>`);
      if (this.me) $("pSend").onclick = (e) => this.act(e.target, async () => {
        await this.rpc("create_post", this.auth({ p_body: $("pBody").value })); this.feed();
      });
    }
    this.bindPosts();
  },
  moreBtn(list) { return list.length >= 20 ? `<button class="btn ghost wide" id="more" data-before="${list[list.length - 1].id}">${w("more")}</button>` : ""; },
  postCard(p, full) {
    const rel = p.kind === "release";
    const app = p.app_id ? this.gameName(p.app_id) : "";
    let body = "";
    if (p.kind === "record") {
      const d = p.data || {}, mode = d.mode;
      body = `<a class="rec" href="app.html?id=${encodeURIComponent(p.app_id)}"><span class="star">★</span><span>
        <b>${w("rec_new")}${mode === "campaign" ? d.waves + "/10" : wavesTxt(d.waves)}</b>
        <small>«${esc(app)}» · ${d.place ? (mode === "daily" ? w("place_day", { p: d.place }) : w("place_world", { p: d.place })) : ""}</small></span></a>`;
    } else if (p.kind === "review") {
      body = `<p class="muted">${w("rated", { a: esc(app) })} ${"★".repeat(Math.round((p.data || {}).rating || 0))}</p>${p.body ? `<p>${esc(p.body)}</p>` : ""}`;
    } else if (rel) {
      const a = this.cat && this.cat.apps.find(x => x.id === p.app_id);
      body = `<a class="rec" href="app.html?id=${encodeURIComponent(p.app_id || "")}">${a ? `<img class="icon sm" src="${esc(a.icon)}" alt="">` : ""}<span>
        <b>${w("release", { a: esc(p.nick) })}</b><small>${w("version", { v: esc((p.data || {}).version || "") })}</small></span></a>
        ${p.body ? `<p class="clamp">${esc(p.body)}</p>` : ""}`;
    } else body = `<p>${esc(p.body)}</p>`;
    const who = rel ? `<img class="icon sm" src="assets/stamp_256.png" alt="">` : `<a href="#player/${p.player_id}">${this.av(p, 42)}</a>`;
    const name = rel ? w("workshop") : esc(p.nick);
    return `<article class="panel post" data-id="${p.id}">
      <header>${who}<div class="grow"><span class="nm"><b>${name}</b>${p.is_master || rel ? `<span class="badge new">${w("master")}</span>` : ""}</span>
        <small class="muted">${rel ? "" : esc(rank(p.title)) + " · "}${this.ago(p.created_at)}</small></div>
        ${!rel && this.me ? `<button class="iconbtn menu" aria-label="…">⋯</button>` : ""}</header>
      ${body}
      ${rel ? "" : `<footer><button class="like${p.liked ? " on" : ""}">${Lavka.shoe}<span>${p.likes || 0}</span></button>
        ${full ? "" : `<a class="cm" href="#post/${p.id}">💬 <span>${p.comments || 0}</span></a>`}</footer>`}
    </article>`;
  },
  bindPosts() {
    const more = $("more");
    if (more) more.onclick = () => this.feed(+more.dataset.before);
    for (const el of document.querySelectorAll(".post")) {
      const id = +el.dataset.id, p = this.posts.get(id);
      const like = el.querySelector(".like");
      if (like) like.onclick = () => {
        if (this.needProfile()) return;
        this.act(like, async () => {
          const r = await this.rpc("like_post", this.auth({ p_post: id }));
          like.classList.toggle("on", r.liked); like.querySelector("span").textContent = r.likes;
          if (r.liked && navigator.vibrate) navigator.vibrate(15);
        });
      };
      const menu = el.querySelector(".menu");
      if (menu && p) menu.onclick = () => this.menu(menu, p.player_id === this.me.id
        ? [[w("del"), async () => { if (!confirm(w("sure_del"))) return; await this.rpc("delete_post", this.auth({ p_post: id })); el.remove(); this.toast(w("deleted")); }]]
        : [[w("report"), async () => { await this.rpc("report_post", this.auth({ p_post: id })); this.toast(w("reported")); }],
           [w("block") + " " + p.nick, async () => { await this.rpc("block_player", this.auth({ p_target: p.player_id, p_on: true })); this.toast(w("blocked")); this.route(); }]]);
    }
  },
  /** Небольшое меню у кнопки «⋯». */
  menu(anchor, items) {
    document.querySelector(".pop")?.remove();
    const m = document.createElement("div");
    m.className = "pop";
    m.innerHTML = items.map((it, i) => `<button data-i="${i}">${esc(it[0])}</button>`).join("");
    document.body.appendChild(m);
    const r = anchor.getBoundingClientRect();
    m.style.top = (r.bottom + scrollY + 4) + "px";
    m.style.left = Math.max(8, r.right + scrollX - m.offsetWidth) + "px";
    m.onclick = (e) => { const i = e.target.dataset.i; m.remove(); if (i != null) this.act(null, items[+i][1]); };
    setTimeout(() => document.addEventListener("click", () => m.remove(), { once: true }), 0);
  },
  async post(id) {
    const p = this.posts.get(id);
    const list = await this.rpc("comments", { p_post: id, p_viewer: this.me ? this.me.id : null });
    this.page(this.head(w("comments"), "#feed") + (p ? this.postCard(p, true) : "")
      + `<div class="list" id="cms">${list.length ? list.map(c => `<div class="row" data-c="${c.id}">
          <a href="#player/${c.player_id}">${this.av(c, 36)}</a>
          <div class="grow"><b>${esc(c.nick)}</b> <small class="muted">${this.ago(c.created_at)}</small><p>${esc(c.body)}</p></div>
          ${this.me ? `<button class="iconbtn cmenu" data-mine="${c.mine ? 1 : ""}">⋯</button>` : ""}</div>`).join("")
          : `<p class="empty">${w("no_comments")}</p>`}</div>`
      + (this.me ? `<div class="panel composer">${this.av(this.me, 36)}<textarea id="cBody" rows="2" maxlength="300" placeholder="${w("comment_ph")}"></textarea>
          <button class="btn small" id="cSend">${w("send")}</button></div>` : ""));
    this.bindPosts();
    if (this.me) {
      $("cSend").onclick = (e) => this.act(e.target, async () => {
        await this.rpc("add_comment", this.auth({ p_post: id, p_body: $("cBody").value }));
        if (p) p.comments = (p.comments || 0) + 1;
        this.post(id);
      });
      for (const b of document.querySelectorAll(".cmenu")) {
        const cid = +b.closest("[data-c]").dataset.c;
        b.onclick = () => this.menu(b, b.dataset.mine
          ? [[w("del"), async () => { await this.rpc("delete_comment", this.auth({ p_comment: cid })); b.closest("[data-c]").remove(); }]]
          : [[w("report"), async () => { await this.rpc("report_comment", this.auth({ p_comment: cid })); this.toast(w("reported")); }]]);
      }
    }
  },

  // ---------- Друзья, группы, люди ----------
  subTabs(cur) {
    return `<div class="chips sub">${["friends", "groups", "people"].map(k =>
      `<a class="chip" href="#friends/${k}" aria-pressed="${k === cur}">${w(k)}</a>`).join("")}</div>`;
  },
  async friends(sub) {
    if (sub === "groups") return this.groups();
    if (sub === "people") return this.people();
    if (!this.me) { this.page(this.head(w("friends")) + this.subTabs("friends") + this.welcomeCard()); this.bindWelcome(); return; }
    const list = await this.rpc("friends_list", this.auth());
    const inc = list.filter(f => f.state === "incoming"), fr = list.filter(f => f.state === "friend"), out = list.filter(f => f.state === "outgoing");
    const row = (f, btns, wide) => `<div class="row${wide ? " wrap" : ""}" data-p="${f.player_id}"><a href="#player/${f.player_id}">${this.av(f, 46)}</a>
      <a class="grow" href="#player/${f.player_id}"><b>${esc(f.nick)}</b>${f.status_text ? `<span class="muted">${esc(f.status_text)}</span>` : ""}
        <small class="${f.playing ? "playing" : "muted"}">${esc([this.presence(f), f.best && f.best["brick-tower"] ? w("best", { n: f.best["brick-tower"] }) : ""].filter(Boolean).join(" · "))}</small></a>
        ${btns ? (wide ? `<div class="acts">${btns}</div>` : btns) : ""}</div>`;
    let html = this.head(w("friends")) + this.subTabs("friends")
      + `<label class="search"><input id="fq" type="search" placeholder="${w("search_ph")}" autocomplete="off"></label><div id="fres"></div>`;
    if (inc.length) html += `<h2 class="sec">${w("requests")}</h2><div class="list">${inc.map(f => row(f,
      `<button class="btn small" data-ans="1">${w("accept")}</button><button class="btn small ghost" data-ans="0">${w("decline")}</button>`, true)).join("")}</div>`;
    html += `<h2 class="sec">${w("friends")} · ${fr.length}</h2>`;
    html += fr.length ? `<div class="list">${fr.map(f => row(f)).join("")}</div>`
      : `<div class="panel center"><img class="px" src="assets/mascot_idle.png" width="90" alt=""><p>${w("no_friends")}</p>
          <button class="btn" id="shareShop">${w("share_shop")}</button></div>`;
    if (out.length) html += `<h2 class="sec">${w("outgoing")}</h2><div class="list">${out.map(f => row(f, `<button class="btn small ghost" data-cancel>${w("cancel")}</button>`)).join("")}</div>`;
    html += `<a class="row link" href="#blocks"><span class="grow"><b>${w("blocks")}</b><small class="muted">${w("blocks_s")}</small></span><span class="chev">›</span></a>`;
    this.page(html);
    $("shareShop") && ($("shareShop").onclick = () => this.share(Lavka.t("brand") + " — " + this.site(), this.site()));
    for (const b of document.querySelectorAll("[data-ans]")) b.onclick = () => this.act(b, async () => {
      await this.rpc("friend_answer", this.auth({ p_from: b.closest("[data-p]").dataset.p, p_accept: b.dataset.ans === "1" })); this.route();
    });
    for (const b of document.querySelectorAll("[data-cancel]")) b.onclick = () => this.act(b, async () => {
      await this.rpc("friend_remove", this.auth({ p_other: b.closest("[data-p]").dataset.p })); this.route();
    });
    let timer = 0;
    $("fq").oninput = () => {
      clearTimeout(timer);
      const qv = $("fq").value.trim();
      if (qv.length < 2) { $("fres").innerHTML = ""; return; }
      timer = setTimeout(async () => {
        try {
          const res = await this.rpc("player_search", this.auth({ p_q: qv }));
          $("fres").innerHTML = res.length ? `<div class="list">${res.map(p => row(p, p.state === "none" ? `<button class="btn small" data-add>${w("add_friend")}</button>`
            : `<span class="badge">${p.state === "friend" ? w("is_friend") : p.state === "outgoing" ? w("sent") : w("requests")}</span>`)).join("")}</div>`
            : `<p class="muted pad">${w("none_found")}</p>`;
          for (const b of document.querySelectorAll("[data-add]")) b.onclick = () => this.act(b, async () => {
            const r = await this.rpc("friend_request", this.auth({ p_target: b.closest("[data-p]").dataset.p }));
            b.outerHTML = `<span class="badge">${r.state === "friend" ? w("is_friend") : w("sent")}</span>`;
          });
        } catch (e) { $("fres").innerHTML = `<p class="muted pad">${esc(e.message)}</p>`; }
      }, 300);
    };
  },
  async blocks() {
    if (this.needProfile()) return;
    const list = await this.rpc("blocks_list", this.auth());
    this.page(this.head(w("blocks"), "#friends") + (list.length ? `<div class="list">${list.map(b => `<div class="row" data-p="${b.player_id}">
      ${this.av(b, 40)}<b class="grow">${esc(b.nick)}</b><button class="btn small ghost">${w("unblock")}</button></div>`).join("")}</div>`
      : `<p class="empty">${w("no_blocks")}</p>`));
    for (const b of document.querySelectorAll("[data-p] button")) b.onclick = () => this.act(b, async () => {
      await this.rpc("block_player", this.auth({ p_target: b.closest("[data-p]").dataset.p, p_on: false })); this.route();
    });
  },
  async groups() {
    if (!this.me) { this.page(this.head(w("groups")) + this.subTabs("groups") + this.welcomeCard()); this.bindWelcome(); return; }
    const list = await this.rpc("my_groups", this.auth());
    this.page(this.head(w("groups")) + this.subTabs("groups")
      + `<div class="btns"><button class="btn" id="gNew">${w("g_create")}</button><button class="btn ghost" id="gCode">${w("g_join")}</button></div><div id="gform"></div>`
      + `<h2 class="sec">${w("my_groups")}</h2>` + (list.length ? `<div class="list">${list.map(g => `<a class="row card-row" href="#group/${g.id}">
          <span class="gicon">${esc((g.name || "?").slice(0, 1).toUpperCase())}</span>
          <span class="grow"><b>${esc(g.name)}</b><small class="muted">${w("members", { n: g.members })}${g.online ? " · " + w("g_online", { n: g.online }) : ""}${g.is_owner ? " · " + w("owner") : ""}</small></span>
          <span class="chev">›</span></a>`).join("")}</div>` : `<p class="muted pad">${w("no_groups")}</p>`));
    $("gNew").onclick = () => {
      $("gform").innerHTML = `<div class="panel"><input class="inp" id="gName" maxlength="30" placeholder="${w("g_name_ph")}">
        <input class="inp" id="gAbout" maxlength="120" placeholder="${w("g_about_ph")}"><button class="btn wide" id="gGo">${w("g_create")}</button></div>`;
      $("gName").focus();
      $("gGo").onclick = (e) => this.act(e.target, async () => {
        const g = await this.rpc("group_create", this.auth({ p_name: $("gName").value, p_about: $("gAbout").value }));
        location.hash = "#group/" + g.id;
      });
    };
    $("gCode").onclick = () => {
      $("gform").innerHTML = `<div class="panel"><input class="inp" id="gInv" maxlength="12" autocapitalize="characters" placeholder="${w("g_code_ph")}">
        <button class="btn wide" id="gGo">${w("g_join")}</button></div>`;
      $("gInv").focus();
      $("gGo").onclick = () => { location.hash = "#join/" + $("gInv").value.trim(); };
    };
  },
  async join(code) {
    if (!this.me) { this.pending = code; this.page(this.head(w("join_t")) + this.welcomeCard()); this.bindWelcome(); return; }
    const g = await this.rpc("group_join", this.auth({ p_invite: code }));
    this.toast(w("joined", { g: g.name }));
    location.replace("#group/" + g.id);
  },
  async group(id, tab = "feed") {
    if (this.needProfile()) return;
    const g = await this.rpc("group_info", this.auth({ p_group: id }));
    const link = this.site() + "join.html#" + g.invite;
    let html = this.head(g.name, "#friends/groups")
      + `<div class="panel">${g.about ? `<p>${esc(g.about)}</p>` : ""}<p class="muted">${w("members", { n: g.members.length })}</p>
        <div class="invite"><span class="muted">${w("g_invite")}:</span> <b class="code">${esc(g.invite)}</b></div>
        <div class="btns"><button class="btn small" id="gShare">${w("g_share")}</button><button class="btn small ghost" id="gCopy">${w("g_copy")}</button>
        ${g.is_owner ? `<button class="btn small ghost" id="gReset">${w("g_reset")}</button><button class="btn small ghost" id="gEdit">${w("g_edit")}</button>` : ""}</div>
        <div id="gedit"></div></div>`
      + `<div class="chips sub">${["feed", "board", "members"].map(k => `<button class="chip" data-gt="${k}" aria-pressed="${k === tab}">${w("g_" + k)}</button>`).join("")}</div>
        <div id="gbody"></div>
        <button class="btn ghost wide danger" id="gLeave">${w("g_leave")}</button>`;
    this.page(html);
    const text = w("g_invite_text", { g: g.name, u: link });
    $("gShare").onclick = () => this.share(text, link);
    $("gCopy").onclick = () => this.copy(link);
    if (g.is_owner) {
      $("gReset").onclick = (e) => this.act(e.target, async () => { await this.rpc("group_invite_reset", this.auth({ p_group: id })); this.group(id, tab); });
      $("gEdit").onclick = () => {
        $("gedit").innerHTML = `<input class="inp" id="geName" maxlength="30" value="${esc(g.name)}"><input class="inp" id="geAbout" maxlength="120" value="${esc(g.about)}">
          <button class="btn small" id="geSave">${w("save")}</button>`;
        $("geSave").onclick = (e) => this.act(e.target, async () => {
          await this.rpc("group_edit", this.auth({ p_group: id, p_name: $("geName").value, p_about: $("geAbout").value })); this.group(id, tab);
        });
      };
    }
    $("gLeave").onclick = (e) => { if (confirm(w("g_leave") + "?")) this.act(e.target, async () => {
      await this.rpc("group_leave", this.auth({ p_group: id })); location.hash = "#friends/groups"; }); };
    for (const c of document.querySelectorAll("[data-gt]")) c.onclick = () => {
      for (const x of document.querySelectorAll("[data-gt]")) x.setAttribute("aria-pressed", x === c);
      this.groupTab(g, c.dataset.gt);
    };
    this.groupTab(g, tab);
  },
  async groupTab(g, tab) {
    const box = $("gbody");
    box.innerHTML = '<div class="skel"></div>';
    try {
      if (tab === "members") {
        box.innerHTML = `<div class="list">${g.members.map(m => `<div class="row" data-p="${m.player_id}"><a href="#player/${m.player_id}">${this.av(m, 44)}</a>
          <a class="grow" href="#player/${m.player_id}"><b>${esc(m.nick)}</b> ${m.owner ? `<span class="badge">${w("owner")}</span>` : ""}
          <small class="${m.playing ? "playing" : "muted"}">${esc(this.presence(m) || rank(m.title))}</small></a>
          ${g.is_owner && !m.owner ? `<button class="btn small ghost" data-kick>${w("g_kick")}</button>` : ""}</div>`).join("")}</div>`;
        for (const b of box.querySelectorAll("[data-kick]")) b.onclick = () => this.act(b, async () => {
          await this.rpc("group_kick", this.auth({ p_group: g.id, p_player: b.closest("[data-p]").dataset.p })); this.group(g.id, "members");
        });
      } else if (tab === "board") {
        const b = await this.rpc("group_board", this.auth({ p_group: g.id, p_game: "brick-tower", p_mode: "endless" }));
        box.innerHTML = b.length ? `<p class="muted pad">«${esc(this.gameName("brick-tower"))}»</p><div class="list">${b.map(r => `<a class="row" href="#player/${r.player_id}">
          <span class="place p${r.place}">${r.place}</span>${this.av(r, 38)}<b class="grow">${esc(r.nick)}</b><b>${wavesTxt(r.waves)}</b></a>`).join("")}</div>`
          : `<p class="empty">${w("board_empty")}</p>`;
      } else {
        const list = await this.rpc("group_feed", this.auth({ p_group: g.id }));
        for (const p of list) this.posts.set(p.id, p);
        box.innerHTML = `<div class="panel composer">${this.av(this.me, 36)}<textarea id="gpBody" rows="2" maxlength="300" placeholder="${w("g_post_ph")}"></textarea>
          <button class="btn small" id="gpSend">${w("send")}</button></div>`
          + (list.length ? list.map(p => this.postCard(p, true)).join("") : `<p class="empty">${w("g_empty")}</p>`);
        this.bindPosts();
        $("gpSend").onclick = (e) => this.act(e.target, async () => {
          await this.rpc("group_post", this.auth({ p_group: g.id, p_body: $("gpBody").value })); this.groupTab(g, "feed");
        });
      }
    } catch (e) { box.innerHTML = `<p class="empty">${esc(e.message)}</p>`; }
  },
  async people() {
    const [st, list, dl] = await Promise.all([this.rpc("stats_public").catch(() => null),
      this.rpc("people", { p_viewer: this.me ? this.me.id : null, p_limit: 50 }), Site.downloads()]);
    let html = this.head(w("people")) + this.subTabs("people");
    if (st) html += `<div class="stats">${[[st.online, w("st_online")], [st.registered, w("st_reg")], [dl, w("st_dl")], [st.groups, w("st_groups")]]
      .filter(x => x[0] != null).map(x => `<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div>`;
    html += `<p class="muted pad">${w("people_s")}${this.me && this.info && !this.info.privacy.people ? ` <button class="btn small ghost" id="pMe">${w("people_me")}</button>` : ""}</p>`;
    html += list.length ? `<div class="list">${list.map(p => `<a class="row" href="#player/${p.player_id}">${this.av(p, 44)}
      <span class="grow"><b>${esc(p.nick)}</b>${p.status_text ? `<span class="muted">${esc(p.status_text)}</span>` : ""}
      <small class="muted">${esc(rank(p.title))} · ${w("pf_" + (p.platform || "android"))} · ${w("since", { d: new Date(p.since).toLocaleDateString(Lavka.lang === "ru" ? "ru-RU" : "en-GB", { month: "long", year: "numeric" }) })}</small></span></a>`).join("")}</div>`
      : `<p class="empty">${w("people_empty")}</p>`;
    this.page(html);
    $("pMe") && ($("pMe").onclick = (e) => this.act(e.target, async () => {
      await this.rpc("set_privacy", this.auth({ p_people: true })); await this.refreshMe(); this.route();
    }));
  },
  async player(id) {
    const [p, rel, photo] = await Promise.all([this.rpc("player_profile", { p_player: id }),
      this.me && this.me.id !== id ? this.rpc("player_relation", this.auth({ p_other: id })).catch(() => null) : null,
      this.rpc("avatar_get", { p_player: id, p_id: this.me ? this.me.id : null, p_code: this.me ? this.me.code : null }).catch(() => null)]);
    if (!p) { this.page(this.head("—", "#friends") + `<p class="empty">—</p>`); return; }
    const mine = this.me && this.me.id === id;
    const big = photo && photo.orig ? `<img class="photo" src="data:image/jpeg;base64,${photo.orig}" alt="">` : this.av(p, 96, "big");
    let btns = "";
    if (rel) {
      btns = rel.state === "friend" ? `<button class="btn ghost small" data-fr="remove">${w("remove_friend")}</button>`
        : rel.state === "incoming" ? `<button class="btn small" data-fr="accept">${w("accept")}</button>`
        : rel.state === "outgoing" ? `<span class="badge">${w("sent")}</span>` : `<button class="btn small" data-fr="add">${w("add_friend")}</button>`;
      btns += ` <button class="iconbtn" id="pMenu">⋯</button>`;
    }
    const games = (p.games || []).map(g => `<div class="panel"><b>${esc(this.gameName(g.game))}</b>
      <div class="stats small">${[[g.best_endless, w("w_best")], [g.runs, w("runs")], [g.wins, w("w_wins")], [g.kills, w("w_kills")]]
        .filter(x => x[0] != null).map(x => `<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div></div>`).join("");
    this.page(this.head(p.nick, mine ? "#me" : "#friends") + `<div class="panel center profile">${big}
      <h2>${esc(p.nick)} ${p.is_master ? `<span class="badge new">${w("master")}</span>` : ""}</h2>
      ${p.status_text ? `<p>${esc(p.status_text)}</p>` : ""}
      <p class="muted">${esc(rank(p.title))} · ${w("points", { n: p.points })} · ${w("since", { d: new Date(p.since).toLocaleDateString(Lavka.lang === "ru" ? "ru-RU" : "en-GB", { month: "long", year: "numeric" }) })}</p>
      ${p.about ? `<p>${esc(p.about)}</p>` : ""}<div class="btns center">${btns}${mine ? `<a class="btn small" href="#edit">${w("me_edit")}</a>` : ""}</div></div>
      ${(p.achievements || []).length ? `<h2 class="sec">${w("achievements")}</h2><div class="chips">${p.achievements.map(a => `<span class="badge">🏅 ${esc(a)}</span>`).join("")}</div>` : ""}
      ${games ? `<h2 class="sec">${w("games")}</h2>${games}` : ""}`);
    for (const b of document.querySelectorAll("[data-fr]")) b.onclick = () => this.act(b, async () => {
      const k = b.dataset.fr;
      if (k === "add") await this.rpc("friend_request", this.auth({ p_target: id }));
      else if (k === "accept") await this.rpc("friend_answer", this.auth({ p_from: id, p_accept: true }));
      else if (confirm(w("remove_friend") + "?")) await this.rpc("friend_remove", this.auth({ p_other: id }));
      this.route();
    });
    if ($("pMenu")) $("pMenu").onclick = () => this.menu($("pMenu"), [
      [rel.blocked ? w("unblock") : w("block"), async () => { await this.rpc("block_player", this.auth({ p_target: id, p_on: !rel.blocked })); this.toast(rel.blocked ? "✓" : w("blocked")); this.route(); }],
      ...(p.photo_ver ? [[w("report_avatar"), async () => { await this.rpc("report_avatar", this.auth({ p_target: id })); this.toast(w("reported")); }]] : [])]);
  },

  // ---------- Уведомления ----------
  noteRow(n) {
    const a = n.app_id ? this.gameName(n.app_id) : "";
    let title, body = "", href = "#notes";
    switch (n.kind) {
      case "reply": title = w("n_reply", { a }); body = n.body; href = "app.html?id=" + encodeURIComponent(n.app_id || ""); break;
      case "friend_request": title = w("n_req", { n: n.nick }); body = w("tap_answer"); href = "#friends"; break;
      case "friend_accept": title = w("n_acc", { n: n.nick }); href = "#player/" + n.player_id; break;
      case "friend_record": {
        let d = {}; try { d = JSON.parse(n.body); } catch (e) { /* пусто */ }
        title = d.beat_me ? w("n_beat", { n: n.nick }) : w("n_rec", { n: n.nick }); body = `«${a}»: ${wavesTxt(d.waves)}`; href = "#player/" + n.player_id; break;
      }
      case "group_post": title = w("n_group", { n: n.nick, g: n.app_id }); body = n.body; href = "#group/" + n.item_id; break;
      default: title = w("n_comment", { n: n.nick }); body = n.body; href = "#post/" + n.item_id;
    }
    const icon = { reply: "👑", friend_request: "⭐", friend_accept: "⭐", friend_record: "🏅", group_post: "👥" }[n.kind] || "💬";
    return `<a class="row note" href="${href}"><span class="nicon">${icon}</span><span class="grow"><b>${esc(title)}</b>
      ${body ? `<span class="muted clamp2">${esc(body)}</span>` : ""}<small class="muted">${this.ago(n.at)}</small></span></a>`;
  },
  async notes() {
    if (this.needProfile()) return;
    const list = await this.rpc("notifications2", this.auth());
    Lavka.store("notes_seen", new Date().toISOString()); this.badge(0);
    this.page(this.head(w("notes"), "#me") + (list.length ? `<div class="list">${list.map(n => this.noteRow(n)).join("")}</div>`
      : `<p class="empty">${w("notes_empty")}</p>`) + `<a class="row link" href="#settings"><b class="grow">${w("push")}</b><span class="chev">›</span></a>`);
  },
  async checkNotes() {
    if (!this.me || document.hidden) return;
    try {
      const since = Lavka.store("notes_seen") || new Date(Date.now() - 7 * 864e5).toISOString();
      const list = await this.rpc("notifications2", this.auth({ p_since: since }));
      this.badge(list.length);
    } catch (e) { /* позже */ }
  },
  badge(n) {
    const b = $("nbadge");
    if (b) { b.textContent = n > 9 ? "9+" : n; b.hidden = !n; }
    if (navigator.setAppBadge) (n ? navigator.setAppBadge(n) : navigator.clearAppBadge()).catch(() => {});
  },

  // ---------- «Мои» ----------
  async mine() {
    if (!this.me) { this.page(this.head(w("tab_me")) + this.welcomeCard()); this.bindWelcome(); return; }
    await this.refreshMe();
    const i = this.info || {};
    this.page(this.head(w("tab_me")) + `<a class="panel row card-row" href="#player/${this.me.id}">${this.av({ ...this.me, frame: i.frame }, 64)}
        <span class="grow"><b class="big">${esc(this.me.nick)}</b><span class="muted">${esc(i.status_text || w("me_profile"))}</span></span>
        ${i.is_master ? `<span class="badge new">${w("master")}</span>` : ""}<span class="chev">›</span></a>
      <div class="list">
        <a class="row link" href="#notes"><span class="nicon">🔔</span><b class="grow">${w("notes")}</b><span class="badge new" id="nb2" hidden></span><span class="chev">›</span></a>
        <a class="row link" href="#friends"><span class="nicon">⭐</span><span class="grow"><b>${w("friends")} · ${w("groups")}</b></span><span class="chev">›</span></a>
        <a class="row link" href="#week"><span class="nicon">📅</span><span class="grow"><b>${w("week")}</b><small class="muted">${w("week_s")}</small></span><span class="chev">›</span></a>
        <a class="row link" href="#edit"><span class="nicon">✏️</span><b class="grow">${w("me_edit")}</b><span class="chev">›</span></a>
        <a class="row link" href="#settings"><span class="nicon">⚙️</span><span class="grow"><b>${w("settings")}</b><small class="muted">${w("privacy")} · ${w("push")} · ${w("code")}</small></span><span class="chev">›</span></a>
        <a class="row link" href="help.html"><span class="nicon">❓</span><b class="grow">${w("help")}</b><span class="chev">›</span></a>
      </div>`);
  },
  async edit() {
    if (this.needProfile()) return;
    await this.refreshMe();
    const i = this.info || {};
    const frames = i.frames || [""];
    this.page(this.head(w("me_edit"), "#me") + `<div class="panel">
        <label class="field"><span>${w("nick")}</span><input id="eNick" maxlength="16" value="${esc(this.me.nick)}"></label>
        <span class="lbl">${w("pick_av")}</span><div class="avgrid">${AVATARS.map(a =>
          `<button class="avpick" data-a="${a}" aria-pressed="${a === this.me.avatar}"><img class="px" src="assets/av/${a}.png" alt="${a}"></button>`).join("")}</div>
        <label class="field"><span>${w("status_ph")}</span><input id="eStatus" maxlength="40" value="${esc(i.status_text || "")}"></label>
        <label class="field"><span>${w("about_ph")}</span><textarea id="eAbout" maxlength="200" rows="2">${esc(i.about || "")}</textarea></label>
        <button class="btn wide" id="eSave">${w("save")}</button></div>
      <h2 class="sec">${w("photo")}</h2><div class="panel"><p class="muted">${w("photo_s")}</p>
        <div class="btns"><label class="btn small">${w("photo_pick")}<input type="file" id="ePhoto" accept="image/*" hidden></label>
        ${this.me.photo_ver ? `<button class="btn small ghost" id="eClear">${w("photo_clear")}</button>` : ""}</div><div id="crop"></div></div>
      <h2 class="sec">${w("frame")}</h2><div class="frames">${FRAMES.map(f => {
        const open = frames.includes(f);
        return `<button class="frame" data-f="${f}" ${open ? "" : "disabled"} aria-pressed="${(i.frame || "") === f}">
          ${this.av({ ...this.me, frame: f }, 52)}<small>${esc(w("frames")[f])}</small>
          ${open ? "" : `<small class="muted">${w("frame_locked", { h: f === "master" ? w("master") : w("points", { n: FRAME_HINT[f][0] }) })}</small>`}</button>`;
      }).join("")}</div>`);
    let av = this.me.avatar;
    for (const b of document.querySelectorAll(".avpick")) b.onclick = () => {
      av = b.dataset.a; for (const x of document.querySelectorAll(".avpick")) x.setAttribute("aria-pressed", x === b);
    };
    $("eSave").onclick = (e) => this.act(e.target, async () => {
      const nick = $("eNick").value.trim();
      if (nick !== this.me.nick || av !== this.me.avatar) {
        const r = await this.rpc("update_profile", this.auth({ p_nick: nick, p_avatar: av }));
        this.me.nick = r.nick || nick; this.me.avatar = r.avatar || av; this.save();
      }
      if ($("eStatus").value.trim() !== (i.status_text || "")) await this.rpc("set_status", this.auth({ p_text: $("eStatus").value }));
      if ($("eAbout").value.trim() !== (i.about || "")) await this.rpc("set_about", this.auth({ p_about: $("eAbout").value }));
      this.toast("✓"); location.hash = "#me";
    });
    for (const b of document.querySelectorAll(".frame:not([disabled])")) b.onclick = () => this.act(b, async () => {
      await this.rpc("set_frame", this.auth({ p_frame: b.dataset.f }));
      for (const x of document.querySelectorAll(".frame")) x.setAttribute("aria-pressed", x === b);
    });
    $("eClear") && ($("eClear").onclick = (e) => this.act(e.target, async () => {
      await this.rpc("avatar_clear", this.auth()); this.me.photo_ver = 0; this.save(); this.route();
    }));
    $("ePhoto").onchange = () => { const f = $("ePhoto").files[0]; if (f) Photo.open(f, $("crop")); };
  },
  async settings() {
    if (this.needProfile()) return;
    await this.refreshMe();
    const pr = (this.info && this.info.privacy) || {};
    const sw = (k, on, label) => `<label class="switch"><span>${label}</span><input type="checkbox" data-pr="${k}" ${on ? "checked" : ""}><i></i></label>`;
    this.page(this.head(w("settings"), "#me")
      + `<h2 class="sec">${w("privacy")}</h2><div class="panel">${sw("people", pr.people, w("pr_people"))}${sw("presence", pr.presence, w("pr_presence"))}
         ${sw("requests", pr.requests, w("pr_requests"))}${sw("photo", pr.photo, w("pr_photo"))}</div>`
      + `<h2 class="sec">${w("push")}</h2><div class="panel" id="push"><div class="skel short"></div></div>`
      + `<h2 class="sec">${w("code")}</h2><div class="panel"><p class="muted">${w("code_s")}</p>
         <p class="code big" id="code">••••-••••-••••</p><div class="btns"><button class="btn small ghost" id="cShow">${w("show")}</button>
         <button class="btn small ghost" id="cCopy">${w("copy")}</button><button class="btn small ghost" id="cRot">${w("rotate")}</button></div></div>`
      + `<div class="panel"><button class="btn ghost wide" id="out">${w("logout")}</button><p class="muted small">${w("logout_s")}</p>
         <button class="btn ghost wide danger" id="del">${w("delete")}</button></div>`);
    for (const c of document.querySelectorAll("[data-pr]")) c.onchange = () => this.act(c, async () => {
      await this.rpc("set_privacy", this.auth({ ["p_" + c.dataset.pr]: c.checked })); await this.refreshMe();
    });
    $("cShow").onclick = () => { $("code").textContent = this.me.code; };
    $("cCopy").onclick = () => this.copy(this.me.code);
    $("cRot").onclick = (e) => { if (confirm(w("rotate") + "?")) this.act(e.target, async () => {
      const r = await this.rpc("rotate_code", this.auth()); this.me.code = r.code; this.save();
      $("code").textContent = r.code; alert(w("rotated", { c: r.code }));
    }); };
    $("out").onclick = () => { if (confirm(w("logout") + "?")) { Push.off(true); this.signOut(); } };
    $("del").onclick = (e) => {
      const nick = prompt(w("delete_s"));
      if (nick) this.act(e.target, async () => { await this.rpc("delete_player", this.auth({ p_confirm_nick: nick })); Push.off(true); this.signOut(); });
    };
    Push.panel($("push"));
  },
  async week() {
    if (this.needProfile()) return;
    const s = await this.rpc("week_summary", this.auth());
    const cells = [[s.runs, w("w_runs")], [s.wins, w("w_wins")], [s.best ?? "—", w("w_best")], [s.kills, w("w_kills")],
      [this.dur(s.seconds || 0), w("w_time")], [s.likes, w("w_likes")], [s.friends, w("w_friends")], [s.friends_place ?? "—", w("w_place")]];
    this.page(this.head(w("week"), "#me") + `<div class="panel"><div class="stats">${cells.map(c => `<div><b>${esc(c[0])}</b><span>${c[1]}</span></div>`).join("")}</div>
      ${s.top_friend ? `<p class="center">${w("w_top", { n: esc(s.top_friend.nick), r: s.top_friend.runs })}</p>` : ""}
      <canvas id="wcard" width="1080" height="1350" class="wcard"></canvas>
      <button class="btn wide" id="wShare">${w("w_share")}</button></div>`);
    const cv = $("wcard");
    await Card.week(cv, this.me, s, cells);
    $("wShare").onclick = () => cv.toBlob(async (b) => {
      const file = new File([b], "levsha-week.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) navigator.share({ files: [file], text: Lavka.t("brand") + " — " + this.site() }).catch(() => {});
      else { const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = file.name; a.click(); }
    });
  },

  // ---------- «я здесь» ----------
  here() {
    if (!this.me || document.hidden) return;
    const pf = Lavka.platform() === "ios" ? "iphone" : "web";
    this.rpc("presence_set", this.auth({ p_game: null, p_platform: pf })).catch(() => {});
  },
  ping() {
    let id = Lavka.store("install_id");
    if (!id) { id = crypto.randomUUID ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); Lavka.store("install_id", id); }
    this.rpc("install_ping", { p_install: id, p_platform: Lavka.platform() === "ios" ? "iphone" : "web", p_ver: "web" }).catch(() => {});
  },

  async init() {
    Lavka.init();
    this.load();
    for (const el of document.querySelectorAll("[data-w]")) el.textContent = w(el.dataset.w);
    document.addEventListener("lavka:lang", () => { for (const el of document.querySelectorAll("[data-w]")) el.textContent = w(el.dataset.w); this.route(); });
    addEventListener("hashchange", () => this.route());
    $("bell").onclick = () => { location.hash = this.me ? "#notes" : "#me"; };
    this.cat = await Lavka.loadCatalog();
    if (this.me) await this.refreshMe();
    this.route();
    this.ping(); this.here(); this.checkNotes();
    setInterval(() => { this.here(); this.checkNotes(); }, 120000);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) { this.here(); this.checkNotes(); } });
  },
};

// ---------- Уведомления на устройстве (Web Push) ----------
const Push = {
  supported() { return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window; },
  b64u(s) { const p = "=".repeat((4 - s.length % 4) % 4); const b = atob((s + p).replace(/-/g, "+").replace(/_/g, "/")); return Uint8Array.from(b, c => c.charCodeAt(0)); },
  prefs() { try { return JSON.parse(Lavka.store("push_prefs") || "null") || { kinds: KINDS, quiet: true }; } catch (e) { return { kinds: KINDS, quiet: true }; } },
  /** Служба сайта (sw.js); если браузер её не запустил — не ждём вечно. */
  async reg() {
    if (!this.supported()) return null;
    const r = await navigator.serviceWorker.getRegistration().catch(() => null);
    if (r && r.active) return r;
    return Promise.race([navigator.serviceWorker.ready, new Promise(ok => setTimeout(() => ok(null), 4000))]);
  },
  async sub() { const r = await this.reg(); return r ? r.pushManager.getSubscription() : null; },
  async on() {
    const key = await App.rpc("push_key");
    if (!key) throw new Error(w("push_soon"));
    const reg = await this.reg();
    if (!reg) throw new Error(w("push_no"));
    if (await Notification.requestPermission() !== "granted") throw new Error(w("push_denied"));
    const s = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: this.b64u(key) });
    await this.send(s);
  },
  async send(s) {
    const j = s.toJSON(), p = this.prefs();
    await App.rpc("push_subscribe", App.auth({ p_endpoint: j.endpoint, p_p256dh: j.keys.p256dh, p_auth: j.keys.auth,
      p_kinds: p.kinds, p_quiet: p.quiet, p_lang: Lavka.lang }));
  },
  async off(silent) {
    try {
      const s = await this.sub();
      if (s) { await App.rpc("push_unsubscribe", { p_endpoint: s.endpoint }).catch(() => {}); await s.unsubscribe(); }
    } catch (e) { if (!silent) App.toast(e.message); }
  },
  async panel(box) {
    const ios = Lavka.platform() === "ios";
    if (!this.supported()) { box.innerHTML = `<p class="muted">${ios && !Lavka.standalone() ? w("push_ios") : w("push_no")}</p>`; return; }
    const reg = await this.reg();
    if (!reg) { box.innerHTML = `<p class="muted">${w("push_no")}</p>`; return; }
    const s = await reg.pushManager.getSubscription().catch(() => null), p = this.prefs();
    const denied = Notification.permission === "denied";
    box.innerHTML = (s ? `<p>✅ ${w("push_ok")}</p>` : `<p class="muted">${denied ? w("push_denied") : ios ? w("push_ios") : ""}</p>`)
      + KINDS.map(k => `<label class="switch"><span>${w("k_" + k)}</span><input type="checkbox" data-k="${k}" ${p.kinds.includes(k) ? "checked" : ""}><i></i></label>`).join("")
      + `<label class="switch"><span>${w("quiet")}</span><input type="checkbox" id="quiet" ${p.quiet ? "checked" : ""}><i></i></label>`
      + `<button class="btn wide ${s ? "ghost" : ""}" id="pushBtn" ${denied ? "disabled" : ""}>${s ? w("push_off") : w("push_on")}</button>`;
    const savePrefs = async () => {
      const np = { kinds: [...box.querySelectorAll("[data-k]")].filter(c => c.checked).map(c => c.dataset.k), quiet: $("quiet").checked };
      Lavka.store("push_prefs", JSON.stringify(np));
      const cur = await this.sub().catch(() => null);
      if (cur) await this.send(cur).catch(e => App.toast(e.message));
    };
    for (const c of box.querySelectorAll("input")) c.onchange = savePrefs;
    $("pushBtn").onclick = (e) => App.act(e.target, async () => {
      if (s) await this.off(); else { await this.on(); App.toast(w("push_ok")); }
      this.panel(box);
    });
  },
};

// ---------- Своё фото: обрезка в квадрат, пиксельный значок 32×32 и фото для друзей ----------
const Photo = {
  async open(file, box) {
    const img = await new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.src = URL.createObjectURL(file); });
    box.innerHTML = `<div class="cropwrap"><canvas id="cc" width="320" height="320"></canvas><canvas id="cp" width="32" height="32" class="px"></canvas></div>
      <input type="range" id="cz" min="1" max="3" step="0.01" value="1" aria-label="zoom">
      <label class="switch"><span>${w("photo_real")}</span><input type="checkbox" id="creal" checked><i></i></label>
      <button class="btn wide" id="cgo">${w("photo_save")}</button>`;
    const cc = $("cc"), cx = cc.getContext("2d"), cp = $("cp");
    let zoom = 1, dx = 0, dy = 0;
    const side = Math.min(img.width, img.height);
    const draw = () => {
      const s = side / zoom;
      const maxX = (img.width - s) / 2, maxY = (img.height - s) / 2;
      dx = Math.max(-maxX, Math.min(maxX, dx)); dy = Math.max(-maxY, Math.min(maxY, dy));
      const sx = (img.width - s) / 2 + dx, sy = (img.height - s) / 2 + dy;
      cx.imageSmoothingQuality = "high";
      cx.drawImage(img, sx, sy, s, s, 0, 0, 320, 320);
      this.pixelize(cc, cp);
    };
    $("cz").oninput = () => { zoom = +$("cz").value; draw(); };
    let drag = null;
    cc.onpointerdown = (e) => { drag = [e.clientX, e.clientY]; cc.setPointerCapture(e.pointerId); };
    cc.onpointermove = (e) => {
      if (!drag) return;
      const k = side / zoom / cc.clientWidth;
      dx -= (e.clientX - drag[0]) * k; dy -= (e.clientY - drag[1]) * k; drag = [e.clientX, e.clientY]; draw();
    };
    cc.onpointerup = () => { drag = null; };
    draw();
    $("cgo").onclick = (e) => App.act(e.target, async () => {
      const pixel = cp.toDataURL("image/png").split(",")[1];
      let orig = null;
      if ($("creal").checked) {
        const big = document.createElement("canvas"); big.width = big.height = 256;
        big.getContext("2d").drawImage(cc, 0, 0, 256, 256);
        for (let q = 0.85; q >= 0.4; q -= 0.1) {   // заново нарисованная картинка — без EXIF и координат
          orig = big.toDataURL("image/jpeg", q).split(",")[1];
          if (orig.length * 0.75 <= 80000) break;
        }
      }
      const r = await App.rpc("avatar_put", App.auth({ p_pixel: pixel, p_orig: orig }));
      App.me.photo_ver = r.photo_ver; App.save();
      App.pixels.set(App.me.id + "_" + r.photo_ver, "data:image/png;base64," + pixel);
      Lavka.store("px_" + App.me.id + "_" + r.photo_ver, "data:image/png;base64," + pixel);
      App.toast("✓"); location.hash = "#me";
    });
  },
  /** Как в лавке на Android: уменьшить, добавить сочности, раскрасить цветами палитры бренда. */
  pixelize(src, dst) {
    const d = dst.getContext("2d");
    d.imageSmoothingEnabled = true; d.imageSmoothingQuality = "high";
    d.drawImage(src, 0, 0, 32, 32);
    const im = d.getImageData(0, 0, 32, 32), a = im.data;
    const ct = (v) => Math.max(0, Math.min(1, (v - 0.5) * 1.12 + 0.5));
    for (let i = 0; i < a.length; i += 4) {
      let r = a[i] / 255, g = a[i + 1] / 255, b = a[i + 2] / 255;
      const l = 0.299 * r + 0.587 * g + 0.114 * b;
      r = ct(l + (r - l) * 1.25); g = ct(l + (g - l) * 1.25); b = ct(l + (b - l) * 1.25);
      const R = r * 255 | 0, G = g * 255 | 0, B = b * 255 | 0;
      let best = PALETTE[0], bestD = Infinity;
      for (const p of PALETTE) {
        const pr = p >> 16 & 255, pg = p >> 8 & 255, pb = p & 255, rm = (R + pr) / 2;
        const dist = ((512 + rm) * (R - pr) ** 2) / 256 + 4 * (G - pg) ** 2 + ((767 - rm) * (B - pb) ** 2) / 256;
        if (dist < bestD) { bestD = dist; best = p; }
      }
      a[i] = best >> 16 & 255; a[i + 1] = best >> 8 & 255; a[i + 2] = best & 255; a[i + 3] = 255;
    }
    d.putImageData(im, 0, 0);
  },
};

// ---------- Картинка «Итоги недели» ----------
const Card = {
  img(src) { return new Promise((ok) => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => ok(null); i.src = src; }); },
  async week(cv, me, s, cells) {
    await document.fonts.ready.catch(() => {});
    const c = cv.getContext("2d"), W0 = cv.width, H0 = cv.height;
    const g = c.createLinearGradient(0, 0, 0, H0); g.addColorStop(0, "#2B140A"); g.addColorStop(1, "#140B07");
    c.fillStyle = g; c.fillRect(0, 0, W0, H0);
    c.imageSmoothingEnabled = false;
    const kr = await this.img("assets/kremlin_px.png");
    if (kr) { c.globalAlpha = 0.35; c.drawImage(kr, 0, 0, W0, W0 * kr.height / kr.width); c.globalAlpha = 1; }
    const av = await this.img(App.pixels.get(me.id + "_" + me.photo_ver) || `assets/av/${me.avatar || "levsha"}.png`);
    if (av) c.drawImage(av, 80, 120, 200, 200);
    c.fillStyle = "#FBE2B8"; c.font = "900 76px Nunito, sans-serif"; c.fillText(me.nick, 310, 220);
    c.fillStyle = "#F2B531"; c.font = "800 44px Nunito, sans-serif"; c.fillText(w("week"), 310, 285);
    c.font = "800 40px Nunito, sans-serif";
    cells.forEach((cell, i) => {
      const x = 80 + (i % 2) * 470, y = 420 + Math.floor(i / 2) * 200;
      c.fillStyle = "rgba(251,226,184,.08)"; c.beginPath(); c.roundRect ? c.roundRect(x, y, 440, 170, 28) : c.rect(x, y, 440, 170); c.fill();
      c.fillStyle = "#F2B531"; c.font = "900 72px Nunito, sans-serif"; c.fillText(String(cell[0]), x + 32, y + 92);
      c.fillStyle = "#C9A27A"; c.font = "700 34px Nunito, sans-serif"; c.fillText(cell[1], x + 32, y + 140);
    });
    const st = await this.img("assets/stamp_256.png");
    if (st) c.drawImage(st, W0 - 210, H0 - 210, 150, 150);
    c.fillStyle = "#FBE2B8"; c.font = "900 46px Nunito, sans-serif"; c.fillText(Lavka.t("brand"), 80, H0 - 120);
    c.fillStyle = "#C9A27A"; c.font = "700 30px Nunito, sans-serif"; c.fillText("lichinuss.github.io/levsha71", 80, H0 - 72);
  },
};

const Site = { downloads: () => Lavka.downloads() };

if (document.getElementById("app")) App.init();

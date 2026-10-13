// «Идеи и пожелания» в лавке для браузера: список, поиск и фильтры, подкова, обсуждение, форма «Предложить идею» /
// «Сообщить об ошибке» (можно без профиля), мои идеи и «Ящик идей» мастера. Работает поверх lavka.js (App, W, w).
"use strict";

Object.assign(W.ru, {
  ideas_t: "Идеи и пожелания", ideas_s: "Предложить идею, сообщить об ошибке, поддержать чужие",
  inbox_t: "Ящик идей", n_idea_status: "Ответ мастера на идею «{t}»", n_idea_new: "Новая идея", n_bug_new: "Сообщение об ошибке",
  st_new: "Получено", st_working: "В работе", st_done: "Сделано", st_rejected: "Отклонено", st_all: "Все",
  k_idea_status: "Ответы мастера на мои идеи", k_idea_new: "Новые идеи и ошибки (мастеру)",
  idea_hourly: "Сразу (не чаще раза в час)", idea_daily: "Сводкой раз в день (в 10 утра)", idea_never: "Не присылать",
  i_new_idea: "Предложить идею", i_new_bug: "Сообщить об ошибке", i_search: "Найти идею…", i_top: "Популярные", i_newest: "Новые",
  i_mine: "Мои идеи", i_empty: "Идей пока нет — предложите первую!", i_idea: "Идея", i_bug: "Ошибка",
  c_store: "Лавка", c_game: "Игра", c_site: "Сайт", c_other: "Другое", c_all: "Все",
  i_title: "Заголовок", i_title_ph: "Коротко, о чём идея (4–80 знаков)", i_body: "Описание", i_body_ph: "Подробнее: что, где, зачем (до 1000 знаков)",
  i_bug_title_ph: "Что сломалось (4–80 знаков)", i_bug_body_ph: "Что делали, что ожидали, что получилось (до 1000 знаков)",
  i_cat: "Где", i_device: "Приложить версию лавки, тип устройства и систему (без личных данных)",
  i_shot: "Приложить скриншот", i_shot_s: "Сожмём и уберём служебные данные. Его увидит только мастер.", i_shot_del: "Убрать",
  i_credit: "Если сделают — можно написать «по идее {n}»", i_send: "Отправить",
  i_sent_pub: "Спасибо! Идея уже в общем списке.", i_sent_anon: "Спасибо! Мастер прочитает. Без профиля идея сначала видна только мастеру.",
  i_anon_note: "Вы без профиля: идею сначала увидит только мастер. С профилем она сразу появится в общем списке, и придёт уведомление об ответе.",
  i_vote: "Поддержать", i_votes: "подков", i_master_reply: "Ответ мастера", i_dup: "Объединено с идеей «{t}»",
  i_comments: "Обсуждение", i_comment_ph: "Ваш комментарий…", i_no_comments: "Пока без обсуждения.",
  i_need_profile: "Поддерживать и обсуждать можно с профилем.", i_guest: "Гость", i_hidden: "скрыта", i_private: "видна только мастеру",
  i_done_t: "Сделано по вашим идеям", i_by: "по идее {n}",
  m_filter_new: "Новые", m_filter_all: "Все", m_filter_anon: "Без профиля", m_filter_bug: "Ошибки", m_filter_reported: "С жалобами",
  m_filter_hidden: "Скрытые", m_status: "Статус", m_reply_ph: "Короткий ответ автору (до 300 знаков)", m_save: "Сохранить",
  m_publish: "Опубликовать", m_unpublish: "Убрать из списка", m_hide: "Скрыть", m_unhide: "Вернуть", m_dup: "Дубль идеи №",
  m_dup_go: "Объединить", m_shot: "Открыть скриншот", m_device: "Устройство", m_reports: "жалоб: {n}", m_saved: "Сохранено",
  m_anon: "без профиля",
});
Object.assign(W.en, {
  ideas_t: "Ideas & feedback", ideas_s: "Suggest an idea, report a bug, support others",
  inbox_t: "Idea inbox", n_idea_status: "The master answered your idea “{t}”", n_idea_new: "New idea", n_bug_new: "Bug report",
  st_new: "Received", st_working: "In progress", st_done: "Done", st_rejected: "Declined", st_all: "All",
  k_idea_status: "Master's answers to my ideas", k_idea_new: "New ideas and bug reports (master)",
  idea_hourly: "Right away (at most once an hour)", idea_daily: "Daily summary (10 am)", idea_never: "Don't send",
  i_new_idea: "Suggest an idea", i_new_bug: "Report a bug", i_search: "Find an idea…", i_top: "Popular", i_newest: "Newest",
  i_mine: "My ideas", i_empty: "No ideas yet — suggest the first one!", i_idea: "Idea", i_bug: "Bug",
  c_store: "Shop", c_game: "Game", c_site: "Website", c_other: "Other", c_all: "All",
  i_title: "Title", i_title_ph: "What's the idea, in short (4–80 characters)", i_body: "Description", i_body_ph: "More detail: what, where, why (up to 1000 characters)",
  i_bug_title_ph: "What broke (4–80 characters)", i_bug_body_ph: "What you did, what you expected, what happened (up to 1000 characters)",
  i_cat: "Where", i_device: "Attach shop version, device type and system (no personal data)",
  i_shot: "Attach a screenshot", i_shot_s: "We'll shrink it and strip hidden data. Only the master sees it.", i_shot_del: "Remove",
  i_credit: "If it's done, you may write “idea by {n}”", i_send: "Send",
  i_sent_pub: "Thanks! Your idea is in the public list.", i_sent_anon: "Thanks! The master will read it. Without a profile it's visible to the master only at first.",
  i_anon_note: "You have no profile: only the master sees the idea at first. With a profile it appears in the public list right away, and you'll be notified of the answer.",
  i_vote: "Support", i_votes: "horseshoes", i_master_reply: "Master's answer", i_dup: "Merged with “{t}”",
  i_comments: "Discussion", i_comment_ph: "Your comment…", i_no_comments: "No discussion yet.",
  i_need_profile: "You need a profile to support and discuss.", i_guest: "Guest", i_hidden: "hidden", i_private: "visible to the master only",
  i_done_t: "Done thanks to your ideas", i_by: "idea by {n}",
  m_filter_new: "New", m_filter_all: "All", m_filter_anon: "No profile", m_filter_bug: "Bugs", m_filter_reported: "Reported",
  m_filter_hidden: "Hidden", m_status: "Status", m_reply_ph: "A short answer to the author (up to 300 characters)", m_save: "Save",
  m_publish: "Publish", m_unpublish: "Remove from the list", m_hide: "Hide", m_unhide: "Restore", m_dup: "Duplicate of idea #",
  m_dup_go: "Merge", m_shot: "Open the screenshot", m_device: "Device", m_reports: "reports: {n}", m_saved: "Saved",
  m_anon: "no profile",
});

const STATUSES = ["new", "working", "done", "rejected"], CATS = ["store", "game", "site", "other"];

const Ideas = {
  state: { cat: "", status: "", sort: "top", q: "" },
  cache: new Map(),          // id → идея (из списка или ящика мастера)

  install() {
    let id = Lavka.store("install_id");
    if (!id) { id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now()); Lavka.store("install_id", id); }
    return id;
  },
  isMaster() { return !!(App.me && App.info && App.info.is_master); },
  device() {
    const ua = navigator.userAgent, p = Lavka.platform();
    const tablet = /ipad|tablet/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const os = (ua.match(/OS (\d+[_\d]*) like Mac/) && "iOS " + RegExp.$1.replace(/_/g, ".")) ||
      (ua.match(/Android [\d.]+/) || [])[0] || (/Windows/.test(ua) ? "Windows" : /Mac OS X/.test(ua) ? "macOS" : /Linux/.test(ua) ? "Linux" : "");
    return { app: "web", device: tablet ? "tablet" : p === "desktop" ? "computer" : "phone", platform: p === "ios" ? "iphone" : "web", os };
  },
  statusBadge(s) { return `<span class="ist ist-${s}">${esc(w("st_" + s))}</span>`; },
  kindBadge(k) { return `<span class="badge${k === "bug" ? " new" : ""}">${w(k === "bug" ? "i_bug" : "i_idea")}</span>`; },
  author(i) {
    return i.player_id ? `<a href="#player/${i.player_id}">${esc(i.nick || "")}</a>` : `<span class="muted">${w("i_guest")}</span>`;
  },
  card(i) {
    this.cache.set(i.id, i);
    return `<article class="panel idea" data-id="${i.id}">
      <button class="vote${i.voted ? " on" : ""}" aria-label="${w("i_vote")}">${Lavka.shoe}<b>${i.votes || 0}</b></button>
      <a class="grow" href="#idea/${i.id}">
        <span class="nm">${this.kindBadge(i.kind)} ${this.statusBadge(i.status)} <small class="muted">${w("c_" + i.category)}</small>
          ${!i.public ? `<small class="muted">· ${w("i_private")}</small>` : ""}${i.hidden ? `<small class="muted">· ${w("i_hidden")}</small>` : ""}</span>
        <b class="ititle">${esc(i.title)}</b>
        ${i.body ? `<span class="muted clamp2">${esc(i.body)}</span>` : ""}
        <small class="muted">${i.player_id ? esc(i.nick || "") : w("i_guest")} · ${App.ago(i.created_at)} · 💬 ${i.comments || 0}${i.reports ? " · ⚑ " + i.reports : ""}</small>
      </a></article>`;
  },
  bindVotes(root = document) {
    for (const b of root.querySelectorAll(".idea .vote")) b.onclick = () => {
      if (!App.me) { App.toast(w("i_need_profile")); return; }
      const id = +b.closest("[data-id]").dataset.id;
      App.act(b, async () => {
        const r = await App.rpc("idea_vote", App.auth({ p_idea: id }));
        b.classList.toggle("on", r.voted); b.querySelector("b").textContent = r.votes;
        if (r.voted && navigator.vibrate) navigator.vibrate(15);
      });
    };
  },

  // ---------- список ----------
  async list(arg) {
    if (arg === "new" || arg === "bug") return this.form(arg === "bug" ? "bug" : "idea");
    if (arg === "mine") return this.mine();
    const st = this.state;
    const chips = (key, vals, label) => `<div class="chips sub">${vals.map(v =>
      `<button class="chip" data-${key}="${v}" aria-pressed="${st[key] === v}">${label(v)}</button>`).join("")}</div>`;
    App.page(App.head(w("ideas_t")) + `<div class="btns"><a class="btn" href="#ideas/new">💡 ${w("i_new_idea")}</a>
        <a class="btn ghost" href="#ideas/bug">🐞 ${w("i_new_bug")}</a><a class="btn ghost small" href="#ideas/mine">${w("i_mine")}</a>
        ${this.isMaster() ? `<a class="btn ghost small" href="#inbox">📬 ${w("inbox_t")}</a>` : ""}</div>
      <div id="doneBox"></div>
      <label class="search"><input id="iq" type="search" placeholder="${w("i_search")}" value="${esc(st.q)}" autocomplete="off"></label>
      ${chips("cat", ["", ...CATS], v => w(v ? "c_" + v : "c_all"))}
      ${chips("status", ["", ...STATUSES], v => w(v ? "st_" + v : "st_all"))}
      ${chips("sort", ["top", "new"], v => w(v === "top" ? "i_top" : "i_newest"))}
      <div id="ilist"><div class="skel"></div></div>`);
    for (const key of ["cat", "status", "sort"]) for (const b of document.querySelectorAll(`[data-${key}]`)) b.onclick = () => {
      st[key] = b.dataset[key]; for (const x of document.querySelectorAll(`[data-${key}]`)) x.setAttribute("aria-pressed", x === b); this.load();
    };
    let t = 0;
    $("iq").oninput = () => { clearTimeout(t); t = setTimeout(() => { st.q = $("iq").value.trim(); this.load(); }, 300); };
    this.load();
    this.done($("doneBox"));
  },
  async load() {
    const st = this.state, box = $("ilist");
    try {
      const list = await App.rpc("ideas_list", { p_viewer: App.me ? App.me.id : null, p_category: st.cat || null,
        p_status: st.status || null, p_q: st.q || null, p_sort: st.sort, p_limit: 50 });
      box.innerHTML = list.length ? list.map(i => this.card(i)).join("") : `<p class="empty">${w("i_empty")}</p>`;
      this.bindVotes(box);
    } catch (e) { box.innerHTML = `<p class="empty">${esc(e.message)}</p>`; }
  },
  async done(box) {
    try {
      const d = await App.rpc("ideas_done", { p_limit: 5 });
      if (d.length) box.innerHTML = `<div class="panel donebox"><b>✅ ${w("i_done_t")}</b><ul>${d.map(x =>
        `<li><a href="#idea/${x.id}">${esc(x.title)}</a>${x.nick ? ` <small class="muted">— ${w("i_by", { n: esc(x.nick) })}</small>` : ""}</li>`).join("")}</ul></div>`;
    } catch (e) { /* без этого блока */ }
  },
  async mine() {
    const list = await App.rpc("my_ideas", App.me ? App.auth() : { p_install: this.install() });
    App.page(App.head(w("i_mine"), "#ideas") + (list.length ? list.map(i => this.card(i)).join("") : `<p class="empty">${w("i_empty")}</p>`));
    this.bindVotes();
  },

  // ---------- форма ----------
  form(kind) {
    const bug = kind === "bug";
    App.page(App.head(w(bug ? "i_new_bug" : "i_new_idea"), "#ideas") + `<div class="panel">
      ${App.me ? "" : `<p class="muted small">${w("i_anon_note")}</p>`}
      <span class="lbl">${w("i_cat")}</span><div class="chips sub">${CATS.map((c, n) =>
        `<button class="chip" data-c="${c}" aria-pressed="${n === (bug ? 0 : 1)}">${w("c_" + c)}</button>`).join("")}</div>
      <label class="field"><span>${w("i_title")}</span><input id="fTitle" maxlength="80" placeholder="${w(bug ? "i_bug_title_ph" : "i_title_ph")}"></label>
      <label class="field"><span>${w("i_body")}</span><textarea id="fBody" maxlength="1000" rows="5" placeholder="${w(bug ? "i_bug_body_ph" : "i_body_ph")}"></textarea></label>
      <small class="muted" id="fCount">0 / 1000</small>
      ${bug ? `<label class="switch"><span>${w("i_device")}</span><input type="checkbox" id="fDev"><i></i></label>
        <div class="btns"><label class="btn small ghost">📷 ${w("i_shot")}<input type="file" id="fShot" accept="image/*" hidden></label>
          <span id="fShotView"></span></div><p class="muted small">${w("i_shot_s")}</p>` : ""}
      ${App.me ? `<label class="switch"><span>${w("i_credit", { n: esc(App.me.nick) })}</span><input type="checkbox" id="fCredit" checked><i></i></label>` : ""}
      <button class="btn wide" id="fSend">${w("i_send")}</button></div>`);
    let cat = bug ? "store" : "game", shot = null;
    for (const b of document.querySelectorAll("[data-c]")) b.onclick = () => {
      cat = b.dataset.c; for (const x of document.querySelectorAll("[data-c]")) x.setAttribute("aria-pressed", x === b);
    };
    $("fBody").oninput = () => { $("fCount").textContent = $("fBody").value.length + " / 1000"; };
    if (bug) $("fShot").onchange = async () => {
      const f = $("fShot").files[0]; if (!f) return;
      try {
        shot = await this.shrink(f);
        $("fShotView").innerHTML = `<img class="shotprev" src="data:image/jpeg;base64,${shot}" alt=""> <button class="btn small ghost" id="fShotDel">${w("i_shot_del")}</button>`;
        $("fShotDel").onclick = () => { shot = null; $("fShotView").innerHTML = ""; $("fShot").value = ""; };
      } catch (e) { App.toast(e.message); }
    };
    $("fSend").onclick = (e) => App.act(e.target, async () => {
      const body = { p_kind: kind, p_category: cat, p_title: $("fTitle").value, p_body: $("fBody").value,
        p_credit: $("fCredit") ? $("fCredit").checked : true };
      if (App.me) Object.assign(body, { p_id: App.me.id, p_code: App.me.code }); else body.p_install = this.install();
      if (bug && $("fDev").checked) body.p_device = this.device();
      if (bug && shot) body.p_shot = shot;
      const r = await App.rpc("idea_submit", body);
      App.toast(w(r.public ? "i_sent_pub" : "i_sent_anon"));
      location.hash = "#idea/" + r.id;
    });
  },
  /** Скриншот: не больше 1280 px по большей стороне, JPEG до ~190 КБ; заново нарисованная картинка — без EXIF. */
  async shrink(file) {
    const img = await new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.src = URL.createObjectURL(file); });
    let k = Math.min(1, 1280 / Math.max(img.width, img.height));
    for (let tries = 0; tries < 6; tries++, k *= 0.8) {
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      for (let q = 0.8; q >= 0.45; q -= 0.1) {
        const b64 = c.toDataURL("image/jpeg", q).split(",")[1];
        if (b64.length * 0.75 <= 190000) return b64;
      }
    }
    throw new Error("Скриншот слишком большой");
  },

  // ---------- одна идея ----------
  async one(id) {
    id = +id;
    let data = null;
    // мастеру нужны и устройство, и скриншот, и скрытые/анонимные — берём из ящика, если ещё не видели
    if (this.isMaster() && !(this.cache.get(id) || {}).hasOwnProperty("anon")) {
      for (const i of await App.rpc("master_ideas", App.auth({ p_filter: "all", p_limit: 100 })).catch(() => [])) this.cache.set(i.id, i);
    }
    try {
      data = await App.rpc("idea_get", { p_idea: id, p_viewer: App.me ? App.me.id : null, p_install: App.me ? null : this.install() });
    } catch (e) {
      if (!(this.isMaster() && this.cache.has(id))) throw e;    // мастер открывает скрытую/анонимную из ящика
    }
    const i = Object.assign({}, this.cache.get(id) || {}, data ? data.idea : {});
    this.cache.set(id, i);
    const comments = data ? data.comments : [];
    let html = App.head(w(i.kind === "bug" ? "i_bug" : "i_idea") + " №" + i.id, this.isMaster() ? "#inbox" : "#ideas")
      + `<article class="panel idea big" data-id="${i.id}">
        <button class="vote${i.voted ? " on" : ""}" aria-label="${w("i_vote")}">${Lavka.shoe}<b>${i.votes || 0}</b></button>
        <div class="grow"><span class="nm">${this.kindBadge(i.kind)} ${this.statusBadge(i.status)} <small class="muted">${w("c_" + i.category)}</small></span>
          <h2 class="ititle">${esc(i.title)}</h2>${i.body ? `<p class="ibody">${esc(i.body)}</p>` : ""}
          <small class="muted">${this.author(i)} · ${App.ago(i.created_at)}</small></div></article>`;
    if (data && data.dup_title) html += `<div class="panel tip">${w("i_dup", { t: esc(data.dup_title) })} — <a href="#idea/${i.dup_of}">№${i.dup_of}</a></div>`;
    if (i.reply) html += `<div class="panel reply"><b>👑 ${w("i_master_reply")}</b><p>${esc(i.reply)}</p><small class="muted">${App.ago(i.status_at)}</small></div>`;
    if (this.isMaster()) html += this.masterBox(i);
    html += `<h2 class="sec">${w("i_comments")}</h2>` + (comments.length ? `<div class="list">${comments.map(c => `<div class="row" data-c="${c.id}">
        <a href="#player/${c.player_id}">${App.av(c, 36)}</a><div class="grow"><span class="nm"><b>${esc(c.nick)}</b>${c.is_master ? `<span class="badge new">${w("master")}</span>` : ""}</span>
        <p>${esc(c.body)}</p><small class="muted">${App.ago(c.created_at)}</small></div>
        ${App.me ? `<button class="iconbtn cm-menu" data-mine="${c.mine ? 1 : ""}">⋯</button>` : ""}</div>`).join("")}</div>`
        : `<p class="muted pad">${w("i_no_comments")}</p>`);
    if (App.me && i.public && !i.hidden) html += `<div class="panel composer">${App.av(App.me, 36)}
        <textarea id="icBody" rows="2" maxlength="300" placeholder="${w("i_comment_ph")}"></textarea><button class="btn small" id="icSend">${w("send")}</button></div>`;
    else if (!App.me) html += `<p class="muted pad">${w("i_need_profile")} <a href="#me">${w("create")}</a></p>`;
    if (App.me && !i.mine) html += `<button class="btn ghost small" id="iReport">⚑ ${w("report")}</button>`;
    App.page(html);
    this.bindVotes();
    if ($("icSend")) $("icSend").onclick = (e) => App.act(e.target, async () => {
      await App.rpc("idea_comment", App.auth({ p_idea: id, p_body: $("icBody").value })); this.one(id);
    });
    if ($("iReport")) $("iReport").onclick = (e) => App.act(e.target, async () => {
      await App.rpc("idea_report", App.auth({ p_idea: id })); App.toast(w("reported"));
    });
    for (const b of document.querySelectorAll(".cm-menu")) {
      const cid = +b.closest("[data-c]").dataset.c;
      b.onclick = () => App.menu(b, [
        ...(b.dataset.mine || this.isMaster() ? [[w("del"), async () => { await App.rpc("idea_delete_comment", App.auth({ p_comment: cid })); this.one(id); }]] : []),
        ...(!b.dataset.mine ? [[w("report"), async () => { await App.rpc("idea_report", App.auth({ p_comment: cid })); App.toast(w("reported")); }]] : [])]);
    }
    if (this.isMaster()) this.bindMaster(i);
  },

  // ---------- мастер ----------
  masterBox(i) {
    const dev = i.device ? Object.entries(i.device).map(([k, v]) => `${esc(k)}: ${esc(v)}`).join(" · ") : "";
    return `<div class="panel master">
      <b>📬 ${w("inbox_t")}</b> <small class="muted">${i.anon ? w("m_anon") + " · " : ""}${i.reports ? w("m_reports", { n: i.reports }) : ""}</small>
      ${dev ? `<p class="small"><b>${w("m_device")}:</b> ${dev}</p>` : ""}
      ${i.has_shot ? `<button class="btn small ghost" id="mShot">🖼 ${w("m_shot")}</button><div id="mShotView"></div>` : ""}
      <span class="lbl">${w("m_status")}</span><div class="chips sub">${STATUSES.map(s =>
        `<button class="chip" data-ms="${s}" aria-pressed="${i.status === s}">${w("st_" + s)}</button>`).join("")}</div>
      <textarea class="inp" id="mReply" rows="2" maxlength="300" placeholder="${w("m_reply_ph")}">${esc(i.reply || "")}</textarea>
      <div class="btns"><button class="btn small" id="mSave">${w("m_save")}</button>
        <button class="btn small ghost" id="mPub">${i.public ? w("m_unpublish") : w("m_publish")}</button>
        <button class="btn small ghost" id="mHide">${i.hidden ? w("m_unhide") : w("m_hide")}</button></div>
      <div class="btns"><input class="inp dupin" id="mDup" type="number" min="1" placeholder="${w("m_dup")}"><button class="btn small ghost" id="mDupGo">${w("m_dup_go")}</button></div>
    </div>`;
  },
  bindMaster(i) {
    let status = i.status;
    for (const b of document.querySelectorAll("[data-ms]")) b.onclick = () => {
      status = b.dataset.ms; for (const x of document.querySelectorAll("[data-ms]")) x.setAttribute("aria-pressed", x === b);
    };
    const set = (extra) => App.rpc("master_idea_set", App.auth({ p_idea: i.id, ...extra }))
      .then(r => { Object.assign(i, r); this.cache.set(i.id, i); App.toast(w("m_saved")); this.one(i.id); });
    $("mSave").onclick = (e) => App.act(e.target, () => set({ p_status: status, p_reply: $("mReply").value }));
    $("mPub").onclick = (e) => App.act(e.target, () => set({ p_public: !i.public }));
    $("mHide").onclick = (e) => App.act(e.target, () => set({ p_hidden: !i.hidden }));
    $("mDupGo").onclick = (e) => App.act(e.target, () => set({ p_dup_of: +$("mDup").value || null }));
    if ($("mShot")) $("mShot").onclick = (e) => App.act(e.target, async () => {
      const b64 = await App.rpc("master_idea_shot", App.auth({ p_idea: i.id }));
      $("mShotView").innerHTML = b64 ? `<img class="shotfull" src="data:image/jpeg;base64,${b64}" alt="">` : "—";
    });
  },
  mstate: { filter: "new", sort: "new", q: "" },
  async inbox() {
    if (!this.isMaster()) { location.hash = "#ideas"; return; }
    const st = this.mstate;
    App.page(App.head(w("inbox_t"), "#me") + `<div class="chips sub">${["new", "all", "anon", "bug", "reported", "hidden"].map(f =>
        `<button class="chip" data-mf="${f}" aria-pressed="${st.filter === f}">${w("m_filter_" + f)}</button>`).join("")}</div>
      <div class="chips sub">${["new", "top"].map(s => `<button class="chip" data-msort="${s}" aria-pressed="${st.sort === s}">${w(s === "top" ? "i_top" : "i_newest")}</button>`).join("")}</div>
      <label class="search"><input id="mq" type="search" placeholder="${w("i_search")}" value="${esc(st.q)}"></label><div id="mlist"><div class="skel"></div></div>`);
    const load = async () => {
      try {
        const list = await App.rpc("master_ideas", App.auth({ p_sort: st.sort, p_filter: st.filter, p_q: st.q || null }));
        $("mlist").innerHTML = list.length ? list.map(i => this.card(i)).join("") : `<p class="empty">${w("i_empty")}</p>`;
        this.bindVotes($("mlist"));
      } catch (e) { $("mlist").innerHTML = `<p class="empty">${esc(e.message)}</p>`; }
    };
    for (const b of document.querySelectorAll("[data-mf]")) b.onclick = () => { st.filter = b.dataset.mf; for (const x of document.querySelectorAll("[data-mf]")) x.setAttribute("aria-pressed", x === b); load(); };
    for (const b of document.querySelectorAll("[data-msort]")) b.onclick = () => { st.sort = b.dataset.msort; for (const x of document.querySelectorAll("[data-msort]")) x.setAttribute("aria-pressed", x === b); load(); };
    let t = 0;
    $("mq").oninput = () => { clearTimeout(t); t = setTimeout(() => { st.q = $("mq").value.trim(); load(); }, 300); };
    load();
  },
};

App.extraViews = Object.assign(App.extraViews || {}, {
  ideas: (arg) => Ideas.list(arg),
  idea: (arg) => Ideas.one(arg),
  inbox: () => Ideas.inbox(),
});

// «Вход и объединение» в лавке для браузера — как на Android: сохранить код, войти на другом телефоне по QR,
// объединить профили (по коду или QR, сначала показать, что сольётся; отменить можно 30 дней), «Я потерял профиль»,
// игры с доступом (пропуск каждой можно отозвать), журнал входов, заявки мастеру.
// Сервер — server/2026-10-16_profiles.sql в репозитории лавки. Работает поверх lavka.js (App, W, w) и qr.js (QR).
"use strict";

Object.assign(W.ru, {
  acc_t: "Вход и объединение", acc_s: "Код, другой телефон, второй профиль, игры с доступом",
  save_t: "Сохраните код профиля", save_s: "Код — ключ от профиля. Телефон потеряется или сменится — без кода профиль не вернуть. Запишите в заметки или отправьте себе в мессенджер.",
  save_send: "Отправить себе", save_done: "Уже записал(а)", save_ok: "Отлично, код при вас!", save_remind: "Код профиля ещё не сохранён — это минута",
  other_t: "Другой телефон", qr_login: "Войти этим профилем на другом телефоне", qr_login_s: "Покажите QR — наведите камеру того телефона",
  merge_t: "Объединить профили", merge_s: "Если у вас два профиля (например, в игре и в лавке) — соберите всё в этот",
  merge_code: "По коду второго профиля", merge_show: "Показать, что сольётся",
  merge_qr: "Этот профиль — в другой, по QR", merge_qr_s: "Покажите QR телефону с основным профилем: всё отсюда перейдёт туда",
  lost_t: "Я потерял профиль", lost_s: "Ни кода, ни телефона — мастер найдёт вручную", lost_nick: "Старый ник",
  lost_ph: "Что помните: когда играли, до какой волны, друзья…", lost_send: "Отправить мастеру", lost_sent: "Заявка у мастера — ответ появится здесь",
  ls_new: "у мастера", ls_done: "найден и объединён", ls_rejected: "не найден",
  merges_t: "Объединения", merges_s: "Отменить можно 30 дней — всё вернётся", undone: "отменено", undo: "Отменить",
  undo_sure: "Отменить объединение с «{n}»? Всё, что пришло из него, вернётся обратно.", undo_ok: "Объединение отменено — всё вернулось", undo_until: "до {d}",
  games_t: "Игры с доступом", games_s: "У каждой игры свой пропуск — его можно отозвать", games_none: "Пока ни одна игра не входила через лавку.",
  revoke: "Отозвать", revoke_all: "Отозвать у всех", revoke_sure: "Отозвать доступ? Игра попросит войти заново.", revoke_ok: "Доступ отозван",
  log_t: "Журнал входов", log_none: "Пока пусто.",
  lk_code: "вход по коду", lk_token: "вход игры", lk_qr: "вход по QR", lk_guest: "гость", lk_merge: "объединение", lk_unmerge: "отмена объединения", lk_revoke: "отзыв доступа",
  mm_device: "с этого телефона", mm_qr: "по QR", mm_code: "по коду", mm_master: "мастером", mm_guest: "гостевая игра",
  qr_t_login: "Вход на другом телефоне", qr_t_merge: "Объединение", qr_left: "QR действует ещё {m}:{s} · один раз", qr_gone: "Время вышло — покажите новый",
  qr_new: "Новый QR", qr_copy: "Скопировать ссылку", qr_close: "Готово",
  qr_hint_login: "На том телефоне откройте камеру и наведите на код. Можно и переслать ссылку — она сработает один раз.",
  qr_hint_merge: "Откройте камеру на телефоне с основным профилем — там сначала покажем, что с чем сольётся.",
  pv_t: "Вот что сольётся", pv_from: "Переходит:", pv_into: "В профиль:", pv_save: "Сохранение «{g}»: остаётся из «{n}»", pv_more: " — там больше прогресса",
  pv_note: "Забеги, рекорды, друзья, группы, посты и отзывы перейдут сюда. Старый код тоже будет входить в этот профиль. Передумаете — отмените в течение 30 дней.",
  pv_go: "Объединить", pv_done: "Готово: «{n}» теперь в этом профиле. Отменить можно 30 дней",
  runs_n: "забегов {n}", friends_n: "друзей {n}", guest_l: "гостевая игра",
  tk_login_q: "Войти профилем из QR? Профиль «{n}» на этом устройстве закроется (не удалится — вернуть можно по коду).",
  tk_merge_need: "Сначала войдите в профиль, в который объединять, — дальше покажем, что с чем сольётся.", tk_bad: "Ссылка неполная — покажите QR ещё раз.",
  ml_t: "Заявки «потерял профиль»", ml_none: "Заявок нет.", ml_it: "Это он", ml_no: "Не найден", ml_reply_ph: "Ответ игроку (до 300 знаков)",
  ml_cands: "Похожие профили", ml_none_c: "Похожих по нику нет.", ml_sure: "Перенести «{a}» в профиль «{b}»?", ml_merged: "Профили объединены", ml_rejected: "Заявка отклонена",
  ml_seen: "был(а) {t}",
});
Object.assign(W.en, {
  acc_t: "Sign-in and merging", acc_s: "Code, another phone, a second profile, games with access",
  save_t: "Save your profile code", save_s: "The code is the key to your profile. Lose or change your phone — without the code the profile can't come back. Put it in your notes or send it to yourself.",
  save_send: "Send to myself", save_done: "Already saved", save_ok: "Great, the code is safe!", save_remind: "Your profile code isn't saved yet — it takes a minute",
  other_t: "Another phone", qr_login: "Sign in with this profile on another phone", qr_login_s: "Show a QR code — point the other phone's camera",
  merge_t: "Merge profiles", merge_s: "Got two profiles (say, in a game and in the shop)? Gather everything into this one",
  merge_code: "With the other profile's code", merge_show: "Show what merges",
  merge_qr: "Move this profile into another via QR", merge_qr_s: "Show the QR to the phone with your main profile: everything here moves there",
  lost_t: "I lost my profile", lost_s: "No code, no phone — the master will search by hand", lost_nick: "Old nick",
  lost_ph: "What you remember: when you played, best wave, friends…", lost_send: "Send to the master", lost_sent: "The request is with the master — the answer will appear here",
  ls_new: "with the master", ls_done: "found and merged", ls_rejected: "not found",
  merges_t: "Merges", merges_s: "Undo within 30 days — everything comes back", undone: "undone", undo: "Undo",
  undo_sure: "Undo the merge with “{n}”? Everything that came from it goes back.", undo_ok: "Merge undone — everything is back", undo_until: "until {d}",
  games_t: "Games with access", games_s: "Each game has its own pass — you can revoke it", games_none: "No game has signed in via the shop yet.",
  revoke: "Revoke", revoke_all: "Revoke all", revoke_sure: "Revoke access? The game will ask you to sign in again.", revoke_ok: "Access revoked",
  log_t: "Sign-in log", log_none: "Nothing yet.",
  lk_code: "code sign-in", lk_token: "game sign-in", lk_qr: "QR sign-in", lk_guest: "guest", lk_merge: "merge", lk_unmerge: "merge undone", lk_revoke: "access revoked",
  mm_device: "on this phone", mm_qr: "via QR", mm_code: "by code", mm_master: "by the master", mm_guest: "guest play",
  qr_t_login: "Sign in on another phone", qr_t_merge: "Merging", qr_left: "Valid for {m}:{s} · one use", qr_gone: "Expired — show a new one",
  qr_new: "New QR", qr_copy: "Copy link", qr_close: "Done",
  qr_hint_login: "On the other phone, open the camera and point it at the code. You can also send the link — it works once.",
  qr_hint_merge: "Open the camera on the phone with your main profile — it will first show what merges with what.",
  pv_t: "Here's what merges", pv_from: "Moves:", pv_into: "Into:", pv_save: "“{g}” save: keeping the one from “{n}”", pv_more: " — more progress there",
  pv_note: "Runs, records, friends, groups, posts and reviews move here. The old code will sign in to this profile too. Changed your mind? Undo within 30 days.",
  pv_go: "Merge", pv_done: "Done: “{n}” is now in this profile. You can undo it for 30 days",
  runs_n: "{n} runs", friends_n: "{n} friends", guest_l: "guest play",
  tk_login_q: "Sign in with the QR profile? “{n}” will be signed out on this device (not deleted — the code brings it back).",
  tk_merge_need: "First sign in to the profile to merge into — then we'll show what merges with what.", tk_bad: "The link is incomplete — show the QR again.",
  ml_t: "“Lost profile” requests", ml_none: "No requests.", ml_it: "That's it", ml_no: "Not found", ml_reply_ph: "Answer to the player (up to 300 characters)",
  ml_cands: "Similar profiles", ml_none_c: "No similar nicks.", ml_sure: "Move “{a}” into “{b}”?", ml_merged: "Profiles merged", ml_rejected: "Request declined",
  ml_seen: "seen {t}",
});

const Acc = {
  /** Код записан? Помним на этом устройстве (и сообщаем серверу — мастеру видно, кто рискует потерять профиль). */
  saved() { return !App.me || Lavka.store("code_saved_" + App.me.id) === "1"; },
  markSaved(on = true) {
    if (!App.me) return;
    Lavka.store("code_saved_" + App.me.id, on ? "1" : "");
    if (on) App.rpc("code_saved", App.auth()).catch(() => {});
  },
  when(iso) {
    return iso ? new Date(iso).toLocaleString(Lavka.lang === "ru" ? "ru-RU" : "en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "";
  },
  day(iso) {
    return iso ? new Date(iso).toLocaleDateString(Lavka.lang === "ru" ? "ru-RU" : "en-GB", { day: "numeric", month: "long" }) : "";
  },
  /** «master: Ник» из журнала → «Ник (мастером)», как на Android. */
  detail(l) {
    const m = l.kind === "merge" && /^(device|qr|code|master|guest): (.*)$/.exec(l.detail || "");
    return m ? m[2] + " (" + w("mm_" + m[1]) + ")" : l.detail;
  },
  /** Ответ сервера без нового SQL («функция не найдена») — пустой список, чтобы экран работал и до обновления. */
  async safe(fn, body) {
    try { return (await App.rpc(fn, body)) || []; } catch (e) { if (/Could not find|not find the function/i.test(e.message)) return []; throw e; }
  },

  // ---------- окно поверх экрана ----------
  modal(html) {
    document.querySelector(".modal")?.remove();
    const m = document.createElement("div");
    m.className = "modal";
    m.innerHTML = `<div class="modal-in" role="dialog" aria-modal="true">${html}</div>`;
    document.body.appendChild(m);
    requestAnimationFrame(() => m.classList.add("on"));
    const close = () => { clearInterval(m._t); m.classList.remove("on"); setTimeout(() => m.remove(), 180); };
    m.onclick = (e) => { if (e.target === m) close(); };
    m.onkeydown = (e) => { if (e.key === "Escape") close(); };
    m.querySelector("button, a, input")?.focus();
    return { el: m, close };
  },

  /** «Сохраните код» — сразу после создания профиля и по кнопке. */
  saveDialog() {
    if (!App.me) return;
    const d = this.modal(`<img class="px" src="assets/mascot_wave1.png" alt="" width="72"><h2>${w("save_t")}</h2>
      <p class="muted">${w("save_s")}</p><p class="code big">${esc(App.me.code)}</p>
      <div class="btns col"><button class="btn" id="sdSend">${w("save_send")}</button>
      <button class="btn ghost" id="sdCopy">${w("copy")}</button><button class="btn ghost" id="sdDone">${w("save_done")}</button>
      <button class="btn ghost" id="sdLater">${w("later")}</button></div>`);
    const done = () => { this.markSaved(); d.close(); App.toast(w("save_ok")); if (location.hash === "#accounts" || location.hash === "#me") App.route(); };
    $("sdSend").onclick = () => {
      const text = Lavka.t("brand") + " — " + w("code") + ": " + App.me.code + "\n" + App.site() + "me.html";
      if (navigator.share) navigator.share({ text }).then(done).catch(() => {}); else { App.copy(text); done(); }
    };
    $("sdCopy").onclick = () => { App.copy(App.me.code); };
    $("sdDone").onclick = done;
    $("sdLater").onclick = () => d.close();
  },

  /** QR на 10 минут: login — войти этим профилем на другом телефоне; merge — этот профиль перейдёт в другой. */
  async qr(kind) {
    const r = await App.rpc("ticket_create", App.auth({ p_kind: kind }));
    const link = App.site() + "q.html#" + kind + "/" + r.ticket;
    const d = this.modal(`<h2>${w("qr_t_" + kind)}</h2><div class="qrimg">${QR.svg(link, { px: 280 })}</div>
      <p class="muted small" id="qrLeft"></p><p class="muted">${w("qr_hint_" + kind)}</p>
      <div class="btns col"><button class="btn ghost" id="qrCopy">${w("qr_copy")}</button><button class="btn" id="qrClose">${w("qr_close")}</button></div>`);
    const end = Date.now() + 600e3;
    const tick = () => {
      const s = Math.max(0, Math.round((end - Date.now()) / 1000));
      if (!$("qrLeft")) return;
      if (s > 0) $("qrLeft").textContent = w("qr_left", { m: Math.floor(s / 60), s: String(s % 60).padStart(2, "0") });
      else {
        clearInterval(d.el._t);
        d.el.querySelector(".qrimg").style.opacity = ".15";
        $("qrLeft").innerHTML = `${w("qr_gone")} <button class="btn small" id="qrAgain">${w("qr_new")}</button>`;
        $("qrAgain").onclick = () => { d.close(); this.qr(kind).catch(e => App.toast(e.message)); };
      }
    };
    tick(); d.el._t = setInterval(tick, 1000);
    $("qrCopy").onclick = () => App.copy(link);
    $("qrClose").onclick = () => { d.close(); App.route(); };
  },

  // ---------- что с чем сольётся ----------
  side(s) {
    const best = s.best || {};
    const modes = ["campaign", "endless", "daily"].filter(m => best[m]).map(m => w("m_" + m) + " " + best[m]).join(" · ");
    return `<div class="row">${App.av(s, 40)}<span class="grow"><b>${esc(s.nick)}</b>
      <small class="muted">${s.guest ? w("guest_l") + " · " : ""}${w("runs_n", { n: s.runs || 0 })}${modes ? " · " + esc(modes) : ""} · ${w("friends_n", { n: s.friends || 0 })}</small></span></div>`;
  },
  preview(pv, onGo) {
    const keep = pv.keep_saves || {};
    const saves = Object.keys(keep).map(g => `<li>${w("pv_save", { g: esc(App.gameName(g)), n: esc(keep[g] === "from" ? pv.from.nick : pv.into.nick) })}${keep[g] === "from" ? w("pv_more") : ""}</li>`).join("");
    const d = this.modal(`<h2>${w("pv_t")}</h2><div class="list left"><p class="lbl">${w("pv_from")}</p>${this.side(pv.from)}
        <p class="lbl">${w("pv_into")}</p>${this.side(pv.into)}</div>${saves ? `<ul class="left small">${saves}</ul>` : ""}
      <p class="muted small left">${w("pv_note")}</p>
      <div class="btns col"><button class="btn" id="pvGo">${w("pv_go")}</button><button class="btn ghost" id="pvNo">${w("cancel")}</button></div>`);
    $("pvNo").onclick = () => d.close();
    $("pvGo").onclick = (e) => App.act(e.target, async () => {
      await onGo(); d.close();
      App.toast(w("pv_done", { n: pv.from.nick }));
      await App.refreshMe(); if (location.hash === "#accounts") App.route(); else location.hash = "#accounts";
    });
  },

  // ---------- экран ----------
  async view() {
    if (App.needProfile()) return;
    const me = App.me;
    const [games, logins, merges, lost] = await Promise.all(["game_tokens_list", "my_logins", "my_merges", "my_lost_requests"]
      .map(f => this.safe(f, App.auth())));
    const master = App.info && App.info.is_master;
    const row = (id, icon, title, sub) => `<button class="row link" id="${id}"><span class="nicon">${icon}</span>
      <span class="grow"><b>${title}</b>${sub ? `<small class="muted">${sub}</small>` : ""}</span><span class="chev">›</span></button>`;
    let html = App.head(w("acc_t"), "#profile");
    if (!this.saved()) html += `<div class="panel tip"><b>${w("save_t")}</b><p class="muted">${w("save_s")}</p>
      <div class="btns"><button class="btn small" id="aSave">${w("save")}</button><button class="btn small ghost" id="aSaved">${w("save_done")}</button></div></div>`;
    html += `<h2 class="sec">${w("other_t")}</h2><div class="list">${row("aQrLogin", "📱", w("qr_login"), w("qr_login_s"))}
      ${this.saved() ? row("aSave", "🔑", w("save_t"), w("save_send")) : ""}</div>`;
    html += `<h2 class="sec">${w("merge_t")}</h2><p class="muted pad">${w("merge_s")}</p><div class="panel">
      <label class="field"><span>${w("merge_code")}</span><input id="aCode" autocapitalize="characters" autocomplete="off" placeholder="${w("code_ph")}"></label>
      <button class="btn wide" id="aPreview">${w("merge_show")}</button></div>
      <div class="list">${row("aQrMerge", "🔗", w("merge_qr"), w("merge_qr_s"))}</div>`;
    if (merges.length) html += `<h2 class="sec">${w("merges_t")}</h2><p class="muted pad">${w("merges_s")}</p><div class="list">${merges.map(m => `
      <div class="row" data-m="${m.id}"><span class="nicon">🔗</span><span class="grow"><b>${esc(m.nick)}</b>
        <small class="muted">${w("mm_" + m.method) || esc(m.method)} · ${esc(this.when(m.created_at))}${m.can_undo ? " · " + w("undo_until", { d: esc(this.day(m.undo_until)) }) : ""}</small></span>
        ${m.undone ? `<span class="badge">${w("undone")}</span>` : m.can_undo ? `<button class="btn small ghost" data-undo="${m.id}" data-n="${esc(m.nick)}">${w("undo")}</button>` : ""}</div>`).join("")}</div>`;
    html += `<h2 class="sec">${w("lost_t")}</h2><p class="muted pad">${w("lost_s")}</p>${lost.length ? `<div class="list">${lost.map(l => `
      <div class="row"><span class="nicon">🔎</span><span class="grow"><b>${esc(l.old_nick)}</b><small class="muted">${w("ls_" + l.status)} · ${esc(this.day(l.created_at))}</small>
        ${l.reply ? `<small>${esc(l.reply)}</small>` : ""}</span></div>`).join("")}</div>` : ""}
      <div class="panel"><label class="field"><span>${w("lost_nick")}</span><input id="lNick" maxlength="40"></label>
      <label class="field"><textarea id="lBody" rows="2" maxlength="500" placeholder="${w("lost_ph")}"></textarea></label>
      <button class="btn ghost wide" id="lSend">${w("lost_send")}</button></div>`;
    html += `<h2 class="sec">${w("games_t")}</h2><p class="muted pad">${w("games_s")}</p>${games.length ? `<div class="list">${games.map(g => `
      <div class="row"><span class="nicon">🎮</span><span class="grow"><b>${esc(App.gameName(g.game))}</b>
        <small class="muted">${esc(g.device || "")}${g.last_used ? " · " + w("seen", { t: App.ago(g.last_used) }) : ""}</small></span>
        <button class="btn small ghost" data-rv="${g.id}">${w("revoke")}</button></div>`).join("")}</div>
      ${games.length > 1 ? `<button class="btn ghost wide" id="aRevokeAll">${w("revoke_all")}</button>` : ""}` : `<p class="muted pad">${w("games_none")}</p>`}`;
    html += `<h2 class="sec">${w("log_t")}</h2>${logins.length ? `<div class="list">${logins.slice(0, 30).map(l => `
      <div class="row"><span class="grow"><b>${w("lk_" + l.kind) || esc(l.kind)}${l.game ? " · " + esc(App.gameName(l.game)) : ""}</b>
        ${l.detail ? `<small class="muted">${esc(this.detail(l))}</small>` : ""}</span><small class="muted">${esc(this.when(l.at))}</small></div>`).join("")}</div>`
      : `<p class="muted pad">${w("log_none")}</p>`}`;
    if (master) html += `<h2 class="sec">${w("ml_t")}</h2><div id="mlost"><div class="skel short"></div></div>`;
    App.page(html);

    const code = $("aCode");
    code.oninput = () => {   // дефисы сами, как при входе по коду
      const raw = code.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
      code.value = raw.match(/.{1,4}/g)?.join("-") || "";
    };
    $("aSave") && ($("aSave").onclick = () => this.saveDialog());
    $("aSaved") && ($("aSaved").onclick = () => { this.markSaved(); App.toast(w("save_ok")); App.route(); });
    $("aQrLogin").onclick = (e) => App.act(e.currentTarget, () => this.qr("login"));
    $("aQrMerge").onclick = (e) => App.act(e.currentTarget, () => this.qr("merge"));
    $("aPreview").onclick = (e) => App.act(e.target, async () => {
      const c = code.value.trim();
      const pv = await App.rpc("merge_preview", App.auth({ p_from_code: c }));
      this.preview(pv, () => App.rpc("merge_profiles", App.auth({ p_from_code: c, p_method: "code" })));
    });
    for (const b of document.querySelectorAll("[data-undo]")) b.onclick = () => {
      if (confirm(w("undo_sure", { n: b.dataset.n }))) App.act(b, async () => {
        await App.rpc("merge_undo", App.auth({ p_merge: +b.dataset.undo })); App.toast(w("undo_ok")); await App.refreshMe(); App.route();
      });
    };
    $("lSend").onclick = (e) => App.act(e.target, async () => {
      await App.rpc("lost_request", App.auth({ p_old_nick: $("lNick").value.trim(), p_details: $("lBody").value.trim() }));
      App.toast(w("lost_sent")); App.route();
    });
    for (const b of document.querySelectorAll("[data-rv]")) b.onclick = () => {
      if (confirm(w("revoke_sure"))) App.act(b, async () => { await App.rpc("game_token_revoke", App.auth({ p_token: +b.dataset.rv })); App.toast(w("revoke_ok")); App.route(); });
    };
    $("aRevokeAll") && ($("aRevokeAll").onclick = (e) => {
      if (confirm(w("revoke_sure"))) App.act(e.target, async () => { await App.rpc("game_token_revoke", App.auth({ p_token: null })); App.toast(w("revoke_ok")); App.route(); });
    });
    if (master) this.masterLost($("mlost"));
  },

  /** Мастеру: заявки «потерял профиль» и похожие по нику профили — «Это он» переносит найденный профиль в профиль заявителя. */
  async masterLost(box) {
    let list;
    try { list = await this.safe("master_lost_list", App.auth()); } catch (e) { box.innerHTML = `<p class="muted pad">${esc(e.message)}</p>`; return; }
    if (!list.length) { box.innerHTML = `<p class="muted pad">${w("ml_none")}</p>`; return; }
    box.innerHTML = list.map((l, n) => `<div class="panel" data-l="${n}"><b>${esc(l.old_nick)}</b> → ${esc(l.who.nick)}
      <span class="badge">${w("ls_" + l.status)}</span>${l.details ? `<p class="muted">${esc(l.details)}</p>` : ""}
      ${l.status === "new" ? `<p class="lbl">${w("ml_cands")}</p>${l.candidates.length ? `<div class="list">${l.candidates.map(c => `
        <div class="row"><span class="grow"><b>${esc(c.nick)}</b><small class="muted">${c.guest ? w("guest_l") + " · " : ""}${w("runs_n", { n: c.runs })}${c.last_seen ? " · " + w("ml_seen", { t: App.ago(c.last_seen) }) : ""}</small></span>
        <button class="btn small" data-it="${esc(c.id)}" data-n="${esc(c.nick)}">${w("ml_it")}</button></div>`).join("")}</div>` : `<p class="muted">${w("ml_none_c")}</p>`}
      <label class="field"><textarea rows="2" maxlength="300" data-reply placeholder="${w("ml_reply_ph")}"></textarea></label>
      <button class="btn small ghost" data-no>${w("ml_no")}</button>` : (l.reply ? `<p class="muted small">${esc(l.reply)}</p>` : "")}</div>`).join("");
    for (const p of box.querySelectorAll("[data-l]")) {
      const l = list[+p.dataset.l], reply = () => (p.querySelector("[data-reply]") || {}).value || "";
      for (const b of p.querySelectorAll("[data-it]")) b.onclick = () => {
        if (confirm(w("ml_sure", { a: b.dataset.n, b: l.who.nick }))) App.act(b, async () => {
          await App.rpc("master_lost_decide", App.auth({ p_request: l.id, p_from: b.dataset.it, p_reply: reply() }));
          App.toast(w("ml_merged")); this.masterLost(box);
        });
      };
      const no = p.querySelector("[data-no]");
      if (no) no.onclick = () => App.act(no, async () => {
        await App.rpc("master_lost_decide", App.auth({ p_request: l.id, p_from: null, p_reply: reply() }));
        App.toast(w("ml_rejected")); this.masterLost(box);
      });
    }
  },

  /** Открыли QR с другого телефона: me.html#ticket/login/tk_… или #ticket/merge/tk_… (q.html ведёт сюда на iPhone и компьютере). */
  async ticket(kind, tk) {
    if (!["login", "merge"].includes(kind) || !/^tk_[A-Za-z0-9_-]{20,}$/.test(tk || "")) {
      App.page(App.head(w("acc_t"), "#me") + `<p class="empty">${w("tk_bad")}</p>`); return;
    }
    if (kind === "login") {
      if (App.me && !confirm(w("tk_login_q", { n: App.me.nick }))) { location.hash = "#home"; return; }
      history.replaceState(null, "", "#home");   // одноразовая ссылка — не оставлять её в адресе
      try {
        const p = await App.rpc("ticket_login", { p_ticket: tk });
        App.me = { id: p.id, code: p.code, nick: p.nick, avatar: p.avatar }; App.save();
        await App.afterSignIn(); App.toast(w("welcome_back", { n: p.nick }));
      } catch (e) { App.page(App.head(w("acc_t"), "#me") + `<p class="empty">${esc(e.message)}</p>`); }
      return;
    }
    if (!App.me) {   // объединять можно только в профиль, в который вошли
      App.pendingHash = "#ticket/merge/" + tk;
      App.page(App.head(w("merge_t"), "#me") + `<div class="panel tip">${w("tk_merge_need")}</div>` + App.welcomeCard());
      App.bindWelcome(); return;
    }
    history.replaceState(null, "", "#accounts");
    await this.view();
    try {
      const pv = await App.rpc("merge_preview", App.auth({ p_ticket: tk }));
      this.preview(pv, () => App.rpc("merge_profiles", App.auth({ p_ticket: tk })));
    } catch (e) { App.toast(e.message); }
  },
};

App.extraViews = Object.assign(App.extraViews || {}, {
  accounts: () => Acc.view(),
  ticket: () => { const p = decodeURIComponent(location.hash.slice(1)).split("/"); return Acc.ticket(p[1], p[2]); },
});

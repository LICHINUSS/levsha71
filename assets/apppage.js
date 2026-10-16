// Страница изделия — одна для сайта (app.html) и лавки в браузере (me.html#app/<id>).
// Трейлер, оформленные снимки, описание, рекорды мира, отзывы (оценка подковами, как в лавке на Android),
// «Что нового», история и архив версий. Всё из каталога и сервера — те же данные, что у лавки на Android.
"use strict";

const AP_TX = {
  ru: { rec_t: "Рекорды мира", shot_alt: "Снимок экрана — нажмите, чтобы увеличить", m_endless: "Бесконечный", m_campaign: "Кампания", m_daily: "Испытание дня",
        waves: ["волна", "волны", "волн"], rec_empty: "Рекордов пока нет — будьте первым!", rec_more: "Играть и попасть в таблицу",
        rev_t: "Оценки и отзывы", rev_empty: "Отзывов пока нет.", rev_master: "Ответ мастера", rev_mine: "Ваша оценка",
        rev_ph: "Что понравилось, что поправить? (можно оставить пустым)", rev_send: "Сохранить отзыв", rev_saved: "Спасибо! Отзыв сохранён.",
        rev_need: "Оценить и написать отзыв можно с профилем лавки.", rev_login: "Войти или создать профиль",
        arch_t: "Все версии", arch_android: "Старая версия встанет только после удаления текущей: Android не даёт ставить версию ниже поверх новой. Данные игры на этом телефоне пропадут (рекорды и облачное сохранение останутся).",
        arch_other: "Скачать и поставить старую версию можно только на Android-телефоне. На iPhone и в браузере всегда открывается последняя версия.",
        dl_ver: "Скачать v{v}", sound_on: "Включить звук",
        d_normal: "Обычная", d_hard: "Трудная", d_easy: "Спокойная", d_label: "Сложность" },
  en: { rec_t: "World records", shot_alt: "Screenshot — press to enlarge", m_endless: "Endless", m_campaign: "Campaign", m_daily: "Daily challenge",
        waves: ["wave", "waves", "waves"], rec_empty: "No records yet — be the first!", rec_more: "Play and get on the board",
        rev_t: "Ratings and reviews", rev_empty: "No reviews yet.", rev_master: "Master's answer", rev_mine: "Your rating",
        rev_ph: "What did you like, what to fix? (optional)", rev_send: "Save review", rev_saved: "Thanks! Your review is saved.",
        rev_need: "You need a shop profile to rate and review.", rev_login: "Sign in or create a profile",
        arch_t: "All versions", arch_android: "An older version installs only after removing the current one: Android doesn't allow installing a lower version on top. The game's data on this phone is lost (records and the cloud save stay).",
        arch_other: "Older versions can be downloaded and installed only on an Android phone. On iPhone and in the browser the latest version always opens.",
        dl_ver: "Download v{v}", sound_on: "Sound on",
        d_normal: "Normal", d_hard: "Hard", d_easy: "Relaxed", d_label: "Difficulty" },
};

const AppPage = {
  mode: "endless", diff: "normal", ratings: {},
  x(k, vars = {}) { let s = (AP_TX[Lavka.lang] || AP_TX.ru)[k]; for (const [a, b] of Object.entries(vars)) s = s.replace("{" + a + "}", b); return s; },
  waves(n) {
    const f = this.x("waves"), d = n % 10, dd = n % 100;
    if (Lavka.lang === "en") return n + " " + (n === 1 ? f[0] : f[1]);
    return n + " " + (d === 1 && dd !== 11 ? f[0] : d >= 2 && d <= 4 && (dd < 12 || dd > 14) ? f[1] : f[2]);
  },
  when(iso) { return iso ? new Date(iso).toLocaleDateString(Lavka.lang === "ru" ? "ru-RU" : "en-GB", { day: "numeric", month: "short", year: "numeric" }) : ""; },
  av(a) { return `assets/av/${/^[a-z]+$/.test(a || "") ? a : "levsha"}.png`; },
  profile() { try { return JSON.parse(localStorage.getItem("lavka_profile") || "null"); } catch (e) { return null; } },
  /** Оценка подковами: n из 5 (как в лавке на Android). */
  shoes(n, size = 16) {
    return `<span class="shoes" role="img" aria-label="${n}/5">${[1, 2, 3, 4, 5].map(i =>
      Lavka.shoe.replace("<svg", `<svg width="${size}" height="${size}" class="${i <= Math.round(n) ? "on" : ""}"`)).join("")}</span>`;
  },
  changes(h) {
    const ch = (Lavka.lang === "en" && h.changes_en) || h.changes;
    if (ch && Object.keys(ch).length) {
      return `<div class="changes">${["added", "fixed", "changed"].filter(k => ch[k] && ch[k].length).map(k =>
        `<h3 class="h-${k}">${Lavka.t("h_" + k)}</h3><ul>${ch[k].map(x => `<li>${Lavka.esc(x)}</li>`).join("")}</ul>`).join("")}</div>`;
    }
    return `<p>${Lavka.esc(Lavka.L(h, "changelog"))}</p>`;
  },
  /** Трейлер: постер сразу, видео без звука; само играет только если человек не просил экономить трафик и движение. */
  trailer(a) {
    return `<div class="trailer-box">${Lavka.video(a.trailer, a.poster)}
      <button class="sound" type="button" aria-label="${this.x("sound_on")}">🔇</button></div>`;
  },

  async render(page, id, opts = {}) {
    const c = Lavka.catalog || await Lavka.loadCatalog(), a = c && c.apps.find(x => x.id === id);
    if (!a) { page.innerHTML = `<p class="empty">${Lavka.t("notfound")} <a href="${opts.back || "./"}">${Lavka.t("back")}</a></p>`; return; }
    if (!opts.inApp) document.title = Lavka.L(a, "name") + " — " + Lavka.t("brand");
    const hist = a.history || [], r = this.ratings[a.id], plat = Lavka.platform();
    const shots = Lavka.promoFor(a).length ? Lavka.promoFor(a) : (a.screenshots || []);
    page.innerHTML = `
      ${opts.inApp ? "" : `<p style="margin:16px 0 0"><a href="${opts.back || "./#catalog"}">${Lavka.t("back")}</a></p>`}
      <div class="app-head"><img class="icon px" src="${a.icon}" alt="">
        <div><h1>${Lavka.esc(Lavka.L(a, "name"))}</h1><p class="sub" style="margin:4px 0 0">${Lavka.esc(Lavka.L(a, "tagline"))}</p>
          <p class="muted" style="margin:4px 0 0">${Lavka.esc(a.developer || "")}</p></div></div>
      <div class="facts">
        <div><b>${r && r.count ? Lavka.ratingHtml(r) : "—"}</b><span>${r && r.count ? Lavka.t("reviews", { n: r.count }) : Lavka.t("f_rating")}</span></div>
        <div><b>${a.version_name || "—"}</b><span>${Lavka.t("f_ver")}</span></div>
        <div><b>${Lavka.fmtSize(a.size) || "—"}</b><span>${Lavka.t("f_size")}</span></div>
        <div><b>${(a.min_sdk || 24) >= 26 ? "8+" : "7+"}</b><span>${Lavka.t("f_android")}</span></div>
      </div>
      <div class="app-actions">${Lavka.appButtons(a, false)}</div>
      ${a.trailer ? `<section><h2>${Lavka.t("app_trailer")}</h2>${this.trailer(a)}</section>` : ""}
      <section><h2>${Lavka.t("app_shots")}</h2>
        <div class="shots">${shots.map(s => Lavka.shotImg(s, this.x("shot_alt"), 'tabindex="0" role="button"')).join("")}</div></section>
      ${hist.length ? `<section><h2>${Lavka.t("app_whatsnew")}</h2>
        <p class="muted">v${Lavka.esc(hist[0].version_name)} · ${Lavka.fmtDate(hist[0].date)}</p>${this.changes(hist[0])}</section>` : ""}
      <section><h2>${Lavka.t("app_about")}</h2><p>${Lavka.esc(Lavka.L(a, "description"))}</p></section>
      ${a.category === "games" ? `<section class="recSec"><h2>${this.x("rec_t")}</h2>
        <div class="chips" style="margin:6px 0 12px">${["endless", "campaign", "daily"].map(m =>
          `<button class="chip" data-mode="${m}" aria-pressed="${m === this.mode}">${this.x("m_" + m)}</button>`).join("")}</div>
        ${(a.difficulties || []).length > 1 ? `<div class="chips diffs" role="group" aria-label="${this.x("d_label")}" style="margin:-4px 0 12px"${this.mode === "daily" ? " hidden" : ""}>${a.difficulties.map(d =>
          `<button class="chip small" data-diff="${d}" aria-pressed="${d === this.diff}">${this.x("d_" + d)}</button>`).join("")}</div>` : ""}
        <div class="recbox"><div class="skel"></div></div></section>` : ""}
      <section class="revSec"><h2>${this.x("rev_t")}</h2><div class="revSum"></div><div class="revForm"></div><div class="rev"><div class="skel"></div></div></section>
      ${hist.length > 1 ? `<section><h2>${this.x("arch_t")} <span class="muted" style="font-size:16px">(${hist.length})</span></h2>
        <p class="muted small">${plat === "android" ? this.x("arch_android") : this.x("arch_other")}</p>${hist.slice(1).map(h => `
        <details class="ver"><summary>v${Lavka.esc(h.version_name)} <span class="muted" style="font-weight:600">${Lavka.fmtDate(h.date)}</span></summary>
          ${this.changes(h)}${h.approx ? `<p class="approx">${Lavka.t("approx")}</p>` : ""}
          ${plat === "android" && h.apk ? `<p><a class="btn small ghost" href="${h.apk}">${this.x("dl_ver", { v: Lavka.esc(h.version_name) })}</a></p>` : ""}</details>`).join("")}</section>` : ""}`;
    for (const b of page.querySelectorAll("[data-mode]")) b.onclick = () => {
      this.mode = b.dataset.mode; for (const x of page.querySelectorAll("[data-mode]")) x.setAttribute("aria-pressed", x === b);
      const dr = page.querySelector(".diffs"); if (dr) dr.hidden = this.mode === "daily";
      this.records(page, a);
    };
    for (const b of page.querySelectorAll("[data-diff]")) b.onclick = () => {
      this.diff = b.dataset.diff; for (const x of page.querySelectorAll("[data-diff]")) x.setAttribute("aria-pressed", x === b); this.records(page, a);
    };
    const v = page.querySelector("video.trailer"), snd = page.querySelector(".sound");
    if (v && snd) snd.onclick = () => { v.muted = !v.muted; if (!v.muted) v.play().catch(() => {}); snd.textContent = v.muted ? "🔇" : "🔊"; };
    for (const img of page.querySelectorAll(".shots img")) {
      img.onclick = () => Lavka.zoom(img.dataset.full || img.src);
      img.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); Lavka.zoom(img.dataset.full || img.src); } };
    }
    Lavka.lazyVideos(page);
    if (a.category === "games") this.records(page, a);
    this.reviews(page, a, opts);
    if (!this.ratings[a.id]) Lavka.ratings().then(rt => { this.ratings = rt; if (rt[a.id]) {
      const f = page.querySelector(".facts div"); if (f) f.innerHTML = `<b>${Lavka.ratingHtml(rt[a.id])}</b><span>${Lavka.t("reviews", { n: rt[a.id].count })}</span>`; } });
  },

  async records(page, a) {
    const box = page.querySelector(".recbox"); if (!box) return;
    try {
      // сложность — своя таблица; «Обычная» без поля (так понимает и сервер до V2)
      const q = { p_game: a.id, p_mode: this.mode, p_period: "all", p_limit: 10 };
      if (this.diff !== "normal" && this.mode !== "daily" && (a.difficulties || []).includes(this.diff)) q.p_difficulty = this.diff;
      const rows = await Lavka.rpc("leaderboard", q);
      const me = this.profile(), link = (pid) => (document.getElementById("app") ? "#player/" : "me.html#player/") + pid;
      box.innerHTML = rows.length ? `<ol class="board">${rows.map(r => `<li class="${me && me.id === r.player_id ? "me" : ""}">
          <span class="pl p${r.place}">${r.place}</span><img class="px" src="${this.av(r.avatar)}" alt="" width="34" height="34">
          <a href="${link(r.player_id)}">${Lavka.esc(r.nick)}</a>
          <b>${this.mode === "campaign" ? (r.won ? "🏆 " : "") + r.waves + "/10" : this.waves(r.waves)}</b></li>`).join("")}</ol>`
        : `<p class="muted">${this.x("rec_empty")}</p>`;
      if (a.web) box.insertAdjacentHTML("beforeend", `<p><a class="btn small" href="${a.web}">${this.x("rec_more")}</a></p>`);
    } catch (e) { box.innerHTML = `<p class="muted">—</p>`; }
  },

  async reviews(page, a, opts) {
    const box = page.querySelector(".rev"), sum = page.querySelector(".revSum"), form = page.querySelector(".revForm");
    try {
      const [s, list] = await Promise.all([Lavka.rpc("review_summary", { p_app: a.id }), Lavka.rpc("reviews_list", { p_app: a.id, p_limit: 20 })]);
      if (s && s.count) {
        const max = Math.max(...s.dist, 1);
        sum.innerHTML = `<div class="revsum"><div class="big">${String(s.avg).replace(".", Lavka.lang === "ru" ? "," : ".")}
            ${this.shoes(s.avg, 14)}<small>${Lavka.t("reviews", { n: s.count })}</small></div>
          <div class="bars">${[5, 4, 3, 2, 1].map(n => `<div><span>${n}</span><i style="width:${Math.round(s.dist[n - 1] / max * 100)}%"></i></div>`).join("")}</div></div>`;
      }
      box.innerHTML = list.length ? list.map(r => `<article class="panel review"><header><img class="px" src="${this.av(r.avatar)}" alt="" width="36" height="36">
          <div><b>${Lavka.esc(r.nick)}</b> ${this.shoes(r.rating, 14)}<small class="muted">${this.when(r.updated_at || r.created_at)}</small></div></header>
          ${r.body ? `<p>${Lavka.esc(r.body)}</p>` : ""}
          ${r.reply ? `<div class="reply"><b>👑 ${this.x("rev_master")}</b><p>${Lavka.esc(r.reply)}</p></div>` : ""}</article>`).join("")
        : `<p class="muted">${this.x("rev_empty")}</p>`;
    } catch (e) { box.innerHTML = `<p class="muted">—</p>`; }
    const me = this.profile();
    if (!me) { form.innerHTML = `<p class="muted">${this.x("rev_need")} <a href="${opts.inApp ? "#me" : "me.html#me"}">${this.x("rev_login")}</a></p>`; return; }
    let mine = null; try { mine = await Lavka.rpc("my_review", { p_id: me.id, p_app: a.id }); } catch (e) { /* нет */ }
    let rating = (mine && mine.rating) || 0;
    form.innerHTML = `<div class="panel"><b>${this.x("rev_mine")}</b> <span class="muted">· ${Lavka.esc(me.nick)}</span>
      <div class="rate" role="radiogroup">${[1, 2, 3, 4, 5].map(n => `<button type="button" data-r="${n}" aria-label="${n}">${Lavka.shoe}</button>`).join("")}</div>
      <textarea class="rvBody" maxlength="500" rows="3" placeholder="${this.x("rev_ph")}">${Lavka.esc((mine && mine.body) || "")}</textarea>
      <button class="btn small rvSend" type="button">${this.x("rev_send")}</button></div>`;
    const paint = () => form.querySelectorAll("[data-r]").forEach(b => b.classList.toggle("on", +b.dataset.r <= rating));
    form.querySelectorAll("[data-r]").forEach(b => b.onclick = () => { rating = +b.dataset.r; paint(); });
    paint();
    form.querySelector(".rvSend").onclick = async (e) => {
      if (!rating) { Lavka.toast(this.x("rev_mine") + " — 1…5"); return; }
      e.target.disabled = true;
      try {
        const r = await fetch(API + "upsert_review", { method: "POST", headers: { apikey: API_KEY, "Content-Type": "application/json" },
          body: JSON.stringify({ p_id: me.id, p_code: me.code, p_app: a.id, p_rating: rating, p_body: form.querySelector(".rvBody").value }) });
        const d = await r.json();
        if (!r.ok) throw new Error(d.message || "error");
        Lavka.toast(this.x("rev_saved")); this.ratings = await Lavka.ratings(); this.render(page, a.id, opts);
      } catch (err) { Lavka.toast(err.message); e.target.disabled = false; }
    };
  },
};

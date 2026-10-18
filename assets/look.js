// «Пиксельный двойник» героя (3.0): тот же облик, что в «Кирпичной башне» и в лавке на Android.
// Слои берём из assets/look.json (его делает brick-tower/tools/make_look.py). Порядок слоёв и подстановки
// (J — куртка, H — шапка героя, C — плащ) — как в игре (Look.portrait) и в лавке (HeroLook.kt).
"use strict";

const HeroLook = {
  data: null, _p: null, cache: new Map(),
  load() {
    if (!this._p) this._p = fetch("assets/look.json").then(r => r.ok ? r.json() : null).catch(() => null).then(d => (this.data = d));
    return this._p;
  },
  /** Картинка облика (data:URL, 24×24) или "" — если файл ещё не загружен. */
  url(look) {
    const d = this.data;
    if (!d) return "";
    look = look || {};
    const key = ["hero", "color", "hat", "face", "cloak", "gear"].map(k => look[k] || "").join("|");
    if (this.cache.has(key)) return this.cache.get(key);
    const n = d.size || 24, def = d.default || {};
    const part = (k) => (look[k] || (k === "cloak" || k === "gear" || k === "color" ? "" : def[k] || ""));
    const hc = (d.heroes || {})[look.hero] || (d.heroes || {}).lefty || ["1b2a34", "c91a09"];
    const pal = { ...(d.palette || {}) };
    pal.J = look.color || hc[0];
    pal.H = hc[1];
    pal.C = (d.cloak_colors || {})[part("cloak")] || "c3271b";
    const cv = document.createElement("canvas"); cv.width = cv.height = n;
    const g = cv.getContext("2d");
    for (const p of d.order || []) {
      const rows = (d.layers || {})[p === "body" || p === "head" ? p : p + ":" + part(p)];
      if (!rows) continue;
      for (let y = 0; y < Math.min(rows.length, n); y++) {
        const row = rows[y];
        for (let x = 0; x < Math.min(row.length, n); x++) {
          const c = row[x];
          if (c === "." || !pal[c]) continue;
          g.fillStyle = "#" + String(pal[c]).replace("#", "");
          g.fillRect(x, y, 1, 1);
        }
      }
    }
    const u = cv.toDataURL("image/png");
    this.cache.set(key, u);
    return u;
  },
  /** Разметка портрета: квадрат size px, пиксели без размытия. Пока файл грузится — пустая рамка, потом подставится. */
  img(look, size = 40, cls = "") {
    const u = this.url(look);
    const data = Lavka.esc(JSON.stringify(look || {}));
    return `<img class="px hero ${cls}" width="${size}" height="${size}" alt="" data-look="${data}" ${u ? `src="${u}"` : ""}>`;
  },
  /** После загрузки файла — дорисовать портреты, вставленные до неё. */
  fill(root = document) {
    if (!this.data) { this.load().then(() => this.data && this.fill(root)); return; }
    for (const el of root.querySelectorAll("img.hero[data-look]:not([src])")) {
      try { el.src = this.url(JSON.parse(el.dataset.look)); } catch (e) { /* пропускаем */ }
    }
  },
};
HeroLook.load();

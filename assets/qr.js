// QR-код своими силами (без чужих библиотек): байтовый режим, уровень исправления M, версии 1–10.
// QR.svg(text, {dark, light, px}) — картинка SVG; QR.matrix(text) — массив строк из 0/1.
"use strict";
const QR = (() => {
  // ёмкость и блоки для уровня M: [кол-во кодовых слов исправления на блок, [[блоков, слов данных], …]]
  const EC_M = [null,
    [10, [[1, 16]]], [16, [[1, 28]]], [26, [[1, 44]]], [18, [[2, 32]]], [24, [[2, 43]]],
    [16, [[4, 27]]], [18, [[4, 31]]], [22, [[2, 38], [2, 39]]], [22, [[3, 36], [2, 37]]], [26, [[4, 43], [1, 44]]]];
  const ALIGN = [null, [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50]];

  // поле Галуа GF(256) для Рида — Соломона
  const EXP = new Array(512), LOG = new Array(256);
  for (let i = 0, x = 1; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 256) x ^= 0x11d; }
  for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  const mul = (a, b) => (a && b) ? EXP[LOG[a] + LOG[b]] : 0;
  function rsGen(n) {
    let g = [1];
    for (let i = 0; i < n; i++) {
      const ng = new Array(g.length + 1).fill(0);
      for (let j = 0; j < g.length; j++) { ng[j] ^= g[j]; ng[j + 1] ^= mul(g[j], EXP[i]); }
      g = ng;
    }
    return g;
  }
  function rsRem(data, n) {
    const g = rsGen(n), r = data.concat(new Array(n).fill(0));
    for (let i = 0; i < data.length; i++) {
      const c = r[i];
      if (c) for (let j = 0; j < g.length; j++) r[i + j] ^= mul(g[j], c);
    }
    return r.slice(data.length);
  }

  function utf8(s) { return Array.from(new TextEncoder().encode(s)); }

  function codewords(text, ver) {
    const bytes = utf8(text), [ecn, groups] = EC_M[ver];
    const total = groups.reduce((a, [n, k]) => a + n * k, 0);
    const bits = [];
    const put = (v, n) => { for (let i = n - 1; i >= 0; i--) bits.push((v >> i) & 1); };
    put(4, 4); put(bytes.length, ver < 10 ? 8 : 16);
    for (const b of bytes) put(b, 8);
    put(0, Math.min(4, total * 8 - bits.length));
    while (bits.length % 8) bits.push(0);
    const data = [];
    for (let i = 0; i < bits.length; i += 8) data.push(parseInt(bits.slice(i, i + 8).join(""), 2));
    for (let pad = 0xec; data.length < total; pad ^= 0xec ^ 0x11) data.push(pad);
    // блоки, исправление, перемежение
    const blocks = [], ecs = [];
    let at = 0;
    for (const [n, k] of groups) for (let i = 0; i < n; i++) { const b = data.slice(at, at + k); at += k; blocks.push(b); ecs.push(rsRem(b, ecn)); }
    const out = [], maxK = Math.max(...blocks.map(b => b.length));
    for (let i = 0; i < maxK; i++) for (const b of blocks) if (i < b.length) out.push(b[i]);
    for (let i = 0; i < ecn; i++) for (const e of ecs) out.push(e[i]);
    return out;
  }

  function pickVersion(text) {
    const len = utf8(text).length;
    for (let v = 1; v <= 10; v++) {
      const cap = EC_M[v][1].reduce((a, [n, k]) => a + n * k, 0) - (v < 10 ? 2 : 3);
      if (len <= cap) return v;
    }
    throw new Error("Слишком длинный текст для QR");
  }

  const MASKS = [(r, c) => (r + c) % 2 === 0, (r) => r % 2 === 0, (r, c) => c % 3 === 0, (r, c) => (r + c) % 3 === 0,
    (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0, (r, c) => (r * c) % 2 + (r * c) % 3 === 0,
    (r, c) => ((r * c) % 2 + (r * c) % 3) % 2 === 0, (r, c) => ((r + c) % 2 + (r * c) % 3) % 2 === 0];

  function build(text, mask) {
    const ver = pickVersion(text), n = ver * 4 + 17;
    const m = Array.from({ length: n }, () => new Array(n).fill(null));
    const fixed = Array.from({ length: n }, () => new Array(n).fill(false));
    const set = (r, c, v) => { m[r][c] = v ? 1 : 0; fixed[r][c] = true; };
    const finder = (r, c) => {
      for (let i = -1; i <= 7; i++) for (let j = -1; j <= 7; j++) {
        const rr = r + i, cc = c + j;
        if (rr < 0 || cc < 0 || rr >= n || cc >= n) continue;
        const on = i >= 0 && i <= 6 && j >= 0 && j <= 6 && (i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4));
        set(rr, cc, on);
      }
    };
    finder(0, 0); finder(0, n - 7); finder(n - 7, 0);
    for (let i = 8; i < n - 8; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
    // выравнивающие квадраты: везде, кроме трёх углов с «глазами» (на линиях отсчёта — рисуются поверх)
    const al = ALIGN[ver], last = al.length - 1;
    al.forEach((r, a) => al.forEach((c, b) => {
      if ((a === 0 && b === 0) || (a === 0 && b === last) || (a === last && b === 0)) return;
      for (let i = -2; i <= 2; i++) for (let j = -2; j <= 2; j++) set(r + i, c + j, Math.max(Math.abs(i), Math.abs(j)) !== 1);
    }));
    // место под формат (заполним позже) и тёмный модуль
    for (let i = 0; i < 9; i++) { if (i !== 6) { set(8, i, 0); set(i, 8, 0); } }
    for (let i = 0; i < 8; i++) { set(8, n - 1 - i, 0); set(n - 1 - i, 8, 0); }
    set(n - 8, 8, 1);
    if (ver >= 7) {   // информация о версии
      let v = ver << 12, g = ver << 12;
      for (let i = 17; i >= 12; i--) if (g >> i & 1) g ^= 0x1f25 << (i - 12);
      v |= g;
      for (let i = 0; i < 18; i++) { const bit = (v >> i) & 1, r = Math.floor(i / 3), c = n - 11 + (i % 3); set(r, c, bit); set(c, r, bit); }
    }
    // данные змейкой снизу справа
    const words = codewords(text, ver), bits = [];
    for (const w of words) for (let i = 7; i >= 0; i--) bits.push((w >> i) & 1);
    let k = 0, up = true;
    for (let c = n - 1; c > 0; c -= 2) {
      if (c === 6) c--;
      for (let t = 0; t < n; t++) {
        const r = up ? n - 1 - t : t;
        for (const cc of [c, c - 1]) {
          if (fixed[r][cc]) continue;
          let b = k < bits.length ? bits[k++] : 0;
          if (MASKS[mask](r, cc)) b ^= 1;
          m[r][cc] = b;
        }
      }
      up = !up;
    }
    // формат: уровень M (00) + маска, БЧХ, XOR 101010000010010
    let f = (0 << 3) | mask, g = f << 10;
    for (let i = 14; i >= 10; i--) if (g >> i & 1) g ^= 0x537 << (i - 10);
    f = ((f << 10) | g) ^ 0x5412;
    for (let i = 0; i < 15; i++) {
      const bit = (f >> i) & 1;
      // первая копия — у левого верхнего «глаза»
      if (i < 6) m[i][8] = bit; else if (i < 8) m[i + 1][8] = bit; else if (i === 8) m[8][7] = bit; else m[8][14 - i] = bit;
      // вторая копия — у правого верхнего и левого нижнего
      if (i < 8) m[8][n - 1 - i] = bit; else m[n - 15 + i][8] = bit;
    }
    return m;
  }

  // штраф по правилам стандарта — выбираем самую «спокойную» маску
  function penalty(m) {
    const n = m.length; let p = 0;
    for (let r = 0; r < n; r++) for (const line of [m[r], m.map(row => row[r])]) {
      let run = 1;
      for (let i = 1; i <= n; i++) {
        if (i < n && line[i] === line[i - 1]) run++;
        else { if (run >= 5) p += run - 2; run = 1; }
      }
    }
    for (let r = 0; r < n - 1; r++) for (let c = 0; c < n - 1; c++) {
      const s = m[r][c] + m[r + 1][c] + m[r][c + 1] + m[r + 1][c + 1];
      if (s === 0 || s === 4) p += 3;
    }
    const dark = m.flat().reduce((a, b) => a + b, 0);
    p += Math.floor(Math.abs(dark * 100 / (n * n) - 50) / 5) * 10;
    return p;
  }

  function matrix(text) {
    let best = null, bestP = Infinity;
    for (let mk = 0; mk < 8; mk++) { const m = build(text, mk), pp = penalty(m); if (pp < bestP) { bestP = pp; best = m; } }
    return best;
  }

  function svg(text, o = {}) {
    const m = matrix(text), n = m.length, q = 2, size = n + q * 2;
    let d = "";
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (m[r][c]) d += `M${c + q} ${r + q}h1v1h-1z`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${o.px || 240}" height="${o.px || 240}" shape-rendering="crispEdges" role="img" aria-label="QR">
      <rect width="${size}" height="${size}" fill="${o.light || "#FBF0DC"}"/><path d="${d}" fill="${o.dark || "#2B140A"}"/></svg>`;
  }
  return { matrix, svg };
})();

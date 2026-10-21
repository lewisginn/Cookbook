(() => {
  'use strict';

  // ───────────────────────── Data & constants ─────────────────────────
  const RECIPES = (window.RECIPES || []).slice().sort((a, b) => a.name.localeCompare(b.name));
  const byId = Object.fromEntries(RECIPES.map(r => [r.id, r]));
  const REGIONS = [...new Set(RECIPES.map(r => r.region))].sort();

  const AISLES = [
    ['produce', 'Produce', '🥬'],
    ['meat', 'Meat', '🥩'],
    ['seafood', 'Seafood', '🐟'],
    ['dairy', 'Dairy & Eggs', '🧈'],
    ['bakery', 'Bakery', '🥖'],
    ['international', 'International', '🥢'],
    ['spices', 'Spices', '🌶️'],
    ['pantry', 'Pantry', '🥫'],
    ['frozen', 'Frozen', '🧊'],
    ['other', 'Other', '🛒']
  ];
  const AISLE_ORDER = Object.fromEntries(AISLES.map((a, i) => [a[0], i]));

  const PLURAL = {
    cup: 'cups', quart: 'quarts', bunch: 'bunches', can: 'cans', stick: 'sticks', pod: 'pods',
    piece: 'pieces', sprig: 'sprigs', stalk: 'stalks', head: 'heads', package: 'packages',
    pinch: 'pinches', slice: 'slices', clove: 'cloves', jar: 'jars', bottle: 'bottles'
  };
  const FRACS = [[0, ''], [1 / 8, '⅛'], [1 / 4, '¼'], [1 / 3, '⅓'], [3 / 8, '⅜'], [1 / 2, '½'],
    [5 / 8, '⅝'], [2 / 3, '⅔'], [3 / 4, '¾'], [7 / 8, '⅞'], [1, '']];
  const TIME_RE = /(\d+(?:\.\d+)?)(?:\s*(?:–|-|to)\s*(\d+(?:\.\d+)?))?\s*(seconds?|secs?|minutes?|mins?|hours?|hrs?)\b/gi;
  const CLOCK = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M10 2h4"/></svg>';

  // ───────────────────────── Storage ─────────────────────────
  const store = {
    get(k, d) { try { const v = localStorage.getItem('cookbook.' + k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem('cookbook.' + k, JSON.stringify(v)); } catch { /* storage unavailable */ } }
  };

  const shop = Object.assign({ selected: {}, checked: {}, custom: [] }, store.get('shop', {}));
  for (const id of Object.keys(shop.selected)) if (!byId[id]) delete shop.selected[id];
  const cook = Object.assign({ id: null, step: 0 }, store.get('cook', {}));
  const servingsMap = store.get('servings', {});
  const got = store.get('got', {});
  let timers = store.get('timers', []);
  let wantWake = store.get('wake', true);

  const saveShop = () => { store.set('shop', shop); updateBadge(); };
  const saveCook = () => store.set('cook', cook);
  const saveTimers = () => store.set('timers', timers);

  const ui = { query: '', region: '', shopPane: null };

  // ───────────────────────── Helpers ─────────────────────────
  const $ = (sel, el = document) => el.querySelector(sel);
  const view = $('#view');
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function fmtQty(q) {
    if (q == null) return '';
    const whole = Math.floor(q + 1e-9);
    const frac = q - whole;
    let best = FRACS[0], diff = 1;
    for (const f of FRACS) { const d = Math.abs(frac - f[0]); if (d < diff) { diff = d; best = f; } }
    if (diff > 0.04) return String(Math.round(q * 10) / 10);
    const w = whole + (best[0] === 1 ? 1 : 0);
    const f = best[0] > 0 && best[0] < 1 ? best[1] : '';
    if (!w && !f) return String(Math.round(q * 100) / 100);
    return (w || '') + f;
  }
  const fmtUnit = (u, q) => (!u ? '' : q > 1 && PLURAL[u] ? PLURAL[u] : u);
  const fmtAmount = (q, u) => [fmtQty(q), fmtUnit(u, q)].filter(Boolean).join(' ');

  function fmtMin(m) {
    if (!m) return '';
    const h = Math.floor(m / 60), r = m % 60;
    return h ? `${h} hr${r ? ` ${r} min` : ''}` : `${r} min`;
  }
  function fmtClock(sec) {
    sec = Math.max(0, Math.ceil(sec));
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    const mm = String(m).padStart(h ? 2 : 1, '0'), ss = String(s).padStart(2, '0');
    return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
  }
  const totalTime = r => (r.time?.prep || 0) + (r.time?.cook || 0);
  const heat = n => (n ? '🌶️'.repeat(n) : 'Mild');
  const hue = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7);
  const getServings = r => servingsMap[r.id] || r.servings;
  function setServings(id, n) {
    servingsMap[id] = Math.max(1, Math.min(40, n));
    store.set('servings', servingsMap);
  }

  function withTimers(text, label) {
    return esc(text).replace(TIME_RE, (m, a, _b, u) => {
      const mult = /^s/i.test(u) ? 1 : /^m/i.test(u) ? 60 : 3600;
      const sec = Math.round(parseFloat(a) * mult);
      return `<button type="button" class="timer-chip" data-action="timer" data-sec="${sec}" data-label="${esc(label)}">${CLOCK}${m}</button>`;
    });
  }

  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  function updateBadge() {
    const n = Object.keys(shop.selected).length;
    const b = $('#shopBadge');
    b.hidden = !n;
    b.textContent = n;
  }

  function matches(r, q) {
    if (!q) return true;
    const hay = [r.name, r.nativeName, r.cuisine, r.region, ...(r.tags || []), ...r.ingredients.map(i => i.item)]
      .join(' ').toLowerCase();
    return q.toLowerCase().split(/\s+/).every(w => hay.includes(w));
  }

  // ───────────────────────── Shared fragments ─────────────────────────
  function servingsStepper(r) {
    const n = getServings(r);
    return `<div class="stepper" role="group" aria-label="Servings">
      <button type="button" data-action="servings" data-id="${r.id}" data-delta="-1" aria-label="Fewer servings">−</button>
      <span><b>${n}</b> serving${n === 1 ? '' : 's'}</span>
      <button type="button" data-action="servings" data-id="${r.id}" data-delta="1" aria-label="More servings">+</button>
    </div>`;
  }

  function ingredientList(r, { checkable = true } = {}) {
    const f = getServings(r) / r.servings;
    const checks = got[r.id] || {};
    let html = '', group;
    r.ingredients.forEach((ing, i) => {
      if (ing.group !== group) {
        if (group !== undefined) html += '</ul>';
        group = ing.group;
        html += (group ? `<h3 class="ing-group">${esc(group)}</h3>` : '') + '<ul class="ing-list">';
      }
      const amt = ing.qty != null ? fmtAmount(ing.qty * f, ing.unit) : '';
      const body = `<span class="ing-text">${amt ? `<b class="qty">${esc(amt)}</b> ` : ''}${esc(ing.item)}${ing.note ? `<span class="note">, ${esc(ing.note)}</span>` : ''}</span>`;
      html += checkable
        ? `<li><label class="check${checks[i] ? ' done' : ''}"><input type="checkbox" data-action="got" data-id="${r.id}" data-i="${i}"${checks[i] ? ' checked' : ''}><span class="box"></span>${body}</label></li>`
        : `<li>${body}</li>`;
    });
    return html + '</ul>';
  }

  function shopToggle(r, cls = '') {
    const on = !!shop.selected[r.id];
    return `<button type="button" class="btn ${cls} ${on ? 'on' : ''}" data-action="toggle-shop" data-id="${r.id}" aria-pressed="${on}">
      ${on ? '✓ On shopping list' : '+ Shopping list'}</button>`;
  }

  // ───────────────────────── Recipes view ─────────────────────────
  function renderRecipes() {
    view.innerHTML = `<section class="page">
      <div class="page-head">
        <h1>Recipes</h1>
        <p class="muted">${RECIPES.length} recipe${RECIPES.length === 1 ? '' : 's'} across ${REGIONS.length} region${REGIONS.length === 1 ? '' : 's'}</p>
      </div>
      <div class="search">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>
        <input id="search" type="search" placeholder="Search recipes or ingredients…" value="${esc(ui.query)}" autocomplete="off">
      </div>
      <div class="chips" role="group" aria-label="Filter by region">
        ${['', ...REGIONS].map(rg => `<button type="button" class="chip${ui.region === rg ? ' on' : ''}" data-action="region" data-region="${esc(rg)}">${rg ? esc(rg) : 'All regions'}</button>`).join('')}
      </div>
      <div id="results"></div>
    </section>`;
    $('#search').addEventListener('input', e => { ui.query = e.target.value; renderResults(); });
    renderResults();
  }

  function renderResults() {
    const list = RECIPES.filter(r => (!ui.region || r.region === ui.region) && matches(r, ui.query));
    if (!list.length) {
      $('#results').innerHTML = `<div class="empty"><p>No recipes match “${esc(ui.query)}”.</p></div>`;
      return;
    }
    const groups = REGIONS.map(rg => [rg, list.filter(r => r.region === rg)]).filter(g => g[1].length);
    $('#results').innerHTML = groups.map(([rg, rs]) => `
      <section class="region">
        <h2>${esc(rg)} <span class="count">${rs.length}</span></h2>
        <div class="grid">${rs.map(card).join('')}</div>
      </section>`).join('');
  }

  function card(r) {
    const extra = r.time?.inactive ? ` + ${fmtMin(r.time.inactive)} ${esc(r.time.inactiveLabel || 'resting')}` : '';
    return `<article class="card recipe-card">
      <a class="card-link" href="#/recipe/${r.id}">
        <div class="card-emoji" style="--h:${hue(r.region)}">${esc(r.emoji || '🍽️')}</div>
        <div class="card-body">
          <h3>${esc(r.name)}</h3>
          <p class="sub">${esc(r.cuisine)}${r.nativeName ? ` · <i>${esc(r.nativeName)}</i>` : ''}</p>
          <p class="meta"><span>${fmtMin(totalTime(r))}${extra}</span><span>${r.servings} servings</span><span title="Heat">${heat(r.heat)}</span></p>
        </div>
      </a>
      <div class="card-actions">
        <a class="btn small primary" href="#/cook/${r.id}">Cook</a>
        ${shopToggle(r, 'small')}
      </div>
    </article>`;
  }

  // ───────────────────────── Recipe detail ─────────────────────────
  function renderRecipe(id) {
    const r = byId[id];
    const t = r.time || {};
    const facts = [
      t.prep && ['Prep', fmtMin(t.prep)],
      t.cook && ['Cook', fmtMin(t.cook)],
      t.inactive && [t.inactiveLabel ? t.inactiveLabel[0].toUpperCase() + t.inactiveLabel.slice(1) : 'Rest', fmtMin(t.inactive) + '+'],
      ['Heat', heat(r.heat)]
    ].filter(Boolean);
    view.innerHTML = `<article class="page recipe">
      <a class="back" href="#/recipes">← All recipes</a>
      <header class="hero">
        <div class="hero-emoji" style="--h:${hue(r.region)}">${esc(r.emoji || '🍽️')}</div>
        <div class="hero-text">
          <p class="eyebrow">${esc(r.region)} · ${esc(r.cuisine)}</p>
          <h1>${esc(r.name)}${r.nativeName ? ` <span class="native">${esc(r.nativeName)}</span>` : ''}</h1>
          <p class="desc">${esc(r.description)}</p>
          <dl class="facts">${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
          <div class="actions">
            <a class="btn primary" href="#/cook/${r.id}">▶ Start cooking</a>
            ${shopToggle(r)}
          </div>
        </div>
      </header>
      <div class="recipe-body">
        <section class="panel ingredients">
          <div class="panel-head"><h2>Ingredients</h2>${servingsStepper(r)}</div>
          ${ingredientList(r)}
          <button type="button" class="link-btn" data-action="reset-got" data-id="${r.id}">Uncheck all</button>
        </section>
        <section class="panel method">
          <h2>Method</h2>
          <ol class="steps">
            ${r.steps.map((s, i) => `<li>
              <div class="step-num">${i + 1}</div>
              <div>${s.title ? `<h3>${esc(s.title)}</h3>` : ''}<p>${withTimers(s.text, s.title || `${r.short || r.name} · step ${i + 1}`)}</p>
              ${s.tip ? `<p class="tip">💡 ${esc(s.tip)}</p>` : ''}</div>
            </li>`).join('')}
          </ol>
          ${r.notes?.length ? `<h2>Notes</h2><ul class="notes">${r.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>` : ''}
        </section>
      </div>
    </article>`;
  }

  // ───────────────────────── Cook (follow-along) ─────────────────────────
  function renderCook(id) {
    if (id === 'choose' || (!id && !byId[cook.id])) return renderCookPicker();
    id = id || cook.id;
    if (!byId[id]) return renderCookPicker();
    if (cook.id !== id) { cook.id = id; cook.step = 0; saveCook(); }
    if (location.hash !== `#/cook/${id}`) history.replaceState(null, '', `#/cook/${id}`);
    const r = byId[id];
    view.innerHTML = `<section class="page cook">
      <div class="cook-head">
        <div>
          <p class="eyebrow">Now cooking</p>
          <h1>${esc(r.emoji || '')} ${esc(r.name)}</h1>
        </div>
        <div class="cook-tools">
          ${'wakeLock' in navigator ? `<button type="button" class="btn small ghost" id="wakeBtn" data-action="wake" aria-pressed="false">☀︎ Keep screen on</button>` : ''}
          <a class="btn small ghost" href="#/recipe/${r.id}">Full recipe</a>
          <a class="btn small ghost" href="#/cook/choose">Switch</a>
        </div>
      </div>
      <div class="progress"><div id="progressBar"></div></div>
      <div class="dots" id="dots"></div>
      <div class="slide" id="slide"></div>
      <div class="cook-nav">
        <button type="button" class="btn big" data-action="prev" id="prevBtn">← Back</button>
        <button type="button" class="btn big primary" data-action="next" id="nextBtn">Next →</button>
      </div>
    </section>`;
    renderSlide();
    attachSwipe($('#slide'));
    if (wantWake) requestWake();
  }

  function renderCookPicker() {
    view.innerHTML = `<section class="page">
      <div class="page-head"><h1>What are we cooking?</h1><p class="muted">Pick a recipe to follow step by step.</p></div>
      ${REGIONS.map(rg => `<section class="region"><h2>${esc(rg)}</h2>
        <div class="pick-list">${RECIPES.filter(r => r.region === rg).map(r => `
          <a class="pick-row link" href="#/cook/${r.id}">
            <span class="pick-emoji">${esc(r.emoji || '🍽️')}</span>
            <span class="pick-name">${esc(r.name)}<small>${esc(r.cuisine)} · ${fmtMin(totalTime(r))}</small></span>
            <span aria-hidden="true">→</span>
          </a>`).join('')}</div></section>`).join('')}
    </section>`;
  }

  function renderSlide() {
    const r = byId[cook.id];
    const n = r.steps.length;
    const last = n + 1;
    cook.step = Math.max(0, Math.min(last, cook.step));
    const s = cook.step;
    const slide = $('#slide');
    let html;
    if (s === 0) {
      const checks = got[r.id] || {};
      const done = r.ingredients.filter((_, i) => checks[i]).length;
      html = `<p class="step-label">Before you start</p>
        <div class="slide-head"><h2>Gather your ingredients</h2>${servingsStepper(r)}</div>
        <p class="muted">${done} of ${r.ingredients.length} ready · tap to check off</p>
        <div class="mise">${ingredientList(r)}</div>`;
    } else if (s === last) {
      html = `<div class="finale">
        <div class="finale-emoji">${esc(r.emoji || '🍽️')}</div>
        <h2>All done — enjoy!</h2>
        ${r.notes?.length ? `<ul class="notes">${r.notes.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
        <div class="actions center">
          <button type="button" class="btn" data-action="goto" data-step="0">Start over</button>
          <a class="btn primary" href="#/recipes">Back to recipes</a>
        </div>
      </div>`;
    } else {
      const st = r.steps[s - 1];
      const next = r.steps[s];
      html = `<p class="step-label">Step ${s} of ${n}</p>
        ${st.title ? `<h2>${esc(st.title)}</h2>` : ''}
        <p class="step-text">${withTimers(st.text, st.title || `${r.short || r.name} · step ${s}`)}</p>
        ${st.tip ? `<p class="tip">💡 ${esc(st.tip)}</p>` : ''}
        ${next ? `<p class="up-next"><span>Up next</span> ${esc(next.title || next.text.slice(0, 60) + '…')}</p>` : ''}`;
    }
    slide.innerHTML = html;
    slide.classList.remove('enter');
    void slide.offsetWidth;
    slide.classList.add('enter');

    $('#progressBar').style.width = `${(s / last) * 100}%`;
    $('#dots').innerHTML = Array.from({ length: last + 1 }, (_, i) =>
      `<button type="button" class="dot${i === s ? ' on' : ''}${i < s ? ' past' : ''}" data-action="goto" data-step="${i}" aria-label="${i === 0 ? 'Ingredients' : i === last ? 'Finish' : `Step ${i}`}">${i === 0 ? '✓' : i === last ? '★' : i}</button>`).join('');
    $('#prevBtn').disabled = s === 0;
    $('#nextBtn').hidden = s === last;
    $('#nextBtn').textContent = s === 0 ? 'Start cooking →' : s === n ? 'Finish →' : 'Next →';
    saveCook();
  }

  function goStep(i) {
    cook.step = i;
    renderSlide();
    $('#slide').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }

  function attachSwipe(el) {
    let x0 = null, y0 = null;
    el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', e => {
      if (x0 == null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) goStep(cook.step + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  // Wake lock keeps the screen on while cooking (needs https or localhost).
  let wakeLock = null;
  async function requestWake() {
    if (!('wakeLock' in navigator) || wakeLock) return updateWakeBtn();
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; updateWakeBtn(); });
    } catch { wakeLock = null; }
    updateWakeBtn();
  }
  function releaseWake() { if (wakeLock) wakeLock.release(); wakeLock = null; }
  function updateWakeBtn() {
    const b = $('#wakeBtn');
    if (!b) return;
    b.setAttribute('aria-pressed', String(!!wakeLock));
    b.textContent = wakeLock ? '☀︎ Screen stays on' : '☾ Keep screen on';
  }

  // ───────────────────────── Shopping list ─────────────────────────
  // "1½ tsp + 1 tbsp" → "1½ tbsp": combine tsp/tbsp/cup into the unit that reads cleanly
  // (¼/⅓ cups, ½ tbsp), so 18 tsp shows as "6 tbsp" rather than "⅜ cup". Awkward totals round
  // up to the next ¼ cup or ½ tbsp — it's a shopping list, so a little extra is fine.
  const TSP = { tsp: 1, tbsp: 3, cup: 48 };
  const isNice = (q, steps) => steps.some(d => Math.abs(q * d - Math.round(q * d)) < 0.01);
  function mergeVolumes(amounts) {
    const vol = Object.keys(amounts).filter(u => TSP[u]);
    if (vol.length < 2) return amounts;
    const out = Object.fromEntries(Object.entries(amounts).filter(([u]) => !TSP[u]));
    const tsp = vol.reduce((sum, u) => sum + amounts[u] * TSP[u], 0);
    const unit = tsp >= 12 && isNice(tsp / 48, [4, 3]) ? 'cup'
      : tsp >= 3 && isNice(tsp / 3, [2, 3]) ? 'tbsp'
      : tsp < 3 ? 'tsp' : tsp >= 48 ? 'cup' : 'tbsp';
    let q = tsp / TSP[unit];
    const step = { cup: 4, tbsp: 2 }[unit];
    if (step && !isNice(q, [step, 3])) q = Math.ceil(q * step) / step;
    out[unit] = q;
    return out;
  }

  function buildList() {
    const map = new Map();
    for (const [id, servings] of Object.entries(shop.selected)) {
      const r = byId[id];
      if (!r) continue;
      const f = servings / r.servings;
      for (const ing of r.ingredients) {
        if (ing.aisle === 'none') continue;
        const name = ing.shop || ing.item;
        const key = name.toLowerCase().trim();
        let e = map.get(key);
        if (!e) {
          e = { key, name, aisle: ing.aisle || 'other', staple: !!ing.staple, optional: !!ing.optional, amounts: {}, noQty: false, recipes: new Set(), items: new Set() };
          map.set(key, e);
        }
        e.items.add(ing.item);
        e.staple = e.staple && !!ing.staple;
        e.optional = e.optional && !!ing.optional;
        if (ing.qty != null) { const u = ing.unit || ''; e.amounts[u] = (e.amounts[u] || 0) + ing.qty * f; }
        else e.noQty = true;
        e.recipes.add(r.short || r.name);
      }
    }
    const items = [...map.values()].map(e => ({
      ...e,
      // "1 carrots" → "1 large carrot": a single counted item keeps its singular recipe wording
      name: e.items.size === 1 && Object.keys(e.amounts).join() === '' && e.amounts[''] <= 1 ? [...e.items][0] : e.name,
      amount: Object.entries(mergeVolumes(e.amounts)).map(([u, q]) => fmtAmount(q, u)).join(' + '),
      recipes: [...e.recipes]
    }));
    const groups = [];
    for (const [key, label, icon] of AISLES) {
      const its = items.filter(i => !i.staple && i.aisle === key).sort((a, b) => a.name.localeCompare(b.name));
      if (its.length) groups.push({ key, label, icon, items: its });
    }
    const staples = items.filter(i => i.staple).sort((a, b) => a.name.localeCompare(b.name));
    if (staples.length) groups.push({ key: 'staples', label: 'Check the pantry', icon: '🧂', items: staples });
    return groups;
  }

  function renderShop() {
    const selCount = Object.keys(shop.selected).length;
    if (!ui.shopPane) ui.shopPane = selCount ? 'list' : 'pick';
    const groups = buildList();
    const allItems = groups.flatMap(g => g.items);
    const remaining = allItems.filter(i => !shop.checked[i.key]).length + shop.custom.filter(c => !c.checked).length;
    const total = allItems.length + shop.custom.length;

    const picker = REGIONS.map(rg => `<div class="pick-group"><h3>${esc(rg)}</h3>
      ${RECIPES.filter(r => r.region === rg).map(r => {
        const on = shop.selected[r.id];
        return `<div class="pick-row${on ? ' on' : ''}">
          <label class="check"><input type="checkbox" data-action="pick" data-id="${r.id}"${on ? ' checked' : ''}><span class="box"></span>
            <span class="pick-emoji">${esc(r.emoji || '🍽️')}</span>
            <span class="pick-name">${esc(r.name)}<small>${esc(r.cuisine)}</small></span>
          </label>
          ${on ? `<div class="stepper small" role="group" aria-label="Servings for ${esc(r.name)}">
            <button type="button" data-action="shop-servings" data-id="${r.id}" data-delta="-1" aria-label="Fewer servings">−</button>
            <span><b>${on}</b> srv</span>
            <button type="button" data-action="shop-servings" data-id="${r.id}" data-delta="1" aria-label="More servings">+</button>
          </div>` : ''}
        </div>`;
      }).join('')}</div>`).join('');

    const itemRow = i => `<li><label class="check${shop.checked[i.key] ? ' done' : ''}">
      <input type="checkbox" data-action="check" data-key="${esc(i.key)}"${shop.checked[i.key] ? ' checked' : ''}><span class="box"></span>
      <span class="item-text">${i.amount ? `<b class="qty">${esc(i.amount)}</b> ` : ''}${esc(i.name)}${i.optional ? ' <span class="note">(optional)</span>' : ''}
        <small class="for">${i.recipes.map(esc).join(' · ')}</small></span>
    </label></li>`;

    const list = total ? `
      ${groups.map(g => `<section class="aisle${g.key === 'staples' ? ' staples' : ''}">
        <h3><span>${g.icon}</span> ${esc(g.label)}</h3>
        ${g.key === 'staples' ? '<p class="muted small">Things most kitchens already have.</p>' : ''}
        <ul class="shop-list">${g.items.map(itemRow).join('')}</ul></section>`).join('')}
      ${shop.custom.length ? `<section class="aisle"><h3><span>📝</span> Extras</h3><ul class="shop-list">
        ${shop.custom.map(c => `<li><label class="check${c.checked ? ' done' : ''}">
          <input type="checkbox" data-action="check-custom" data-cid="${c.id}"${c.checked ? ' checked' : ''}><span class="box"></span>
          <span class="item-text">${esc(c.text)}</span></label>
          <button type="button" class="icon-btn" data-action="remove-custom" data-cid="${c.id}" aria-label="Remove ${esc(c.text)}">×</button></li>`).join('')}
      </ul></section>` : ''}`
      : `<div class="empty"><p>Your list is empty.</p><p class="muted">Pick some recipes${ui.shopPane === 'list' ? ' on the Recipes pane' : ''} and their ingredients will be combined here, grouped by aisle.</p>
          <button type="button" class="btn primary only-narrow" data-action="pane" data-pane="pick">Pick recipes</button></div>`;

    view.innerHTML = `<section class="page shop">
      <div class="page-head">
        <h1>Shopping list</h1>
        <p class="muted">${selCount ? `${selCount} recipe${selCount === 1 ? '' : 's'} · ${remaining} of ${total} items left` : 'Choose recipes to build a combined list.'}</p>
      </div>
      <div class="seg only-narrow" role="tablist">
        <button type="button" role="tab" data-action="pane" data-pane="pick" aria-selected="${ui.shopPane === 'pick'}">Recipes${selCount ? ` (${selCount})` : ''}</button>
        <button type="button" role="tab" data-action="pane" data-pane="list" aria-selected="${ui.shopPane === 'list'}">List${total ? ` (${remaining})` : ''}</button>
      </div>
      <div class="shop-layout" data-pane="${ui.shopPane}">
        <section class="panel pane-pick">
          <div class="panel-head"><h2>Recipes</h2>${selCount ? '<button type="button" class="link-btn" data-action="clear-selected">Clear</button>' : ''}</div>
          ${picker}
          ${selCount ? '<button type="button" class="btn primary block only-narrow" data-action="pane" data-pane="list">View list →</button>' : ''}
        </section>
        <section class="panel pane-list">
          <div class="panel-head"><h2>List</h2>
            <div class="toolbar">
              ${total ? `<button type="button" class="btn small" data-action="share">${navigator.share ? 'Share' : 'Copy'}</button>
              <button type="button" class="btn small ghost" data-action="clear-checked">Clear checked</button>` : ''}
            </div>
          </div>
          <form class="add-item" id="addItem">
            <input id="customInput" type="text" placeholder="Add an item (e.g. paper towels)" autocomplete="off" enterkeyhint="done">
            <button type="submit" class="btn small primary">Add</button>
          </form>
          ${list}
        </section>
      </div>
    </section>`;

    $('#addItem').addEventListener('submit', e => {
      e.preventDefault();
      const input = $('#customInput');
      const text = input.value.trim();
      if (!text) return;
      shop.custom.push({ id: Date.now().toString(36), text, checked: false });
      saveShop();
      ui.shopPane = 'list';
      renderShop();
      $('#customInput').focus();
    });
  }

  function listAsText() {
    const lines = [];
    const names = Object.entries(shop.selected).map(([id, s]) => `${byId[id].name} (${s})`);
    lines.push('🛒 Shopping list' + (names.length ? ` — ${names.join(', ')}` : ''), '');
    for (const g of buildList()) {
      const its = g.items.filter(i => !shop.checked[i.key]);
      if (!its.length) continue;
      lines.push(g.label.toUpperCase());
      its.forEach(i => lines.push(`☐ ${i.amount ? i.amount + ' ' : ''}${i.name}${i.optional ? ' (optional)' : ''}`));
      lines.push('');
    }
    const extras = shop.custom.filter(c => !c.checked);
    if (extras.length) { lines.push('EXTRAS'); extras.forEach(c => lines.push(`☐ ${c.text}`)); }
    return lines.join('\n').trim();
  }

  async function shareList() {
    const text = listAsText();
    if (navigator.share) {
      try { await navigator.share({ title: 'Shopping list', text }); return; }
      catch (err) { if (err.name === 'AbortError') return; }
    }
    try { await navigator.clipboard.writeText(text); toast('List copied to clipboard'); }
    catch { toast('Could not copy — try selecting the list manually'); }
  }

  // ───────────────────────── Timers ─────────────────────────
  const tray = $('#timerTray');
  let audioCtx;

  function unlockAudio() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
    } catch { /* no audio */ }
  }
  function beep() {
    if (!audioCtx) return;
    const t = audioCtx.currentTime;
    [0, 0.28, 0.56].forEach(off => {
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = 'sine';
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, t + off);
      g.gain.exponentialRampToValueAtTime(0.35, t + off + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + off + 0.22);
      o.connect(g).connect(audioCtx.destination);
      o.start(t + off);
      o.stop(t + off + 0.25);
    });
  }

  function addTimer(sec, label) {
    unlockAudio();
    if ('Notification' in window && Notification.permission === 'default' && window.isSecureContext) {
      Notification.requestPermission().catch(() => {});
    }
    timers.push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 5), label, total: sec, end: Date.now() + sec * 1000, left: null, fired: false });
    saveTimers();
    renderTray();
    toast(`Timer started: ${fmtClock(sec)}`);
  }
  const timeLeft = t => (t.left != null ? t.left : (t.end - Date.now()) / 1000);

  function renderTray() {
    tray.innerHTML = timers.map(t => `<div class="timer${t.fired ? ' ringing' : ''}${t.left != null ? ' paused' : ''}" data-tid="${t.id}">
      <div class="t-info"><span class="t-time">${t.fired ? 'Done!' : fmtClock(timeLeft(t))}</span><span class="t-label">${esc(t.label)}</span></div>
      <div class="t-btns">
        ${t.fired ? '' : `<button type="button" data-action="timer-pause" data-tid="${t.id}" aria-label="${t.left != null ? 'Resume' : 'Pause'}">${t.left != null ? '▶' : '❚❚'}</button>
        <button type="button" data-action="timer-add" data-tid="${t.id}" aria-label="Add a minute">+1m</button>`}
        <button type="button" data-action="timer-dismiss" data-tid="${t.id}" aria-label="${t.fired ? 'Dismiss' : 'Cancel'} timer">${t.fired ? 'OK' : '×'}</button>
      </div>
    </div>`).join('');
    document.body.classList.toggle('has-timers', timers.length > 0);
  }

  function tick() {
    let changed = false;
    const ringing = [];
    for (const t of timers) {
      if (!t.fired && t.left == null && timeLeft(t) <= 0) {
        t.fired = true;
        t.firedAt = Date.now();
        changed = true;
        notify(t);
      }
      if (t.fired && Date.now() - t.firedAt < 60000) ringing.push(t);
      const el = tray.querySelector(`[data-tid="${t.id}"] .t-time`);
      if (el && !t.fired) el.textContent = fmtClock(timeLeft(t));
    }
    if (changed) { saveTimers(); renderTray(); }
    if (ringing.length && Math.floor(Date.now() / 1000) % 2 === 0) beep();
    document.title = ringing.length ? `⏰ ${ringing[0].label}` : 'Cookbook';
  }

  function notify(t) {
    if (navigator.vibrate) navigator.vibrate([300, 150, 300, 150, 300]);
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    const opts = { body: t.label, icon: 'icons/icon-192.png', tag: t.id, requireInteraction: true };
    navigator.serviceWorker?.getRegistration().then(reg => {
      if (reg) reg.showNotification('⏰ Timer done', opts);
      else new Notification('⏰ Timer done', opts);
    }).catch(() => {});
  }

  // ───────────────────────── Events ─────────────────────────
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (!el || el.tagName === 'INPUT') return;
    const a = el.dataset.action, id = el.dataset.id;
    switch (a) {
      case 'region':
        ui.region = el.dataset.region;
        document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === el));
        renderResults();
        break;
      case 'toggle-shop': {
        const r = byId[id];
        if (shop.selected[id]) { delete shop.selected[id]; toast(`Removed ${r.name} from shopping list`); }
        else { shop.selected[id] = getServings(r); toast(`Added ${r.name} to shopping list`); }
        saveShop();
        const on = !!shop.selected[id];
        document.querySelectorAll(`[data-action="toggle-shop"][data-id="${id}"]`).forEach(b => {
          b.classList.toggle('on', on);
          b.setAttribute('aria-pressed', on);
          b.textContent = on ? '✓ On shopping list' : '+ Shopping list';
        });
        break;
      }
      case 'servings': {
        setServings(id, getServings(byId[id]) + Number(el.dataset.delta));
        if (byId[id] && cook.id === id && $('#slide')) renderSlide();
        else rerender();
        break;
      }
      case 'reset-got':
        delete got[id];
        store.set('got', got);
        rerender();
        break;
      case 'timer':
        e.preventDefault();
        addTimer(Number(el.dataset.sec), el.dataset.label);
        break;
      case 'timer-pause': {
        const t = timers.find(x => x.id === el.dataset.tid);
        if (!t) break;
        if (t.left != null) { t.end = Date.now() + t.left * 1000; t.left = null; }
        else t.left = timeLeft(t);
        saveTimers(); renderTray();
        break;
      }
      case 'timer-add': {
        const t = timers.find(x => x.id === el.dataset.tid);
        if (!t) break;
        if (t.left != null) t.left += 60; else t.end += 60000;
        saveTimers(); tick();
        break;
      }
      case 'timer-dismiss':
        timers = timers.filter(x => x.id !== el.dataset.tid);
        saveTimers(); renderTray(); tick();
        break;
      case 'prev': goStep(cook.step - 1); break;
      case 'next': goStep(cook.step + 1); break;
      case 'goto': goStep(Number(el.dataset.step)); break;
      case 'wake':
        if (wakeLock) { wantWake = false; releaseWake(); }
        else { wantWake = true; requestWake(); }
        store.set('wake', wantWake);
        updateWakeBtn();
        break;
      case 'pane': ui.shopPane = el.dataset.pane; renderShop(); window.scrollTo(0, 0); break;
      case 'shop-servings':
        shop.selected[id] = Math.max(1, Math.min(40, shop.selected[id] + Number(el.dataset.delta)));
        saveShop(); renderShop();
        break;
      case 'clear-selected':
        shop.selected = {}; shop.checked = {};
        saveShop(); renderShop();
        break;
      case 'clear-checked':
        shop.checked = {};
        shop.custom = shop.custom.filter(c => !c.checked);
        saveShop(); renderShop();
        toast('Cleared checked items');
        break;
      case 'remove-custom':
        shop.custom = shop.custom.filter(c => c.id !== el.dataset.cid);
        saveShop(); renderShop();
        break;
      case 'share': shareList(); break;
    }
  });

  document.addEventListener('change', e => {
    const el = e.target;
    const a = el.dataset?.action;
    if (!a) return;
    if (a === 'got') {
      const m = (got[el.dataset.id] = got[el.dataset.id] || {});
      if (el.checked) m[el.dataset.i] = true; else delete m[el.dataset.i];
      store.set('got', got);
      el.closest('.check').classList.toggle('done', el.checked);
      const counter = $('#slide .muted');
      if (counter && cook.id === el.dataset.id) {
        const r = byId[cook.id];
        counter.textContent = `${Object.keys(m).length} of ${r.ingredients.length} ready · tap to check off`;
      }
    } else if (a === 'pick') {
      const r = byId[el.dataset.id];
      if (el.checked) shop.selected[r.id] = getServings(r); else delete shop.selected[r.id];
      saveShop(); renderShop();
    } else if (a === 'check') {
      if (el.checked) shop.checked[el.dataset.key] = true; else delete shop.checked[el.dataset.key];
      saveShop(); renderShop();
    } else if (a === 'check-custom') {
      const c = shop.custom.find(x => x.id === el.dataset.cid);
      if (c) c.checked = el.checked;
      saveShop(); renderShop();
    }
  });

  document.addEventListener('keydown', e => {
    if (!$('#slide') || e.target.matches('input, textarea')) return;
    if (e.key === 'ArrowRight') goStep(cook.step + 1);
    else if (e.key === 'ArrowLeft') goStep(cook.step - 1);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      tick();
      if (wantWake && $('#slide')) requestWake();
    }
  });

  // ───────────────────────── Routing ─────────────────────────
  let current = '';
  function route() {
    const [name = 'recipes', id] = location.hash.replace(/^#\/?/, '').split('/');
    const tab = name === 'recipe' ? 'recipes' : name;
    document.querySelectorAll('.tabs a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
    if (name !== 'cook') releaseWake();
    const key = location.hash;
    if (name === 'recipe' && byId[id]) renderRecipe(id);
    else if (name === 'cook') renderCook(id);
    else if (name === 'shop') renderShop();
    else renderRecipes();
    if (key !== current) window.scrollTo(0, 0);
    current = key;
  }
  function rerender() {
    const y = window.scrollY;
    route();
    window.scrollTo(0, y);
  }

  window.addEventListener('hashchange', route);
  updateBadge();
  renderTray();
  route();
  setInterval(tick, 1000);
  tick();

  // ───────────────────────── PWA ─────────────────────────
  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  let installEvt;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    installEvt = e;
    $('#installBtn').hidden = false;
  });
  $('#installBtn').addEventListener('click', async () => {
    if (!installEvt) return;
    installEvt.prompt();
    await installEvt.userChoice.catch(() => {});
    installEvt = null;
    $('#installBtn').hidden = true;
  });
})();

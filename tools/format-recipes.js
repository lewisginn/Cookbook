// Loads every recipe file in recipes/, validates it, and rewrites one tidy file per continent
// (sorted by region, then name). Also regenerates the <script> tags in index.html and the
// precache list in sw.js. Run after adding or editing recipes:  node tools/format-recipes.js
//
// New recipes can be dropped into any .js file in recipes/ (e.g. recipes/new.js) that pushes onto
// window.RECIPES; this script moves them into the right continent file and deletes the extra file.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'recipes');
const AISLES = ['produce', 'meat', 'seafood', 'dairy', 'bakery', 'international', 'spices', 'pantry', 'frozen', 'other', 'none'];
const RECIPE_KEYS = ['id', 'name', 'nativeName', 'short', 'continent', 'region', 'cuisine', 'emoji', 'description',
  'servings', 'time', 'heat', 'tags', 'ingredients', 'steps', 'notes'];
const ING_KEYS = ['group', 'qty', 'unit', 'item', 'note', 'shop', 'aisle', 'optional', 'staple'];
const STEP_KEYS = ['title', 'text', 'tip'];
const REQUIRED = ['id', 'name', 'continent', 'region', 'emoji', 'description', 'servings', 'time', 'ingredients', 'steps'];

const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const q = s => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`;
const val = v => (typeof v === 'string' ? q(v) : Array.isArray(v) ? `[${v.map(val).join(', ')}]`
  : v && typeof v === 'object' ? `{ ${Object.entries(v).map(([k, x]) => `${k}: ${val(x)}`).join(', ')} }` : String(v));
const ordered = (obj, keys) => [...keys.filter(k => obj[k] !== undefined), ...Object.keys(obj).filter(k => !keys.includes(k) && obj[k] !== undefined)];
const inline = (obj, keys) => `{ ${ordered(obj, keys).map(k => `${k}: ${val(obj[k])}`).join(', ')} }`;
const banner = text => {
  const t = ` ${text} `;
  const left = Math.floor((72 - t.length) / 2);
  return `  // ${'─'.repeat(Math.max(3, left))}${t}${'─'.repeat(Math.max(3, 72 - t.length - left))}`;
};

function serialize(r) {
  const lines = ['  {'];
  for (const k of ordered(r, RECIPE_KEYS)) {
    const v = r[k];
    if (k === 'ingredients') {
      lines.push('    ingredients: [', v.map(i => `      ${inline(i, ING_KEYS)}`).join(',\n'), '    ],');
    } else if (k === 'steps') {
      lines.push('    steps: [', v.map(s => ['      {', ordered(s, STEP_KEYS).map(sk => `        ${sk}: ${val(s[sk])}`).join(',\n'), '      }'].join('\n')).join(',\n'), '    ],');
    } else if (k === 'notes') {
      lines.push('    notes: [', v.map(n => `      ${q(n)}`).join(',\n'), '    ],');
    } else {
      lines.push(`    ${k}: ${val(v)},`);
    }
  }
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  lines.push('  }');
  return lines.join('\n');
}

function validate(recipes) {
  const errors = [];
  const ids = new Set();
  for (const r of recipes) {
    const who = r.id || r.name || '(unnamed recipe)';
    for (const k of REQUIRED) if (r[k] == null || r[k] === '') errors.push(`${who}: missing ${k}`);
    if (ids.has(r.id)) errors.push(`${who}: duplicate id`);
    ids.add(r.id);
    (r.ingredients || []).forEach((i, n) => {
      if (!i.item) errors.push(`${who}: ingredient ${n + 1} has no item`);
      if (!AISLES.includes(i.aisle)) errors.push(`${who}: "${i.item}" has unknown aisle "${i.aisle}"`);
      if (i.qty != null && typeof i.qty !== 'number') errors.push(`${who}: "${i.item}" qty must be a number`);
    });
    (r.steps || []).forEach((s, n) => { if (!s.text) errors.push(`${who}: step ${n + 1} has no text`); });
  }
  return errors;
}

function replaceBetween(file, start, end, body) {
  const text = fs.readFileSync(file, 'utf8');
  const re = new RegExp(`(${start}[^\\n]*\\n)[\\s\\S]*?(\\n[ \\t]*${end})`);
  if (!re.test(text)) throw new Error(`markers ${start} / ${end} not found in ${path.basename(file)}`);
  fs.writeFileSync(file, text.replace(re, (_, a, b) => a + body + b));
}

// ── load ──
const sources = fs.readdirSync(DIR).filter(f => f.endsWith('.js')).sort();
const ctx = { window: { RECIPES: [] } };
vm.createContext(ctx);
for (const f of sources) vm.runInContext(fs.readFileSync(path.join(DIR, f), 'utf8'), ctx, { filename: f });
const recipes = ctx.window.RECIPES;

const errors = validate(recipes);
if (errors.length) {
  console.error(`✗ ${errors.length} problem(s), nothing written:\n  ` + errors.join('\n  '));
  process.exit(1);
}

// ── write one file per continent ──
const byContinent = new Map();
for (const r of recipes) {
  if (!byContinent.has(r.continent)) byContinent.set(r.continent, []);
  byContinent.get(r.continent).push(r);
}
const written = [];
for (const [continent, list] of [...byContinent].sort((a, b) => a[0].localeCompare(b[0]))) {
  list.sort((a, b) => a.region.localeCompare(b.region) || a.name.localeCompare(b.name));
  const parts = [];
  let region;
  for (const r of list) {
    if (r.region !== region) { region = r.region; parts.push(`${banner(region)}\n${serialize(r)}`); }
    else parts.push(serialize(r));
  }
  const file = `${slug(continent)}.js`;
  const body = `// ${continent} recipes, grouped by region. See CLAUDE.md for the schema.\n` +
    `// Formatting is generated: after editing, run  node tools/format-recipes.js\n\n` +
    `(window.RECIPES = window.RECIPES || []).push(\n${parts.join(',\n')}\n);\n`;
  fs.writeFileSync(path.join(DIR, file), body);
  written.push(file);
}
for (const f of sources) if (!written.includes(f)) fs.unlinkSync(path.join(DIR, f));

replaceBetween(path.join(ROOT, 'index.html'), '<!-- recipes:start', '<!-- recipes:end',
  written.map(f => `  <script src="recipes/${f}"></script>`).join('\n'));
replaceBetween(path.join(ROOT, 'sw.js'), '// recipes:start', '// recipes:end',
  written.map(f => `  'recipes/${f}',`).join('\n'));

const regions = new Set(recipes.map(r => `${r.continent}/${r.region}`));
console.log(`✓ ${recipes.length} recipes · ${byContinent.size} continents · ${regions.size} regions`);
for (const f of written) console.log(`  recipes/${f}`);

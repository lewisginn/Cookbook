# Cookbook

Personal cookbook web app (installable PWA). Plain HTML/CSS/JS — no build step, no dependencies.

- `recipes.js` — **all recipe data** (`window.RECIPES` array). This is the only file to touch when adding recipes.
- `app.js` — the whole UI: Recipes (grouped by region), recipe detail, Cook (follow-along step mode with timers), Shopping (multi-recipe list builder).
- `styles.css`, `index.html`, `manifest.webmanifest`, `sw.js` (offline cache), `icons/`.
- `serve.js` — `node serve.js` serves on port 8080 on all interfaces (prints the LAN URL for a phone).
- `tools/make_icons.py` — regenerates the PNG icons (needs Pillow).

User state (shopping list, checked ingredients, servings, timers) lives in the browser's localStorage under `cookbook.*` keys.

## Adding a recipe

Append an object to the array in `recipes.js`, placed under the matching region comment banner (add a new banner for a new region). Keep recipes authentic and well-tested; write quantities for the stated `servings`.

```js
{
  id: 'kebab-case-unique-id',
  name: 'Display Name',
  nativeName: 'Optional name in original language',
  short: 'Short label',            // used on shopping list "for" tags and timer labels
  region: 'South Asian',            // UI grouping — reuse an existing region string exactly
  cuisine: 'Indian · Goan',          // subtitle
  emoji: '🍛',
  description: 'One or two sentences.',
  servings: 4,
  time: { prep: 25, cook: 55, inactive: 60, inactiveLabel: 'marinate' }, // minutes; inactive optional
  heat: 0,                           // 0 mild … 3 very spicy
  tags: ['curry', 'chicken'],
  ingredients: [
    // qty is a number (0.5, 1.5); omit qty for "to taste"/"for the table"
    { group: 'Sauce', qty: 2, unit: 'tbsp', item: 'soy sauce', note: 'low-sodium', aisle: 'international' },
    // shop: merge name for the shopping list when the item text differs between recipes
    { qty: 2, item: 'large yellow onions', shop: 'yellow onions', aisle: 'produce' },
    { qty: 1, unit: 'tsp', item: 'kosher salt', aisle: 'pantry', staple: true }, // staple → "Check the pantry"
    { qty: 1, unit: 'cup', item: 'water', aisle: 'none' },                       // none → never on shopping list
    { item: 'cheesecloth', aisle: 'other', optional: true }
  ],
  steps: [
    { title: 'Short title', text: 'Instruction. Times like "10 minutes", "1.5 hours", "20 seconds" become timer buttons.', tip: 'Optional tip.' }
  ],
  notes: ['Optional storage / substitution notes.']
}
```

Conventions:
- **Regions in use:** `African`, `East Asian`, `European`, `Latin American`, `Mediterranean`, `Middle Eastern`, `South Asian`, `Southeast Asian`. Others to use as needed: `North American`, `Caribbean`. Each region has a `// ─── Region ───` banner in `recipes.js`; keep recipes under their banner.
- **Aisles:** `produce`, `meat`, `seafood`, `dairy`, `bakery`, `international`, `spices`, `pantry`, `frozen`, `other`, `none`.
- **Units:** `cup`, `tbsp`, `tsp`, `lb`, `oz`, `g`, `kg`, `ml`, `quart`, `in` (ginger), `stick`, `bunch`, `can`, `pinch`, or none for counted items (put the noun in `item`, e.g. `qty: 8, item: 'garlic cloves'`).
- Use the **same `item` (or `shop`) name** across recipes for shared ingredients so they merge on the shopping list. Established names: `yellow onions`, `white onions`, `red onions`, `shallots`, `garlic cloves`, `fresh ginger` (unit `in`), `cilantro` (cups), `scallions`, `lemons`, `limes`, `Roma tomatoes`, `red bell peppers`, `serrano chilies`, `jalapeños`, `cucumbers`, `bean sprouts`, `boneless skinless chicken thighs`, `eggs`, `unsalted butter`, `heavy cream`, `plain whole-milk yogurt`, `canned crushed tomatoes` (unit `oz`), `tomato paste`, `chicken stock`, `basmati rice`, `fish sauce`, `soy sauce`, `ground cumin`, `ground coriander`, `garam masala`, `ground turmeric`, `Kashmiri chili powder`, `smoked paprika`, `red pepper flakes`, `bay leaves`, `whole cloves`, `cinnamon` (unit `stick`), `black peppercorns`, `cumin seeds`. Staples: `kosher salt`, `black pepper`, `vegetable oil`, `olive oil`, `granulated sugar`, `brown sugar`. For a half/single item, use singular `item` with plural `shop` (e.g. `item: 'lemon', shop: 'lemons'`).
- tsp/tbsp/cup amounts of the same ingredient are auto-combined on the shopping list; other units are listed side by side.
- Only step `text` gets timer buttons (not `tip` or `notes`), so avoid stray durations in step text that aren't real timers (e.g. say "up to a day" rather than "up to 24 hours").
- Write step times as digits ("12 minutes", not "twelve minutes") and use a decimal for fractional hours ("1.5 hours") so the timer detector picks them up.
- After changing app files (not just recipes), bump `VERSION` in `sw.js` so installed copies refresh their cache.

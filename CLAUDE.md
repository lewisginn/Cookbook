# Cookbook

Personal cookbook web app (installable PWA). Plain HTML/CSS/JS — no build step, no dependencies.

- `recipes/*.js` — **all recipe data**, one file per continent (`north-america.js`, `europe.js`, …). Each pushes onto `window.RECIPES`.
- `tools/format-recipes.js` — validates every recipe, rewrites the continent files in a consistent format (sorted by region, then name, with region banners), and regenerates the recipe `<script>` tags in `index.html` and the precache list in `sw.js` (between the `recipes:start` / `recipes:end` markers). **Run it after any recipe change:** `node tools/format-recipes.js`. It refuses to write anything if validation fails.
- `app.js` — the whole UI: Recipes (grouped continent → region), recipe detail, Cook (follow-along step mode with timers), Shopping (multi-recipe list builder).
- `styles.css`, `index.html`, `manifest.webmanifest`, `sw.js` (offline cache), `icons/`.
- `serve.js` — `node serve.js` serves on port 8080 on all interfaces (prints the LAN URL for a phone).
- `tools/make_icons.py` — regenerates the PNG icons (needs Pillow).

User state (shopping list, checked ingredients, servings, timers) lives in the browser's localStorage under `cookbook.*` keys.

## Adding recipes

Easiest path: write the new recipes into a scratch file such as `recipes/new.js`:

```js
(window.RECIPES = window.RECIPES || []).push(
  { /* recipe */ },
  { /* recipe */ }
);
```

then run `node tools/format-recipes.js`. It merges them into the right continent files and deletes the scratch file. (Editing a continent file directly and re-running the formatter works too.)

```js
{
  id: 'kebab-case-unique-id',
  name: 'Display Name',
  nativeName: 'Optional name in original language/script',
  short: 'Short label',            // used on shopping list "for" tags and timer labels
  continent: 'North America',       // top-level grouping — reuse an existing string exactly
  region: 'Cajun & Creole',         // ethnicity / sub-regional cuisine within the continent
  cuisine: 'Louisiana',             // optional finer subtitle (city, state, sub-style); omit if it would repeat region
  emoji: '🍲',
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

### Continents and regions in use

- **Africa:** East African, North African, Southern African, West African
- **Asia:** Chinese, Filipino, Indian, Indonesian & Malaysian, Japanese, Korean, Thai, Vietnamese
- **Caribbean:** Cuban, Jamaican, Puerto Rican
- **Europe:** British & Irish, Central & Eastern European, French, German & Austrian, Greek, Italian, Portuguese, Scandinavian, Spanish
- **Middle East:** Israeli, Levantine, Persian, Turkish
- **North America:** Cajun & Creole, Central American, Chesapeake & Mid-Atlantic, Mexican, Northeastern, Southern & Soul Food, Tex-Mex & Southwestern
- **South America:** Argentine, Brazilian, Colombian & Venezuelan, Peruvian

Mexico and Central America sit under North America (the user's preference); the Caribbean is its own continent group. Add new regions freely when a recipe doesn't fit (e.g. `Hawaiian`, `Midwestern`, `Pakistani`, `Taiwanese`, `Lebanese`); the UI picks them up automatically.

### Conventions

- **Aisles:** `produce`, `meat`, `seafood`, `dairy`, `bakery`, `international`, `spices`, `pantry`, `frozen`, `other`, `none`.
- **Units:** `cup`, `tbsp`, `tsp`, `lb`, `oz`, `ml`, `quart`, `in` (ginger/galangal), `stick`, `bunch`, `can`, `head`, `stalk`, `sprig`, `slice`, `loaf`, `pinch`, or none for counted items (put the noun in `item`, e.g. `qty: 8, item: 'garlic cloves'`).
- Use the **same `item` (or `shop`) name** across recipes for shared ingredients so they merge on the shopping list. Before inventing a name, grep `recipes/` for an existing one. Common ones: `yellow onions`, `white onions`, `red onions`, `shallots`, `garlic cloves`, `fresh ginger` (unit `in`), `cilantro` / `flat-leaf parsley` (cups), `scallions`, `lemons`, `limes`, `Roma tomatoes`, `red bell peppers`, `green bell peppers`, `serrano chilies`, `jalapeños`, `scotch bonnet peppers`, `carrots`, `celery` (unit `stalk`), `fresh thyme` (unit `sprig`), `Yukon Gold potatoes` (lb), `boneless skinless chicken thighs`, `bone-in skin-on chicken thighs`, `boneless pork shoulder`, `beef chuck roast`, `large shrimp` (lb), `eggs`, `unsalted butter`, `heavy cream`, `whole milk`, `plain whole-milk yogurt`, `plain Greek yogurt`, `sour cream`, `canned crushed tomatoes` (oz), `tomato paste`, `chicken stock`, `beef stock`, `coconut milk` (oz), `basmati rice`, `jasmine rice`, `long-grain white rice`, `short-grain white rice`, `all-purpose flour`, `fish sauce`, `soy sauce`, `tahini`, `crusty bread` (unit `loaf`). Staples: `kosher salt`, `black pepper`, `vegetable oil`, `olive oil`, `granulated sugar`, `brown sugar`.
- For a half/single item, use singular `item` with plural `shop` (e.g. `item: 'lemon', shop: 'lemons'`).
- tsp/tbsp/cup amounts are auto-combined on the shopping list; other units are listed side by side.
- Only step `text` gets timer buttons (not `tip` or `notes`), so avoid stray durations in step text that aren't real timers (e.g. say "up to a day" rather than "up to 24 hours").
- After changing app files (not just recipes), bump `VERSION` in `sw.js` so installed copies refresh their cache.

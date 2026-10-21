# Cookbook — Session Handoff

## State (all committed & pushed to `main`)
- **Live:** https://lewisginn.github.io/Cookbook/ (GitHub Pages, repo `lewisginn/Cookbook`, public). User has installed it on their iPhone via QR code.
- **300 recipes**, 7 continents, 56 regions (continent → region/ethnicity → cuisine). Every ingredient merges cleanly on the shopping list (verified with all 300 selected: 583 items, no "+" splits).
- **Read `CLAUDE.md` first** — it has the schema, region list, ingredient-naming conventions, formatter workflow and hosting notes.

## Key files
- `recipes/<continent>.js` — recipe data (generated formatting).
- `tools/format-recipes.js` — run `node tools/format-recipes.js` after ANY recipe change: validates, sorts, rewrites continent files, regenerates `<script>` tags in `index.html` + precache list in `sw.js`. Drop new recipes in a scratch file like `recipes/new.js`; it gets merged + deleted.
- `app.js` — UI: Recipes (continent/region chip rows with arrow scrollers + wheel scroll), recipe detail, Cook mode (steps, timers auto-detected from "N minutes" in step text, wake lock), Shopping (multi-recipe builder, tsp/tbsp/cup and oz/lb merging, picker search). iPhone "Add to Home Screen" instructions sheet.
- `sw.js` — bump `VERSION` (currently `cookbook-v5`) whenever app files change.
- `serve.js` — local dev server on :8080 (`.claude/launch.json` → preview name `cookbook`).

## Deploy
`git push` to `main` → Pages rebuilds in ~1 min. `gh` is at `C:\Program Files\GitHub CLI\gh.exe` (not on PATH; logged in as `lewisginn`). Check build: `gh api repos/lewisginn/Cookbook/pages/builds/latest --jq .status`.

## Verification habits
- After adding recipes, in the browser select all recipes on the Shopping tab and look for " + " in amounts (unit mismatch) — fix by matching units/`shop` names.
- Avoid stray durations in step `text` (they become timer buttons).

## User preferences
- Mexico & Central America live under **North America**; regions are ethnicities/sub-regional cuisines (e.g., Cajun & Creole, Chesapeake & Mid-Atlantic, Northeastern).
- Uses both PC and iPhone; wants easy navigation on both.
- No SMS tool available — use QR codes to send links to their phone.

## Ideas not yet done
- "Use what I have" ingredient search; weekly meal planner feeding the shopping list; recipe photos; per-step ingredient lists in Cook mode; printable cards; favorites; sync of shopping list between devices (currently per-device localStorage).

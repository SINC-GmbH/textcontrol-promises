# textcontrol-scraper

Scrapes the TX TextControl JavaScript API documentation site and cross-checks
it against the hand-maintained `lib/types/TXTextControl.d.ts` declarations.
Optionally validates against the real minified JS file.

## Setup

```powershell
cd tools/scraper
npm install
npx playwright install chromium
```

## Usage

```powershell
# Dry-run diff: show what changed in the docs vs the current d.ts
npx ts-node src/index.ts

# Write a JSON report file
npx ts-node src/index.ts --report scraper-report.json

# Patch d.ts with stubs for new methods found in the docs
npx ts-node src/index.ts --update

# Cross-check real API via running demo app (demo must be running on localhost:8080)
npx ts-node src/index.ts --check-real

# Override the demo URL
npx ts-node src/index.ts --check-real --demo-url http://localhost:8080

# Run browser in non-headless mode (useful for debugging scraped selectors)
npx ts-node src/index.ts --no-headless
```

## Color coding

| Color | Meaning |
|-------|---------|
| Green  | Unchanged / present in both docs and d.ts |
| Yellow | New in docs — not yet in d.ts |
| Red    | Removed from docs — still in d.ts |
| Cyan   | Signature changed between docs and d.ts |
| Green  | Only in real API — present in real JS but not in d.ts |

## Modules

| Module | Description |
|--------|-------------|
| `DocsScraper` | Playwright-based crawler for the TX HTML docs site |
| `DtsReader` | ts-morph reader for the current d.ts declarations |
| `Differ` | Compares scraped vs declared, produces a `DiffReport` |
| `DtsPatcher` | Inserts stubs for new methods into the d.ts (--update) |
| `RealApiInspector` | Playwright-based: navigates to running demo, waits for TX init, enumerates methods |

## Notes

- **`--check-real` requires a running demo** — the TX TextControl JS API is
  populated via WebSocket after `TXTextControl.init()`. The inspector navigates
  to the demo at `http://localhost:8080`, waits up to 30s for the API to be
  fully initialized, then enumerates all camelCase method names.
- **Selector calibration**: `DocsScraper` scrapes the
  [TXTextControl Object](https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.txtextcontrol.object.htm)
  page. Methods table is the second `<table>` (index 1). Signatures are in `<pre>` tags.

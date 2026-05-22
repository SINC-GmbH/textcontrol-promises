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

# Cross-check the real TX JS API (TX server must be reachable)
npx ts-node src/index.ts --check-real

# Override the TX JS URL
npx ts-node src/index.ts --check-real --tx-url https://tx.sinc-dev.de:44282/txwebsocket/GetResource?name=tx-document-editor.min.js

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
| `RealApiInspector` | Fetches the min.js, runs it in a VM, enumerates real methods |

## Implementing DocsScraper selectors

The `DocsScraper.collectMethodLinks()` and `scrapeMethodPage()` methods contain
`// TODO` placeholders because the exact HTML structure of the docs site needs
to be verified against the live page. Use the Claude MCP Playwright tool to
inspect the docs page and update the CSS selectors accordingly.

To inspect live:
1. Run with `--no-headless` to see the browser
2. Check what selectors match the method names, signatures, and descriptions
3. Update the `$$eval` / `$eval` calls in `DocsScraper.ts`

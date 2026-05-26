# TC-010: Add Table via Promise Wrapper

Tests `TextControlContext.tables.add()` — the Promise-based wrapper around
`TXTextControl.tables.add()`. This is the primary integration test for the
table collection wrapper.

## Setup

- TC-001 passed (editor initialized).
- Start with a blank document (reload the page to reset state).

## Steps

1. Navigate to `http://localhost:8080` and wait for the editor to initialize.
2. Use `browser_evaluate` to call the `addTable` helper exposed by `demo/main.js`:
   ```javascript
   window.addTable(3, 3, 101)
   ```
3. Wait 2 seconds for the async operation to complete.
4. Check console output with `browser_console_messages`.
   - Must contain: `"Table with ID 101 added."`
5. Take a screenshot — verify a 3×3 table is visible in the editor area.
6. Use `browser_evaluate` to verify no uncaught Promise rejections:
   ```javascript
   window.__uncaughtError ?? 'none'
   ```

## Expected Result

- Console: `"Table with ID 101 added."`
- A 3-column, 3-row table is visible in the editor.
- No rejected Promises / error callbacks.

## Failure Conditions

- Console shows `"Table with ID 101 added via callback."` but NOT `"Table with ID 101 added."` → wrapper is broken, native API works.
- Console shows an error or rejected Promise.
- No table visible in the editor.
- `addTable` throws synchronously (import or initialization error).

## Notes

The `addTable` function is defined in `demo/main.js` as `window.addTable` and
uses `TextControlContext` internally. A failure here pinpoints the Promise
wrapper layer (not the native TX API) because the native path also runs in
`main.js` and logs `"Table with ID 101 added via callback."`.

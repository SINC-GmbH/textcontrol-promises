# TC-001: Initialize TextControl Editor

Tests that the demo page loads, `TextControlContext.initialize()` completes,
and `untilTextControlLoaded()` resolves without error.

## Setup

- Demo server running: `cd demo && npx live-server --port=8080`
- No additional pre-conditions (this is the first test)

## Steps

1. Navigate to `http://localhost:8080` using `browser_navigate`.
2. Take a screenshot and confirm the page title or body loaded (no 404 / blank page).
3. Wait up to 30 seconds for `#editor` to appear and have non-zero height using
   `browser_wait_for`. The TX TextControl editor fills `#editor` once initialized.
4. Use `browser_evaluate` to check the TX loaded state:
   ```javascript
   typeof TXTextControl !== 'undefined' && TXTextControl !== null
   ```
   Verify it returns `true`.
5. Check the browser console with `browser_console_messages`:
   - There must be **no** uncaught errors.
   - `"Is Center: false"` log line should be present (from the type-check in `main.js`).
6. Take a final screenshot showing the editor with the initial 3×3 table.

## Expected Result

- Page loads at `http://localhost:8080`.
- `#editor` is visible and non-empty.
- Console shows `"Is Center: false"` (enum type check).
- Console shows `"Table with ID 101 added via callback."` (from the plain TXTextControl example in `main.js`).
- No red error messages in the console.

## Failure Conditions

- Page does not load (server not running).
- `#editor` remains empty after 30 seconds (TX backend unreachable).
- Console contains uncaught errors.
- `typeof TXTextControl` returns `'undefined'`.

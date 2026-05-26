# TC-030: Add Editable Region via Promise Wrapper

Tests `TextControlContext.editableRegions.add()` — the Promise wrapper around
`TXTextControl.editableRegions.add()`.

## Setup

- TC-001 passed (editor initialized).
- Start with a blank document (reload the page to reset state).
- Input position is at the beginning of the document (no selection required).

## Steps

1. Navigate to `http://localhost:8080` and wait for the editor to initialize.
2. Use `browser_evaluate` to get the initial count:
   ```javascript
   window.getEditableRegionCount()
   ```
   Note the value (expected: `0` on a fresh document).
3. Use `browser_evaluate` to add an editable region:
   ```javascript
   window.addEditableRegion("testuser", 1)
   ```
4. Wait 1 second.
5. Check console output with `browser_console_messages`.
   - Must contain: `"Editable region added for user=testuser id=1"`
6. Use `browser_evaluate` to confirm the count increased:
   ```javascript
   window.getEditableRegionCount()
   ```
   Expected: count is now `1`.
7. Verify no error callbacks in the console.

## Expected Result

- Console: `"Editable region added for user=testuser id=1"`
- `getEditableRegionCount()` returns `1` after the add.
- No rejected Promises or error callbacks.

## Failure Conditions

- `addEditableRegion` throws or rejects.
- Count does not increase after the add.
- Console shows an error callback.

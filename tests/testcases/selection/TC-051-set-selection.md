# TC-051: Set Selection Start and Length

Tests `Selection.setStart()` and `Selection.setLength()` — moving and extending
the selection via the Promise wrapper.

## Setup

- TC-001 passed (editor initialized).
- The editor contains at least 10 characters of text.

## Steps

1. (Editor already initialized — do not reload.)
2. Use `browser_evaluate` to set the selection to position 1, length 5:
   ```javascript
   window.setSelection(1, 5)
   ```
3. Wait 500 ms.
4. Use `browser_evaluate` to read back the selection:
   ```javascript
   window.getSelectionInfo()
   ```
5. Verify the returned object has:
   - `start`: `1`
   - `length`: `5`
6. Verify the console shows `"Selection set: start=1 length=5"` followed by
   `"Selection: start=1 length=5"`.
7. Verify no error callbacks.

## Expected Result

- `start === 1` and `length === 5` after the set.
- No rejected Promises.

## Failure Conditions

- `setStart()` or `setLength()` rejects.
- Read-back values do not match what was set.

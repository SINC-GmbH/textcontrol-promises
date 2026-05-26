# TC-050: Get Selection Start and Length

Tests `Selection.getStart()` and `Selection.getLength()` — the Promise wrappers
for reading the current input position and selection length.

## Setup

- TC-001 passed (editor initialized).
- The editor contains at least some text (type a few characters if the document is blank).

## Steps

1. (Editor already initialized — do not reload.)
2. Use `browser_evaluate` to read the current selection:
   ```javascript
   window.getSelectionInfo()
   ```
3. Verify the returned object has:
   - `start`: a number ≥ 1 (1-based input position)
   - `length`: a number ≥ 0
   - `text`: a string (may be empty if nothing is selected)
4. Check console contains `"Selection: start="`.
5. Verify no error callbacks.

## Expected Result

- `start` is a number ≥ 1.
- `length` is a number ≥ 0.
- No rejected Promises.

## Failure Conditions

- `getStart()` or `getLength()` rejects.
- `start` is `undefined`, `null`, or non-numeric.

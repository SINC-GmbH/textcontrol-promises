# TC-020: Get Application Field Name

Tests `ApplicationField.getName()` — the Promise wrapper around
`txApplicationField.getName`.

## Setup

- TC-001 passed (editor initialized).
- A document with at least one ApplicationField (merge field) is loaded.
  If no such document is available, ask the operator to load one manually
  or skip this test and mark it BLOCKED.

## Steps

1. (Editor initialized from TC-001 — do not reload.)
2. Use `browser_evaluate` to get the count of application fields:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     return await ctx.applicationFields.getCount();
   })()
   ```
3. If the count is `0`, mark this test BLOCKED (no merge fields in the document).
4. If count > 0, get the first field and call `getName()`:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     const field = await ctx.applicationFields.elementAt(0);
     return await field.getName();
   })()
   ```
5. Verify the return value is a non-empty string.
6. Verify no error callbacks appear in the console.

## Expected Result

- `getCount()` returns a number ≥ 1.
- `getName()` returns a non-empty string (the field name, e.g. `"FirstName"`).
- No errors in console.

## Failure Conditions

- `getCount()` rejects.
- `getName()` rejects or returns an empty/null value.
- Console shows an error callback.

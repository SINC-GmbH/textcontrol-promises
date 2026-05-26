# TC-041: Get Form Field by ID

Tests `TextControlContext.formFields.getItem(id)` — retrieving a specific
form field wrapper by its numeric identifier.

## Setup

- TC-001 passed (editor initialized).
- TC-040 passed (at least one form field exists).

## Steps

1. (Editor already initialized — do not reload.)
2. Use `browser_evaluate` to get the first form field's id then look it up:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     const first = await ctx.formFields.elementAt(0);
     if (!first) return 'no fields';
     const id = await first.id;
     const fetched = await ctx.formFields.getItem(id);
     return fetched ? 'found' : 'not found';
   })()
   ```
3. Verify the return value is `"found"`.
4. Verify no error callbacks.

## Expected Result

- `getItem(id)` returns the field wrapper (result is `"found"`).
- No errors in console.

## Failure Conditions

- `elementAt(0)` or `getItem(id)` rejects.
- Result is `"not found"` or `null`.

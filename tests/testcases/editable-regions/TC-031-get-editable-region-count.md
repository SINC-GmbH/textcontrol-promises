# TC-031: Get Editable Region Count

Tests `TextControlContext.editableRegions.getCount()` — reading the collection
size without iterating.

## Setup

- TC-001 passed (editor initialized).
- TC-030 passed (at least one editable region was added).

## Steps

1. (Editor already initialized — do not reload.)
2. Use `browser_evaluate` to call `getCount()` directly:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     return await ctx.editableRegions.getCount();
   })()
   ```
3. Verify the return value is a number ≥ 1.
4. Verify no error callbacks in the console.

## Expected Result

- Return value is a number ≥ 1.
- No errors in console.

## Failure Conditions

- `getCount()` rejects or returns `undefined`.
- Return value is `0` when TC-030 already added a region.

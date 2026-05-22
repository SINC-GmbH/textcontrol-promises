# TC-021: Set Application Field Parameters

Tests `ApplicationField.setParameters()` and the round-trip via
`getParameters()`.

## Setup

- TC-020 passed (at least one ApplicationField exists and getName works).

## Steps

1. Use `browser_evaluate` to get the first field's current parameters:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     const field = await ctx.applicationFields.elementAt(0);
     return JSON.stringify(await field.getParameters());
   })()
   ```
2. Note the original parameters array.
3. Set a new parameters array via `setParameters`:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     const field = await ctx.applicationFields.elementAt(0);
     const originalName = await field.getName();
     await field.setParameters([originalName, '\\b "before"', '\\f "after"', '\\@ ""', '\\# ""']);
     return 'OK';
   })()
   ```
4. Verify return is `'OK'` (no rejection).
5. Call `getParameters()` again and verify the new values are returned:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     const field = await ctx.applicationFields.elementAt(0);
     return JSON.stringify(await field.getParameters());
   })()
   ```
6. Verify the array contains `'\\b "before"'` and `'\\f "after"'`.
7. Check console for any error callbacks.

## Expected Result

- `setParameters()` resolves without rejecting.
- `getParameters()` returns the updated array with the new values.
- No error callbacks in console.

## Failure Conditions

- `setParameters()` rejects (error callback triggered).
- `getParameters()` returns the OLD values after setting (cache invalidation bug).
- Console shows an error.

## Notes

A common bug in the wrapper: the setter updates the cached `#parameters` field
to `this.#parameters` (self-assignment) instead of the new value. If the test
passes for `setParameters()` but `getParameters()` returns the old value, that
bug is present.

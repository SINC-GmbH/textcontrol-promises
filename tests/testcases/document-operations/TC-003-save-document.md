# TC-003: Save Document

Tests `TextControlContext.save()` (the Promise wrapper around `TXTextControl.save`).

## Setup

- TC-001 passed (editor is initialized).
- A document is loaded (run TC-002 first, or use the default document from TC-001).

## Steps

1. Navigate to `http://localhost:8080` and wait for the editor to initialize.
2. Use `browser_evaluate` to save the current document and capture the result:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     try {
       const result = await ctx.save(TXTextControl.StreamType.RichTextFormat, null);
       return typeof result === 'object' ? 'SAVED: ' + JSON.stringify(Object.keys(result)) : 'SAVED: ' + result;
     } catch (e) {
       return 'ERROR: ' + e.message;
     }
   })()
   ```
3. Verify the return value starts with `'SAVED'`.
4. Verify the result object contains `base64Data` (the saved document content).
5. Check the console for any error callbacks.

## Expected Result

- `ctx.save()` resolves with a result object.
- Result contains `base64Data` (non-empty string).
- Return value from `browser_evaluate` starts with `'SAVED'`.
- No error callbacks in console.

## Failure Conditions

- `ctx.save()` rejects.
- Result is null / undefined.
- `base64Data` is empty.

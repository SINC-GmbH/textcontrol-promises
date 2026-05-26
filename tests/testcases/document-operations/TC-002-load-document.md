# TC-002: Load Document

Tests `TextControlContext.load()` (the Promise wrapper around `TXTextControl.load`).

## Setup

- TC-001 passed (editor is initialized).
- Have a small base64-encoded test document ready. A minimal valid RTF document
  in base64 can be generated with:
  ```javascript
  btoa("{\\rtf1 Hello World}")
  ```

## Steps

1. Navigate to `http://localhost:8080` and wait for the editor to initialize (see TC-001).
2. Use `browser_evaluate` to load a test document via the Promise wrapper:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     try {
       await ctx.load(TXTextControl.StreamType.RichTextFormat, btoa("{\\rtf1 Test document}"), null);
       return 'LOADED';
     } catch (e) {
       return 'ERROR: ' + e.message;
     }
   })()
   ```
3. Verify the return value is `'LOADED'`.
4. Take a screenshot — the editor content should reflect the loaded document text.
5. Check the console for any error callbacks.

## Expected Result

- `ctx.load()` resolves without throwing.
- Return value from `browser_evaluate` is `'LOADED'`.
- Editor displays the loaded document content.
- No error callbacks in console.

## Failure Conditions

- `ctx.load()` rejects (caught by `catch`) — indicates error callback triggered.
- Editor content unchanged after the call.
- Console shows `ErrorCallback` or network error.

## Notes

If the RTF test document is invalid, TX will call `errorCallback` and the
Promise will reject. Use `TXTextControl.StreamType.PlainText` with plain text
as a fallback.

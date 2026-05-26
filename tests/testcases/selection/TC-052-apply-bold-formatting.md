# TC-052: Apply Bold Formatting to Selection

Tests `Selection.setBold()` — setting character formatting on the selected text
via the Promise wrapper.

## Setup

- TC-001 passed (editor initialized).
- The editor contains at least 10 characters of text.
- TC-051 passed (selection can be set programmatically).

## Steps

1. (Editor already initialized — do not reload.)
2. Use `browser_evaluate` to select 5 characters starting at position 1:
   ```javascript
   window.setSelection(1, 5)
   ```
3. Use `browser_evaluate` to apply bold:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     await ctx.selection.setBold(true);
     const bold = await ctx.selection.getBold();
     console.log("bold after setBold(true):", bold);
     return bold;
   })()
   ```
4. Verify the return value is `true`.
5. Take a screenshot — the selected text should appear bold in the editor.
6. Verify no error callbacks.

## Expected Result

- `getBold()` returns `true` after `setBold(true)`.
- Selected characters appear visually bold in the screenshot.
- No rejected Promises.

## Failure Conditions

- `setBold()` or `getBold()` rejects.
- `getBold()` returns `false` after setting bold.
- No visible change in the editor.

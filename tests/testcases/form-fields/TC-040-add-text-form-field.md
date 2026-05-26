# TC-040: Add Text Form Field via Promise Wrapper

Tests `TextControlContext.formFields.addTextFormField()` — the Promise wrapper
that inserts a text form field at the current input position.

## Setup

- TC-001 passed (editor initialized).
- Start with a blank document (reload the page to reset state).

## Steps

1. Navigate to `http://localhost:8080` and wait for the editor to initialize.
2. Use `browser_evaluate` to get the initial form field count:
   ```javascript
   window.getFormFieldCount()
   ```
   Expected: `0` on a fresh document.
3. Use `browser_evaluate` to add a text form field:
   ```javascript
   window.addTextFormField()
   ```
4. Wait 1 second.
5. Check console output with `browser_console_messages`.
   - Must contain: `"Text form field added, enabled=true"`
6. Use `browser_evaluate` to confirm the count increased:
   ```javascript
   window.getFormFieldCount()
   ```
   Expected: `1`.
7. Verify no error callbacks in the console.

## Expected Result

- Console: `"Text form field added, enabled=true"`
- `getFormFieldCount()` returns `1` after the add.
- No rejected Promises.

## Failure Conditions

- `addTextFormField` throws or rejects.
- Count does not increase.
- `field.enabled` rejects or returns a non-boolean.

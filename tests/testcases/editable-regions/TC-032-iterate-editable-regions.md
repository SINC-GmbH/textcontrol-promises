# TC-032: Iterate Editable Regions via Async Iterator

Tests the async `for...of` iteration over `editableRegions` and verifies
that the `EditableRegion` entity wrapper properties (`id`, `userName`) resolve
correctly.

## Setup

- TC-001 passed (editor initialized).
- TC-030 passed (at least one editable region with userName="testuser", id=1 exists).

## Steps

1. (Editor already initialized — do not reload.)
2. Use `browser_evaluate` to iterate all editable regions:
   ```javascript
   (async () => {
     const { TextControlContext } = await import('./node_modules/@sinc-gmbh/textcontrol-promises/index.js');
     const ctx = new TextControlContext();
     const results = [];
     for await (const region of ctx.editableRegions) {
       const id = await region.id;
       const userName = await region.userName;
       results.push({ id, userName });
     }
     return results;
   })()
   ```
3. Verify the returned array contains at least one entry.
4. Verify each entry has numeric `id` and string `userName` fields.
5. Verify no error callbacks in the console.

## Expected Result

- Returned array contains `{ id: 1, userName: "testuser" }` (or similar, based on TC-030 setup).
- No rejected Promises.

## Failure Conditions

- The async iterator throws.
- `region.id` or `region.userName` rejects.
- Returned array is empty when TC-030 already added a region.

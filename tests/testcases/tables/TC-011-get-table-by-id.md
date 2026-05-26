# TC-011: Get Table by ID

Tests `TextControlContext.tables.getItem(id)` — retrieves a `Table` wrapper
by its numeric ID and calls `getID()` on it.

## Setup

- TC-010 passed (table with ID 101 was added).

## Steps

1. (Editor already initialized from TC-010 — do not reload the page.)
2. Use `browser_evaluate` to call the `getTable` helper:
   ```javascript
   (async () => {
     const table = await window.getTable(101);
     const id = await table.getID();
     return id;
   })()
   ```
3. Verify the return value is `101` (the numeric ID).
4. Use `browser_evaluate` to also verify the table has a `cells` collection:
   ```javascript
   (async () => {
     const table = await window.getTable(101);
     return typeof table.cells;
   })()
   ```
   Expected: `"object"` (the `TableCellCollection` wrapper).

## Expected Result

- `getTable(101)` resolves with a `Table` wrapper instance.
- `table.getID()` resolves with `101`.
- `table.cells` is a `TableCellCollection` object (typeof `"object"`).

## Failure Conditions

- `getTable(101)` rejects (table not found).
- `table.getID()` returns a value other than `101`.
- `table.cells` is undefined / null.

## Notes

`getTable` is exposed on `window` by `demo/main.js` and internally calls
`TextControlContext.tables.getItem(id)`.

# TC-012: Iterate Table Cells via async Iterator

Tests `TableCellCollection` async iteration (the `for await` pattern on the
`Collection` base class).

## Setup

- TC-010 passed (3×3 table with ID 101 exists).

## Steps

1. (Editor and table from TC-010 — do not reload the page.)
2. Use `browser_evaluate` to iterate all cells and collect their count:
   ```javascript
   (async () => {
     const table = await window.getTable(101);
     let count = 0;
     for await (const cell of table.cells) {
       count++;
     }
     return count;
   })()
   ```
3. Verify the return value is `9` (3 rows × 3 columns).
4. Use `browser_evaluate` to verify `getCount()` matches:
   ```javascript
   (async () => {
     const table = await window.getTable(101);
     return await table.cells.getCount();
   })()
   ```
   Expected: `9`.
5. Use `browser_evaluate` to verify `elementAt(0)` returns a cell object:
   ```javascript
   (async () => {
     const table = await window.getTable(101);
     const cell = await table.cells.elementAt(0);
     return typeof cell;
   })()
   ```
   Expected: `"object"`.

## Expected Result

- `for await` iterates exactly 9 cells.
- `getCount()` returns `9`.
- `elementAt(0)` returns an object (the `TableCell` wrapper).

## Failure Conditions

- Iteration count is not 9 (wrong number of cells).
- `getCount()` rejects or returns wrong value.
- `elementAt(0)` is null or throws.
- `for await` loop hangs (async iterator never completes).

## Notes

This test validates the generic `Collection` base class async iterator, not
just `TableCellCollection`. A failure here could indicate a regression in
`Collection.js` that would affect all collection types.

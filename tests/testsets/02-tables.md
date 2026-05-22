# Testset 02 — Tables

Tests covering the `TextControlContext.tables` collection wrapper and the
`Table` / `TableCell` entity wrappers.

## Test cases (run in this order)

1. [TC-010-add-table](../testcases/tables/TC-010-add-table.md)
2. [TC-011-get-table-by-id](../testcases/tables/TC-011-get-table-by-id.md)
3. [TC-012-iterate-table-cells](../testcases/tables/TC-012-iterate-table-cells.md)

## Pre-conditions for the full set

- TC-001 (editor initialization) must have passed first.
- Start with a blank document (reload the demo page before this testset).

## Notes

Run TC-010 before TC-011 and TC-012 since they depend on a table with ID 101 existing.

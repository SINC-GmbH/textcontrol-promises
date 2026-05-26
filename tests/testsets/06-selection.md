# Testset 06 — Selection and Input Position

Tests covering `TextControlContext.selection` — reading and writing the current
selection via `Selection.getStart()`, `getLength()`, `getText()`, `setStart()`,
`setLength()`, `setBold()`, `getBold()`.

## Test cases

- [TC-050](../testcases/selection/TC-050-get-selection-info.md) — Get selection start and length
- [TC-051](../testcases/selection/TC-051-set-selection.md) — Set selection start and length
- [TC-052](../testcases/selection/TC-052-apply-bold-formatting.md) — Apply bold formatting

## Pre-conditions

- TC-001 must have passed (editor initialized).
- The editor document contains at least 10 characters of text before running TC-051/052.

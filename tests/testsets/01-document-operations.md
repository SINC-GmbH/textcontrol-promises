# Testset 01 — Document Operations

Tests covering the core document lifecycle: initialization, load, and save.

## Test cases (run in this order)

1. [TC-001-initialize-editor](../testcases/document-operations/TC-001-initialize-editor.md)
2. [TC-002-load-document](../testcases/document-operations/TC-002-load-document.md)
3. [TC-003-save-document](../testcases/document-operations/TC-003-save-document.md)

## Pre-conditions for the full set

- Demo server running: `cd demo && npx live-server --port=8080`
- TX backend reachable: `https://tx.sinc-dev.de:44282`

## Notes

TC-001 must pass before any other test in this set can run (editor not initialized → all others meaningless).

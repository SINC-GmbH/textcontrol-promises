# Testset 03 — Application Fields

Tests covering `TextControlContext.applicationFields` and the `ApplicationField`
entity wrapper (getName, getText, setName, setParameters, getParameters).

## Test cases (run in this order)

1. [TC-020-get-field-name](../testcases/application-fields/TC-020-get-field-name.md)
2. [TC-021-set-field-parameters](../testcases/application-fields/TC-021-set-field-parameters.md)

## Pre-conditions

- TC-001 (editor initialization) must have passed first.
- A document with at least one ApplicationField (merge field) must be loaded.
  Use the load-document step from TC-002 first, or load a base64-encoded test
  document that contains merge fields.

## Notes

ApplicationField operations depend on the TX server state. Failures here may
indicate a TX server issue rather than a wrapper bug — check the console for
error callbacks.

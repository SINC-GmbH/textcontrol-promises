# Test Suite — textcontrol-promises

Agent-driven integration tests for the `@sinc-gmbh/textcontrol-promises` library.
Tests are written in natural language Markdown and executed by Claude using the
Playwright MCP browser tools — no coding required to add new tests.

## Structure

```
tests/
├── AGENT_PROFILE.md      Instructions for Claude acting as QA agent
├── README.md             This file
├── testsets/             Groups of test cases to run together
│   ├── 01-document-operations.md
│   ├── 02-tables.md
│   ├── 03-application-fields.md
│   └── 04-editable-regions.md
└── testcases/            Individual test cases (one per file)
    ├── document-operations/
    │   ├── TC-001-initialize-editor.md
    │   ├── TC-002-load-document.md
    │   └── TC-003-save-document.md
    ├── tables/
    │   ├── TC-010-add-table.md
    │   ├── TC-011-get-table-by-id.md
    │   └── TC-012-iterate-table-cells.md
    └── application-fields/
        ├── TC-020-get-field-name.md
        └── TC-021-set-field-parameters.md
```

## How to run tests

### 1. Start the demo application

```powershell
cd demo
npx live-server --port=8080
```

### 2. Ask Claude to run a testset

Tell Claude (in a new conversation):

> Read tests/AGENT_PROFILE.md, then run all test cases listed in
> tests/testsets/02-tables.md and report the results.

Claude will:
1. Load the agent profile
2. Load each test case file from the testset
3. Execute steps via Playwright MCP
4. Report PASS / FAIL per step and per test case

### 3. Run a single test case

> Read tests/AGENT_PROFILE.md and execute tests/testcases/tables/TC-010-add-table.md

## How to add a new test case

1. Create a new Markdown file in the appropriate `testcases/<area>/` folder
2. Follow the template format below
3. Add the filename to the relevant testset in `testsets/`
4. No code is required

### Test case template

```markdown
# TC-XXX: Short description

## Setup
- Demo app running at http://localhost:8080
- TextControl editor loaded (watch for #editor to have non-zero height)
- [Any additional preconditions]

## Steps
1. [Action to take]
2. [Expected console output or visual change]
3. [Verification]

## Expected Result
- [What success looks like]

## Failure Conditions
- [What constitutes a failure]
```

## Numbering convention

| Range | Area |
|-------|------|
| TC-001 – TC-009 | Document operations (init, load, save) |
| TC-010 – TC-019 | Tables |
| TC-020 – TC-029 | Application fields |
| TC-030 – TC-039 | Editable regions |
| TC-040 – TC-049 | Form fields |
| TC-050 – TC-059 | Selection and input position |
| TC-060 – TC-069 | Events |

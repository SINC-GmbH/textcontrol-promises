# textcontrol-generator

Parses `lib/types/TXTextControl.d.ts` with **ts-morph** and generates a
Promise-based JS wrapper class (`TextControlContext.generated.js`) that mirrors
the hand-written `TextControlContext.js`.

## Setup

```powershell
cd tools/generator
npm install
```

## Usage

```powershell
# Dry-run (default): preview what would be generated
npx ts-node src/index.ts

# Show only one specific method
npx ts-node src/index.ts --method beginUndoAction

# Write the generated file to lib/src/TextControlContext.generated.js
npx ts-node src/index.ts --write

# Overwrite even if the file already exists
npx ts-node src/index.ts --write --force

# Use a custom d.ts path or output path
npx ts-node src/index.ts --dts ../../lib/types/TXTextControl.d.ts --out ../../lib/src/MyGenerated.js
```

## How it works

| Step | Module | Description |
|------|--------|-------------|
| 1 | `DtsParser` | Loads the d.ts with ts-morph, extracts all exported function declarations |
| 2 | `CallbackMapper` | Maps callback type names to `CallbackType.XxxCallback` constants |
| 3 | `MethodClassifier` | Classifies each method as `passthrough`, `promise-void`, or `promise-value` |
| 4 | `WrapperGenerator` | Generates the JS method body and JSDoc comment |
| 5 | `FileWriter` | Writes or diffs the generated output |

## Generated output location

`lib/src/TextControlContext.generated.js`

Compare this file against `lib/src/TextControlContext.js` to see what the generator
would cover vs. what was written by hand. The generated file is a companion for
review — merge selectively into the hand-written file as needed.

## Classification rules

| d.ts pattern | Kind | Generated body |
|---|---|---|
| No callback params | `passthrough` | `return TXTextControl.xxx(params)` |
| Main callback is `EmptyRequestCallback` | `promise-void` | `RequestHelper.Promise(...)` → `Promise<void>` |
| Main callback is `LoadDocumentCallback` | `promise-void` | Same |
| Any other callback | `promise-value` | `RequestHelper.Promise(...)` → `Promise<T>` |

# textcontrol-promises

`@sinc-gmbh/textcontrol-promises` wraps the TX TextControl callback-based JavaScript API into a modern Promise + async-iterator API with full TypeScript type definitions.

## Architecture

```
┌─────────────────────────────────────────────────────┐
│  Consumer App                                        │
│  import { TextControlContext } from                  │
│    "@sinc-gmbh/textcontrol-promises"                 │
└────────────────────┬────────────────────────────────┘
                     │  async/await, typed
┌────────────────────▼────────────────────────────────┐
│  lib/  (@sinc-gmbh/textcontrol-promises)             │
│  TextControlContext → generated base + hand-written  │
│  Collection (async-iterable)                         │
│  lib/types/  (TypeScript declarations)               │
└────────────────────┬────────────────────────────────┘
                     │  callbacks
┌────────────────────▼────────────────────────────────┐
│  TX TextControl SDK                                  │
│  Loaded at runtime via WebSocket                     │
│  window.TXTextControl (vendor, untyped)              │
└─────────────────────────────────────────────────────┘
```

## Installation

```powershell
yarn add @sinc-gmbh/textcontrol-promises
# or
npm install @sinc-gmbh/textcontrol-promises
```

## TypeScript — global type setup

Create `types/global.d.ts` in your project:

```typescript
import { TXTextControlTypeDefinition } from "@sinc-gmbh/textcontrol-promises";
declare global {
    var TXTextControl: typeof TXTextControlTypeDefinition;
}
```

## JSDoc — type import in plain JS

```javascript
/** @import {TXTextControlTypeDefinition as TXTextControl} from "@sinc-gmbh/textcontrol-promises" */
```

## Code examples

**Initialize the editor**

```javascript
import { TextControlContext } from "@sinc-gmbh/textcontrol-promises";

const txContext = new TextControlContext();

await txContext.initialize(
    {
        containerID: "editor",
        webSocketURL: websocketUrl,
        editorSettings: { culture: "de-DE", uiCulture: "de-DE" },
        replaceContainer: true,
    },
    resourceUrl  // points to /GetResource?name=tx-document-editor.min.js
);

await txContext.untilTextControlLoaded();  // resolves when TextControlLoaded fires
```

**Async iterator over a collection**

```javascript
for await (const field of txContext.applicationFields) {
    console.log(field.name);
}
```

**Wrap a native TX object**

```javascript
import { Table } from "@sinc-gmbh/textcontrol-promises";

const table = new Table(txNativeTableObject);
const rows = await table.rows.count();
```

## Repository structure

```
textcontrol-promises/
├── lib/
│   ├── src/
│   │   ├── TextControlContext.js       hand-written public class
│   │   ├── generated/                  auto-generated Promise-wrapping base classes
│   │   ├── Collection.js               async-iterable base for TX collections
│   │   ├── ApplicationField.js         hand-written wrapper classes (one per TX obj)
│   │   └── helper/                     RequestHelper, waitUntil, CallbackType, …
│   ├── types/
│   │   ├── TXTextControlTypeDefinition.d.ts   main barrel export
│   │   ├── objects/                    one .d.ts per TX API class
│   │   ├── args/                       EventArgs shapes
│   │   ├── enums/                      TX enum constants
│   │   ├── callbacks/                  callback signature types
│   │   └── helper/                     EventMap, TabNameType
│   ├── index.js
│   └── index.d.ts
├── tools/
│   ├── scraper/                        Playwright BFS crawler + d.ts differ/patcher
│   └── generator/                      ts-morph Promise-wrapper code generator
├── tests/
│   ├── AGENT_PROFILE.md
│   ├── testsets/
│   └── testcases/
└── demo/                               local integration test app
```

## Development tooling

| Tool | Purpose | Docs |
|---|---|---|
| `tools/scraper` | Scrape TX docs, diff against d.ts, patch stubs | [Scraper wiki](docs/wiki/Scraper.md) |
| `tools/generator` | Generate Promise-wrapper base classes from d.ts | [Generator wiki](docs/wiki/Generator.md) |

See also:
- [Architecture](docs/wiki/Architecture.md)
- [Type System](docs/wiki/Type-System.md)
- [Maintenance Workflow](docs/wiki/Maintenance-Workflow.md)
- [Testing](docs/wiki/Testing.md)

## Generated API docs

[https://sinc-gmbh.github.io/textcontrol-promises](https://sinc-gmbh.github.io/textcontrol-promises)

## License

Copyright (c) 2023 SINC GmbH. All rights reserved. Licensed under the [MIT](lib/LICENSE) license.

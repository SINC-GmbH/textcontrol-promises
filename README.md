# textcontrol-promises
Build up on [TXTextControl](https://www.textcontrol.com/) v33.0.0.
## Description
Wraps TXTextControl Callback API to work with Objects and Promises.

It also includes typescript definitions for its classes.
Therefore it can easy be used in typescript projects.

## Installation
`yarn install @sinc-gmbh/textcontrol-promises `

## Usage

1. make TXTextControl global object known to access enums and other instances.  
   I created a "./types/global.d.ts" in my demo project like this:

    ``` javascript
    import {TXTextControlTypeDefinition} from "@sinc-gmbh/textcontrol-promises";
    declare global{
        var TXTextControl: typeof TXTextControlTypeDefinition;
    }
    ```
2. For using the TypeDefinition with JSDoc in a js file you can import the type definition with an alias
    ``` javascript
    /** @import {TXTextControlTypeDefinition as TXTextControl} from "@sinc-gmbh/textcontrol-promises" */
    ```

## Code Examples

- Create a TextControlContext to work with wrapped objects and initialize TextControl editor.
    ```javascript
    let txContext = new TextControlContext();
    ...
    const componentSetting = {
        containerID: "editor",
        webSocketURL: websocketUrl,
        editorSettings: {
        culture: "de-DE",
        uiCulture: "de-DE",
        },
        replaceContainer: true,
    };
    // resource url needs to point at /GetResource?name=tx-document-editor.min.js
    await txContext.initialize(componentSetting,resourceUrl);
    ...
    //waits until TextControlLoaded was fired
    await txContext.untilTextControlLoaded();
    ```
- Wrapped collections are supporting async iterators
    ```javascript
    for await (let field of this.txContext.applicationFields) {
        ...
    }  
    ```
- Wrap a native TextControl object by passing it to constructor
    ```javascript
    let table = new Table(txTableObject);
    ```
## Documentation
see [https://sinc-gmbh.github.io/textcontrol-promises](https://sinc-gmbh.github.io/textcontrol-promises)

## License

Copyright (c) 2023 SINC GmbH. All rights reserved.

Licensed under the [MIT](LICENSE) license.

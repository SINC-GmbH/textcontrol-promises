# textcontrol-promises
Build up on [TXTextControl](https://www.textcontrol.com/) v31.3.0. (not fully supported yet).
## Description
Wraps TXTextControl Callback API to work with Objects and Promises.

It also includes typescript definitions for its classes.
Therefore it can easy be used in typescript projects.

## Installation
`yarn install @sinc-gmbh/textcontrol-promises `

## Usage

- Create a TextControlContext to work with wrapped objects
    ```javascript
    let txContext = new TextControlContext();
    ...
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

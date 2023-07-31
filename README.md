# textcontrol-promises
Build up on [TXTextControl](https://www.textcontrol.com/) v31.3.0. (not fully supported yet).
## Description
Wraps TXTextControl Callback API to work with Objects and Promises.

## Installation
` npm install @sinc-gmbh/textcontrol-promises `

## Usage

- Create a TextControlContext to work with wrapped objects
    ```
    let txContext = new TextControlContext();
    ...
    ```
- Wrapped collections are supporting async iterators
    ```
    for await (let field of this.txContext.applicationFields) {
        ...
    }  
    ```
- Wrap a native TextControl object by passing it to constructor
    ```
    let table = new Table(txTableObject);
    ```

## Contributing

TBD

## License

Copyright (c) 2023 SINC GmbH. All rights reserved.

Licensed under the [MIT](LICENSE) license.
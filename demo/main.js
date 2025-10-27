import { TextControlContext } from "./node_modules/@sinc-gmbh/textcontrol-promises/index.js";
/** @import {TXTextControlTypeDefinition as TXTextControl} from "@sinc-gmbh/textcontrol-promises" */

document.addEventListener("DOMContentLoaded", async () => {
  let resourceUrl =
    "https://tx.sinc-dev.de:44282/txwebsocket/GetResource?name=tx-document-editor.min.js";
  let websocketUrl = "wss://tx.sinc-dev.de:44282/txwebsocket";

  const componentSetting = {
    containerID: "editor",
    webSocketURL: websocketUrl,
    editorSettings: {
      culture: "de-DE",
      uiCulture: "de-DE",
    },
    replaceContainer: true,
  };

  let txContext = new TextControlContext();
  await txContext.initialize(componentSetting, resourceUrl);
  await txContext.untilTextControlLoaded();

  //Test TXTextControl type definitions
  /** @type {TXTextControl.InputPosition.ScrollPosition} */
  var testType = TXTextControl.InputPosition.ScrollPosition.Auto;
  var isCenter = testType == TXTextControl.InputPosition.ScrollPosition.Center;
  console.log("Is Center: " + isCenter);

  //Test Promise wrapper for adding and getting a table
  let rows = 3;
  let columns = 3;
  let id = 101;
  //Wrapper Example
  let added = await txContext.tables.add(rows, columns, id);
  if (added) {
    let wrapperTable = await txContext.tables.getItem(id);
    let wrapperId = await wrapperTable.getID();
    console.log("Table with ID " + wrapperId + " added.");
  }
  
  //Plain TXTextControl Example
  /** @type {TXTextControl.Table} */
  let txTable = await new Promise((resolve) => {
    TXTextControl.tables.add(
      rows,
      columns,
      id,
      (added = {
        if(added) {
          TXTextControl.tables.getItem(
            (table) => {
              resolve(table);
            },
            null,
            id
          );
        },
      })
    );
  });
  txTable.getID((id) => {
    console.log("Table with ID " +  + " added via callback.");
  })
});

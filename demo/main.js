import { TextControlContext  } from "./node_modules/@sinc-gmbh/textcontrol-promises/index.js";
/** @import {TXTextControlTypeDefinition as TXTextControl} from "@sinc-gmbh/textcontrol-promises" */

document.addEventListener("DOMContentLoaded", async () => {
  let resourceUrl = "https://tx.sinc-dev.de:44282/txwebsocket/GetResource?name=tx-document-editor.min.js";
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
  await txContext.initialize(componentSetting,resourceUrl);
  await txContext.untilTextControlLoaded();
  
  //Test TXTextControl type definitions
  /** @type {TXTextControl.InputPosition.ScrollPosition} */
  var testType = TXTextControl.InputPosition.ScrollPosition.Auto;
  var isCenter = testType == TXTextControl.InputPosition.ScrollPosition.Center;
  console.log("Is Center: " + isCenter);
});

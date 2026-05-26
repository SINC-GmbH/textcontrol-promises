import { TextControlContext } from "./node_modules/@sinc-gmbh/textcontrol-promises/index.js";

window.addTable = async function addTable(rows, columns, id) {
  let txContext = new TextControlContext();
  //Wrapper Example
  let added = await txContext.tables.add(rows, columns, id);
  if (added) {
    let wrapperTable = await txContext.tables.getItem(id);
    let wrapperId = await wrapperTable.id;
    console.log("Table with ID " + wrapperId + " added.");
  }
};

window.getTable = async function getTable(id) {
  let txContext = new TextControlContext();
  return txContext.tables.getItem(id);
};

/** Iterates all tables using the async iterator and logs each table's id. */
window.listTables = async function listTables() {
  let txContext = new TextControlContext();
  let count = 0;
  for await (const table of txContext.tables) {
    const id = await table.id;
    console.log("Table id:", id);
    count++;
  }
  console.log("Total tables:", count);
};

/** Reads document settings (author, title) using Promise getters. */
window.readDocumentSettings = async function readDocumentSettings() {
  let txContext = new TextControlContext();
  const settings = txContext.documentSettings;
  const author = await settings.getAuthor();
  const title = await settings.getDocumentTitle();
  console.log("Author:", author, "| Title:", title);
  return { author, title };
};

/** Reads selection start/length, then sets bold on the selection. */
window.testSelection = async function testSelection() {
  let txContext = new TextControlContext();
  const sel = txContext.selection;
  const start = await sel.getStart();
  const length = await sel.getLength();
  console.log("Selection start:", start, "length:", length);
  if (length > 0) {
    await sel.setBold(true);
    console.log("Applied bold to selection.");
  }
};

/** Returns the current selection start and length. */
window.getSelectionInfo = async function getSelectionInfo() {
  let txContext = new TextControlContext();
  const sel = txContext.selection;
  const start = await sel.getStart();
  const length = await sel.getLength();
  const text = await sel.getText();
  console.log("Selection: start=" + start + " length=" + length + " text=" + JSON.stringify(text));
  return { start, length, text };
};

/** Sets the selection to the given start/length. */
window.setSelection = async function setSelection(start, length) {
  let txContext = new TextControlContext();
  const sel = txContext.selection;
  await sel.setStart(start);
  await sel.setLength(length);
  console.log("Selection set: start=" + start + " length=" + length);
};

/** Adds an editable region for userName at the current input position. */
window.addEditableRegion = async function addEditableRegion(userName, id) {
  let txContext = new TextControlContext();
  await txContext.editableRegions.add(userName, id, 1, 3);
  console.log("Editable region added for user=" + userName + " id=" + id);
};

/** Returns the count of editable regions. */
window.getEditableRegionCount = async function getEditableRegionCount() {
  let txContext = new TextControlContext();
  const count = await txContext.editableRegions.getCount();
  console.log("Editable region count:", count);
  return count;
};

/** Adds a text form field and returns its wrapper. */
window.addTextFormField = async function addTextFormField() {
  let txContext = new TextControlContext();
  const field = await txContext.formFields.addTextFormField(0);
  if (field) {
    const enabled = await field.enabled;
    console.log("Text form field added, enabled=" + enabled);
  }
  return field;
};

/** Returns the count of form fields. */
window.getFormFieldCount = async function getFormFieldCount() {
  let txContext = new TextControlContext();
  const count = await txContext.formFields.getCount();
  console.log("Form field count:", count);
  return count;
};

/**
 * Loads a test document with lorem ipsum text and a 3×3 table (ID 101).
 * Call this once after the editor has initialized to put the demo in a
 * consistent state for all test cases:
 *   - Plain text body for selection / editable-region tests (≥ 10 chars)
 *   - Table with ID 101 for table tests
 */
window.loadTestDataDocument = async function loadTestDataDocument() {
  const ctx = new TextControlContext();
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  await ctx.load(TXTextControl.StreamType.PlainText, btoa(lorem), null);
  // Move cursor past the text so the table is appended after it
  await ctx.selection.setStart(lorem.length + 1);
  await ctx.tables.add(3, 3, 101);
  const tbl = await ctx.tables.getItem(101);
  const id = await tbl.id;
  console.log("Test data document loaded. Table with ID " + id + " added.");
};

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
  await txContext.initialize(componentSetting);
  await txContext.untilTextControlLoaded();

  txContext.addEventListener("tableDeleted", (stdg) => {
    console.log("Table deleted event received.");
  });
  //Test TXTextControl type definitions
  /** @type {TXTextControl.InputPosition.ScrollPosition} */
  var testType = TXTextControl.InputPosition.ScrollPosition.Auto;
  var isCenter = testType == TXTextControl.InputPosition.ScrollPosition.Auto;
  console.log("Is Center: " + isCenter);

  await window.loadTestDataDocument();
});

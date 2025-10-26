import { SubTextPartCollection } from './SubTextPartCollection.js';
import { Selection } from './Selection.js';
import { TableCollection } from './TableCollection.js';
import { CallbackType, RequestHelper, waitUntil } from './helper/index.js';
import { ApplicationFieldCollection } from './ApplicationFieldCollection.js';
import { FormFieldCollection } from './FormFieldCollection.js';
import { EditableRegionCollection } from './EditableRegionCollection.js';
import { InputPosition } from './InputPosition.js';
/** @import * as TXTextControlTypeDefinition from "../types/TXTextControlTypeDefinition" */

/** @class */
export class TextControlContext {
    //#region TX functions
    /**
     * The addEventListener function registers event listener functions on the TXTextControl object.
     * @type { <T extends keyof TXTextControlTypeDefinition.EventMap>(eventName: T, callback: TXTextControlTypeDefinition.EventMap[T]) => void}
     */
    addEventListener(eventName, callback) {
        TXTextControl.addEventListener(eventName, callback);
    }

    /**
     * Inserts a merge field at the current input position.
     * @param {TXTextControlTypeDefinition.MergeField | TXTextControlTypeDefinition.IfField | TXTextControlTypeDefinition.IncludeTextField | TXTextControlTypeDefinition.DateField | TXTextControlTypeDefinition.NextField | TXTextControlTypeDefinition.NextIfField} mergeField
     */
    addMergeField(mergeField) {
        TXTextControl.addMergeField(mergeField);
    }

    /**
     * Appends text to the document in a certain format.
     * @param {TXTextControlTypeDefinition.StreamType} streamType Specifies one of the numerical StreamType values.
     * @param {string} base64Data Base64 encoded document data. For encoding strings containing characters outside of the Latin1 range use TXTextControl.btoaUTF8.
     * @param {TXTextControlTypeDefinition.LoadSettings | null} loadSettings Additional settings for appending the data. Can be null.
     * @param {TXTextControlTypeDefinition.AppendSettings} appendSettings Settings on how the document is appended.
     * @returns {Promise<void>}
     */
    append(streamType, base64Data, loadSettings, appendSettings) {
        return RequestHelper.Promise(
            TXTextControl.append,
            streamType,
            base64Data,
            CallbackType.LoadDocumentCallback,
            loadSettings,
            appendSettings,
            CallbackType.ErrorCallback
        );
    }
    /**
     * Appends text in a certain format to the current document.
     * @param {TXTextControlTypeDefinition.StreamType} streamType Specifies one of the numerical StreamType values.
     * @param {string} base64Data Base64 encoded document data. For encoding strings containing characters outside of the Latin1 range use TXTextControl.btoaUTF8.
     *
     */
    appendDocument(streamType, base64Data) {
        TXTextControl.appendDocument(streamType, base64Data);
    }

    /**
     * Decodes a string of data which has been encoded using base-64 encoding.
     * @param {string} inputString A base-64 encoded unicode string.
     * @param {boolean} keepBOM Optional. Set this to true in case the original string had a byte order mark and you want to keep it.
     * @returns {string} The original unicode string.
     */
    atobUTF8(inputString, keepBOM) {
        return TXTextControl.atobUTF8(inputString, keepBOM);
    }
    /**
     * Begins a user - defined undo operation.
     * All editing and fomatting changes made between beginUndoAction and endUndoAction belong to the undo operation.
     * These changes are undone or redone in a single step.
     * The specified user-defined name is available via getUndoActionName.
     * @param {string | null} actionName Specifies the undo action's name. If an action name is not necessary, this parameter can be null or an empty string.
     * @returns {Promise<void>}
     */
    beginUndoAction(actionName) {
        return RequestHelper.Promise(TXTextControl.beginUndoAction, actionName, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Creates a base-64 encoded ASCII string from a unicode string.
     * In contrast to the browser provided method btoa() this method handles all unicode characters
     * and not only characters in the Latin1 range.
     * @param {string} inputString A unicode string to be encoded into base-64.
     * @param {boolean} addBOM Optional. Set this to true if a byte order mark should be added to the encoded string.
     * @returns {string} A base-64 encoded string.
     */
    btoaUTF8(inputString, addBOM) {
        return TXTextControl.btoaUTF8(inputString, addBOM);
    }
    /**
     * Clears the selected text or the character right from the current input position.
     * @returns {Promise<void>}
     */
    clear() {
        return RequestHelper.Promise(TXTextControl.clear, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }

    /**
     * Clears the undo buffer.
     * @returns {Promise<void>}
     */
    clearUndo() {
        return RequestHelper.Promise(TXTextControl.clearUndo, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Ends a user-defined undo operation.
     * All editing and fomatting changes made between beginUndoAction and endUndoAction belong to the undo operation.
     * These changes are undone or redone in a single step.
     * @returns {Promise<void>}
     */
    endUndoAction() {
        return RequestHelper.Promise(TXTextControl.endUndoAction, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Finds a text string. The search starts at the specified position.
     * @param {string} text Specifies the text to search for.
     * @param {number} start Specifies the text position where the search starts, beginning with 0. If this value is -1, the search begins at the current text input position.
     * @param {TXTextControlTypeDefinition.FindOptions | null} options Optional. Specifies search options. It can be a combination of the FindOptions values.
     * @returns {Promise<number>} index of first character of the search string
     */
    find(text, start, options) {
        return RequestHelper.Promise(TXTextControl.find, text, start, options, CallbackType.RequestNumberCallback, CallbackType.ErrorCallback);
    }
    /**
     * Flatten all form fields in the document. This means that all form fields are converted to static text.
     * @returns {Promise<void>}
     */
    flattenFormFields() {
        return RequestHelper.Promise(TXTextControl.flattenFormFields, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /** Sets the text input focus to the web editor. */
    focus() {
        TXTextControl.focus();
    }
    /**
     * Gets a value indicating the current activation state.
     * @returns {Promise<TXTextControlTypeDefinition.ActivationState>}
     */
    getActivationState() {
        return RequestHelper.Promise(TXTextControl.getActivationState, CallbackType.RequestActivationStateCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether the undo buffer is active or not.
     * @returns {Promise<boolean>}
     */
    getAllowUndo() {
        return RequestHelper.Promise(TXTextControl.getAllowUndo, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the Text Control's background color.
     * @returns {Promise<string>}
     */
    getBackColor() {
        return RequestHelper.Promise(TXTextControl.getBackColor, CallbackType.RequestStringCallback);
    }
    /**
     * Gets the baseline alignment, in twips, of the Text Control.
     * @returns {Promise<number>}
     */
    getBaseline() {
        return RequestHelper.Promise(TXTextControl.getBaseline, CallbackType.RequestNumberCallback, CallbackType.ErrorCallback);
    }
    /**
     * Informs whether the currently selected text can be formatted with character formatting attributes.
     * @returns {Promise<boolean>}
     */
    getCanCharacterFormat() {
        return RequestHelper.Promise(TXTextControl.getCanCharacterFormat, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Informs whether a part of a Text Control document has been selected and can be copied to the clipboard.
     * @returns {Promise<boolean>}
     */
    getCanCopy() {
        return RequestHelper.Promise(TXTextControl.getCanCopy, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Informs whether the document can be formatted with page and section formatting attributes.
     * @returns {Promise<boolean>}
     */
    getCanDocumentFormat() {
        return RequestHelper.Promise(TXTextControl.getCanDocumentFormat, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Informs whether the document's text and/or formatting attributes can be changed.
     * @returns {Promise<boolean>}
     */
    getCanPaste() {
        return RequestHelper.Promise(TXTextControl.getCanPaste, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Informs whether the document can be printed.
     * @returns {Promise<boolean>}
     */
    getCanPrint() {
        return RequestHelper.Promise(TXTextControl.getCanPrint, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Informs whether an operation can be re - done using the Redo method.
     * @returns {Promise<boolean>}
     */
    getCanRedo() {
        return RequestHelper.Promise(TXTextControl.getCanRedo, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Informs whether the document can be formatted with formatting styles.
     * @returns {Promise<boolean>}
     */
    getCanStyleFormat() {
        return RequestHelper.Promise(TXTextControl.getCanStyleFormat, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Informs whether the currently selected text can be formatted with table formatting attributes.
     * @returns {Promise<boolean>}
     */
    getCanTableFormat() {
        return RequestHelper.Promise(TXTextControl.getCanTableFormat, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether the user can undo the previous operation in a Text Control.
     * @returns {Promise<boolean>}
     */
    getCanUndo() {
        return RequestHelper.Promise(TXTextControl.getCanUndo, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the global comment highlight mode.
     * @returns {Promise<TXTextControlTypeDefinition.HighlightMode>}
     */
    getCommentHighlightMode() {
        return RequestHelper.Promise(TXTextControl.getCommentHighlightMode, CallbackType.RequestHighlightModeCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets whether the control characters are visible or not.
     * @returns {Promise<boolean>}
     */
    getControlChars() {
        return RequestHelper.Promise(TXTextControl.getControlChars, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /** Returns the culture and the UI culture of the control. */
    getCultures() {
        return TXTextControl.getCultures();
    }
    /**
     * Gets a value indicating that markers for hypertext targets are shown or not.
     * @returns {Promise<boolean>}
     */
    getDocumentTargetMarkers() {
        return RequestHelper.Promise(TXTextControl.getDocumentTargetMarkers, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets whether a marker frame is shown around a drawing to indicate its position and size.
     * @returns {Promise<boolean>}
     */
    getDrawingMarkerLines() {
        return RequestHelper.Promise(TXTextControl.getDrawingMarkerLines, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether the document's text is protected, or can be freely edited and formatted.
     * @returns {Promise<TXTextControlTypeDefinition.EditMode>}
     */
    getEditMode() {
        return RequestHelper.Promise(TXTextControl.getEditMode, CallbackType.RequestEditModeCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the global editable region highlight mode.
     * @returns {Promise<TXTextControlTypeDefinition.HighlightMode>}
     */
    getEditableRegionHighlightMode() {
        return RequestHelper.Promise(
            TXTextControl.getEditableRegionHighlightMode,
            CallbackType.RequestHighlightModeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets underlining style for the text displayed by the control.
     * @returns {Promise<TXTextControlTypeDefinition.FontUnderlineStyle>}
     */
    getFontUnderlineStyle() {
        return RequestHelper.Promise(TXTextControl.getFontUnderlineStyle, CallbackType.RequestFontUnderlineStyleCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the foreground color of the control which is the color of the document's text.
     * @returns {Promise<string>}
     */
    getForeColor() {
        return RequestHelper.Promise(TXTextControl.getForeColor, CallbackType.RequestStringCallback, CallbackType.ErrorCallback);
    }
    /**
     * Returns the name of the currently selected formatting printer by calling a provided callback function.
     * @returns {Promise<string>}
     */
    getFormattingPrinter() {
        return RequestHelper.Promise(TXTextControl.getFormattingPrinter, CallbackType.RequestStringCallback);
    }
    /**
     * Gets a value determining how references to table cells in formulas are specified.
     * @returns {Promise<TXTextControlTypeDefinition.FormulaReferenceStyle>}
     */
    getFormulaReferenceStyle() {
        return RequestHelper.Promise(
            TXTextControl.getFormulaReferenceStyle,
            CallbackType.RequestFormulaReferenceStyleCallback,
            CallbackType.ErrorCallback
        );
    }
    /**
     * Gets the names of the printers installed on the server which are usable by Text Control.
     * @returns {Promise<Array<string>>}
     */
    getInstalledPrinters() {
        return RequestHelper.Promise(TXTextControl.getInstalledPrinters, CallbackType.RequestStringsCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether form field validation is active or not.
     * @returns {Promise<boolean>}
     */
    getIsFormFieldValidationEnabled() {
        return RequestHelper.Promise(TXTextControl.getIsFormFieldValidationEnabled, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether formulas in tables are automatically calculated when the text of an input cell is changed.
     * @returns {Promise<boolean>}
     */
    getIsFormulaCalculationEnabled() {
        return RequestHelper.Promise(TXTextControl.getIsFormulaCalculationEnabled, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether hyphenation is active or not.
     * @returns {Promise<boolean>}
     */
    getIsHyphenationEnabled() {
        return RequestHelper.Promise(TXTextControl.getIsHyphenationEnabled, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether language detection is active or not.
     * @returns {Promise<boolean>}
     */
    getIsLanguageDetectionEnabled() {
        return RequestHelper.Promise(TXTextControl.getIsLanguageDetectionEnabled, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether spell checking is active or not.
     * @returns {Promise<boolean>}
     */
    getIsSpellCheckingEnabled() {
        return RequestHelper.Promise(TXTextControl.getIsSpellCheckingEnabled, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether track changes is active or not.
     * @returns {Promise<boolean>}
     */
    getIsTrackChangesEnabled() {
        return RequestHelper.Promise(TXTextControl.getIsTrackChangesEnabled, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating whether the page orientation is landscape.
     * @returns {Promise<boolean>}
     */
    getLandscape() {
        return RequestHelper.Promise(TXTextControl.getLandscape, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the number of pages contained in the current document.
     * @returns {Promise<number>}
     */
    getPageCount() {
        return RequestHelper.Promise(TXTextControl.getPageCount, CallbackType.RequestNumberCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the measure used for page sizes and page margins.
     * @returns {Promise<TXTextControlTypeDefinition.MeasuringUnit>}
     */
    getPageUnit() {
        return RequestHelper.Promise(TXTextControl.getPageUnit, CallbackType.RequestMeasuringUnitCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value indicating which control characters are shown permanently on the screen.
     * @returns {Promise<TXTextControlTypeDefinition.PermanentControlChar>}
     */
    getPermanentControlChars() {
        return RequestHelper.Promise(
            TXTextControl.getPermanentControlChars,
            CallbackType.RequestPermanentControlCharsCallback,
            CallbackType.ErrorCallback
        );
    }
    /**
     * Gets a string that represents the name of the action that will be performed when a call to the redo method is made.
     * @returns {Promise<string>}
     */
    getRedoActionName() {
        return RequestHelper.Promise(TXTextControl.getRedoActionName, CallbackType.RequestStringCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the component render mode.
     * @returns {Promise<TXTextControlTypeDefinition.ComponentRenderMode>}
     */
    getRenderMode() {
        return RequestHelper.Promise(TXTextControl.getRenderMode, CallbackType.RequestRenderModeCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a value controlling the selection of objects which are inserted behind the text.
     * @returns {Promise<boolean>}
     */
    getSelectObjects() {
        return RequestHelper.Promise(TXTextControl.getSelectObjects, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Returns the background color of the status bar as a hexadecimal CSS color string.
     * @returns {Promise<string>}
     */
    getStatusBarColor() {
        return RequestHelper.Promise(TXTextControl.getStatusBarColor, CallbackType.RequestStringCallback, CallbackType.ErrorCallback);
    }

    /**
     * Gets an array of strings specifying the names of all currently supported fonts.
     * @returns {Promise<Array<string>>}
     */
    getSupportedFonts() {
        return RequestHelper.Promise(TXTextControl.getSupportedFonts, CallbackType.RequestStringsCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets an array of PaperSize structures specifying the names and the size of all currently supported paper sizes.
     * @returns {Promise<Array<TXTextControlTypeDefinition.PaperSize>>}
     */
    getSupportedPaperSizes() {
        return RequestHelper.Promise(TXTextControl.getSupportedPaperSizes, CallbackType.RequestPaperSizesCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the control's text.
     * @returns {Promise<string>}
     */
    getText() {
        return RequestHelper.Promise(TXTextControl.getText, CallbackType.RequestStringCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the background color for the text.
     * @returns {Promise<string>}
     */
    getTextBackColor() {
        return RequestHelper.Promise(TXTextControl.getTextBackColor, CallbackType.RequestColorStringCallback, CallbackType.ErrorCallback);
    }
    /**
     * Returns an array of static text field information objects. (Inherited from FormattedText)
     * @param {TXTextControlTypeDefinition.TextFieldType} fieldType
     * @returns {Promise<Array<TXTextControlTypeDefinition.TextFieldInfo>>}
     */
    getTextFieldsByType(fieldType) {
        return RequestHelper.Promise(
            TXTextControl.getTextFieldsByType,
            fieldType,
            CallbackType.RequestTextFieldInfoArrayCallback,
            CallbackType.ErrorCallback
        );
    }
    /**
     * Gets whether text frames that have no border line are shown with marker lines.
     * @returns {Promise<boolean>}
     */
    getTextFrameMarkerLines() {
        return RequestHelper.Promise(TXTextControl.getTextFrameMarkerLines, CallbackType.RequestBooleanCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a string that represents the name of the action that will be performed when a call to the undo method is made.
     * The property's value is null if there is no action that can be undone.
     * @returns {Promise<string>}
     */
    getUndoActionName() {
        return RequestHelper.Promise(TXTextControl.getUndoActionName, CallbackType.RequestStringCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets a list of names specifying users who have access to editable regions.
     * @returns {Promise<Array<string>>}
     */
    getUserNames() {
        return RequestHelper.Promise(TXTextControl.getUserNames, CallbackType.RequestStringsCallback, CallbackType.ErrorCallback);
    }
    /**
     * Gets the mode how Text Control displays a document.
     * @returns {Promise<TXTextControlTypeDefinition.ViewMode>}
     */
    getViewMode() {
        return RequestHelper.Promise(TXTextControl.getViewMode, CallbackType.RequestViewModeCallback, CallbackType.ErrorCallback);
    }
    /**
     * Initializes the document editor.
     * @param {TXTextControlTypeDefinition.ComponentSettings} settings
     */
    init(settings) {
        TXTextControl.init(settings);
    }
    /**
     * Loads text in a certain format.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {string} base64Data
     * @param {TXTextControlTypeDefinition.LoadSettings=} loadSettings
     * @returns {Promise<TXTextControlTypeDefinition.LoadDocumentCallbackData>}
     */
    load(streamType, base64Data, loadSettings) {
        return RequestHelper.Promise(
            TXTextControl.load,
            streamType,
            base64Data,
            CallbackType.LoadDocumentCallback,
            loadSettings,
            CallbackType.ErrorCallback
        );
    }
    /**
     * Loads text in a certain format.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {string} base64Data
     * @param {TXTextControlTypeDefinition.LoadSettings=} loadSettings
     * @returns {Promise<TXTextControlTypeDefinition.LoadDocumentCallbackData>}
     */
    loadDocument(streamType, base64Data, loadSettings) {
        return RequestHelper.Promise(
            TXTextControl.loadDocument,
            streamType,
            base64Data,
            CallbackType.LoadDocumentCallback,
            loadSettings,
            CallbackType.ErrorCallback
        );
    }
    /**
     * Loads JSON data which is used to create table and field name menu items in the mailings ribbon tab.
     * @param {string} jsonData
     * @returns {Promise<void>}
     */
    loadJsonData(jsonData) {
        return RequestHelper.Promise(TXTextControl.loadJsonData, jsonData, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Loads an XML database which is used to create table and field name menu items in the mailings ribbon tab.
     * @param {string} xmlData
     * @returns {Promise<void>}
     */
    loadXMLDatabase(xmlData) {
        return RequestHelper.Promise(TXTextControl.loadXMLDatabase, xmlData, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /** Attempts to print the current document in the browser. Not all browsers support this. */
    printDocument() {
        TXTextControl.printDocument();
    }
    /**
     * Redoes the last Text Control operation.
     * @returns {Promise<void>}
     */
    redo() {
        return RequestHelper.Promise(TXTextControl.redo, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Forces a layout refresh of the document editor.
     * Use this method in cases where the editor doesn't automatically react to layout changes of your web site.
     */
    refreshLayout() {
        TXTextControl.refreshLayout();
    }
    /**
     * The removeListener function removes the specified event listener from the TXTextControl object.
     * @type {<T extends keyof TXTextControlTypeDefinition.EventMap>(eventName: T, callback: TXTextControlTypeDefinition.EventMap[T]) => void}
     */
    removeEventListener(eventName, callback) {
        TXTextControl.removeEventListener(eventName, callback);
    }
    /** Closes the WebSocket connection gracefully and removes the whole editor from the DOM. */
    removeFromDom() {
        TXTextControl.removeFromDom();
    }
    /**
     * Deletes the entire contents of the control.
     * @returns {Promise<void>}
     */
    resetContents(){
        return RequestHelper.Promise(TXTextControl.resetContents, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Saves the current document in a certain format and sends the result back asynchronously by calling a given callback function.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {TXTextControlTypeDefinition.SaveSettings=} saveSettings
     * @returns {Promise<TXTextControlTypeDefinition.SaveDocumentResult>}
     */
    async save(streamType, saveSettings) {
        return RequestHelper.Promise(
            TXTextControl.save,
            streamType,
            CallbackType.SaveDocumentResultCallback,
            saveSettings,
            CallbackType.ErrorCallback
        );
    }
    /**
     * Saves the current document in a certain format and sends the result back asynchronously by calling a given callback function.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {TXTextControlTypeDefinition.SaveSettings=} saveSettings
     * @returns {Promise<TXTextControlTypeDefinition.SaveDocumentResult>}
     */
    saveDocument(streamType, saveSettings){
        return RequestHelper.Promise(
            TXTextControl.saveDocument,
            streamType,
            CallbackType.SaveDocumentResultCallback,
            saveSettings,
            CallbackType.ErrorCallback
        );
    }
    /**
     * Selects text within the control.
     * @param {number} start
     * @param {number} length
     * @returns {Promise<void>}
     */
    select(start, length){
        return RequestHelper.Promise(TXTextControl.select, start, length, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Selects all text in the control.
     * @returns {Promise<void>}
     */
    selectAll(){
        return RequestHelper.Promise(TXTextControl.selectAll, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Selects the word at the current text input position.
     * @returns {Promise<void>}
     */
    selectWord(){
        return RequestHelper.Promise(TXTextControl.selectWord, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating the current activation state.
     * @param {TXTextControlTypeDefinition.ActivationState} activationState
     * @returns {Promise<void>}
     */
    setActivationState(activationState){
        return RequestHelper.Promise(TXTextControl.setActivationState, activationState, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating whether the undo buffer is active or not.
     * @param {boolean} allowUndo
     * @returns {Promise<void>}
     */
    setAllowUndo(allowUndo){
        return RequestHelper.Promise(TXTextControl.setAllowUndo, allowUndo, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the Text Control's background color.
     * @param {string} htmlColor
     * @returns {Promise<void>}
     */
    setBackColor(htmlColor){
        return RequestHelper.Promise(TXTextControl.setBackColor, htmlColor, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the baseline alignment, in twips, of the Text Control.
     * @param {number} baseline
     * @returns {Promise<void>}
     */
    setBaseline(baseline){
        return RequestHelper.Promise(TXTextControl.setBaseline, baseline, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the global comment highlight mode.
     * @param {TXTextControlTypeDefinition.HighlightMode} value
     * @returns {Promise<void>}
     */
    setCommentHighlightMode(value){
        return RequestHelper.Promise(TXTextControl.setCommentHighlightMode, value, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets whether the control characters are visible or not.
     * @param {boolean} controlChars
     * @returns {Promise<void>}
     */
    setControlChars(controlChars){
        return RequestHelper.Promise(TXTextControl.setControlChars, controlChars, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating that markers for hypertext targets are shown or not.
     * @param {boolean} documentMarkerLines
     * @returns {Promise<void>}
     */
    setDocumentTargetMarkers(documentMarkerLines){
        return RequestHelper.Promise(TXTextControl.setDocumentTargetMarkers, documentMarkerLines, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets whether a marker frame is shown around a drawing to indicate its position and size.
     * @param {boolean} drawingMarkerLines
     * @returns {Promise<void>}
     */
    setDrawingMarkerLines(drawingMarkerLines){
        return RequestHelper.Promise(TXTextControl.setDrawingMarkerLines, drawingMarkerLines, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating whether the document's text is protected, or can be freely edited and formatted.
     * @param {TXTextControlTypeDefinition.EditMode} editMode
     * @returns {Promise<void>}
     */
    setEditMode(editMode){
        return RequestHelper.Promise(TXTextControl.setEditMode, editMode, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the global editable region highlight mode.
     * @param {TXTextControlTypeDefinition.HighlightMode} value
     * @returns {Promise<void>}
     */
    setEditableRegionHighlightMode(value){
        return RequestHelper.Promise(TXTextControl.setEditableRegionHighlightMode, value, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets underlining style for the text displayed by the control.
     * @param {TXTextControlTypeDefinition.FontUnderlineStyle} style
     * @returns {Promise<void>}
     */
    setFontUnderlineStyle(style){
        return RequestHelper.Promise(TXTextControl.setFontUnderlineStyle, style, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the foreground color of the control which is the color of the document's text.
     * @param {string} foreColor
     * @returns {Promise<void>}
     */
    setForeColor(foreColor){
        return RequestHelper.Promise(TXTextControl.setForeColor, foreColor, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the name of a printer the text dimensions and capabilities of which are used to format the document.
     * @param {string} printerName
     */
    setFormattingPrinter(printerName){
        TXTextControl.setFormattingPrinter(printerName);
    }
    /**
     * Sets a value determining how references to table cells in formulas are specified.
     * @param {TXTextControlTypeDefinition.FormulaReferenceStyle} style
     * @returns {Promise<void>}
     */
    setFormulaReferenceStyle(style){
        return RequestHelper.Promise(TXTextControl.setFormulaReferenceStyle, style, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a new input position from a geometric location.
     * @param {TXTextControlTypeDefinition.Point} location
     * @returns {Promise<void>}
     */
    setInputPositionByLocation(location){
        return RequestHelper.Promise(TXTextControl.setInputPositionByLocation, location, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a new input position from a page, line and column number.
     * @param {number} page
     * @param {number} line
     * @param {number} column
     * @returns {Promise<void>}
     */
    setInputPositionByPage(page, line, column){
        return RequestHelper.Promise(TXTextControl.setInputPositionByPage, page, line, column, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a new input position from a text position.
     * @param {number} textPosition
     * @param {TXTextControlTypeDefinition.TextFieldPosition} textFieldPosition
     * @returns {Promise<void>}
     */
    setInputPositionByTextPosition(textPosition, textFieldPosition){
        return RequestHelper.Promise(TXTextControl.setInputPositionByTextPosition, textPosition, textFieldPosition,  CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating whether form field validation is active or not.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setIsFormFieldValidationEnabled(value){
        return RequestHelper.Promise(TXTextControl.setIsFormFieldValidationEnabled, value, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating whether formulas in tables are automatically calculated when the text of an input cell is changed.
     * @param {boolean} enable
     * @returns {Promise<void>}
     */
    setIsFormulaCalculationEnabled(enable){
        return RequestHelper.Promise(TXTextControl.setIsFormulaCalculationEnabled, enable, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating whether hyphenation is active or not.
     * @param {boolean} enable
     * @returns {Promise<void>}
     */
    setIsHyphenationEnabled(enable){
        return RequestHelper.Promise(TXTextControl.setIsHyphenationEnabled, enable, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating whether language detection is active or not.
     * @param {boolean} enable
     * @returns {Promise<void>}
     */
    setIsLanguageDetectionEnabled(enable){
        return RequestHelper.Promise(TXTextControl.setIsLanguageDetectionEnabled, enable, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating whether spell checking is active or not.
     * @param {boolean} enable
     * @returns {Promise<void>}
     */
    setIsSpellCheckingEnabled(enable){
        return RequestHelper.Promise(TXTextControl.setIsSpellCheckingEnabled, enable, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating whether track changes is active or not.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setIsTrackChangesEnabled(value){
        return RequestHelper.Promise(TXTextControl.setIsTrackChangesEnabled, value, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating whether the page orientation is landscape.
     * @param {boolean} isLandscape
     * @returns {Promise<void>}
     */
    setLandscape(isLandscape){
        return RequestHelper.Promise(TXTextControl.setLandscape, isLandscape, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the measure used for page sizes and page margins.
     * @param {TXTextControlTypeDefinition.MeasuringUnit} pageUnit
     * @returns {Promise<void>}
     */
    setPageUnit(pageUnit){
        return RequestHelper.Promise(TXTextControl.setPageUnit, pageUnit, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value indicating which control characters are shown permanently on the screen.
     * @param {TXTextControlTypeDefinition.PermanentControlChar} permanentControlChars
     * @returns {Promise<void>}
     */
    setPermanentControlChars(permanentControlChars){
        return RequestHelper.Promise(TXTextControl.setPermanentControlChars, permanentControlChars, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the component render mode.
     * @param {TXTextControlTypeDefinition.ComponentRenderMode} value
     * @returns {Promise<void>}
     */
    setRenderMode(value){
        return RequestHelper.Promise(TXTextControl.setRenderMode, value, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets a value controlling the selection of objects which are inserted behind the text.
     * @param {boolean} selectObjects
     * @returns {Promise<void>}
     */
    setSelectObjects(selectObjects){
        return RequestHelper.Promise(TXTextControl.setSelectObjects, selectObjects, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the background color of the status bar.
     * @param {string} hexColor
     * @returns {Promise<void>}
     */
    setStatusBarColor(hexColor){
        return RequestHelper.Promise(TXTextControl.setStatusBarColor, hexColor, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the control's text.
     * @param {string} text
     * @returns {Promise<void>}
     */
    setText(text){
        return RequestHelper.Promise(TXTextControl.setText, text, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the background color for the text.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setTextBackColor(color){
        return RequestHelper.Promise(TXTextControl.setTextBackColor, color, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets whether text frames that have no border line are shown with marker lines.
     * @param {boolean} textFrameMarkerLines
     * @returns {Promise<void>}
     */
    setTextFrameMarkerLines(textFrameMarkerLines){
        return RequestHelper.Promise(TXTextControl.setTextFrameMarkerLines, textFrameMarkerLines, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Sets the mode how Text Control displays a document.
     * @param {TXTextControlTypeDefinition.ViewMode} viewMode
     * @returns {Promise<void>}
     */
    setViewMode(viewMode){
        return RequestHelper.Promise(TXTextControl.setViewMode, viewMode, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Shows a built -in dialog box.
     * @param {TXTextControlTypeDefinition.DialogBoxKind} dialogBoxKind The dialog box kind.
     * @param {number=} selectedTab Optional. The 0-based selected dialog tab.
     */
    showDialog(dialogBoxKind, selectedTab){
        TXTextControl.showDialog(dialogBoxKind, selectedTab);
    }
    /**
     * Shows or hides the web editor's horizontal ruler bar.
     * @param {boolean=} show
     */
    showHorizontalRuler(show){
        TXTextControl.showHorizontalRuler(show);
    }
    /**
     * Shows one of the a built -in HTML dialog boxes.
     * @param {TXTextControlTypeDefinition.HtmlDialogBoxKind} dialogBoxKind
     */
    showHtmlDialog(dialogBoxKind){
        TXTextControl.showHtmlDialog(dialogBoxKind);
    }
    /**
     * Opens a field dialog either for changing properties of an existing merge field or for creating a new merge field.
     * @param {TXTextControlTypeDefinition.FieldType} fieldType
     */
    showMergeFieldDialog(fieldType){
        TXTextControl.showMergeFieldDialog(fieldType);
    }
    /**
     * Shows or hides the ribbon bar.
     * @param {boolean=} show
     */
    showRibbonBar(show){
        TXTextControl.showRibbonBar(show);
    }
    /**
     * Shows or hides a specified side bar.
     * @param {TXTextControlTypeDefinition.SideBarType} sideBarType
     * @param {boolean=} show
     */
    showSideBar(sideBarType, show){
        TXTextControl.showSideBar(sideBarType,show);
    }
    /**
     * Shows or hides the web editor's status bar.
     * @param {boolean=} show
     */
    showStatusBar(show){
        TXTextControl.showStatusBar(show);
    }
    /**
     * Shows or hides the web editor's vertical ruler bar.
     * @param {boolean=} show
     */
    showVerticalRuler(show){
        TXTextControl.showVerticalRuler(show);
    }
    /**
     * Undoes the last Text Control operation.
     * @returns {Promise<void>}
     */
    undo(){
        return RequestHelper.Promise(TXTextControl.undo, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    /**
     * Zooms the contents of the TextControl.
     * @param {number | TXTextControlTypeDefinition.SpecialZoomFactor} zoomFactor Specifies the zoom factor, in percent. This can also be one of the values of the TXTextControl.SpecialZoomFactor enumeration.
     * @returns {Promise<void>}
     */
    zoom(zoomFactor){
        return RequestHelper.Promise(TXTextControl.setEditableRegionHighlightMode, zoomFactor, CallbackType.EmptyRequestCallback, CallbackType.ErrorCallback);
    }
    //#endregion

    //#region properties

    //#endregion
    /** ______________________________________________ */

    /** @type {Selection} */
    get selection() {
        return new Selection(TXTextControl.selection);
    }

    /** @type {TableCollection} */
    get tables() {
        return new TableCollection(TXTextControl.tables);
    }

    /** @type {SubTextPartCollection} */
    get subTextParts() {
        return new SubTextPartCollection(TXTextControl.subTextParts);
    }

    /** @type {ApplicationFieldCollection} */
    get applicationFields() {
        return new ApplicationFieldCollection(TXTextControl.applicationFields);
    }

    /** @type {FormFieldCollection} */
    get formFields() {
        return new FormFieldCollection(TXTextControl.formFields);
    }

    /** @type {EditableRegionCollection} */
    get editableRegions() {
        return new EditableRegionCollection(TXTextControl.editableRegions);
    }

    /** @type {InputPosition} */
    get inputPosition() {
        return new InputPosition(TXTextControl.inputPosition);
    }

    //#region context functions
    /**
     * indicates if TXTextControl is ready
     * @type {boolean}
     */
    #isTextControlLoaded = false;

    /**
     * Loads resource files and initializes the document editor after TXTextControl is available
     * @param {TXTextControlTypeDefinition.ComponentSettings} componentSettings
     * @param {string} [jsResourceFilePath="/GetResource?name=tx-document-editor.min.js"]
     * @returns {Promise<void>}
     */
    async initialize(componentSettings, jsResourceFilePath = '/GetResource?name=tx-document-editor.min.js') {
        return new Promise(async (resolve, reject) => {
            if (this.#isTextControlLoaded) resolve();

            let txDocumentEditorResourceUrl = new URL(jsResourceFilePath, componentSettings.webSocketURL);

            //load tx resource and await global object to be defined
            var script = document.createElement('script');
            script.setAttribute('src', txDocumentEditorResourceUrl.href);
            document.head.appendChild(script);
            await this.#txTextControlNotUndefined();
            //init document editor
            TXTextControl.addEventListener('textControlLoaded', () => {
                this.#isTextControlLoaded = true;
                resolve();
            });
            TXTextControl.init(componentSettings);
        });
    }

    /**
     * waits until TXTextControlLoaded true
     * @returns {Promise<void>}
     */
    async untilTextControlLoaded() {
        return waitUntil(() => this.#isTextControlLoaded, 20);
    }
    //#endregion

    //#region private functions
    async #txTextControlNotUndefined() {
        return waitUntil(() => 'TXTextControl' in window, 20);
    }
    //#endregion
}

import {
    LoadDocumentCallback,
    EmptyRequestCallback,
    RequestNumberCallback,
    RequestActivationStateCallback,
    RequestBooleanCallback,
    RequestColorStringCallback,
    RequestHighlightModeCallback,
    RequestEditModeCallback,
    RequestStringCallback,
    RequestFontUnderlineStyleCallback,
    RequestFormulaReferenceStyleCallback,
    RequestStringsCallback,
    RequestMeasuringUnitCallback,
    RequestPermanentControlCharsCallback,
    RequestRenderModeCallback,
    RequestPaperSizesCallback,
    RequestTextFieldsCallback,
    RequestTextFieldInfoArrayCallback,
    RequestTextPartsCallback,
    RequestViewModeCallback,
    SaveDocumentResultCallback,
} from './callbacks';
import {
    StreamType,
    AppendSettings,
    FindOptions,
    FileType,
    TextFieldType,
    ActivationState,
    HighlightMode,
    EditMode,
    FontUnderlineStyle,
    FormulaReferenceStyle,
    TextFieldPosition,
    MeasuringUnit,
    PermanentControlChar,
    ComponentRenderMode,
    ViewMode,
    DialogBoxKind,
    HtmlDialogBoxKind,
    FieldType,
    SideBarType,
    SpecialZoomFactor,
    ClipboardMode,
    InsertionMode
} from './enums';
import { EventMap } from './helper';
import {
    IfField,
    IncludeTextField,
    DateField,
    NextField,
    NextIfField,
    TextField,
    LoadSettings,
    CultureSettings,
    ComponentSettings,
    SaveSettings,
    Point,
    BarcodeTypeSettings,
    BarcodeCollection,
    CommentCollection,
    TextViewGeneratorColors,
    DocumentLinkCollection,
    DocumentPermissions,
    DocumentSettings,
    DocumentTargetCollection,
    EditableRegionCollection,
    FootnoteCollection,
    FrameCollection,
    HeaderFooterCollection,
    HypertextLinkCollection,
    ImageCollection,
    InlineStyleCollection,
    InputFormat,
    LineCollection,
    ListFormat,
    MisspelledWordCollection,
    PageMargins,
    PageSize,
    PageCollection,
    ParagraphStyleCollection,
    ParagraphCollection,
    Ribbon,
    RibbonPermissionsTab,
    RulerBarViewGenerator,
    SectionCollection,
    SideBarToggleButton,
    SignatureFieldCollection,
    StatusBarViewGenerator,
    TableOfContentsCollection,
    TextCharCollection,
    TextFieldCollection,
    TextFrameCollection,
    TextPartCollection,
    TrackedChangeCollection,
    MergeField,
    ApplicationField,
    ApplicationFieldCollection,
    FormFieldCollection,
    InputPosition,
    ParagraphFormat,
    SubTextPartCollection,
    TableCollection,
    Selection
} from './objects';

//#region methods
/**
 * The addEventListener function registers event listener functions on the TXTextControl object.
 * @param eventName A string representing the name of the event to listen for.
 * @param callback The event listener. Depending on the event specified in parameter eventName the event listener function is called with different event argument objects (or none at all).
 *
 * @example
 * function fieldClickedHandler(e)
 * {
 *   console.log("Field type: " + e.fieldType);
 *   console.log("Field name: " + e.fieldName);
 *   console.log("Merge field type: " + e.typeName);
 * }
 * TXTextControl.addEventListener("textFieldClicked", fieldClickedHandler);
 *
 * Possible console output after clicking into a merge field:
 * > Field type: APPLICATIONFIELD
 * > Field name: SalesOrderID
 * > Merge field type: MERGEFIELD
 */
export function addEventListener<T extends keyof EventMap>(eventName: T, callback: EventMap[T]): void;
/**
 * Inserts a merge field at the current input position.
 * @param mergeField The merge field.
 */
export function addMergeField(mergeField: MergeField | IfField | IncludeTextField | DateField | NextField | NextIfField): void;
/** @deprecated Obsolete. This method will be removed in one of the next versions. Inserts a new ApplicationField or TextField at the current input position.*/
export function addTextField(textField: TextField | ApplicationField): void;
/**
 * Appends text to the document in a certain format.
 * @param streamType Specifies one of the numerical StreamType values.
 * @param base64Data Base64 encoded document data. For encoding strings containing characters outside of the Latin1 range use TXTextControl.btoaUTF8.
 * @param callback Receives information about the appended data when the appending process is finished.
 * @param loadSettings Additional settings for appending the data. Can be null.
 * @param appendSettings Settings on how the document is appended.
 * @param errorCallback Optional. Is called when the operation failed with an error.
 */
export function append(
    streamType: StreamType,
    base64Data: string,
    callback: LoadDocumentCallback,
    loadSettings: LoadSettings | null,
    appendSettings: AppendSettings,
    errorCallback?: ErrorCallback
): void;
/**
 * Appends text in a certain format to the current document.
 * @param streamType Specifies one of the numerical StreamType values.
 * @param base64Data Base64 encoded document data. For encoding strings containing characters outside of the Latin1 range use TXTextControl.btoaUTF8.
 *
 * @example
 * var html = "This is some <b>HTML</b> text.";
 * var encoded = btoa(html); // btoa base-64-encodes strings.
 * TXTextControl.appendDocument(TXTextControl.StreamType.HTMLFormat, encoded);
 */
export function appendDocument(streamType: StreamType, base64Data: string): void;
/**
 * Decodes a string of data which has been encoded using base-64 encoding.
 * @param inputString A base-64 encoded unicode string.
 * @param keepBOM Optional. Set this to true in case the original string had a byte order mark and you want to keep it.
 * @returns The original unicode string.
 */
export function atobUTF8(inputString: string, keepBOM?: boolean): string;
/**
 * Begins a user - defined undo operation.
 * All editing and fomatting changes made between beginUndoAction and endUndoAction belong to the undo operation.
 * These changes are undone or redone in a single step.
 * The specified user-defined name is available via getUndoActionName.
 * @param actionName Specifies the undo action's name. If an action name is not necessary, this parameter can be null or an empty string.
 * @param callback Optional. Is called when the operation completed.
 * @param errorCallback Optional. Is called when the operation failed with an error.
 */
export function beginUndoAction(actionName: string | null, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/**  */
/**
 * Creates a base-64 encoded ASCII string from a unicode string.
 * In contrast to the browser provided method btoa() this method handles all unicode characters
 * and not only characters in the Latin1 range.
 * @param inputString A unicode string to be encoded into base-64.
 * @param addBOM Optional. Set this to true if a byte order mark should be added to the encoded string.
 * @returns A base-64 encoded string.
 */
export function btoaUTF8(inputString: string, addBOM?: boolean): string;
/**
 * Clears the selected text or the character right from the current input position.
 * @param callback Optional. Is called when the operation completed.
 * @param errorCallback Optional. Is called when the operation failed with an error.
 */
export function clear(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/**
 * Clears the undo buffer.
 * @param callback Optional. Is called when the operation completed.
 * @param errorCallback Optional. Is called when the operation failed with an error.
 */
export function clearUndo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/**
 * Ends a user-defined undo operation.
 * All editing and fomatting changes made between beginUndoAction and endUndoAction belong to the undo operation.
 * These changes are undone or redone in a single step.
 * @param callback Optional. Is called when the operation completed.
 * @param errorCallback Optional. Is called when the operation failed with an error.
 */
export function endUndoAction(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/**
 * Finds a text string. The search starts at the specified position.
 * @param text Specifies the text to search for.
 * @param start Specifies the text position where the search starts, beginning with 0. If this value is -1, the search begins at the current text input position.
 * @param options Optional. Specifies search options. It can be a combination of the FindOptions values.
 * @param callback If the text searched for is found, the method receives the index (zero-based) of the first character of the search string. If the specified text is not found the method receives -1.
 * @param errorCallback Optional. Is called when the operation failed with an error.
 */
export function find(text: string, start: number, options: FindOptions | null, callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
/**
 * Flatten all form fields in the document. This means that all form fields are converted to static text.
 * @param callback Optional. Is called when the operation completed.
 * @param errorCallback Optional. Is called when the operation failed with an error.
 */
export function flattenFormFields(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the text input focus to the web editor. */
export function focus(): void;
/** Gets a value indicating the current activation state. */
export function getActivationState(callback: RequestActivationStateCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating whether the undo buffer is active or not. */
export function getAllowUndo(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets the Text Control's background color. */
export function getBackColor(callback: RequestColorStringCallback): void;
/** Gets the baseline alignment, in twips, of the Text Control. */
export function getBaseline(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
/** Informs whether the currently selected text can be formatted with character formatting attributes. */
export function getCanCharacterFormat(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Informs whether a part of a Text Control document has been selected and can be copied to the clipboard. */
export function getCanCopy(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Informs whether the document can be formatted with page and section formatting attributes. */
export function getCanDocumentFormat(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Informs whether the document's text and/or formatting attributes can be changed. */
export function getCanPaste(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Informs whether the document can be printed. */
export function getCanPrint(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Informs whether an operation can be re - done using the Redo method. */
export function getCanRedo(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Informs whether the document can be formatted with formatting styles. */
export function getCanStyleFormat(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Informs whether the currently selected text can be formatted with table formatting attributes. */
export function getCanTableFormat(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating whether the user can undo the previous operation in a Text Control. */
export function getCanUndo(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets the global comment highlight mode. */
export function getCommentHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
/** Gets whether the control characters are visible or not. */
export function getControlChars(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Returns the culture and the UI culture of the control. */
export function getCultures(): CultureSettings;
/** Gets a value indicating that markers for hypertext targets are shown or not. */
export function getDocumentTargetMarkers(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets whether a marker frame is shown around a drawing to indicate its position and size. */
export function getDrawingMarkerLines(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating whether the document's text is protected, or can be freely edited and formatted. */
export function getEditMode(callback: RequestEditModeCallback, errorCallback?: ErrorCallback): void;
/** Gets the global editable region highlight mode. */
export function getEditableRegionHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
/**
 * @deprecated Obsolete. This method will be removed in one of the next versions.
 * Requests the directory path where the files of a specific file type are stored on the web server.
 * @param fileType Must be one of the FileType values.
 * @param callback Is called with a string containing the file directory of the requested file type on the web server as soon as the information has been retrieved from the server.
 */
export function getFileDirectory(fileType: FileType, callback: RequestStringCallback): void;
/** Gets underlining style for the text displayed by the control. */
export function getFontUnderlineStyle(callback: RequestFontUnderlineStyleCallback, errorCallback?: ErrorCallback): void;
/** Gets the foreground color of the control which is the color of the document's text. */
export function getForeColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
/** Returns the name of the currently selected formatting printer by calling a provided callback function. */
export function getFormattingPrinter(callback: RequestStringCallback): void;
/** Gets a value determining how references to table cells in formulas are specified. */
export function getFormulaReferenceStyle(callback: RequestFormulaReferenceStyleCallback, errorCallback?: ErrorCallback): void;
/** Gets the names of the printers installed on the server which are usable by Text Control. */
export function getInstalledPrinters(callback: RequestStringsCallback): void;
/** Gets a value indicating whether form field validation is active or not. */
export function getIsFormFieldValidationEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating whether formulas in tables are automatically calculated when the text of an input cell is changed. */
export function getIsFormulaCalculationEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating whether hyphenation is active or not. */
export function getIsHyphenationEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating whether language detection is active or not. */
export function getIsLanguageDetectionEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating whether spell checking is active or not. */
export function getIsSpellCheckingEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating whether track changes is active or not. */
export function getIsTrackChangesEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating whether the page orientation is landscape. */
export function getLandscape(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Gets the number of pages contained in the current document. */
export function getPageCount(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
/** Gets the measure used for page sizes and page margins. */
export function getPageUnit(callback: RequestMeasuringUnitCallback, errorCallback?: ErrorCallback): void;
/** Gets a value indicating which control characters are shown permanently on the screen. */
export function getPermanentControlChars(callback: RequestPermanentControlCharsCallback, errorCallback?: ErrorCallback): void;
/** Gets a string that represents the name of the action that will be performed when a call to the redo method is made. */
export function getRedoActionName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
/** Gets the component render mode. */
export function getRenderMode(callback: RequestRenderModeCallback, errorCallback?: ErrorCallback): void;
/** Gets a value controlling the selection of objects which are inserted behind the text. */
export function getSelectObjects(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/** Returns the background color of the status bar as a hexadecimal CSS color string. */
export function getStatusBarColor(callback: RequestStringCallback): void;
/**
 * @deprecated
 * Obsolete. This method will be removed in one of the next versions.
 * Requests a collection of either all subtextparts the current text part contains
 * or only the subtextpart containing the input position
 * @param callback A function with one parameter. Is called with an array of subtextparts as a parameter containing the requested text fields.
 * @param atInputPosition Optional. A boolean value indicating that only the SubTextPart containing the input position should be retrieved. If there is no subtextpart at the input position, an empty array is received.
 */
export function getSubTextParts(callback: (subtextparts: any[]) => void, atInputPosition?: boolean): void;
/** Gets an array of strings specifying the names of all currently supported fonts. */
export function getSupportedFonts(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
/** Gets an array of PaperSize structures specifying the names and the size of all currently supported paper sizes. */
export function getSupportedPaperSizes(callback: RequestPaperSizesCallback, errorCallback?: ErrorCallback): void;
/** Gets the control's text. */
export function getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
/** Gets the background color for the text. */
export function getTextBackColor(callback: RequestColorStringCallback, errorCallback?: ErrorCallback): void;
/** @deprecated Obsolete. */
export function getTextFields(callback: RequestTextFieldsCallback, atInputPosition?: boolean): void;
/** Returns an array of static text field information objects. (Inherited from FormattedText) */
export function getTextFieldsByType(fieldType: TextFieldType, callback: RequestTextFieldInfoArrayCallback, errorCallback: ErrorCallback): void;
/** Gets whether text frames that have no border line are shown with marker lines. */
export function getTextFrameMarkerLines(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
/**
 * @deprecated
 * Obsolete. This method will be removed in one of the next versions.
 * Requests a collection of either all text parts the current document contains or only the text part containing the input position
 */
export function getTextParts(callback: RequestTextPartsCallback, atInputPosition?: boolean): void;
/**
 * Gets a string that represents the name of the action that will be performed when a call to the undo method is made.
 * The property's value is null if there is no action that can be undone.
 */
export function getUndoActionName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
/** Gets a list of names specifying users who have access to editable regions. */
export function getUserNames(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
/** Gets the mode how Text Control displays a document. */
export function getViewMode(callback: RequestViewModeCallback, errorCallback?: ErrorCallback): void;
/** Initializes the document editor. */
export function init(settings: ComponentSettings): void;
/** Loads text in a certain format. */
export function load(
    streamType: StreamType,
    base64Data: string,
    callback: LoadDocumentCallback,
    loadSettings?: LoadSettings,
    errorCallback?: ErrorCallback
): void;
/** Loads text in a certain format. */
export function loadDocument(
    streamType: StreamType,
    base64Data: string,
    callback: LoadDocumentCallback,
    loadSettings?: LoadSettings,
    errorCallback?: ErrorCallback
): void;
/** Loads JSON data which is used to create table and field name menu items in the mailings ribbon tab. */
export function loadJsonData(jsonData: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** @deprecated Obsolete. Loads text in a certain format into the current selection. */
export function loadSelection(streamType: StreamType, base64Data: string): void;
/** Loads an XML database which is used to create table and field name menu items in the mailings ribbon tab. */
export function loadXMLDatabase(xmlData: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Attempts to print the current document in the browser. Not all browsers support this. */
export function printDocument(): void;
/** Redoes the last Text Control operation. */
export function redo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/**
 * Forces a layout refresh of the document editor.
 * Use this method in cases where the editor doesn't automatically react to layout changes of your web site.
 */
export function refreshLayout(): void;
/** The removeListener export function removes the specified event listener from the TXTextControl object. */
export function removeEventListener<T extends keyof EventMap>(eventName: T, callback: EventMap[T]): void;
/** Closes the WebSocket connection gracefully and removes the whole editor from the DOM. */
export function removeFromDom(): void;
/**
 * @deprecated
 * Obsolete. This method will be removed in one of the next versions.
 * The removeTextField method removes a text field from the document.
 * @param textField The text field to remove from the document.
 * @param keepText If this parameter is set to true, the field is removed without deleting its visible text. Otherwise, the field's text is also deleted.
 */
export function removeTextField(textField: TextField | ApplicationField, keepText: boolean): void;
/** Deletes the entire contents of the control. */
export function resetContents(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Saves the current document in a certain format and sends the result back asynchronously by calling a given callback export function. */
export function save(streamType: StreamType, callback: SaveDocumentResultCallback, saveSettings?: SaveSettings, errorCallback?: ErrorCallback): void;
/** Saves the current document in a certain format and sends the result back asynchronously by calling a given callback export function. */
export function saveDocument(
    streamType: StreamType,
    callback: SaveDocumentResultCallback,
    saveSettings?: SaveSettings,
    errorCallback?: ErrorCallback
): void;
/**
 * @deprecated
 * Obsolete. This method will be removed in one of the next versions.
 * Saves the current selection in a certain format and sends the result back asynchronously by calling a given callback function.
 */
export function saveSelection(streamType: StreamType, callback: SaveDocumentResultCallback): void;
/** Selects text within the control. */
export function select(start: number, length: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Selects all text in the control. */
export function selectAll(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Selects the word at the current text input position. */
export function selectWord(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating the current activation state. */
export function setActivationState(activationState: ActivationState, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating whether the undo buffer is active or not. */
export function setAllowUndo(allowUndo: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the Text Control's background color. */
export function setBackColor(htmlColor: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the baseline alignment, in twips, of the Text Control. */
export function setBaseline(baseline: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the global comment highlight mode. */
export function setCommentHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets whether the control characters are visible or not. */
export function setControlChars(controlChars: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating that markers for hypertext targets are shown or not. */
export function setDocumentTargetMarkers(documentMarkerLines: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets whether a marker frame is shown around a drawing to indicate its position and size. */
export function setDrawingMarkerLines(drawingMarkerLines: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating whether the document's text is protected, or can be freely edited and formatted. */
export function setEditMode(editMode: EditMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the global editable region highlight mode. */
export function setEditableRegionHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/**
 * @deprecated
 * Obsolete. This method will be removed in one of the next versions.
 * For security reasons, the setFileDirectory method has been removed.
 * Please set the file directory on the server side using the TXTextControl.Web.
 */
export function setFileDirectory(fileType: FileType, directory: string): void;
/** Sets underlining style for the text displayed by the control. */
export function setFontUnderlineStyle(style: FontUnderlineStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the foreground color of the control which is the color of the document's text. */
export function setForeColor(foreColor: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the name of a printer the text dimensions and capabilities of which are used to format the document. */
export function setFormattingPrinter(printerName: string): void;
/** Sets a value determining how references to table cells in formulas are specified. */
export function setFormulaReferenceStyle(style: FormulaReferenceStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a new input position from a geometric location. */
export function setInputPositionByLocation(location: Point, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a new input position from a page, line and column number. */
export function setInputPositionByPage(
    page: number,
    line: number,
    column: number,
    callback?: EmptyRequestCallback,
    errorCallback?: ErrorCallback
): void;
/** Sets a new input position from a text position. */
export function setInputPositionByTextPosition(
    textPosition: number,
    textFieldPosition: TextFieldPosition,
    callback?: EmptyRequestCallback,
    errorCallback?: ErrorCallback
): void;
/** Sets a value indicating whether form field validation is active or not. */
export function setIsFormFieldValidationEnabled(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating whether formulas in tables are automatically calculated when the text of an input cell is changed. */
export function setIsFormulaCalculationEnabled(enable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating whether hyphenation is active or not. */
export function setIsHyphenationEnabled(enable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating whether language detection is active or not. */
export function setIsLanguageDetectionEnabled(enable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating whether spell checking is active or not. */
export function setIsSpellCheckingEnabled(enable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating whether track changes is active or not. */
export function setIsTrackChangesEnabled(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating whether the page orientation is landscape. */
export function setLandscape(isLandscape: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the measure used for page sizes and page margins. */
export function setPageUnit(pageUnit: MeasuringUnit, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value indicating which control characters are shown permanently on the screen. */
export function setPermanentControlChars(
    permanentControlChars: PermanentControlChar,
    callback?: EmptyRequestCallback,
    errorCallback?: ErrorCallback
): void;
/** Sets the component render mode. */
export function setRenderMode(value: ComponentRenderMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets a value controlling the selection of objects which are inserted behind the text. */
export function setSelectObjects(selectObjects: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the background color of the status bar. */
export function setStatusBarColor(hexColor: string): void;
/** Sets the control's text. */
export function setText(text: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the background color for the text. */
export function setTextBackColor(color: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets whether text frames that have no border line are shown with marker lines. */
export function setTextFrameMarkerLines(textFrameMarkerLines: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Sets the mode how Text Control displays a document. */
export function setViewMode(viewMode: ViewMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/**
 * Shows a built -in dialog box.
 * @param dialogBoxKind The dialog box kind.
 * @param selectedTab Optional. The 0-based selected dialog tab.
 */
export function showDialog(dialogBoxKind: DialogBoxKind, selectedTab?: number): void;
/** Shows or hides the web editor's horizontal ruler bar. */
export function showHorizontalRuler(show?: boolean): void;
/** Shows one of the a built -in HTML dialog boxes. */
export function showHtmlDialog(dialogBoxKind: HtmlDialogBoxKind): void;
/** Opens a field dialog either for changing properties of an existing merge field or for creating a new merge field. */
export function showMergeFieldDialog(fieldType: FieldType): void;
/** Shows or hides the ribbon bar. */
export function showRibbonBar(show?: boolean): void;
/** Shows or hides a specified side bar. */
export function showSideBar(sideBarType: SideBarType, show?: boolean): void;
/** Shows or hides the web editor's status bar. */
export function showStatusBar(show?: boolean): void;
/** Shows or hides the web editor's vertical ruler bar. */
export function showVerticalRuler(show?: boolean): void;
/** Undoes the last Text Control operation. */
export function undo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/**
 * Zooms the contents of the TextControl.
 * @param zoomFactor Specifies the zoom factor, in percent. This can also be one of the values of the TXTextControl.SpecialZoomFactor enumeration.
 * @param callback Optional. Is called when the operation completed.
 * @param errorCallback Optional. Is called when the operation failed with an error.
 */
export function zoom(zoomFactor: number | SpecialZoomFactor, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
/** Gets the insertion mode. */
export function getInsertionMode(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
/** Sets the insertion mode. */
export function setInsertionMode(value: InsertionMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
//#endregion

//#region properties
/** Gets a collection of all Microsoft Word fields that have been created or imported from a Microsoft Word or RTF document.(Inherited from FormattedText) */
export const applicationFields: ApplicationFieldCollection;
/** The type specific settings for the currently used barcode. */
export let barcodeTypeSettings: BarcodeTypeSettings;
/** Gets a collection of all barcode frames contained in the text part with the input focus. */
export const barcodes: BarcodeCollection;
/** Gets or sets the clipboard mode(client or server). */
export let clipboardMode: ClipboardMode;
/** Gets a collection of all comments in this text part.(Inherited from FormattedText) */
export const comments: CommentCollection;
/** Returns the unique connection ID of this session. */
export const connectionID: string;
/** Gets or sets if a right click into the text area opens a context menu or not. */
export let contextMenusEnabled: boolean;
/** @deprecated Obsolete. */
export let controlChars: boolean;
/** The displayed colors of the text control. */
export const displayColors: TextViewGeneratorColors;
/** Gets a collection of all links which point to targets in the same document.(Inherited from FormattedText) */
export const documentLinks: DocumentLinkCollection;
/** The document permission settings. */
export const documentPermissions: DocumentPermissions;
/** The DocumentSettings class provides properties which inform about general document settings, such as author and title, contained in the document the user is currently working on. */
export const documentSettings: DocumentSettings;
/** Gets or sets whether document target markers are visible. */
export let documentTargetMarkers: boolean;
/** Gets a collection of all document targets.(Inherited from FormattedText) */
export const documentTargets: DocumentTargetCollection;
/** @deprecated Obsolete. */
export let editMode: EditMode;
/** Gets a collection of all editable regions.(Inherited from FormattedText) */
export const editableRegions: EditableRegionCollection;
/** All footnotes contained in the main text of the document. */
export const footnotes: FootnoteCollection;
/** Gets a collection of all form fields in the text part.(Inherited from FormattedText) */
export const formFields: FormFieldCollection;
/** Gets a collection of all frames in the document.(Inherited from FormattedText) */
export const frames: FrameCollection;
/** Gets a collection of all headers and footers in the document. */
export const headersAndFooters: HeaderFooterCollection;
/** Gets a collection of all hypertext links.(Inherited from FormattedText) */
export const hypertextLinks: HypertextLinkCollection;
/** Gets a collection of all images contained in the text part with the input focus. */
export const images: ImageCollection;
/** Gets a collection of all inline styles the current document contains. */
export const inlineStyles: InlineStyleCollection;
/** All formatting attributes at the current text input position. */
export const inputFormat: InputFormat;
/** The current text input position. */
export const inputPosition: InputPosition;
/** @deprecated Obsolete. */
export let isHyphenationEnabled: boolean;
/** @deprecated Obsolete. */
export let isLanguageDetectionEnabled: boolean;
/** Gets or sets whether a wait dialog is shown while a document is being loaded. */
export let isLoadingDialogEnabled: boolean;
/** @deprecated Obsolete. */
export let isSpellCheckingEnabled: boolean;
/** @deprecated Obsolete. */
export let isTrackChangesEnabled: boolean;
/** Gets a collection of all text lines.(Inherited from FormattedText) */
export const lines: LineCollection;
/** The type and the formatting attributes of a bulleted or numbered list. */
export const listFormat: ListFormat;
/** Gets a collection of all misspelled words.(Inherited from FormattedText) */
export const misspelledWords: MisspelledWordCollection;
/** The margins for the pages of the current document. */
export const pageMargins: PageMargins;
/** The width and height of the pages for the current document. */
export const pageSize: PageSize;
/** Gets a collection of all pages in the document. */
export const pages: PageCollection;
/** The paragraph formatting attributes of the text displayed by the control. */
export const paragraphFormat: ParagraphFormat;
/** All paragraph formatting styles in the current document. */
export const paragraphStyles: ParagraphStyleCollection;
/** Gets a collection of all paragraphs.(Inherited from FormattedText) */
export const paragraphs: ParagraphCollection;
/** Gets the control's ribbon bar object. */
export const ribbon: Ribbon;
/** Returns the "Permissions" ribbon tab object. */
export const ribbonPermissionsTab: RibbonPermissionsTab;
/** The horizontal ruler bar. */
export const rulerBar: RulerBarViewGenerator;
/** @deprecated Obsolete. */
export let saveDocumentQuestionDialogEnabled: boolean;
/** Gets a collection of all sections in the document. */
export const sections: SectionCollection;
/** Gets the current selection.(Inherited from FormattedText) */
export const selection: Selection;
/** The sidebar toggle button shown at the top right of the ribbon. */
export const sideBarToggleButton: SideBarToggleButton;
/** Gets a collection of all signature fields in the document. */
export const signatureFields: SignatureFieldCollection;
/** The status bar. */
export const statusBar: StatusBarViewGenerator;
/** Gets the current subtextparts.(Inherited from FormattedText) */
export const subTextParts: SubTextPartCollection;
/** Gets or sets if table grid lines are visible. */
export let tableGridLines: boolean;
/** Gets a collection of all tables.(Inherited from FormattedText) */
export const tables: TableCollection;
/** Gets the current tables of contents.(Inherited from FormattedText) */
export const tablesOfContents: TableOfContentsCollection;
/** Gets a collection of all text characters.(Inherited from FormattedText) */
export const textChars: TextCharCollection;
/** Gets a collection of all standard text fields.(Inherited from FormattedText) */
export const textFields: TextFieldCollection;
/** Gets or sets if text fields are editable or not. */
export let textFieldsEditable: boolean;
/** Gets or sets if text frame marker lines are visible. */
export let textFrameMarkerLines: boolean;
/** Gets a collection of all text frames in the document. */
export const textFrames: TextFrameCollection;
/** Gets the Text part type.(Inherited from FormattedText) */
export const textPartType: string;
/** Gets a collection of all main text parts the current document contains. */
export const textParts: TextPartCollection;
/** Gets a collection of all tracked changes.(Inherited from FormattedText) */
export const trackedChanges: TrackedChangeCollection;
/** The vertical ruler bar. */
export const verticalRulerBar: RulerBarViewGenerator;
/** @deprecated Obsolete. */
export let zoomFactor: number | SpecialZoomFactor;
//#endregion

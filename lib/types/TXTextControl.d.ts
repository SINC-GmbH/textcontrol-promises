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
    TextViewGeneratorColors,
    DocumentPermissions,
    DocumentSettings,
    FootnoteCollection,
    HeaderFooterCollection,
    ImageCollection,
    InlineStyleCollection,
    InputFormat,
    ListFormat,
    PageMargins,
    PageSize,
    PageCollection,
    ParagraphStyleCollection,
    Ribbon,
    RibbonPermissionsTab,
    RulerBarViewGenerator,
    SectionCollection,
    SideBarToggleButton,
    SignatureFieldCollection,
    StatusBarViewGenerator,
    TextFrameCollection,
    TextPartCollection,
    MergeField,
    ApplicationField,
    InputPosition,
    ParagraphFormat,
} from './objects';
import type { Proofing } from './objects/Proofing';
import type { FormattedText } from './objects/FormattedText';

export interface TXTextControl extends FormattedText {

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
    addEventListener<T extends keyof EventMap>(eventName: T, callback: EventMap[T]): void;
    /**
     * Inserts a merge field at the current input position.
     * @param mergeField The merge field.
     */
    addMergeField(mergeField: MergeField | IfField | IncludeTextField | DateField | NextField | NextIfField): void;
    /** @deprecated Obsolete. This method will be removed in one of the next versions. Inserts a new ApplicationField or TextField at the current input position.*/
    addTextField(textField: TextField | ApplicationField): void;
    /**
     * Appends text to the document in a certain format.
     * @param streamType Specifies one of the numerical StreamType values.
     * @param base64Data Base64 encoded document data. For encoding strings containing characters outside of the Latin1 range use TXTextControl.btoaUTF8.
     * @param callback Receives information about the appended data when the appending process is finished.
     * @param loadSettings Additional settings for appending the data. Can be null.
     * @param appendSettings Settings on how the document is appended.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    append(
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
    appendDocument(streamType: StreamType, base64Data: string): void;
    /**
     * Decodes a string of data which has been encoded using base-64 encoding.
     * @param inputString A base-64 encoded unicode string.
     * @param keepBOM Optional. Set this to true in case the original string had a byte order mark and you want to keep it.
     * @returns The original unicode string.
     */
    atobUTF8(inputString: string, keepBOM?: boolean): string;
    /**
     * Begins a user - defined undo operation.
     * All editing and fomatting changes made between beginUndoAction and endUndoAction belong to the undo operation.
     * These changes are undone or redone in a single step.
     * The specified user-defined name is available via getUndoActionName.
     * @param actionName Specifies the undo action's name. If an action name is not necessary, this parameter can be null or an empty string.
     * @param callback Optional. Is called when the operation completed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    beginUndoAction(actionName: string | null, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**  */
    /**
     * Creates a base-64 encoded ASCII string from a unicode string.
     * In contrast to the browser provided method btoa() this method handles all unicode characters
     * and not only characters in the Latin1 range.
     * @param inputString A unicode string to be encoded into base-64.
     * @param addBOM Optional. Set this to true if a byte order mark should be added to the encoded string.
     * @returns A base-64 encoded string.
     */
    btoaUTF8(inputString: string, addBOM?: boolean): string;
    /**
     * Clears the selected text or the character right from the current input position.
     * @param callback Optional. Is called when the operation completed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    clear(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * Clears the undo buffer.
     * @param callback Optional. Is called when the operation completed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    clearUndo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * Ends a user-defined undo operation.
     * All editing and fomatting changes made between beginUndoAction and endUndoAction belong to the undo operation.
     * These changes are undone or redone in a single step.
     * @param callback Optional. Is called when the operation completed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    endUndoAction(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * Finds a text string. The search starts at the specified position.
     * @param text Specifies the text to search for.
     * @param start Specifies the text position where the search starts, beginning with 0. If this value is -1, the search begins at the current text input position.
     * @param options Optional. Specifies search options. It can be a combination of the FindOptions values.
     * @param callback If the text searched for is found, the method receives the index (zero-based) of the first character of the search string. If the specified text is not found the method receives -1.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    find(text: string, start: number, options: FindOptions | null, callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /**
     * Flatten all form fields in the document. This means that all form fields are converted to static text.
     * @param callback Optional. Is called when the operation completed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    flattenFormFields(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text input focus to the web editor. */
    focus(): void;
    /** Gets a value indicating the current activation state. */
    getActivationState(callback: RequestActivationStateCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the undo buffer is active or not. */
    getAllowUndo(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the Text Control's background color. */
    getBackColor(callback: RequestColorStringCallback): void;
    /** Gets the baseline alignment, in twips, of the Text Control. */
    getBaseline(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Informs whether the currently selected text can be formatted with character formatting attributes. */
    getCanCharacterFormat(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Informs whether a part of a Text Control document has been selected and can be copied to the clipboard. */
    getCanCopy(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Informs whether the document can be formatted with page and section formatting attributes. */
    getCanDocumentFormat(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Informs whether the document's text and/or formatting attributes can be changed. */
    getCanPaste(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Informs whether the document can be printed. */
    getCanPrint(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Informs whether an operation can be re - done using the Redo method. */
    getCanRedo(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Informs whether the document can be formatted with formatting styles. */
    getCanStyleFormat(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Informs whether the currently selected text can be formatted with table formatting attributes. */
    getCanTableFormat(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the user can undo the previous operation in a Text Control. */
    getCanUndo(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the global comment highlight mode. */
    getCommentHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether the control characters are visible or not. */
    getControlChars(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Returns the culture and the UI culture of the control. */
    getCultures(): CultureSettings;
    /** Gets a value indicating that markers for hypertext targets are shown or not. */
    getDocumentTargetMarkers(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether a marker frame is shown around a drawing to indicate its position and size. */
    getDrawingMarkerLines(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the document's text is protected, or can be freely edited and formatted. */
    getEditMode(callback: RequestEditModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets the global editable region highlight mode. */
    getEditableRegionHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
    /**
     * @deprecated Obsolete. This method will be removed in one of the next versions.
     * Requests the directory path where the files of a specific file type are stored on the web server.
     * @param fileType Must be one of the FileType values.
     * @param callback Is called with a string containing the file directory of the requested file type on the web server as soon as the information has been retrieved from the server.
     */
    getFileDirectory(fileType: FileType, callback: RequestStringCallback): void;
    /** Gets underlining style for the text displayed by the control. */
    getFontUnderlineStyle(callback: RequestFontUnderlineStyleCallback, errorCallback?: ErrorCallback): void;
    /** Gets the foreground color of the control which is the color of the document's text. */
    getForeColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Returns the name of the currently selected formatting printer by calling a provided callback function. */
    getFormattingPrinter(callback: RequestStringCallback): void;
    /** Gets a value determining how references to table cells in formulas are specified. */
    getFormulaReferenceStyle(callback: RequestFormulaReferenceStyleCallback, errorCallback?: ErrorCallback): void;
    /** Gets the names of the printers installed on the server which are usable by Text Control. */
    getInstalledPrinters(callback: RequestStringsCallback): void;
    /** Gets a value indicating whether form field validation is active or not. */
    getIsFormFieldValidationEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether formulas in tables are automatically calculated when the text of an input cell is changed. */
    getIsFormulaCalculationEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether hyphenation is active or not. */
    getIsHyphenationEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether language detection is active or not. */
    getIsLanguageDetectionEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether spell checking is active or not. */
    getIsSpellCheckingEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether track changes is active or not. */
    getIsTrackChangesEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the page orientation is landscape. */
    getLandscape(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of pages contained in the current document. */
    getPageCount(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the measure used for page sizes and page margins. */
    getPageUnit(callback: RequestMeasuringUnitCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating which control characters are shown permanently on the screen. */
    getPermanentControlChars(callback: RequestPermanentControlCharsCallback, errorCallback?: ErrorCallback): void;
    /** Gets a string that represents the name of the action that will be performed when a call to the redo method is made. */
    getRedoActionName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the component render mode. */
    getRenderMode(callback: RequestRenderModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value controlling the selection of objects which are inserted behind the text. */
    getSelectObjects(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Returns the background color of the status bar as a hexadecimal CSS color string. */
    getStatusBarColor(callback: RequestStringCallback): void;
    /**
     * @deprecated
     * Obsolete. This method will be removed in one of the next versions.
     * Requests a collection of either all subtextparts the current text part contains
     * or only the subtextpart containing the input position
     * @param callback A function with one parameter. Is called with an array of subtextparts as a parameter containing the requested text fields.
     * @param atInputPosition Optional. A boolean value indicating that only the SubTextPart containing the input position should be retrieved. If there is no subtextpart at the input position, an empty array is received.
     */
    getSubTextParts(callback: (subtextparts: any[]) => void, atInputPosition?: boolean): void;
    /** Gets an array of strings specifying the names of all currently supported fonts. */
    getSupportedFonts(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
    /** Gets an array of PaperSize structures specifying the names and the size of all currently supported paper sizes. */
    getSupportedPaperSizes(callback: RequestPaperSizesCallback, errorCallback?: ErrorCallback): void;
    /** Gets the control's text. */
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the background color for the text. */
    getTextBackColor(callback: RequestColorStringCallback, errorCallback?: ErrorCallback): void;
    /** @deprecated Obsolete. */
    getTextFields(callback: RequestTextFieldsCallback, atInputPosition?: boolean): void;
    /** Returns an array of static text field information objects. (Inherited from FormattedText) */
    getTextFieldsByType(fieldType: TextFieldType, callback: RequestTextFieldInfoArrayCallback, errorCallback: ErrorCallback): void;
    /** Gets whether text frames that have no border line are shown with marker lines. */
    getTextFrameMarkerLines(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /**
     * @deprecated
     * Obsolete. This method will be removed in one of the next versions.
     * Requests a collection of either all text parts the current document contains or only the text part containing the input position
     */
    getTextParts(callback: RequestTextPartsCallback, atInputPosition?: boolean): void;
    /**
     * Gets a string that represents the name of the action that will be performed when a call to the undo method is made.
     * The property's value is null if there is no action that can be undone.
     */
    getUndoActionName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a list of names specifying users who have access to editable regions. */
    getUserNames(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
    /** Gets the mode how Text Control displays a document. */
    getViewMode(callback: RequestViewModeCallback, errorCallback?: ErrorCallback): void;
    /** Initializes the document editor. */
    init(settings: ComponentSettings): void;
    /** Loads text in a certain format. */
    load(
        streamType: StreamType,
        base64Data: string,
        callback: LoadDocumentCallback,
        loadSettings?: LoadSettings,
        errorCallback?: ErrorCallback
    ): void;
    /** Loads text in a certain format. */
    loadDocument(
        streamType: StreamType,
        base64Data: string,
        callback: LoadDocumentCallback,
        loadSettings?: LoadSettings,
        errorCallback?: ErrorCallback
    ): void;
    /** Loads JSON data which is used to create table and field name menu items in the mailings ribbon tab. */
    loadJsonData(jsonData: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** @deprecated Obsolete. Loads text in a certain format into the current selection. */
    loadSelection(streamType: StreamType, base64Data: string): void;
    /** Loads an XML database which is used to create table and field name menu items in the mailings ribbon tab. */
    loadXMLDatabase(xmlData: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Attempts to print the current document in the browser. Not all browsers support this. */
    printDocument(): void;
    /** Redoes the last Text Control operation. */
    redo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * Forces a layout refresh of the document editor.
     * Use this method in cases where the editor doesn't automatically react to layout changes of your web site.
     */
    refreshLayout(): void;
    /** The removeListener export function removes the specified event listener from the TXTextControl object. */
    removeEventListener<T extends keyof EventMap>(eventName: T, callback: EventMap[T]): void;
    /** Closes the WebSocket connection gracefully and removes the whole editor from the DOM. */
    removeFromDom(): void;
    /**
     * @deprecated
     * Obsolete. This method will be removed in one of the next versions.
     * The removeTextField method removes a text field from the document.
     * @param textField The text field to remove from the document.
     * @param keepText If this parameter is set to true, the field is removed without deleting its visible text. Otherwise, the field's text is also deleted.
     */
    removeTextField(textField: TextField | ApplicationField, keepText: boolean): void;
    /** Deletes the entire contents of the control. */
    resetContents(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Saves the current document in a certain format and sends the result back asynchronously by calling a given callback export function. */
    save(streamType: StreamType, callback: SaveDocumentResultCallback, saveSettings?: SaveSettings, errorCallback?: ErrorCallback): void;
    /** Saves the current document in a certain format and sends the result back asynchronously by calling a given callback export function. */
    saveDocument(
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
    saveSelection(streamType: StreamType, callback: SaveDocumentResultCallback): void;
    /** Selects text within the control. */
    select(start: number, length: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Selects all text in the control. */
    selectAll(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Selects the word at the current text input position. */
    selectWord(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating the current activation state. */
    setActivationState(activationState: ActivationState, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the undo buffer is active or not. */
    setAllowUndo(allowUndo: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the Text Control's background color. */
    setBackColor(htmlColor: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the baseline alignment, in twips, of the Text Control. */
    setBaseline(baseline: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the global comment highlight mode. */
    setCommentHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether the control characters are visible or not. */
    setControlChars(controlChars: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating that markers for hypertext targets are shown or not. */
    setDocumentTargetMarkers(documentMarkerLines: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether a marker frame is shown around a drawing to indicate its position and size. */
    setDrawingMarkerLines(drawingMarkerLines: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the document's text is protected, or can be freely edited and formatted. */
    setEditMode(editMode: EditMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the global editable region highlight mode. */
    setEditableRegionHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * @deprecated
     * Obsolete. This method will be removed in one of the next versions.
     * For security reasons, the setFileDirectory method has been removed.
     * Please set the file directory on the server side using the TXTextControl.Web.
     */
    setFileDirectory(fileType: FileType, directory: string): void;
    /** Sets underlining style for the text displayed by the control. */
    setFontUnderlineStyle(style: FontUnderlineStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the foreground color of the control which is the color of the document's text. */
    setForeColor(foreColor: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the name of a printer the text dimensions and capabilities of which are used to format the document. */
    setFormattingPrinter(printerName: string): void;
    /** Sets a value determining how references to table cells in formulas are specified. */
    setFormulaReferenceStyle(style: FormulaReferenceStyle, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a new input position from a geometric location. */
    setInputPositionByLocation(location: Point, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a new input position from a page, line and column number. */
    setInputPositionByPage(
        page: number,
        line: number,
        column: number,
        callback?: EmptyRequestCallback,
        errorCallback?: ErrorCallback
    ): void;
    /** Sets a new input position from a text position. */
    setInputPositionByTextPosition(
        textPosition: number,
        textFieldPosition: TextFieldPosition,
        callback?: EmptyRequestCallback,
        errorCallback?: ErrorCallback
    ): void;
    /** Sets a value indicating whether form field validation is active or not. */
    setIsFormFieldValidationEnabled(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether formulas in tables are automatically calculated when the text of an input cell is changed. */
    setIsFormulaCalculationEnabled(enable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether hyphenation is active or not. */
    setIsHyphenationEnabled(enable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether language detection is active or not. */
    setIsLanguageDetectionEnabled(enable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether spell checking is active or not. */
    setIsSpellCheckingEnabled(enable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether track changes is active or not. */
    setIsTrackChangesEnabled(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether the page orientation is landscape. */
    setLandscape(isLandscape: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the measure used for page sizes and page margins. */
    setPageUnit(pageUnit: MeasuringUnit, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating which control characters are shown permanently on the screen. */
    setPermanentControlChars(
        permanentControlChars: PermanentControlChar,
        callback?: EmptyRequestCallback,
        errorCallback?: ErrorCallback
    ): void;
    /** Sets the component render mode. */
    setRenderMode(value: ComponentRenderMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value controlling the selection of objects which are inserted behind the text. */
    setSelectObjects(selectObjects: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the background color of the status bar. */
    setStatusBarColor(hexColor: string): void;
    /** Sets the control's text. */
    setText(text: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the background color for the text. */
    setTextBackColor(color: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether text frames that have no border line are shown with marker lines. */
    setTextFrameMarkerLines(textFrameMarkerLines: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the mode how Text Control displays a document. */
    setViewMode(viewMode: ViewMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * Shows a built -in dialog box.
     * @param dialogBoxKind The dialog box kind.
     * @param selectedTab Optional. The 0-based selected dialog tab.
     */
    showDialog(dialogBoxKind: DialogBoxKind, selectedTab?: number): void;
    /** Shows or hides the web editor's horizontal ruler bar. */
    showHorizontalRuler(show?: boolean): void;
    /** Shows one of the a built -in HTML dialog boxes. */
    showHtmlDialog(dialogBoxKind: HtmlDialogBoxKind): void;
    /** Opens a field dialog either for changing properties of an existing merge field or for creating a new merge field. */
    showMergeFieldDialog(fieldType: FieldType): void;
    /** Shows or hides the ribbon bar. */
    showRibbonBar(show?: boolean): void;
    /** Shows or hides a specified side bar. */
    showSideBar(sideBarType: SideBarType, show?: boolean): void;
    /** Shows or hides the web editor's status bar. */
    showStatusBar(show?: boolean): void;
    /** Shows or hides the web editor's vertical ruler bar. */
    showVerticalRuler(show?: boolean): void;
    /** Undoes the last Text Control operation. */
    undo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /**
     * Zooms the contents of the TextControl.
     * @param zoomFactor Specifies the zoom factor, in percent. This can also be one of the values of the TXTextControl.SpecialZoomFactor enumeration.
     * @param callback Optional. Is called when the operation completed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    zoom(zoomFactor: number | SpecialZoomFactor, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Gets the insertion mode. */
    getInsertionMode(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets the insertion mode. */
    setInsertionMode(value: InsertionMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /** The type specific settings for the currently used barcode. */
    barcodeTypeSettings: BarcodeTypeSettings;
    /** Gets a collection of all barcode frames contained in the text part with the input focus. */
    readonly barcodes: BarcodeCollection;
    /** Gets or sets the clipboard mode(client or server). */
    clipboardMode: ClipboardMode;
    /** Returns the unique connection ID of this session. */
    readonly connectionID: string;
    /** Gets or sets if a right click into the text area opens a context menu or not. */
    contextMenusEnabled: boolean;
    /** @deprecated Obsolete. */
    controlChars: boolean;
    /** The displayed colors of the text control. */
    readonly displayColors: TextViewGeneratorColors;
    /** The document permission settings. */
    readonly documentPermissions: DocumentPermissions;
    /** The DocumentSettings class provides properties which inform about general document settings, such as author and title, contained in the document the user is currently working on. */
    readonly documentSettings: DocumentSettings;
    /** Gets or sets whether document target markers are visible. */
    documentTargetMarkers: boolean;
    /** @deprecated Obsolete. */
    editMode: EditMode;
    /** All footnotes contained in the main text of the document. */
    readonly footnotes: FootnoteCollection;
    /** Gets a collection of all headers and footers in the document. */
    readonly headersAndFooters: HeaderFooterCollection;
    /** Gets a collection of all images contained in the text part with the input focus. */
    readonly images: ImageCollection;
    /** Gets a collection of all inline styles the current document contains. */
    readonly inlineStyles: InlineStyleCollection;
    /** All formatting attributes at the current text input position. */
    readonly inputFormat: InputFormat;
    /** The current text input position. */
    readonly inputPosition: InputPosition;
    /** @deprecated Obsolete. */
    isHyphenationEnabled: boolean;
    /** @deprecated Obsolete. */
    isLanguageDetectionEnabled: boolean;
    /** Gets or sets whether a wait dialog is shown while a document is being loaded. */
    isLoadingDialogEnabled: boolean;
    /** @deprecated Obsolete. */
    isSpellCheckingEnabled: boolean;
    /** @deprecated Obsolete. */
    isTrackChangesEnabled: boolean;
    /** The type and the formatting attributes of a bulleted or numbered list. */
    readonly listFormat: ListFormat;
    /** The margins for the pages of the current document. */
    readonly pageMargins: PageMargins;
    /** The width and height of the pages for the current document. */
    readonly pageSize: PageSize;
    /** Gets a collection of all pages in the document. */
    readonly pages: PageCollection;
    /** The paragraph formatting attributes of the text displayed by the control. */
    readonly paragraphFormat: ParagraphFormat;
    /** All paragraph formatting styles in the current document. */
    readonly paragraphStyles: ParagraphStyleCollection;
    /** Provides spell-checking and dictionary methods. */
    readonly Proofing: Proofing;
    /** Gets the control's ribbon bar object. */
    readonly ribbon: Ribbon;
    /** Returns the "Permissions" ribbon tab object. */
    readonly ribbonPermissionsTab: RibbonPermissionsTab;
    /** The horizontal ruler bar. */
    readonly rulerBar: RulerBarViewGenerator;
    /** @deprecated Obsolete. */
    saveDocumentQuestionDialogEnabled: boolean;
    /** Gets a collection of all sections in the document. */
    readonly sections: SectionCollection;
    /** The sidebar toggle button shown at the top right of the ribbon. */
    readonly sideBarToggleButton: SideBarToggleButton;
    /** Gets a collection of all signature fields in the document. */
    readonly signatureFields: SignatureFieldCollection;
    /** The status bar. */
    readonly statusBar: StatusBarViewGenerator;
    /** Gets or sets if table grid lines are visible. */
    tableGridLines: boolean;
    /** Gets or sets if text fields are editable or not. */
    textFieldsEditable: boolean;
    /** Gets or sets if text frame marker lines are visible. */
    textFrameMarkerLines: boolean;
    /** Gets a collection of all text frames in the document. */
    readonly textFrames: TextFrameCollection;
    /** Gets a collection of all main text parts the current document contains. */
    readonly textParts: TextPartCollection;
    /** The vertical ruler bar. */
    readonly verticalRulerBar: RulerBarViewGenerator;
    /** @deprecated Obsolete. */
    zoomFactor: number | SpecialZoomFactor;

    /**
     * Gets a value indicating whether the view generator can be a source of a Drag&Drop operation.
     * @see https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.txtextcontrol.getallowdrag.method.htm
     */
    getAllowDrag(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;

    /**
     * Gets a value indicating whether the view generator can accept data that the user drags onto it.
     * @see https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.txtextcontrol.getallowdrop.method.htm
     */
    getAllowDrop(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;

    /**
     * Sets a value indicating whether the view generator can be a source of a Drag&Drop operation.
     * @see https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.txtextcontrol.setallowdrag.method.htm
     */
    setAllowDrag(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /**
     * Sets a value indicating whether the view generator can accept data that the user drags onto it.
     * @see https://docs.textcontrol.com/textcontrol/asp-dotnet/ref.javascript.txtextcontrol.setallowdrop.method.htm
     */
    setAllowDrop(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

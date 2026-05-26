import { ApplicationFieldCollection } from '../ApplicationFieldCollection.js';
import { BarcodeCollection } from '../BarcodeCollection.js';
import { BarcodeTypeSettings } from '../BarcodeTypeSettings.js';
import { CommentCollection } from '../CommentCollection.js';
import { ComponentSettings } from '../ComponentSettings.js';
import { DocumentLinkCollection } from '../DocumentLinkCollection.js';
import { DocumentPermissions } from '../DocumentPermissions.js';
import { DocumentSettings } from '../DocumentSettings.js';
import { DocumentTargetCollection } from '../DocumentTargetCollection.js';
import { EditableRegionCollection } from '../EditableRegionCollection.js';
import { FootnoteCollection } from '../FootnoteCollection.js';
import { FormFieldCollection } from '../FormFieldCollection.js';
import { FrameCollection } from '../FrameCollection.js';
import { HeaderFooterCollection } from '../HeaderFooterCollection.js';
import { HypertextLinkCollection } from '../HypertextLinkCollection.js';
import { ImageCollection } from '../ImageCollection.js';
import { InlineStyleCollection } from '../InlineStyleCollection.js';
import { InputFormat } from '../InputFormat.js';
import { InputPosition } from '../InputPosition.js';
import { LineCollection } from '../LineCollection.js';
import { ListFormat } from '../ListFormat.js';
import { LoadSettings } from '../LoadSettings.js';
import { MisspelledWordCollection } from '../MisspelledWordCollection.js';
import { PageCollection } from '../PageCollection.js';
import { PageMargins } from '../PageMargins.js';
import { PageSize } from '../PageSize.js';
import { ParagraphCollection } from '../ParagraphCollection.js';
import { ParagraphFormat } from '../ParagraphFormat.js';
import { ParagraphStyleCollection } from '../ParagraphStyleCollection.js';
import { Point } from '../Point.js';
import { Proofing } from '../Proofing.js';
import { Ribbon } from '../Ribbon.js';
import { RibbonPermissionsTab } from '../RibbonPermissionsTab.js';
import { RulerBarViewGenerator } from '../RulerBarViewGenerator.js';
import { SaveSettings } from '../SaveSettings.js';
import { SectionCollection } from '../SectionCollection.js';
import { Selection } from '../Selection.js';
import { SideBarToggleButton } from '../SideBarToggleButton.js';
import { SignatureFieldCollection } from '../SignatureFieldCollection.js';
import { StatusBarViewGenerator } from '../StatusBarViewGenerator.js';
import { SubTextPartCollection } from '../SubTextPartCollection.js';
import { TableCollection } from '../TableCollection.js';
import { TableOfContentsCollection } from '../TableOfContentsCollection.js';
import { TextCharCollection } from '../TextCharCollection.js';
import { TextFieldCollection } from '../TextFieldCollection.js';
import { TextFrameCollection } from '../TextFrameCollection.js';
import { TextPartCollection } from '../TextPartCollection.js';
import { TextViewGeneratorColors } from '../TextViewGeneratorColors.js';
import { TrackedChangeCollection } from '../TrackedChangeCollection.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */
/** @import {EventMap} from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/TXTextControl.d.ts.
 */
export class TXTextControlBase {
    /**
     * The addEventListener function registers event listener functions on the TXTextControl object.
     * @template {keyof EventMap} T
     * @param {T} eventName A string representing the name of the event to listen for.
     * @param {EventMap[T]} callback The event listener. Depending on the event specified in parameter eventName the event listener function is called with different event argument objects (or none at all).
     */
    addEventListener(eventName, callback) {
        return TXTextControl.addEventListener(eventName, callback);
    }

    /**
     * Inserts a merge field at the current input position.
     * @param {TXTextControlTypeDefinition.MergeField | TXTextControlTypeDefinition.IfField | TXTextControlTypeDefinition.IncludeTextField | TXTextControlTypeDefinition.DateField | TXTextControlTypeDefinition.NextField | TXTextControlTypeDefinition.NextIfField} mergeField The merge field.
     */
    addMergeField(mergeField) {
        return TXTextControl.addMergeField(mergeField);
    }

    /**
     * @deprecated
     * @param {TXTextControlTypeDefinition.TextField | TXTextControlTypeDefinition.ApplicationField} textField
     */
    addTextField(textField) {
        return TXTextControl.addTextField(textField);
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
     */
    appendDocument(streamType, base64Data) {
        return TXTextControl.appendDocument(streamType, base64Data);
    }

    /**
     * Decodes a string of data which has been encoded using base-64 encoding.
     * @param {string} inputString A base-64 encoded unicode string.
     * @param {boolean} keepBOM Optional. Set this to true in case the original string had a byte order mark and you want to keep it.
     * @returns {string}
     */
    atobUTF8(inputString, keepBOM) {
        return TXTextControl.atobUTF8(inputString, keepBOM);
    }

    /**
     * Begins a user - defined undo operation. All editing and fomatting changes made between beginUndoAction and endUndoAction belong to the undo operation. These changes are undone or redone in a single step. The specified user-defined name is available via getUndoActionName.
     * @param {string | null} actionName Specifies the undo action's name. If an action name is not necessary, this parameter can be null or an empty string.
     * @returns {Promise<void>}
     */
    beginUndoAction(actionName) {
        return RequestHelper.Promise(
            TXTextControl.beginUndoAction,
            actionName,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * @param {string} inputString
     * @param {boolean} addBOM
     * @returns {string}
     */
    btoaUTF8(inputString, addBOM) {
        return TXTextControl.btoaUTF8(inputString, addBOM);
    }

    /**
     * Clears the selected text or the character right from the current input position.
     * @returns {Promise<void>}
     */
    clear() {
        return RequestHelper.Promise(
            TXTextControl.clear,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Clears the undo buffer.
     * @returns {Promise<void>}
     */
    clearUndo() {
        return RequestHelper.Promise(
            TXTextControl.clearUndo,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Ends a user-defined undo operation. All editing and fomatting changes made between beginUndoAction and endUndoAction belong to the undo operation. These changes are undone or redone in a single step.
     * @returns {Promise<void>}
     */
    endUndoAction() {
        return RequestHelper.Promise(
            TXTextControl.endUndoAction,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Finds a text string. The search starts at the specified position.
     * @param {string} text Specifies the text to search for.
     * @param {number} start Specifies the text position where the search starts, beginning with 0. If this value is -1, the search begins at the current text input position.
     * @param {TXTextControlTypeDefinition.FindOptions | null} options Optional. Specifies search options. It can be a combination of the FindOptions values.
     * @returns {Promise<number>}
     */
    find(text, start, options) {
        return RequestHelper.Promise(
            TXTextControl.find,
            text,
            start,
            options,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Flatten all form fields in the document. This means that all form fields are converted to static text.
     * @returns {Promise<void>}
     */
    flattenFormFields() {
        return RequestHelper.Promise(
            TXTextControl.flattenFormFields,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text input focus to the web editor.
     */
    focus() {
        return TXTextControl.focus();
    }

    /**
     * Gets a value indicating the current activation state.
     * @returns {Promise<TXTextControlTypeDefinition.ActivationState>}
     */
    getActivationState() {
        return RequestHelper.Promise(
            TXTextControl.getActivationState,
            CallbackType.RequestActivationStateCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the undo buffer is active or not.
     * @returns {Promise<boolean>}
     */
    getAllowUndo() {
        return RequestHelper.Promise(
            TXTextControl.getAllowUndo,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the Text Control's background color.
     * @returns {Promise<string>}
     */
    getBackColor() {
        return RequestHelper.Promise(
            TXTextControl.getBackColor,
            CallbackType.RequestColorStringCallback
        );
    }

    /**
     * Gets the baseline alignment, in twips, of the Text Control.
     * @returns {Promise<number>}
     */
    getBaseline() {
        return RequestHelper.Promise(
            TXTextControl.getBaseline,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs whether the currently selected text can be formatted with character formatting attributes.
     * @returns {Promise<boolean>}
     */
    getCanCharacterFormat() {
        return RequestHelper.Promise(
            TXTextControl.getCanCharacterFormat,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs whether a part of a Text Control document has been selected and can be copied to the clipboard.
     * @returns {Promise<boolean>}
     */
    getCanCopy() {
        return RequestHelper.Promise(
            TXTextControl.getCanCopy,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs whether the document can be formatted with page and section formatting attributes.
     * @returns {Promise<boolean>}
     */
    getCanDocumentFormat() {
        return RequestHelper.Promise(
            TXTextControl.getCanDocumentFormat,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs whether the document's text and/or formatting attributes can be changed.
     * @returns {Promise<boolean>}
     */
    getCanPaste() {
        return RequestHelper.Promise(
            TXTextControl.getCanPaste,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs whether the document can be printed.
     * @returns {Promise<boolean>}
     */
    getCanPrint() {
        return RequestHelper.Promise(
            TXTextControl.getCanPrint,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs whether an operation can be re - done using the Redo method.
     * @returns {Promise<boolean>}
     */
    getCanRedo() {
        return RequestHelper.Promise(
            TXTextControl.getCanRedo,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs whether the document can be formatted with formatting styles.
     * @returns {Promise<boolean>}
     */
    getCanStyleFormat() {
        return RequestHelper.Promise(
            TXTextControl.getCanStyleFormat,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Informs whether the currently selected text can be formatted with table formatting attributes.
     * @returns {Promise<boolean>}
     */
    getCanTableFormat() {
        return RequestHelper.Promise(
            TXTextControl.getCanTableFormat,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the user can undo the previous operation in a Text Control.
     * @returns {Promise<boolean>}
     */
    getCanUndo() {
        return RequestHelper.Promise(
            TXTextControl.getCanUndo,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the global comment highlight mode.
     * @returns {Promise<TXTextControlTypeDefinition.HighlightMode>}
     */
    getCommentHighlightMode() {
        return RequestHelper.Promise(
            TXTextControl.getCommentHighlightMode,
            CallbackType.RequestHighlightModeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the control characters are visible or not.
     * @returns {Promise<boolean>}
     */
    getControlChars() {
        return RequestHelper.Promise(
            TXTextControl.getControlChars,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Returns the culture and the UI culture of the control.
     * @returns {TXTextControlTypeDefinition.CultureSettings}
     */
    getCultures() {
        return TXTextControl.getCultures();
    }

    /**
     * Gets a value indicating that markers for hypertext targets are shown or not.
     * @returns {Promise<boolean>}
     */
    getDocumentTargetMarkers() {
        return RequestHelper.Promise(
            TXTextControl.getDocumentTargetMarkers,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether a marker frame is shown around a drawing to indicate its position and size.
     * @returns {Promise<boolean>}
     */
    getDrawingMarkerLines() {
        return RequestHelper.Promise(
            TXTextControl.getDrawingMarkerLines,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the document's text is protected, or can be freely edited and formatted.
     * @returns {Promise<TXTextControlTypeDefinition.EditMode>}
     */
    getEditMode() {
        return RequestHelper.Promise(
            TXTextControl.getEditMode,
            CallbackType.RequestEditModeCallback,
            CallbackType.ErrorCallback
        );
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
     * @deprecated
     * @param {TXTextControlTypeDefinition.FileType} fileType Must be one of the FileType values.
     * @returns {Promise<string>}
     */
    getFileDirectory(fileType) {
        return RequestHelper.Promise(
            TXTextControl.getFileDirectory,
            fileType,
            CallbackType.RequestStringCallback
        );
    }

    /**
     * Gets underlining style for the text displayed by the control.
     * @returns {Promise<TXTextControlTypeDefinition.FontUnderlineStyle>}
     */
    getFontUnderlineStyle() {
        return RequestHelper.Promise(
            TXTextControl.getFontUnderlineStyle,
            CallbackType.RequestFontUnderlineStyleCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the foreground color of the control which is the color of the document's text.
     * @returns {Promise<string>}
     */
    getForeColor() {
        return RequestHelper.Promise(
            TXTextControl.getForeColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Returns the name of the currently selected formatting printer by calling a provided callback function.
     * @returns {Promise<string>}
     */
    getFormattingPrinter() {
        return RequestHelper.Promise(
            TXTextControl.getFormattingPrinter,
            CallbackType.RequestStringCallback
        );
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
     * @returns {Promise<string[]>}
     */
    getInstalledPrinters() {
        return RequestHelper.Promise(
            TXTextControl.getInstalledPrinters,
            CallbackType.RequestStringsCallback
        );
    }

    /**
     * Gets a value indicating whether form field validation is active or not.
     * @returns {Promise<boolean>}
     */
    getIsFormFieldValidationEnabled() {
        return RequestHelper.Promise(
            TXTextControl.getIsFormFieldValidationEnabled,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether formulas in tables are automatically calculated when the text of an input cell is changed.
     * @returns {Promise<boolean>}
     */
    getIsFormulaCalculationEnabled() {
        return RequestHelper.Promise(
            TXTextControl.getIsFormulaCalculationEnabled,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether hyphenation is active or not.
     * @returns {Promise<boolean>}
     */
    getIsHyphenationEnabled() {
        return RequestHelper.Promise(
            TXTextControl.getIsHyphenationEnabled,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether language detection is active or not.
     * @returns {Promise<boolean>}
     */
    getIsLanguageDetectionEnabled() {
        return RequestHelper.Promise(
            TXTextControl.getIsLanguageDetectionEnabled,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether spell checking is active or not.
     * @returns {Promise<boolean>}
     */
    getIsSpellCheckingEnabled() {
        return RequestHelper.Promise(
            TXTextControl.getIsSpellCheckingEnabled,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether track changes is active or not.
     * @returns {Promise<boolean>}
     */
    getIsTrackChangesEnabled() {
        return RequestHelper.Promise(
            TXTextControl.getIsTrackChangesEnabled,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the page orientation is landscape.
     * @returns {Promise<boolean>}
     */
    getLandscape() {
        return RequestHelper.Promise(
            TXTextControl.getLandscape,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of pages contained in the current document.
     * @returns {Promise<number>}
     */
    getPageCount() {
        return RequestHelper.Promise(
            TXTextControl.getPageCount,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the measure used for page sizes and page margins.
     * @returns {Promise<TXTextControlTypeDefinition.MeasuringUnit>}
     */
    getPageUnit() {
        return RequestHelper.Promise(
            TXTextControl.getPageUnit,
            CallbackType.RequestMeasuringUnitCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating which control characters are shown permanently on the screen.
     * @returns {Promise<TXTextControlTypeDefinition.PermanentControlChar[]>}
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
        return RequestHelper.Promise(
            TXTextControl.getRedoActionName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the component render mode.
     * @returns {Promise<TXTextControlTypeDefinition.ComponentRenderMode>}
     */
    getRenderMode() {
        return RequestHelper.Promise(
            TXTextControl.getRenderMode,
            CallbackType.RequestRenderModeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value controlling the selection of objects which are inserted behind the text.
     * @returns {Promise<boolean>}
     */
    getSelectObjects() {
        return RequestHelper.Promise(
            TXTextControl.getSelectObjects,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Returns the background color of the status bar as a hexadecimal CSS color string.
     * @returns {Promise<string>}
     */
    getStatusBarColor() {
        return RequestHelper.Promise(
            TXTextControl.getStatusBarColor,
            CallbackType.RequestStringCallback
        );
    }

    /**
     * @deprecated
     * @param {(subtextparts: any[]) => void} callback A function with one parameter. Is called with an array of subtextparts as a parameter containing the requested text fields.
     * @param {boolean} atInputPosition Optional. A boolean value indicating that only the SubTextPart containing the input position should be retrieved. If there is no subtextpart at the input position, an empty array is received.
     */
    getSubTextParts(callback, atInputPosition) {
        return TXTextControl.getSubTextParts(callback, atInputPosition);
    }

    /**
     * Gets an array of strings specifying the names of all currently supported fonts.
     * @returns {Promise<string[]>}
     */
    getSupportedFonts() {
        return RequestHelper.Promise(
            TXTextControl.getSupportedFonts,
            CallbackType.RequestStringsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an array of PaperSize structures specifying the names and the size of all currently supported paper sizes.
     * @returns {Promise<TXTextControlTypeDefinition.PaperSize[]>}
     */
    getSupportedPaperSizes() {
        return RequestHelper.Promise(
            TXTextControl.getSupportedPaperSizes,
            CallbackType.RequestPaperSizesCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the control's text.
     * @returns {Promise<string>}
     */
    getText() {
        return RequestHelper.Promise(
            TXTextControl.getText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the background color for the text.
     * @returns {Promise<string>}
     */
    getTextBackColor() {
        return RequestHelper.Promise(
            TXTextControl.getTextBackColor,
            CallbackType.RequestColorStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * @deprecated
     * @param {boolean} atInputPosition
     * @returns {Promise<TXTextControlTypeDefinition.TextField[]>}
     */
    getTextFields(atInputPosition) {
        return RequestHelper.Promise(
            TXTextControl.getTextFields,
            CallbackType.RequestTextFieldsCallback,
            atInputPosition
        );
    }

    /**
     * Returns an array of static text field information objects. (Inherited from FormattedText)
     * @param {TXTextControlTypeDefinition.TextFieldType} fieldType
     * @returns {Promise<TXTextControlTypeDefinition.TextFieldInfo[]>}
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
        return RequestHelper.Promise(
            TXTextControl.getTextFrameMarkerLines,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * @deprecated
     * @param {boolean} atInputPosition
     * @returns {Promise<TXTextControlTypeDefinition.TextPart[]>}
     */
    getTextParts(atInputPosition) {
        return RequestHelper.Promise(
            TXTextControl.getTextParts,
            CallbackType.RequestTextPartsCallback,
            atInputPosition
        );
    }

    /**
     * Gets a string that represents the name of the action that will be performed when a call to the undo method is made. The property's value is null if there is no action that can be undone.
     * @returns {Promise<string>}
     */
    getUndoActionName() {
        return RequestHelper.Promise(
            TXTextControl.getUndoActionName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a list of names specifying users who have access to editable regions.
     * @returns {Promise<string[]>}
     */
    getUserNames() {
        return RequestHelper.Promise(
            TXTextControl.getUserNames,
            CallbackType.RequestStringsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the mode how Text Control displays a document.
     * @returns {Promise<TXTextControlTypeDefinition.ViewMode>}
     */
    getViewMode() {
        return RequestHelper.Promise(
            TXTextControl.getViewMode,
            CallbackType.RequestViewModeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Initializes the document editor.
     * @param {ComponentSettings} settings
     */
    init(settings) {
        return TXTextControl.init(settings._txInternal);
    }

    /**
     * Loads text in a certain format.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {string} base64Data
     * @param {LoadSettings} loadSettings
     * @returns {Promise<void>}
     */
    load(streamType, base64Data, loadSettings) {
        return RequestHelper.Promise(
            TXTextControl.load,
            streamType,
            base64Data,
            CallbackType.LoadDocumentCallback,
            loadSettings._txInternal,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Loads text in a certain format.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {string} base64Data
     * @param {LoadSettings} loadSettings
     * @returns {Promise<void>}
     */
    loadDocument(streamType, base64Data, loadSettings) {
        return RequestHelper.Promise(
            TXTextControl.loadDocument,
            streamType,
            base64Data,
            CallbackType.LoadDocumentCallback,
            loadSettings._txInternal,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Loads JSON data which is used to create table and field name menu items in the mailings ribbon tab.
     * @param {string} jsonData
     * @returns {Promise<void>}
     */
    loadJsonData(jsonData) {
        return RequestHelper.Promise(
            TXTextControl.loadJsonData,
            jsonData,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * @deprecated
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {string} base64Data
     */
    loadSelection(streamType, base64Data) {
        return TXTextControl.loadSelection(streamType, base64Data);
    }

    /**
     * Loads an XML database which is used to create table and field name menu items in the mailings ribbon tab.
     * @param {string} xmlData
     * @returns {Promise<void>}
     */
    loadXMLDatabase(xmlData) {
        return RequestHelper.Promise(
            TXTextControl.loadXMLDatabase,
            xmlData,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Attempts to print the current document in the browser. Not all browsers support this.
     */
    printDocument() {
        return TXTextControl.printDocument();
    }

    /**
     * Redoes the last Text Control operation.
     * @returns {Promise<void>}
     */
    redo() {
        return RequestHelper.Promise(
            TXTextControl.redo,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Forces a layout refresh of the document editor. Use this method in cases where the editor doesn't automatically react to layout changes of your web site.
     */
    refreshLayout() {
        return TXTextControl.refreshLayout();
    }

    /**
     * The removeListener export function removes the specified event listener from the TXTextControl object.
     * @template {keyof EventMap} T
     * @param {T} eventName
     * @param {EventMap[T]} callback
     */
    removeEventListener(eventName, callback) {
        return TXTextControl.removeEventListener(eventName, callback);
    }

    /**
     * Closes the WebSocket connection gracefully and removes the whole editor from the DOM.
     */
    removeFromDom() {
        return TXTextControl.removeFromDom();
    }

    /**
     * @deprecated
     * @param {TXTextControlTypeDefinition.TextField | TXTextControlTypeDefinition.ApplicationField} textField The text field to remove from the document.
     * @param {boolean} keepText If this parameter is set to true, the field is removed without deleting its visible text. Otherwise, the field's text is also deleted.
     */
    removeTextField(textField, keepText) {
        return TXTextControl.removeTextField(textField, keepText);
    }

    /**
     * Deletes the entire contents of the control.
     * @returns {Promise<void>}
     */
    resetContents() {
        return RequestHelper.Promise(
            TXTextControl.resetContents,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Saves the current document in a certain format and sends the result back asynchronously by calling a given callback export function.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {SaveSettings} saveSettings
     * @returns {Promise<TXTextControlTypeDefinition.SaveDocumentResult>}
     */
    save(streamType, saveSettings) {
        return RequestHelper.Promise(
            TXTextControl.save,
            streamType,
            CallbackType.SaveDocumentResultCallback,
            saveSettings._txInternal,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Saves the current document in a certain format and sends the result back asynchronously by calling a given callback export function.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {SaveSettings} saveSettings
     * @returns {Promise<TXTextControlTypeDefinition.SaveDocumentResult>}
     */
    saveDocument(streamType, saveSettings) {
        return RequestHelper.Promise(
            TXTextControl.saveDocument,
            streamType,
            CallbackType.SaveDocumentResultCallback,
            saveSettings._txInternal,
            CallbackType.ErrorCallback
        );
    }

    /**
     * @deprecated
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @returns {Promise<TXTextControlTypeDefinition.SaveDocumentResult>}
     */
    saveSelection(streamType) {
        return RequestHelper.Promise(
            TXTextControl.saveSelection,
            streamType,
            CallbackType.SaveDocumentResultCallback
        );
    }

    /**
     * Selects text within the control.
     * @param {number} start
     * @param {number} length
     * @returns {Promise<void>}
     */
    select(start, length) {
        return RequestHelper.Promise(
            TXTextControl.select,
            start,
            length,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects all text in the control.
     * @returns {Promise<void>}
     */
    selectAll() {
        return RequestHelper.Promise(
            TXTextControl.selectAll,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects the word at the current text input position.
     * @returns {Promise<void>}
     */
    selectWord() {
        return RequestHelper.Promise(
            TXTextControl.selectWord,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating the current activation state.
     * @param {TXTextControlTypeDefinition.ActivationState} activationState
     * @returns {Promise<void>}
     */
    setActivationState(activationState) {
        return RequestHelper.Promise(
            TXTextControl.setActivationState,
            activationState,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the undo buffer is active or not.
     * @param {boolean} allowUndo
     * @returns {Promise<void>}
     */
    setAllowUndo(allowUndo) {
        return RequestHelper.Promise(
            TXTextControl.setAllowUndo,
            allowUndo,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the Text Control's background color.
     * @param {string} htmlColor
     * @returns {Promise<void>}
     */
    setBackColor(htmlColor) {
        return RequestHelper.Promise(
            TXTextControl.setBackColor,
            htmlColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the baseline alignment, in twips, of the Text Control.
     * @param {number} baseline
     * @returns {Promise<void>}
     */
    setBaseline(baseline) {
        return RequestHelper.Promise(
            TXTextControl.setBaseline,
            baseline,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the global comment highlight mode.
     * @param {TXTextControlTypeDefinition.HighlightMode} value
     * @returns {Promise<void>}
     */
    setCommentHighlightMode(value) {
        return RequestHelper.Promise(
            TXTextControl.setCommentHighlightMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether the control characters are visible or not.
     * @param {boolean} controlChars
     * @returns {Promise<void>}
     */
    setControlChars(controlChars) {
        return RequestHelper.Promise(
            TXTextControl.setControlChars,
            controlChars,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating that markers for hypertext targets are shown or not.
     * @param {boolean} documentMarkerLines
     * @returns {Promise<void>}
     */
    setDocumentTargetMarkers(documentMarkerLines) {
        return RequestHelper.Promise(
            TXTextControl.setDocumentTargetMarkers,
            documentMarkerLines,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether a marker frame is shown around a drawing to indicate its position and size.
     * @param {boolean} drawingMarkerLines
     * @returns {Promise<void>}
     */
    setDrawingMarkerLines(drawingMarkerLines) {
        return RequestHelper.Promise(
            TXTextControl.setDrawingMarkerLines,
            drawingMarkerLines,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the document's text is protected, or can be freely edited and formatted.
     * @param {TXTextControlTypeDefinition.EditMode} editMode
     * @returns {Promise<void>}
     */
    setEditMode(editMode) {
        return RequestHelper.Promise(
            TXTextControl.setEditMode,
            editMode,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the global editable region highlight mode.
     * @param {TXTextControlTypeDefinition.HighlightMode} value
     * @returns {Promise<void>}
     */
    setEditableRegionHighlightMode(value) {
        return RequestHelper.Promise(
            TXTextControl.setEditableRegionHighlightMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * @deprecated
     * @param {TXTextControlTypeDefinition.FileType} fileType
     * @param {string} directory
     */
    setFileDirectory(fileType, directory) {
        return TXTextControl.setFileDirectory(fileType, directory);
    }

    /**
     * Sets underlining style for the text displayed by the control.
     * @param {TXTextControlTypeDefinition.FontUnderlineStyle} style
     * @returns {Promise<void>}
     */
    setFontUnderlineStyle(style) {
        return RequestHelper.Promise(
            TXTextControl.setFontUnderlineStyle,
            style,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the foreground color of the control which is the color of the document's text.
     * @param {string} foreColor
     * @returns {Promise<void>}
     */
    setForeColor(foreColor) {
        return RequestHelper.Promise(
            TXTextControl.setForeColor,
            foreColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the name of a printer the text dimensions and capabilities of which are used to format the document.
     * @param {string} printerName
     */
    setFormattingPrinter(printerName) {
        return TXTextControl.setFormattingPrinter(printerName);
    }

    /**
     * Sets a value determining how references to table cells in formulas are specified.
     * @param {TXTextControlTypeDefinition.FormulaReferenceStyle} style
     * @returns {Promise<void>}
     */
    setFormulaReferenceStyle(style) {
        return RequestHelper.Promise(
            TXTextControl.setFormulaReferenceStyle,
            style,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a new input position from a geometric location.
     * @param {Point} location
     * @returns {Promise<void>}
     */
    setInputPositionByLocation(location) {
        return RequestHelper.Promise(
            TXTextControl.setInputPositionByLocation,
            location._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a new input position from a page, line and column number.
     * @param {number} page
     * @param {number} line
     * @param {number} column
     * @returns {Promise<void>}
     */
    setInputPositionByPage(page, line, column) {
        return RequestHelper.Promise(
            TXTextControl.setInputPositionByPage,
            page,
            line,
            column,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a new input position from a text position.
     * @param {number} textPosition
     * @param {TXTextControlTypeDefinition.TextFieldPosition} textFieldPosition
     * @returns {Promise<void>}
     */
    setInputPositionByTextPosition(textPosition, textFieldPosition) {
        return RequestHelper.Promise(
            TXTextControl.setInputPositionByTextPosition,
            textPosition,
            textFieldPosition,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether form field validation is active or not.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setIsFormFieldValidationEnabled(value) {
        return RequestHelper.Promise(
            TXTextControl.setIsFormFieldValidationEnabled,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether formulas in tables are automatically calculated when the text of an input cell is changed.
     * @param {boolean} enable
     * @returns {Promise<void>}
     */
    setIsFormulaCalculationEnabled(enable) {
        return RequestHelper.Promise(
            TXTextControl.setIsFormulaCalculationEnabled,
            enable,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether hyphenation is active or not.
     * @param {boolean} enable
     * @returns {Promise<void>}
     */
    setIsHyphenationEnabled(enable) {
        return RequestHelper.Promise(
            TXTextControl.setIsHyphenationEnabled,
            enable,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether language detection is active or not.
     * @param {boolean} enable
     * @returns {Promise<void>}
     */
    setIsLanguageDetectionEnabled(enable) {
        return RequestHelper.Promise(
            TXTextControl.setIsLanguageDetectionEnabled,
            enable,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether spell checking is active or not.
     * @param {boolean} enable
     * @returns {Promise<void>}
     */
    setIsSpellCheckingEnabled(enable) {
        return RequestHelper.Promise(
            TXTextControl.setIsSpellCheckingEnabled,
            enable,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether track changes is active or not.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setIsTrackChangesEnabled(value) {
        return RequestHelper.Promise(
            TXTextControl.setIsTrackChangesEnabled,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the page orientation is landscape.
     * @param {boolean} isLandscape
     * @returns {Promise<void>}
     */
    setLandscape(isLandscape) {
        return RequestHelper.Promise(
            TXTextControl.setLandscape,
            isLandscape,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the measure used for page sizes and page margins.
     * @param {TXTextControlTypeDefinition.MeasuringUnit} pageUnit
     * @returns {Promise<void>}
     */
    setPageUnit(pageUnit) {
        return RequestHelper.Promise(
            TXTextControl.setPageUnit,
            pageUnit,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating which control characters are shown permanently on the screen.
     * @param {TXTextControlTypeDefinition.PermanentControlChar} permanentControlChars
     * @returns {Promise<void>}
     */
    setPermanentControlChars(permanentControlChars) {
        return RequestHelper.Promise(
            TXTextControl.setPermanentControlChars,
            permanentControlChars,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the component render mode.
     * @param {TXTextControlTypeDefinition.ComponentRenderMode} value
     * @returns {Promise<void>}
     */
    setRenderMode(value) {
        return RequestHelper.Promise(
            TXTextControl.setRenderMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value controlling the selection of objects which are inserted behind the text.
     * @param {boolean} selectObjects
     * @returns {Promise<void>}
     */
    setSelectObjects(selectObjects) {
        return RequestHelper.Promise(
            TXTextControl.setSelectObjects,
            selectObjects,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color of the status bar.
     * @param {string} hexColor
     */
    setStatusBarColor(hexColor) {
        return TXTextControl.setStatusBarColor(hexColor);
    }

    /**
     * Sets the control's text.
     * @param {string} text
     * @returns {Promise<void>}
     */
    setText(text) {
        return RequestHelper.Promise(
            TXTextControl.setText,
            text,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color for the text.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setTextBackColor(color) {
        return RequestHelper.Promise(
            TXTextControl.setTextBackColor,
            color,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether text frames that have no border line are shown with marker lines.
     * @param {boolean} textFrameMarkerLines
     * @returns {Promise<void>}
     */
    setTextFrameMarkerLines(textFrameMarkerLines) {
        return RequestHelper.Promise(
            TXTextControl.setTextFrameMarkerLines,
            textFrameMarkerLines,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the mode how Text Control displays a document.
     * @param {TXTextControlTypeDefinition.ViewMode} viewMode
     * @returns {Promise<void>}
     */
    setViewMode(viewMode) {
        return RequestHelper.Promise(
            TXTextControl.setViewMode,
            viewMode,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Shows a built -in dialog box.
     * @param {TXTextControlTypeDefinition.DialogBoxKind} dialogBoxKind The dialog box kind.
     * @param {number} selectedTab Optional. The 0-based selected dialog tab.
     */
    showDialog(dialogBoxKind, selectedTab) {
        return TXTextControl.showDialog(dialogBoxKind, selectedTab);
    }

    /**
     * Shows or hides the web editor's horizontal ruler bar.
     * @param {boolean} show
     */
    showHorizontalRuler(show) {
        return TXTextControl.showHorizontalRuler(show);
    }

    /**
     * Shows one of the a built -in HTML dialog boxes.
     * @param {TXTextControlTypeDefinition.HtmlDialogBoxKind} dialogBoxKind
     */
    showHtmlDialog(dialogBoxKind) {
        return TXTextControl.showHtmlDialog(dialogBoxKind);
    }

    /**
     * Opens a field dialog either for changing properties of an existing merge field or for creating a new merge field.
     * @param {TXTextControlTypeDefinition.FieldType} fieldType
     */
    showMergeFieldDialog(fieldType) {
        return TXTextControl.showMergeFieldDialog(fieldType);
    }

    /**
     * Shows or hides the ribbon bar.
     * @param {boolean} show
     */
    showRibbonBar(show) {
        return TXTextControl.showRibbonBar(show);
    }

    /**
     * Shows or hides a specified side bar.
     * @param {TXTextControlTypeDefinition.SideBarType} sideBarType
     * @param {boolean} show
     */
    showSideBar(sideBarType, show) {
        return TXTextControl.showSideBar(sideBarType, show);
    }

    /**
     * Shows or hides the web editor's status bar.
     * @param {boolean} show
     */
    showStatusBar(show) {
        return TXTextControl.showStatusBar(show);
    }

    /**
     * Shows or hides the web editor's vertical ruler bar.
     * @param {boolean} show
     */
    showVerticalRuler(show) {
        return TXTextControl.showVerticalRuler(show);
    }

    /**
     * Undoes the last Text Control operation.
     * @returns {Promise<void>}
     */
    undo() {
        return RequestHelper.Promise(
            TXTextControl.undo,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Zooms the contents of the TextControl.
     * @param {number | TXTextControlTypeDefinition.SpecialZoomFactor} zoomFactor Specifies the zoom factor, in percent. This can also be one of the values of the TXTextControl.SpecialZoomFactor enumeration.
     * @returns {Promise<void>}
     */
    zoom(zoomFactor) {
        return RequestHelper.Promise(
            TXTextControl.zoom,
            zoomFactor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the insertion mode.
     * @returns {Promise<number>}
     */
    getInsertionMode() {
        return RequestHelper.Promise(
            TXTextControl.getInsertionMode,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the insertion mode.
     * @param {TXTextControlTypeDefinition.InsertionMode} value
     * @returns {Promise<void>}
     */
    setInsertionMode(value) {
        return RequestHelper.Promise(
            TXTextControl.setInsertionMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the view generator can be a source of a Drag&Drop operation.
     * @returns {Promise<boolean>}
     */
    getAllowDrag() {
        return RequestHelper.Promise(
            TXTextControl.getAllowDrag,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the view generator can accept data that the user drags onto it.
     * @returns {Promise<boolean>}
     */
    getAllowDrop() {
        return RequestHelper.Promise(
            TXTextControl.getAllowDrop,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the view generator can be a source of a Drag&Drop operation.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setAllowDrag(value) {
        return RequestHelper.Promise(
            TXTextControl.setAllowDrag,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the view generator can accept data that the user drags onto it.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setAllowDrop(value) {
        return RequestHelper.Promise(
            TXTextControl.setAllowDrop,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    //#region properties

    /**
     * The type specific settings for the currently used barcode.
     * @type {BarcodeTypeSettings}
     */
    get barcodeTypeSettings() { return new BarcodeTypeSettings(TXTextControl.barcodeTypeSettings); }

    /**
     * Gets a collection of all barcode frames contained in the text part with the input focus.
     * @type {BarcodeCollection}
     */
    get barcodes() { return new BarcodeCollection(TXTextControl.barcodes); }

    /**
     * Gets or sets the clipboard mode(client or server).
     * @type {TXTextControlTypeDefinition.ClipboardMode}
     */
    get clipboardMode() { return TXTextControl.clipboardMode; }

    /**
     * Returns the unique connection ID of this session.
     * @type {string}
     */
    get connectionID() { return TXTextControl.connectionID; }

    /**
     * Gets or sets if a right click into the text area opens a context menu or not.
     * @type {boolean}
     */
    get contextMenusEnabled() { return TXTextControl.contextMenusEnabled; }

    /**
     * @deprecated
     * @type {boolean}
     */
    get controlChars() { return TXTextControl.controlChars; }

    /**
     * The displayed colors of the text control.
     * @type {TextViewGeneratorColors}
     */
    get displayColors() { return new TextViewGeneratorColors(TXTextControl.displayColors); }

    /**
     * The document permission settings.
     * @type {DocumentPermissions}
     */
    get documentPermissions() { return new DocumentPermissions(TXTextControl.documentPermissions); }

    /**
     * The DocumentSettings class provides properties which inform about general document settings, such as author and title, contained in the document the user is currently working on.
     * @type {DocumentSettings}
     */
    get documentSettings() { return new DocumentSettings(TXTextControl.documentSettings); }

    /**
     * Gets or sets whether document target markers are visible.
     * @type {boolean}
     */
    get documentTargetMarkers() { return TXTextControl.documentTargetMarkers; }

    /**
     * @deprecated
     * @type {TXTextControlTypeDefinition.EditMode}
     */
    get editMode() { return TXTextControl.editMode; }

    /**
     * All footnotes contained in the main text of the document.
     * @type {FootnoteCollection}
     */
    get footnotes() { return new FootnoteCollection(TXTextControl.footnotes); }

    /**
     * Gets a collection of all headers and footers in the document.
     * @type {HeaderFooterCollection}
     */
    get headersAndFooters() { return new HeaderFooterCollection(TXTextControl.headersAndFooters); }

    /**
     * Gets a collection of all images contained in the text part with the input focus.
     * @type {ImageCollection}
     */
    get images() { return new ImageCollection(TXTextControl.images); }

    /**
     * Gets a collection of all inline styles the current document contains.
     * @type {InlineStyleCollection}
     */
    get inlineStyles() { return new InlineStyleCollection(TXTextControl.inlineStyles); }

    /**
     * All formatting attributes at the current text input position.
     * @type {InputFormat}
     */
    get inputFormat() { return new InputFormat(TXTextControl.inputFormat); }

    /**
     * The current text input position.
     * @type {InputPosition}
     */
    get inputPosition() { return new InputPosition(TXTextControl.inputPosition); }

    /**
     * @deprecated
     * @type {boolean}
     */
    get isHyphenationEnabled() { return TXTextControl.isHyphenationEnabled; }

    /**
     * @deprecated
     * @type {boolean}
     */
    get isLanguageDetectionEnabled() { return TXTextControl.isLanguageDetectionEnabled; }

    /**
     * Gets or sets whether a wait dialog is shown while a document is being loaded.
     * @type {boolean}
     */
    get isLoadingDialogEnabled() { return TXTextControl.isLoadingDialogEnabled; }

    /**
     * @deprecated
     * @type {boolean}
     */
    get isSpellCheckingEnabled() { return TXTextControl.isSpellCheckingEnabled; }

    /**
     * @deprecated
     * @type {boolean}
     */
    get isTrackChangesEnabled() { return TXTextControl.isTrackChangesEnabled; }

    /**
     * The type and the formatting attributes of a bulleted or numbered list.
     * @type {ListFormat}
     */
    get listFormat() { return new ListFormat(TXTextControl.listFormat); }

    /**
     * The margins for the pages of the current document.
     * @type {PageMargins}
     */
    get pageMargins() { return new PageMargins(TXTextControl.pageMargins); }

    /**
     * The width and height of the pages for the current document.
     * @type {PageSize}
     */
    get pageSize() { return new PageSize(TXTextControl.pageSize); }

    /**
     * Gets a collection of all pages in the document.
     * @type {PageCollection}
     */
    get pages() { return new PageCollection(TXTextControl.pages); }

    /**
     * The paragraph formatting attributes of the text displayed by the control.
     * @type {ParagraphFormat}
     */
    get paragraphFormat() { return new ParagraphFormat(TXTextControl.paragraphFormat); }

    /**
     * All paragraph formatting styles in the current document.
     * @type {ParagraphStyleCollection}
     */
    get paragraphStyles() { return new ParagraphStyleCollection(TXTextControl.paragraphStyles); }

    /**
     * Provides spell-checking and dictionary methods.
     * @deprecated
     * @type {Proofing}
     */
    get Proofing() { return new Proofing(TXTextControl.Proofing); }

    /**
     * Gets the control's ribbon bar object.
     * @type {Ribbon}
     */
    get ribbon() { return new Ribbon(TXTextControl.ribbon); }

    /**
     * Returns the "Permissions" ribbon tab object.
     * @type {RibbonPermissionsTab}
     */
    get ribbonPermissionsTab() { return new RibbonPermissionsTab(TXTextControl.ribbonPermissionsTab); }

    /**
     * The horizontal ruler bar.
     * @type {RulerBarViewGenerator}
     */
    get rulerBar() { return new RulerBarViewGenerator(TXTextControl.rulerBar); }

    /**
     * @deprecated
     * @type {boolean}
     */
    get saveDocumentQuestionDialogEnabled() { return TXTextControl.saveDocumentQuestionDialogEnabled; }

    /**
     * Gets a collection of all sections in the document.
     * @type {SectionCollection}
     */
    get sections() { return new SectionCollection(TXTextControl.sections); }

    /**
     * The sidebar toggle button shown at the top right of the ribbon.
     * @type {SideBarToggleButton}
     */
    get sideBarToggleButton() { return new SideBarToggleButton(TXTextControl.sideBarToggleButton); }

    /**
     * Gets a collection of all signature fields in the document.
     * @type {SignatureFieldCollection}
     */
    get signatureFields() { return new SignatureFieldCollection(TXTextControl.signatureFields); }

    /**
     * The status bar.
     * @type {StatusBarViewGenerator}
     */
    get statusBar() { return new StatusBarViewGenerator(TXTextControl.statusBar); }

    /**
     * Gets or sets if table grid lines are visible.
     * @type {boolean}
     */
    get tableGridLines() { return TXTextControl.tableGridLines; }

    /**
     * Gets or sets if text fields are editable or not.
     * @type {boolean}
     */
    get textFieldsEditable() { return TXTextControl.textFieldsEditable; }

    /**
     * Gets or sets if text frame marker lines are visible.
     * @type {boolean}
     */
    get textFrameMarkerLines() { return TXTextControl.textFrameMarkerLines; }

    /**
     * Gets a collection of all text frames in the document.
     * @type {TextFrameCollection}
     */
    get textFrames() { return new TextFrameCollection(TXTextControl.textFrames); }

    /**
     * Gets a collection of all main text parts the current document contains.
     * @type {TextPartCollection}
     */
    get textParts() { return new TextPartCollection(TXTextControl.textParts); }

    /**
     * The vertical ruler bar.
     * @type {RulerBarViewGenerator}
     */
    get verticalRulerBar() { return new RulerBarViewGenerator(TXTextControl.verticalRulerBar); }

    /**
     * @deprecated
     * @type {number | TXTextControlTypeDefinition.SpecialZoomFactor}
     */
    get zoomFactor() { return TXTextControl.zoomFactor; }

    /**
     * Gets a collection of all Microsoft Word fields that have been created or imported from a Microsoft Word or RTF document.
     * @type {ApplicationFieldCollection}
     */
    get applicationFields() { return new ApplicationFieldCollection(TXTextControl.applicationFields); }

    /**
     * Gets a collection of all comments in this text part.
     * @type {CommentCollection}
     */
    get comments() { return new CommentCollection(TXTextControl.comments); }

    /**
     * Gets a collection of all links which point to targets in the same document.
     * @type {DocumentLinkCollection}
     */
    get documentLinks() { return new DocumentLinkCollection(TXTextControl.documentLinks); }

    /**
     * Gets a collection of all document targets.
     * @type {DocumentTargetCollection}
     */
    get documentTargets() { return new DocumentTargetCollection(TXTextControl.documentTargets); }

    /**
     * Gets a collection of all editable regions.
     * @type {EditableRegionCollection}
     */
    get editableRegions() { return new EditableRegionCollection(TXTextControl.editableRegions); }

    /**
     * Gets a collection of all form fields in the text part.
     * @type {FormFieldCollection}
     */
    get formFields() { return new FormFieldCollection(TXTextControl.formFields); }

    /**
     * Gets a collection of all frames in the document.
     * @type {FrameCollection}
     */
    get frames() { return new FrameCollection(TXTextControl.frames); }

    /**
     * Gets a collection of all hypertext links.
     * @type {HypertextLinkCollection}
     */
    get hypertextLinks() { return new HypertextLinkCollection(TXTextControl.hypertextLinks); }

    /**
     * Gets a collection of all text lines.
     * @type {LineCollection}
     */
    get lines() { return new LineCollection(TXTextControl.lines); }

    /**
     * Gets a collection of all misspelled words.
     * @type {MisspelledWordCollection}
     */
    get misspelledWords() { return new MisspelledWordCollection(TXTextControl.misspelledWords); }

    /**
     * Gets a collection of all paragraphs.
     * @type {ParagraphCollection}
     */
    get paragraphs() { return new ParagraphCollection(TXTextControl.paragraphs); }

    /**
     * Gets the current selection.
     * @type {Selection}
     */
    get selection() { return new Selection(TXTextControl.selection); }

    /**
     * Gets the current subtextparts.
     * @type {SubTextPartCollection}
     */
    get subTextParts() { return new SubTextPartCollection(TXTextControl.subTextParts); }

    /**
     * Gets a collection of all tables.
     * @type {TableCollection}
     */
    get tables() { return new TableCollection(TXTextControl.tables); }

    /**
     * Gets the current tables of contents.
     * @type {TableOfContentsCollection}
     */
    get tablesOfContents() { return new TableOfContentsCollection(TXTextControl.tablesOfContents); }

    /**
     * Gets a collection of all text characters.
     * @type {TextCharCollection}
     */
    get textChars() { return new TextCharCollection(TXTextControl.textChars); }

    /**
     * Gets a collection of all standard text fields.
     * @type {TextFieldCollection}
     */
    get textFields() { return new TextFieldCollection(TXTextControl.textFields); }

    /**
     * Gets the Text part type.
     * @type {string}
     */
    get textPartType() { return TXTextControl.textPartType; }

    /**
     * Gets a collection of all tracked changes.
     * @type {TrackedChangeCollection}
     */
    get trackedChanges() { return new TrackedChangeCollection(TXTextControl.trackedChanges); }

    //#endregion
}

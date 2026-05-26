import { ObjectBase } from '../ObjectBase.js';
import { SaveSettings } from '../SaveSettings.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableOfContents.d.ts.
 */
export class TableOfContentsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TableOfContents} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableOfContents} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableOfContents} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getHasLinks', 'getHasPageNumbers', 'getHasRightAlignedPageNumbers', 'getHighlightColor', 'getHighlightMode', 'getID', 'getLength', 'getMaximumStructureLevel', 'getMinimumStructureLevel', 'getName', 'getNumber', 'getStart', 'getText', 'getTitle', 'save', 'scrollTo', 'setHasLinks', 'setHasPageNumbers', 'setHasRightAlignedPageNumbers', 'setHighlightColor', 'setHighlightMode', 'setID', 'setMaximumStructureLevel', 'setMinimumStructureLevel', 'setName', 'setTitle', 'update');
    }

    /**
     * Gets value specifying whether each entry in the table of contents is a DocumentLink with a corresponding DocumentTarget.
     * @returns {Promise<boolean>}
     */
    getHasLinks() {
        return RequestHelper.Promise(
            this._txInternal.getHasLinks,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether the table of contents contains page numbers.
     * @returns {Promise<boolean>}
     */
    getHasPageNumbers() {
        return RequestHelper.Promise(
            this._txInternal.getHasPageNumbers,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether the page numbers in the table of contents are right-aligned.
     * @returns {Promise<boolean>}
     */
    getHasRightAlignedPageNumbers() {
        return RequestHelper.Promise(
            this._txInternal.getHasRightAlignedPageNumbers,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the highlight color for the table of contents.
     * @returns {Promise<string>}
     */
    getHighlightColor() {
        return RequestHelper.Promise(
            this._txInternal.getHighlightColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the table of contents is highlighted.
     * @returns {Promise<TXTextControlTypeDefinition.HighlightMode>}
     */
    getHighlightMode() {
        return RequestHelper.Promise(
            this._txInternal.getHighlightMode,
            CallbackType.RequestHighlightModeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an identifier for a table of contents.
     * @returns {Promise<number>}
     */
    getID() {
        return RequestHelper.Promise(
            this._txInternal.getID,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of characters which belong to the table of contents.
     * @returns {Promise<number>}
     */
    getLength() {
        return RequestHelper.Promise(
            this._txInternal.getLength,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the maximum structure level for this table of contents.
     * @returns {Promise<number>}
     */
    getMaximumStructureLevel() {
        return RequestHelper.Promise(
            this._txInternal.getMaximumStructureLevel,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the minimum structure level for this table of contents.
     * @returns {Promise<number>}
     */
    getMinimumStructureLevel() {
        return RequestHelper.Promise(
            this._txInternal.getMinimumStructureLevel,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a name for the table of contents.
     * @returns {Promise<string>}
     */
    getName() {
        return RequestHelper.Promise(
            this._txInternal.getName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of the table of contents in the text.
     * @returns {Promise<number>}
     */
    getNumber() {
        return RequestHelper.Promise(
            this._txInternal.getNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the index (one-based) of the first character which belongs to the table of contents.
     * @returns {Promise<number>}
     */
    getStart() {
        return RequestHelper.Promise(
            this._txInternal.getStart,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text of the table of contents.
     * @returns {Promise<string>}
     */
    getText() {
        return RequestHelper.Promise(
            this._txInternal.getText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a title for the table of contents.
     * @returns {Promise<string>}
     */
    getTitle() {
        return RequestHelper.Promise(
            this._txInternal.getTitle,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Saves the TableOfContents in a certain format and sends the result back asynchronously by calling a given callback function.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {SaveSettings} saveSettings
     * @returns {Promise<void>}
     */
    save(streamType, saveSettings) {
        return RequestHelper.Promise(
            this._txInternal.save,
            streamType,
            CallbackType.SaveDocumentCallback,
            saveSettings._txInternal,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the current input position to the beginning of a table of contents and scrolls it into the visible part of the document.
     * @returns {Promise<boolean>}
     */
    scrollTo() {
        return RequestHelper.Promise(
            this._txInternal.scrollTo,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether each entry in the table of contents is a DocumentLink with a corresponding DocumentTarget.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setHasLinks(value) {
        return RequestHelper.Promise(
            this._txInternal.setHasLinks,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether the table of contents contains page numbers.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setHasPageNumbers(value) {
        return RequestHelper.Promise(
            this._txInternal.setHasPageNumbers,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether the page numbers in the table of contents are right-aligned.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setHasRightAlignedPageNumbers(value) {
        return RequestHelper.Promise(
            this._txInternal.setHasRightAlignedPageNumbers,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the highlight color for the table of contents.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setHighlightColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setHighlightColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the table of contents is highlighted.
     * @param {TXTextControlTypeDefinition.HighlightMode} value
     * @returns {Promise<void>}
     */
    setHighlightMode(value) {
        return RequestHelper.Promise(
            this._txInternal.setHighlightMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an identifier for the table of contents.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setID(value) {
        return RequestHelper.Promise(
            this._txInternal.setID,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the maximum structure level for this table of contents.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setMaximumStructureLevel(value) {
        return RequestHelper.Promise(
            this._txInternal.setMaximumStructureLevel,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the minimum structure level for this table of contents.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setMinimumStructureLevel(value) {
        return RequestHelper.Promise(
            this._txInternal.setMinimumStructureLevel,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a name for the table of contents.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setName(value) {
        return RequestHelper.Promise(
            this._txInternal.setName,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a title for the table of contents.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setTitle(value) {
        return RequestHelper.Promise(
            this._txInternal.setTitle,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Updates the content and the page numbers of the table of contents.
     * @returns {Promise<boolean>}
     */
    update() {
        return RequestHelper.Promise(
            this._txInternal.update,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }}

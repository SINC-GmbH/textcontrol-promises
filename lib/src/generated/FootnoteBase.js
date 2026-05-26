import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Footnote.d.ts.
 */
export class FootnoteBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Footnote} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Footnote} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Footnote} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('edit', 'getHighlightColor', 'getHighlightMode', 'getID', 'getName', 'getNumber', 'getReferenceMarkLength', 'getReferenceMarkStart', 'scrollTo', 'scrollToPosition', 'setHighlightColor', 'setHighlightMode', 'setID', 'setName');
    }

    /**
     * Sets the current text input position in the footnote section at the end of the current footnote text, so that the text can be edited or formatted.
     * @returns {Promise<boolean>}
     */
    edit() {
        return RequestHelper.Promise(
            this._txInternal.edit,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the highlight color for the reference mark and the footnote mark.
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
     * Gets a value indicating whether the reference mark and the footnote mark is highlighted.
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
     * Gets a user-defined identifier.
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
     * Gets the footnote's name.
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
     * Gets the footnote's number in the text.
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
     * Gets the number of characters the reference mark consists of.
     * @returns {Promise<number>}
     */
    getReferenceMarkLength() {
        return RequestHelper.Promise(
            this._txInternal.getReferenceMarkLength,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the index (one-based) of the first character of the footnote's reference mark.
     * @returns {Promise<number>}
     */
    getReferenceMarkStart() {
        return RequestHelper.Promise(
            this._txInternal.getReferenceMarkStart,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Scrolls the beginning of the footnote mark into the visible part of the document using a default position depending on the previous position.
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
     * Scrolls the beginning of the footnote mark into the visible part of the document using the specified position.
     * @param {TXTextControlTypeDefinition.InputPosition.ScrollPosition} scrollPosition
     * @returns {Promise<void>}
     */
    scrollToPosition(scrollPosition) {
        return RequestHelper.Promise(
            this._txInternal.scrollToPosition,
            scrollPosition,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the highlight color for the reference mark and the footnote mark.
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
     * Sets a value indicating whether the reference mark and the footnote mark is highlighted.
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
     * Sets a user-defined identifier.
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
     * Sets a name for the footnote.
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
    }}

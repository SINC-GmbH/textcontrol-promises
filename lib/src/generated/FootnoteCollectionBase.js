import { Collection } from '../Collection.js';
import { Footnote } from '../Footnote.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<Footnote>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FootnoteCollection.d.ts.
 */
export class FootnoteCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.FootnoteCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FootnoteCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.FootnoteCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new Footnote(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'getDefaultFootnoteHighlightColor', 'getHighlightMode', 'getNumberFormat', 'getStartNumber', 'remove', 'setHighlightMode', 'setNumberFormat', 'setStartNumber');
    }

    /**
     * Adds a new footnote with the given text to the document at the current input position.
     * @param {string} text
     * @param {string} name
     * @param {number} id
     * @returns {Promise<TXTextControlTypeDefinition.FootnoteCallbackData>}
     */
    add(text, name, id) {
        return RequestHelper.Promise(
            this._txInternal.add,
            text,
            name,
            id,
            CallbackType.AddFootnoteCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the default highlight color for the reference mark and the footnote mark.
     * @returns {Promise<string>}
     */
    getDefaultFootnoteHighlightColor() {
        return RequestHelper.Promise(
            this._txInternal.getDefaultFootnoteHighlightColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether all the footnote numbers, reference marks as well as footnote marks, in the document are highlighted.
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
     * Gets the footnotes' number format.
     * @returns {Promise<TXTextControlTypeDefinition.NumberFormat>}
     */
    getNumberFormat() {
        return RequestHelper.Promise(
            this._txInternal.getNumberFormat,
            CallbackType.RequestNumberFormatCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number for the first footnote.
     * @returns {Promise<number>}
     */
    getStartNumber() {
        return RequestHelper.Promise(
            this._txInternal.getStartNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Removes a footnote from a Text Control document.
     * @param {Footnote} footnote
     * @returns {Promise<boolean>}
     */
    remove(footnote) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            footnote?._txInternal,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether all the footnote numbers, reference marks as well as footnote marks, in the document are highlighted.
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
     * Sets the footnotes' number format.
     * @param {TXTextControlTypeDefinition.NumberFormat} value
     * @returns {Promise<void>}
     */
    setNumberFormat(value) {
        return RequestHelper.Promise(
            this._txInternal.setNumberFormat,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the number for the first footnote.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setStartNumber(value) {
        return RequestHelper.Promise(
            this._txInternal.setStartNumber,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

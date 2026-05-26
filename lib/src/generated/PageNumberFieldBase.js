import { TextField } from '../TextField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/PageNumberField.d.ts.
 */
export class PageNumberFieldBase extends TextField {
    /** @returns {TXTextControlTypeDefinition.PageNumberField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.PageNumberField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.PageNumberField} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getNumberFormat', 'getShowNumberOfPages', 'getStartNumber', 'setNumberFormat', 'setShowNumberOfPages', 'setStartNumber');
    }

    /**
     * Gets the number format.
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
     * Gets a value indicating whether the field shows the page number or the total number of pages.
     * @returns {Promise<boolean>}
     */
    getShowNumberOfPages() {
        return RequestHelper.Promise(
            this._txInternal.getShowNumberOfPages,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the page number for the first page.
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
     * Sets the number format.
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
     * Sets a value indicating whether the field shows the page number or the total number of pages.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowNumberOfPages(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowNumberOfPages,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the page number for the first page.
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
    }}

import { FormField } from '../FormField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DateFormField.d.ts.
 */
export class DateFormFieldBase extends FormField {
    /** @returns {TXTextControlTypeDefinition.DateFormField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DateFormField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DateFormField} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getDate', 'getDateFormat', 'getEmptyWidth', 'getSupportedDateFormats', 'setDate', 'setDateFormat', 'setEmptyWidth');
    }

    /**
     * Gets the DateFormField's date.
     * @returns {Promise<number>}
     */
    getDate() {
        return RequestHelper.Promise(
            this._txInternal.getDate,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the date's format. For a certain DateFormField the format string should be one of the strings returned through the getSupportedDateFormats function. A TextControl uses Day, Month, Year, and Era Format Picture strings to format a date. When this date's format is an empty string, which is the default value, a default format is used depending on the culture set for the date field's text.
     * @returns {Promise<string>}
     */
    getDateFormat() {
        return RequestHelper.Promise(
            this._txInternal.getDateFormat,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the horizontal extension, in twips, of the text formfield, when it is empty.
     * @returns {Promise<number>}
     */
    getEmptyWidth() {
        return RequestHelper.Promise(
            this._txInternal.getEmptyWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an array of format picture strings which can be used to format the date. The returned format strings depend on the culture set for the date field's text. A TextControl uses Day, Month, Year, and Era Format Picture strings to format a date.
     * @returns {Promise<string[]>}
     */
    getSupportedDateFormats() {
        return RequestHelper.Promise(
            this._txInternal.getSupportedDateFormats,
            CallbackType.RequestStringsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the DateFormField's date.
     * @param {number} unixTime
     * @returns {Promise<void>}
     */
    setDate(unixTime) {
        return RequestHelper.Promise(
            this._txInternal.setDate,
            unixTime,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the date's format. For a certain DateFormField the format string should be one of the strings returned through the getSupportedDateFormats function. A TextControl uses Day, Month, Year, and Era Format Picture strings to format a date. When this date's format is an empty string, which is the default value, a default format is used depending on the culture set for the date field's text.
     * @param {string} dateFormat
     * @returns {Promise<void>}
     */
    setDateFormat(dateFormat) {
        return RequestHelper.Promise(
            this._txInternal.setDateFormat,
            dateFormat,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the horizontal extension, in twips, of the text formfield, when it is empty.
     * @param {number} emptyWidth
     * @returns {Promise<void>}
     */
    setEmptyWidth(emptyWidth) {
        return RequestHelper.Promise(
            this._txInternal.setEmptyWidth,
            emptyWidth,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

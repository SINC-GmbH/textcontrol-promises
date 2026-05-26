import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableRow.d.ts.
 */
export class TableRowBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TableRow} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableRow} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableRow} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getAllowPageBreak', 'getCellFormat', 'getIsHeader', 'getMinimumHeight', 'getRow', 'select', 'setAllowPageBreak', 'setIsHeader', 'setMinimumHeight');
    }

    /**
     * Gets a value specifying how the table row is formatted at page breaks.
     * @returns {Promise<boolean>}
     */
    getAllowPageBreak() {
        return RequestHelper.Promise(
            this._txInternal.getAllowPageBreak,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the formatting attributes of a table row.
     * @returns {Promise<TXTextControlTypeDefinition.TableCellFormat>}
     */
    getCellFormat() {
        return RequestHelper.Promise(
            this._txInternal.getCellFormat,
            CallbackType.RequestCellFormatCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether the table row is part of the table's header.
     * @returns {Promise<boolean>}
     */
    getIsHeader() {
        return RequestHelper.Promise(
            this._txInternal.getIsHeader,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the minimum height, in twips, of the table row.
     * @returns {Promise<number>}
     */
    getMinimumHeight() {
        return RequestHelper.Promise(
            this._txInternal.getMinimumHeight,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of the table row represented through this table row object.
     * @returns {Promise<number>}
     */
    getRow() {
        return RequestHelper.Promise(
            this._txInternal.getRow,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects the table row.
     * @returns {Promise<void>}
     */
    select() {
        return RequestHelper.Promise(
            this._txInternal.select,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying how the table row is formatted at page breaks.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setAllowPageBreak(value) {
        return RequestHelper.Promise(
            this._txInternal.setAllowPageBreak,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether the table row is part of the table's header.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setIsHeader(value) {
        return RequestHelper.Promise(
            this._txInternal.setIsHeader,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the minimum height, in twips, of the table row.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setMinimumHeight(value) {
        return RequestHelper.Promise(
            this._txInternal.setMinimumHeight,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

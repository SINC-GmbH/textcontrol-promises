import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableColumn.d.ts.
 */
export class TableColumnBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TableColumn} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableColumn} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableColumn} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getCellFormat', 'getColumn', 'getPosition', 'getWidth', 'select', 'setPosition', 'setWidth');
    }

    /**
     * Gets the formatting attributes of a table column.
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
     * Gets the number of the table column represented through this table column object.
     * @returns {Promise<number>}
     */
    getColumn() {
        return RequestHelper.Promise(
            this._txInternal.getColumn,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets, in twips, the horizontal position of the column.
     * @returns {Promise<number>}
     */
    getPosition() {
        return RequestHelper.Promise(
            this._txInternal.getPosition,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets, in twips, the width of the column.
     * @returns {Promise<number>}
     */
    getWidth() {
        return RequestHelper.Promise(
            this._txInternal.getWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects the table column.
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
     * Sets, in twips, the horizontal position of the column.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setPosition(value) {
        return RequestHelper.Promise(
            this._txInternal.setPosition,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets, in twips, the width of the column.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

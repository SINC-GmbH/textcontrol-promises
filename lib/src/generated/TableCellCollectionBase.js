import { Collection } from '../Collection.js';
import { TableCell } from '../TableCell.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<TableCell>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableCellCollection.d.ts.
 */
export class TableCellCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TableCellCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableCellCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TableCellCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new TableCell(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('getCanRemove', 'getItem', 'getItemAtInputPosition', 'remove');
    }

    /**
     * Gets a value indicating whether table cells can be removed.
     * @returns {Promise<boolean>}
     */
    getCanRemove() {
        return RequestHelper.Promise(
            this._txInternal.getCanRemove,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the cell with the specified row and column number.
     * @param {number} row
     * @param {number} column
     * @returns {Promise<TableCell>}
     */
    async getItem(row, column) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestTableCellCallback, CallbackType.ErrorCallback, row, column);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets table's cell at the current input position.
     * @returns {Promise<TableCell>}
     */
    async getItemAtInputPosition() {
        const tx = await RequestHelper.Promise(this._txInternal.getItemAtInputPosition, CallbackType.RequestTableCellCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes the table cell at the current text input position or all selected table cells when a text selection exists.
     * @returns {Promise<boolean>}
     */
    remove() {
        return RequestHelper.Promise(
            this._txInternal.remove,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

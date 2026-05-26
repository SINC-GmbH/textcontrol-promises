import { Collection } from '../Collection.js';
import { TableRow } from '../TableRow.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<TableRow>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableRowCollection.d.ts.
 */
export class TableRowCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TableRowCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableRowCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TableRowCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new TableRow(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'getCanAdd', 'getCanRemove', 'getItem', 'remove');
    }

    /**
     * Adds a count of rows before or after the first or last selected row.
     * @param {TXTextControlTypeDefinition.TableAddPosition} tableAddPosition
     * @param {number} count
     * @returns {Promise<boolean>}
     */
    add(tableAddPosition, count) {
        return RequestHelper.Promise(
            this._txInternal.add,
            tableAddPosition,
            count,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether a new row can be inserted at the current input position.
     * @returns {Promise<boolean>}
     */
    getCanAdd() {
        return RequestHelper.Promise(
            this._txInternal.getCanAdd,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the selected rows can be removed.
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
     * Gets the table row at the current input position or the table row with the specified number.
     * @param {number} [row]
     * @returns {Promise<TableRow>}
     */
    async getItem(row) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestTableRowCallback, CallbackType.ErrorCallback, row);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes the table row at the current text input position or all selected rows when a text selection exists.
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

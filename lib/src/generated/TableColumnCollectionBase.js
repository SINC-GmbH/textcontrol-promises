import { Collection } from '../Collection.js';
import { TableColumn } from '../TableColumn.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<TableColumn>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableColumnCollection.d.ts.
 */
export class TableColumnCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TableColumnCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableColumnCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TableColumnCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new TableColumn(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'getCanAdd', 'getCanRemove', 'getItem', 'remove');
    }

    /**
     * Adds a new table column at the current text input position.
     * @param {TXTextControlTypeDefinition.TableAddPosition} tableAddPosition
     * @returns {Promise<boolean>}
     */
    add(tableAddPosition) {
        return RequestHelper.Promise(
            this._txInternal.add,
            tableAddPosition,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether a new column can be inserted at the current input position.
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
     * Gets a value indicating whether the selected columns can be removed.
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
     * Gets the table column with the specified index or the column at the current input position.
     * @param {number} column
     * @returns {Promise<TableColumn>}
     */
    async getItem(column) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestTableColumnCallback, CallbackType.ErrorCallback, column);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes the table column at the current text input position or all selected columns when a text selection exists.
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

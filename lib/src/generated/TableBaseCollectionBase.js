import { Collection } from '../Collection.js';
import { Table } from '../Table.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<Table>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableBaseCollection.d.ts.
 */
export class TableBaseCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TableBaseCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableBaseCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TableBaseCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new Table(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('getItem', 'removeAtInputPosition', 'removeById');
    }

    /**
     * Gets the requested table or null if there is no table at the current input position or with the requested id
     * @param {number} [id]
     * @returns {Promise<Table>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestTableCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes the table at the current input position.
     * @returns {Promise<boolean>}
     */
    removeAtInputPosition() {
        return RequestHelper.Promise(
            this._txInternal.removeAtInputPosition,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Removes the first table with the passed id.
     * @param {number} id
     * @returns {Promise<boolean>}
     */
    removeById(id) {
        return RequestHelper.Promise(
            this._txInternal.removeById,
            id,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

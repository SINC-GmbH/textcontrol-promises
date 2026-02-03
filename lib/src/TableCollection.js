import { Collection } from "./Collection.js";
import { Table } from "./Table.js";
import { CallbackType, RequestHelper } from "./helper/index.js";

/**
 * @extends {Collection<Table>}
 */
export class TableCollection extends Collection {
    /**
     * Wrapper für TXTextControl.TableCollection
     * @param {any} txTableCollection
     */
    constructor(txTableCollection) {
        super(txTableCollection, (/** @type {Table} */ txTable) => new Table(txTable));
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this._txCollection.add = this._txCollection.add.bind(this._txCollection);
        this._txCollection.getItem = this._txCollection.getItem.bind(this._txCollection);
    }

    /**
     * Adds a table at the current input position
     * @param {number} rows
     * @param {number} columns
     * @param {number=} id
     * @returns {Promise<boolean>}
     */
    async add(rows, columns, id) {
        return RequestHelper.Promise(this._txCollection.add,
            rows,
            columns,
            id,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback);
    }

    /**
     * Gets the first table in the collection with the given id
     * @param {number} id
     * @returns {Promise<Table | null>}
     */
    async getItem(id) {
        let txTable = await RequestHelper.Promise(this._txCollection.getItem,
            CallbackType.RequestTableCallback,
            CallbackType.ErrorCallback, id);
        return txTable &&= new Table(txTable);
    }
}

import { Collection } from "../dist/index.js";
import { Table } from "./Table.js";
import { CallbackType, RequestHelper } from "./helper/index.js";

/**
 * @extends {Collection<Table>}
 */
export class TableCollection extends Collection {

    /** @type {any} */
    #txTableCollection;

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
        this.#txTableCollection.add = this.#txTableCollection.add.bind(this.#txTableCollection);
        this.#txTableCollection.getItem = this.#txTableCollection.getItem.bind(this.#txTableCollection);
    }

    /**
     * Adds a table at the current input position
     * @param {number} rows
     * @param {number} columns
     * @param {number=} id
     * @returns {Promise<boolean>}
     */
    async add(rows, columns, id) {
        return RequestHelper.Promise(this.#txTableCollection.add,
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
        let txTable = await RequestHelper.Promise(this.#txTableCollection.getItem,
            CallbackType.RequestTableCallback,
            CallbackType.ErrorCallback, id);
        return txTable &&= new Table(txTable);
    }
}

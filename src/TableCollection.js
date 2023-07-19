import { Table } from "./Table";
import { CallbackType, RequestHelper } from "./helper/module";

export class TableCollection {

    /** @type {any} */
    #txTableCollection;

    /**
     * Wrapper für TXTextControl.TableCollection
     * @param {any} txTableCollection 
     */
    constructor(txTableCollection) {
        this.#txTableCollection = txTableCollection;
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
     * @returns {Promise<Table>}
     */
    async getItem(id) {
        let txTable = await RequestHelper.Promise(this.#txTableCollection.getItem,
            CallbackType.RequestTableCallback,
            CallbackType.ErrorCallback, id);
        return new Table(txTable);
    }
}
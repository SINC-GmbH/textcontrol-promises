import { TableCellCollection } from "./TableCellCollection.js";
import { CallbackType, RequestHelper } from "./helper/index.js";
/** @import * as TXTextControlTypeDefinition from "../types/TXTextControlTypeDefinition" */

export class Table {
    /** @type {TXTextControlTypeDefinition.Table} */
    #txTable;
    /** @type {TableCellCollection} */
    #cells;
    get cells() { return this.#cells; }
    /** @type {number=} */
    #id;

    /**
     * Wrapper für TXTextControl.Table
     * @param {any} txTable
     */
    constructor(txTable) {
        this.#txTable = txTable;
        this.#bindCallbacks();
        this.#cells = new TableCellCollection(this.#txTable.cells);
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txTable.mergeCells = this.#txTable.mergeCells.bind(this.#txTable);
        this.#txTable.selectCells = this.#txTable.selectCells.bind(this.#txTable);
        this.#txTable.getID = this.#txTable.getID.bind(this.#txTable);
    }

    /**
     * @returns {Promise<number>}
     */
    async getID() {
        if (this.#id == null || typeof this.#id === 'undefined') {
            let result = await RequestHelper.Promise(this.#txTable.getID,
                CallbackType.RequestNumberCallback,
                CallbackType.ErrorCallback);
            this.#id = result;
        }
        return /** @type {number} */(this.#id);
    }

    /**
     * Merges all selected table cells in this table.
     * @returns {Promise<boolean>}
     */
    async mergeCells() {
        return RequestHelper.Promise(this.#txTable.mergeCells,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback);
    }

    /**
     * Selects the part of the table defined through two table cells
     * @param {number} startRow
     * @param {number} startColumn
     * @param {number} stopRow
     * @param {number} stopColumn
     * @returns {Promise<void>}
     */
    async selectCells(
        startRow,
        startColumn,
        stopRow,
        stopColumn,) {
        return RequestHelper.Promise(this.#txTable.selectCells,
            startRow,
            startColumn,
            stopRow,
            stopColumn,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback);
    }
}

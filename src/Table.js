import { TableCellCollection } from "./TableCellCollection";
import { CallbackType, RequestHelper } from "./helper/module";

export class Table {
    /** @type {any} */
    #txTable;
    /** @type {TableCellCollection} */
    #cells;
    get cells() { return this.#cells; }

    /**
     * Wrapper für TXTextControl.Table
     * @param {any} txTable 
     */
    constructor(txTable) {
        this.#txTable = txTable;
        this.#cells = new TableCellCollection(this.#txTable.cells)
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txTable.mergeCells = this.#txTable.mergeCells.bind(this.#txTable);
        this.#txTable.selectCells = this.#txTable.selectCells.bind(this.#txTable);
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
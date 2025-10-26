import { TableCell } from "./TableCell.js";
import { CallbackType, RequestHelper } from "./helper/index.js";

export class TableCellCollection {

    /** @type {any} */
    #txTableCellCollection;

    /**
     * Wrapper für TXTextControl.TableCellCollection
     * @param {any} txTableCellCollection
     */
    constructor(txTableCellCollection) {
        this.#txTableCellCollection = txTableCellCollection;
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txTableCellCollection.getItem = this.#txTableCellCollection.getItem.bind(this.#txTableCellCollection);
    }

    /**
     *  Gets the cell with the specified row and column number
     * @param {number} row
     * @param {number} column
     * @returns {Promise<TableCell>}
     */
    async getItem(row, column) {
        var txTableCell = await RequestHelper.Promise(this.#txTableCellCollection.getItem,
            CallbackType.RequestTableCellCallback,
            CallbackType.ErrorCallback,
            row,
            column);
        return new TableCell(txTableCell);
    }
}

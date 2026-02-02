import { Collection } from "../dist/index.js";
import { TableCell } from "./TableCell.js";
import { CallbackType, RequestHelper } from "./helper/index.js";

/**
 * @extends {Collection<TableCell>}
 */
export class TableCellCollection extends Collection{

    /** @type {any} */
    #txTableCellCollection;

    /**
     * Wrapper für TXTextControl.TableCellCollection
     * @param {any} txTableCellCollection
     */
    constructor(txTableCellCollection) {
        super(txTableCellCollection, (/** @type {TableCell} */ txTableCell) => new TableCell(txTableCell));
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
        let txTableCell = await RequestHelper.Promise(this.#txTableCellCollection.getItem,
            CallbackType.RequestTableCellCallback,
            CallbackType.ErrorCallback,
            row,
            column);
        return txTableCell &&= new TableCell(txTableCell);
    }
}

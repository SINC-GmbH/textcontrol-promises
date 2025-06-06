export class TableCellCollection {
    constructor(txTableCellCollection: any);
    getItem(row: number, column: number): Promise<TableCell>;
    #private;
}
import { TableCell } from "./TableCell";

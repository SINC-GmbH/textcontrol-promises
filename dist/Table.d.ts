export class Table {
    constructor(txTable: any);
    get cells(): TableCellCollection;
    mergeCells(): Promise<boolean>;
    selectCells(startRow: number, startColumn: number, stopRow: number, stopColumn: number): Promise<void>;
    #private;
}
import { TableCellCollection } from "./TableCellCollection";

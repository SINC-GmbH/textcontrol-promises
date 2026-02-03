import { RequestBooleanCallback, RequestTableCellCallback } from '../callbacks';
import { Collection } from './Collection';
import { TableCell } from './TableCell';

/** Contains all cells of a table. */
export interface TableCellCollection extends Collection<TableCell> {
    /** Gets a value indicating whether table cells can be removed. */
    getCanRemove(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the cell with the specified row and column number. */
    getItem(callback: RequestTableCellCallback, errorCallback: ErrorCallback | null, row: number, column: number): void;
    /** Gets table's cell at the current input position. */
    getItemAtInputPosition(callback: RequestTableCellCallback, errorCallback?: ErrorCallback): void;
    /** Removes the table cell at the current text input position or all selected table cells when a text selection exists. */
    remove(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

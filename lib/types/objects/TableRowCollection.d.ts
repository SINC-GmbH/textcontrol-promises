import { RequestBooleanCallback, RequestTableRowCallback } from '../callbacks';
import { TableAddPosition } from '../enums';
import { Collection } from './Collection';
import { TableRow } from './TableRow';

/** Contains all rows of a table in a Text Control document. */
export interface TableRowCollection extends Collection<TableRow> {
    /** Adds a count of rows before or after the first or last selected row. */
    add(tableAddPosition: TableAddPosition, count: number, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether a new row can be inserted at the current input position. */
    getCanAdd(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the selected rows can be removed. */
    getCanRemove(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the table row at the current input position or the table row with the specified number. */
    getItem(callback: RequestTableRowCallback, errorCallback?: ErrorCallback, row?: number): void;
    /** Removes the table row at the current text input position or all selected rows when a text selection exists. */
    remove(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

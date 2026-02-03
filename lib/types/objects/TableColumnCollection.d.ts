import { RequestBooleanCallback, RequestTableColumnCallback } from '../callbacks';
import { TableAddPosition } from '../enums';
import { Collection } from './Collection';
import { TableColumn } from './TableColumn';

/** Contains all columns of a table in a Text Control document */
export interface TableColumnCollection extends Collection<TableColumn> {
    /** Adds a new table column at the current text input position. */
    add(tableAddPosition: TableAddPosition, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether a new column can be inserted at the current input position. */
    getCanAdd(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether the selected columns can be removed. */
    getCanRemove(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the table column with the specified index or the column at the current input position. */
    getItem(callback: RequestTableColumnCallback, errorCallback?: ErrorCallback, column?: number): void;
    /** Removes the table column at the current text input position or all selected columns when a text selection exists. */
    remove(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

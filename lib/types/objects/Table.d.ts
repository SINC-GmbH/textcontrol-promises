import { RequestBooleanCallback, RequestNumberCallback, RequestTableCallback, EmptyRequestCallback, RequestStringCallback } from '../callbacks';
import { TableAddPosition } from '../enums';
import { TableBaseCollection } from './TableBaseCollection';
import { TableCellCollection } from './TableCellCollection';
import { TableColumnCollection } from './TableColumnCollection';
import { TableRowCollection } from './TableRowCollection';

/** The Table object represents a table in a document. */
export interface Table {
    /** Checks whether table cells can be merged. */
    getCanMergeCells(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Checks whether this table can be split. */
    getCanSplit(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Checks whether previously merged table cells in this table can be split. */
    getCanSplitCells(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the table's identifier. */
    getID(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the nested level for the specified table. */
    getNestedLevel(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets a table's outermost table. */
    getOuterMostTable(callback: RequestTableCallback, errorCallback?: ErrorCallback): void;
    /** Gets table's outer table. */
    getOuterTable(callback: RequestTableCallback, errorCallback?: ErrorCallback): void;
    /** Merges all selected table cells in this table. */
    mergeCells(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Selects the complete table. */
    select(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Selects the part of the table defined through two table cells. */
    selectCells(
        startRow: number,
        startColumn: number,
        stopRow: number,
        stopColumn: number,
        callback?: EmptyRequestCallback,
        errorCallback?: ErrorCallback
    ): void;
    /** Sets the table's id. */
    setID(id: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Splits a table below or above the current input position. */
    split(tableAddPosition: TableAddPosition, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Splits all selected table cells in this table. */
    splitCells(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /**
     * Gets the table's descriptive text.
     * The descriptive text is used by screen readers to describe the table to users with visual impairments.
     * An empty string is returned if no descriptive text is set.
     */
    getDescriptiveText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /**
     * Sets the table's descriptive text.
     * The descriptive text is used by screen readers to describe the table to users with visual impairments.
     * An empty string or null can be passed to remove the descriptive text.
     */
    setDescriptiveText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /** The collection of all table cells the table consists of. */
    cells: TableCellCollection;
    /** Gets a collection of all columns the table consists of. */
    columns: TableColumnCollection;
    /** Gets a collection of all tables nested in this table. */
    nestedTables: TableBaseCollection;
    /** Gets a collection of all rows the table consists of. */
    rows: TableRowCollection;
}

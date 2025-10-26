import { RequestCellFormatCallback, RequestNumberCallback, EmptyRequestCallback } from '../callbacks';

/** Represents a single column of a table in a Text Control document. */
export interface TableColumn {
    /** Gets the formatting attributes of a table column. */
    getCellFormat(callback: RequestCellFormatCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of the table column represented through this table column object. */
    getColumn(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets, in twips, the horizontal position of the column. */
    getPosition(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets, in twips, the width of the column. */
    getWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Selects the table column. */
    select(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets, in twips, the horizontal position of the column. */
    setPosition(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets, in twips, the width of the column. */
    setWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

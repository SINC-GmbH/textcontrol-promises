import { RequestColorStringCallback, RequestNumberCallback, EmptyRequestCallback } from '../callbacks';

/** A TableCellBorder object represents the border of a table cell. */
export interface TableCellBorder {
    /** Gets the cell's border color. */
    getColor(callback: RequestColorStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the distance between the table cell's border and its text in twips. */
    getTextDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the cell's width in twips. */
    getWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets the cell's border color. */
    setColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the distance between the table cell's border and its text in twips. */
    setTextDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the cell's width in twips. */
    setWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

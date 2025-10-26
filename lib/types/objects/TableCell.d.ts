import { RequestCellFormatCallback, RequestNumberCallback, RequestStringCallback, EmptyRequestCallback } from '../callbacks';

/** Represents a single cell of a table in a Text Control document. */
export interface TableCell {
    /** Gets the formatting attributes of a table cell. */
    getCellFormat(callback: RequestCellFormatCallback, errorCallback?: ErrorCallback): void;
    /** Gets the table cell's column number. */
    getColumn(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the table cell's formula. */
    getFormula(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of characters in the table cell. */
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the cell's name. */
    getName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets, in twips, the horizontal position of the cell. */
    getPosition(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the table cell's row number. */
    getRow(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the index (one-based) of the first character in the table cell. */
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the cell's text. */
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets, in twips, the width of the cell. */
    getWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Selects the table cell. */
    select(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the table cell's formula. */
    setFormula(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the cell's name. */
    setName(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets, in twips, the horizontal position of the cell. */
    setPosition(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the cell's text. */
    setText(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets, in twips, the width of the cell. */
    setWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

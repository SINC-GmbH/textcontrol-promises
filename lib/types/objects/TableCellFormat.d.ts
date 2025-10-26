import {
    RequestStringCallback,
    RequestNumberFormatCallback,
    RequestTextTypeCallback,
    RequestVerticalAlignmentCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { NumberFormat, TextType, VerticalAlignment } from '../enums';
import { TableCellBorder } from './TableCellBorder';

/** The TableCellFormat object represents the formatting attributes of a table cell. */
export interface TableCellFormat {
    /** Gets the table cell's background color. */
    getBackColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a number format for the table cell. */
    getNumberFormat(callback: RequestNumberFormatCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text type of the table cell which determines whether the cell's text is interpreted as a number or as text When the type is Text, the cell's text is interpreted as text and it is displayed as it is. */
    getTextType(callback: RequestTextTypeCallback, errorCallback?: ErrorCallback): void;
    /** Gets the vertical alignment of the text in the table cell. */
    getVerticalAlignment(callback: RequestVerticalAlignmentCallback, errorCallback?: ErrorCallback): void;
    /** Sets the table cell's background color. */
    setBackColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the table cell's number format. */
    setNumberFormat(value: NumberFormat, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the table cell's text type. */
    setTextType(value: TextType, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the vertical alignment of the text in the table cell. */
    setVerticalAlignment(value: VerticalAlignment, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /** The cell's bottom border. */
    bottomBorder: TableCellBorder;
    /** The cell's left border. */
    leftBorder: TableCellBorder;
    /** The cell's right border. */
    rightBorder: TableCellBorder;
    /** The cell's top border. */
    topBorder: TableCellBorder;
}

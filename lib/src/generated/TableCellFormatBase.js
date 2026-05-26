import { ObjectBase } from '../ObjectBase.js';
import { TableCellBorder } from '../TableCellBorder.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableCellFormat.d.ts.
 */
export class TableCellFormatBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TableCellFormat} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableCellFormat} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableCellFormat} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBackColor', 'getNumberFormat', 'getTextType', 'getVerticalAlignment', 'setBackColor', 'setNumberFormat', 'setTextType', 'setVerticalAlignment');
    }

    /**
     * Gets the table cell's background color.
     * @returns {Promise<string>}
     */
    getBackColor() {
        return RequestHelper.Promise(
            this._txInternal.getBackColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a number format for the table cell.
     * @returns {Promise<TXTextControlTypeDefinition.NumberFormat>}
     */
    getNumberFormat() {
        return RequestHelper.Promise(
            this._txInternal.getNumberFormat,
            CallbackType.RequestNumberFormatCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text type of the table cell which determines whether the cell's text is interpreted as a number or as text When the type is Text, the cell's text is interpreted as text and it is displayed as it is.
     * @returns {Promise<TXTextControlTypeDefinition.TextType>}
     */
    getTextType() {
        return RequestHelper.Promise(
            this._txInternal.getTextType,
            CallbackType.RequestTextTypeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the vertical alignment of the text in the table cell.
     * @returns {Promise<TXTextControlTypeDefinition.VerticalAlignment>}
     */
    getVerticalAlignment() {
        return RequestHelper.Promise(
            this._txInternal.getVerticalAlignment,
            CallbackType.RequestVerticalAlignmentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the table cell's background color.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setBackColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setBackColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the table cell's number format.
     * @param {TXTextControlTypeDefinition.NumberFormat} value
     * @returns {Promise<void>}
     */
    setNumberFormat(value) {
        return RequestHelper.Promise(
            this._txInternal.setNumberFormat,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the table cell's text type.
     * @param {TXTextControlTypeDefinition.TextType} value
     * @returns {Promise<void>}
     */
    setTextType(value) {
        return RequestHelper.Promise(
            this._txInternal.setTextType,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the vertical alignment of the text in the table cell.
     * @param {TXTextControlTypeDefinition.VerticalAlignment} value
     * @returns {Promise<void>}
     */
    setVerticalAlignment(value) {
        return RequestHelper.Promise(
            this._txInternal.setVerticalAlignment,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * The cell's bottom border.
     * @type {TableCellBorder}
     */
    get bottomBorder() { return new TableCellBorder(this._txInternal.bottomBorder); }

    /**
     * The cell's left border.
     * @type {TableCellBorder}
     */
    get leftBorder() { return new TableCellBorder(this._txInternal.leftBorder); }

    /**
     * The cell's right border.
     * @type {TableCellBorder}
     */
    get rightBorder() { return new TableCellBorder(this._txInternal.rightBorder); }

    /**
     * The cell's top border.
     * @type {TableCellBorder}
     */
    get topBorder() { return new TableCellBorder(this._txInternal.topBorder); }

    //#endregion
}

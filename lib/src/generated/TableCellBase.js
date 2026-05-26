import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableCell.d.ts.
 */
export class TableCellBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TableCell} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableCell} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableCell} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getCellFormat', 'getColumn', 'getFormula', 'getLength', 'getName', 'getPosition', 'getRow', 'getStart', 'getText', 'getWidth', 'select', 'setFormula', 'setName', 'setPosition', 'setText', 'setWidth');
    }

    /**
     * Gets the formatting attributes of a table cell.
     * @returns {Promise<TXTextControlTypeDefinition.TableCellFormat>}
     */
    getCellFormat() {
        return RequestHelper.Promise(
            this._txInternal.getCellFormat,
            CallbackType.RequestCellFormatCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the table cell's column number.
     * @returns {Promise<number>}
     */
    getColumn() {
        return RequestHelper.Promise(
            this._txInternal.getColumn,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the table cell's formula.
     * @returns {Promise<string>}
     */
    getFormula() {
        return RequestHelper.Promise(
            this._txInternal.getFormula,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of characters in the table cell.
     * @returns {Promise<number>}
     */
    getLength() {
        return RequestHelper.Promise(
            this._txInternal.getLength,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the cell's name.
     * @returns {Promise<string>}
     */
    getName() {
        return RequestHelper.Promise(
            this._txInternal.getName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets, in twips, the horizontal position of the cell.
     * @returns {Promise<number>}
     */
    getPosition() {
        return RequestHelper.Promise(
            this._txInternal.getPosition,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the table cell's row number.
     * @returns {Promise<number>}
     */
    getRow() {
        return RequestHelper.Promise(
            this._txInternal.getRow,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the index (one-based) of the first character in the table cell.
     * @returns {Promise<number>}
     */
    getStart() {
        return RequestHelper.Promise(
            this._txInternal.getStart,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the cell's text.
     * @returns {Promise<string>}
     */
    getText() {
        return RequestHelper.Promise(
            this._txInternal.getText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets, in twips, the width of the cell.
     * @returns {Promise<number>}
     */
    getWidth() {
        return RequestHelper.Promise(
            this._txInternal.getWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects the table cell.
     * @returns {Promise<void>}
     */
    select() {
        return RequestHelper.Promise(
            this._txInternal.select,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the table cell's formula.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setFormula(value) {
        return RequestHelper.Promise(
            this._txInternal.setFormula,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the cell's name.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setName(value) {
        return RequestHelper.Promise(
            this._txInternal.setName,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets, in twips, the horizontal position of the cell.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setPosition(value) {
        return RequestHelper.Promise(
            this._txInternal.setPosition,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the cell's text.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setText(value) {
        return RequestHelper.Promise(
            this._txInternal.setText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets, in twips, the width of the cell.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

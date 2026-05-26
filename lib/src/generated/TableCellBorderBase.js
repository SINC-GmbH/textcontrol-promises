import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableCellBorder.d.ts.
 */
export class TableCellBorderBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TableCellBorder} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableCellBorder} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableCellBorder} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getColor', 'getTextDistance', 'getWidth', 'setColor', 'setTextDistance', 'setWidth');
    }

    /**
     * Gets the cell's border color.
     * @returns {Promise<string>}
     */
    getColor() {
        return RequestHelper.Promise(
            this._txInternal.getColor,
            CallbackType.RequestColorStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance between the table cell's border and its text in twips.
     * @returns {Promise<number>}
     */
    getTextDistance() {
        return RequestHelper.Promise(
            this._txInternal.getTextDistance,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the cell's width in twips.
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
     * Sets the cell's border color.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance between the table cell's border and its text in twips.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setTextDistance(value) {
        return RequestHelper.Promise(
            this._txInternal.setTextDistance,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the cell's width in twips.
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

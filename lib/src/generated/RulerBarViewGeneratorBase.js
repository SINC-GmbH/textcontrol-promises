import { ObjectBase } from '../ObjectBase.js';
import { RulerBarViewGeneratorColors } from '../RulerBarViewGeneratorColors.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/RulerBarViewGenerator.d.ts.
 */
export class RulerBarViewGeneratorBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.RulerBarViewGenerator} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.RulerBarViewGenerator} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.RulerBarViewGenerator} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBorderStyle', 'getEnablePageMargins', 'getFormulaMode', 'getReadOnly', 'getScaleUnit', 'resetDisplayColors', 'setBorderStyle', 'setEnablePageMargins', 'setFormulaMode', 'setReadOnly', 'setScaleUnit');
    }

    /**
     * Gets the border style of the ruler bar.
     * @returns {Promise<TXTextControlTypeDefinition.RulerBarBorderStyle>}
     */
    getBorderStyle() {
        return RequestHelper.Promise(
            this._txInternal.getBorderStyle,
            CallbackType.RequestRulerBarBorderStyleCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether page margins can be set via the ruler bar.
     * @returns {Promise<boolean>}
     */
    getEnablePageMargins() {
        return RequestHelper.Promise(
            this._txInternal.getEnablePageMargins,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the formula mode of the ruler bar.
     * @returns {Promise<TXTextControlTypeDefinition.RulerBarFormulaMode>}
     */
    getFormulaMode() {
        return RequestHelper.Promise(
            this._txInternal.getFormulaMode,
            CallbackType.RequestRulerBarFormulaModeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value determining the ruler bar's read only mode.
     * @returns {Promise<boolean>}
     */
    getReadOnly() {
        return RequestHelper.Promise(
            this._txInternal.getReadOnly,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the scale unit of the ruler bar.
     * @returns {Promise<TXTextControlTypeDefinition.RulerBarScaleUnit>}
     */
    getScaleUnit() {
        return RequestHelper.Promise(
            this._txInternal.getScaleUnit,
            CallbackType.RequestRulerBarScaleUnitCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets all display colors of a ruler bar to their system dependent default values.
     * @returns {Promise<void>}
     */
    resetDisplayColors() {
        return RequestHelper.Promise(
            this._txInternal.resetDisplayColors,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the border style of the ruler bar.
     * @param {TXTextControlTypeDefinition.RulerBarBorderStyle} value
     * @returns {Promise<void>}
     */
    setBorderStyle(value) {
        return RequestHelper.Promise(
            this._txInternal.setBorderStyle,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether page margins can be set via the ruler bar.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setEnablePageMargins(value) {
        return RequestHelper.Promise(
            this._txInternal.setEnablePageMargins,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the formula mode of the ruler bar.
     * @param {TXTextControlTypeDefinition.RulerBarFormulaMode} value
     * @returns {Promise<void>}
     */
    setFormulaMode(value) {
        return RequestHelper.Promise(
            this._txInternal.setFormulaMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value determining the ruler bar's read only mode.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setReadOnly(value) {
        return RequestHelper.Promise(
            this._txInternal.setReadOnly,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the scale unit of the ruler bar.
     * @param {TXTextControlTypeDefinition.RulerBarScaleUnit} value
     * @returns {Promise<void>}
     */
    setScaleUnit(value) {
        return RequestHelper.Promise(
            this._txInternal.setScaleUnit,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * The displayed colors of the ruler bar.
     * @type {RulerBarViewGeneratorColors}
     */
    get displayColors() { return new RulerBarViewGeneratorColors(this._txInternal.displayColors); }

    //#endregion
}

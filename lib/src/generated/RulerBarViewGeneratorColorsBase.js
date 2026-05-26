import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/RulerBarViewGeneratorColors.d.ts.
 */
export class RulerBarViewGeneratorColorsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.RulerBarViewGeneratorColors} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.RulerBarViewGeneratorColors} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.RulerBarViewGeneratorColors} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBackColor', 'getForeColor', 'getGradientBackColor', 'getRulerColor', 'getSeparatorColorDark', 'getSeparatorColorLight', 'resetBackColor', 'resetForeColor', 'resetGradientBackColor', 'resetRulerColor', 'resetSeparatorColorDark', 'resetSeparatorColorLight', 'setBackColor', 'setForeColor', 'setGradientBackColor', 'setRulerColor', 'setSeparatorColorDark', 'setSeparatorColorLight');
    }

    /**
     * Gets the background color at the left or top edge of the ruler bar.
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
     * Gets the color used for the numbers of the ruler.
     * @returns {Promise<string>}
     */
    getForeColor() {
        return RequestHelper.Promise(
            this._txInternal.getForeColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the background color at the right or bottom edge of the ruler bar.
     * @returns {Promise<string>}
     */
    getGradientBackColor() {
        return RequestHelper.Promise(
            this._txInternal.getGradientBackColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color of the ruler.
     * @returns {Promise<string>}
     */
    getRulerColor() {
        return RequestHelper.Promise(
            this._txInternal.getRulerColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color of dark separators.
     * @returns {Promise<string>}
     */
    getSeparatorColorDark() {
        return RequestHelper.Promise(
            this._txInternal.getSeparatorColorDark,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color of light separators.
     * @returns {Promise<string>}
     */
    getSeparatorColorLight() {
        return RequestHelper.Promise(
            this._txInternal.getSeparatorColorLight,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the ruler bar's backColor to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetBackColor() {
        return RequestHelper.Promise(
            this._txInternal.resetBackColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the ruler bar's foreColor to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetForeColor() {
        return RequestHelper.Promise(
            this._txInternal.resetForeColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the ruler bar's gradientBackColor to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetGradientBackColor() {
        return RequestHelper.Promise(
            this._txInternal.resetGradientBackColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the ruler bar's rulerColor to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetRulerColor() {
        return RequestHelper.Promise(
            this._txInternal.resetRulerColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the ruler bar's separatorColorDark to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetSeparatorColorDark() {
        return RequestHelper.Promise(
            this._txInternal.resetSeparatorColorDark,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the ruler bar's separatorColorLight to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetSeparatorColorLight() {
        return RequestHelper.Promise(
            this._txInternal.resetSeparatorColorLight,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color at the left or top edge of the ruler bar.
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
     * Sets the color used for the numbers of the ruler.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setForeColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setForeColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color at the right or bottom edge of the ruler bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setGradientBackColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setGradientBackColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color of the ruler.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setRulerColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setRulerColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color of dark separators.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setSeparatorColorDark(value) {
        return RequestHelper.Promise(
            this._txInternal.setSeparatorColorDark,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color of light separators.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setSeparatorColorLight(value) {
        return RequestHelper.Promise(
            this._txInternal.setSeparatorColorLight,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/StatusBarViewGeneratorColors.d.ts.
 */
export class StatusBarViewGeneratorColorsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.StatusBarViewGeneratorColors} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.StatusBarViewGeneratorColors} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.StatusBarViewGeneratorColors} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBackColor', 'getBackColorBottom', 'getBackColorMiddle', 'getBackColorTop', 'getForeColor', 'getFrameColor', 'getGradientBackColor', 'getSeparatorColorDark', 'getSeparatorColorLight', 'reset', 'resetBackColor', 'resetBackColorBottom', 'resetBackColorMiddle', 'resetBackColorTop', 'resetForeColor', 'resetFrameColor', 'resetGradientBackColor', 'resetSeparatorColor', 'resetSeparatorColorDark', 'resetSeparatorColorLight', 'setBackColor', 'setBackColorBottom', 'setBackColorMiddle', 'setBackColorTop', 'setForeColor', 'setFrameColor', 'setGradientBackColor', 'setSeparatorColor', 'setSeparatorColorDark', 'setSeparatorColorLight');
    }

    /**
     * Gets the background color at the left edge of the status bar.
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
     * Gets the background color at the bottom of the status bar.
     * @returns {Promise<string>}
     */
    getBackColorBottom() {
        return RequestHelper.Promise(
            this._txInternal.getBackColorBottom,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the background color in the middle of the status bar.
     * @returns {Promise<string>}
     */
    getBackColorMiddle() {
        return RequestHelper.Promise(
            this._txInternal.getBackColorMiddle,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the background color at the top of the status bar.
     * @returns {Promise<string>}
     */
    getBackColorTop() {
        return RequestHelper.Promise(
            this._txInternal.getBackColorTop,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color used for text and numbers.
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
     * Gets the color of the status bar's frames.
     * @deprecated
     * @returns {Promise<string>}
     */
    getFrameColor() {
        return RequestHelper.Promise(
            this._txInternal.getFrameColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the background color at the right edge of the status bar.
     * @deprecated
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
     * Gets the color of the dark part of a separator.
     * @deprecated
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
     * Gets the color of the light part of a separator.
     * @deprecated
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
     * Resets all colors to their system dependent default values.
     * @returns {Promise<void>}
     */
    reset() {
        return RequestHelper.Promise(
            this._txInternal.reset,
            CallbackType.EmptyRequestCallback,
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
     * Resets the status bar's backColorBottom to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetBackColorBottom() {
        return RequestHelper.Promise(
            this._txInternal.resetBackColorBottom,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the status bar's backColorMiddle to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetBackColorMiddle() {
        return RequestHelper.Promise(
            this._txInternal.resetBackColorMiddle,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the status bar's backColorTop to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetBackColorTop() {
        return RequestHelper.Promise(
            this._txInternal.resetBackColorTop,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the status bar's foreColor to its system dependent default value.
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
     * Resets the status bar's frameColor to its system dependent default value.
     * @deprecated
     * @returns {Promise<void>}
     */
    resetFrameColor() {
        return RequestHelper.Promise(
            this._txInternal.resetFrameColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the status bar's gradientBackColor to its system dependent default value.
     * @deprecated
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
     * Resets the separator color to its default value.
     * @returns {Promise<void>}
     */
    resetSeparatorColor() {
        return RequestHelper.Promise(
            this._txInternal.resetSeparatorColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the status bar's separatorColorDark to its system dependent default value.
     * @deprecated
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
     * Resets the status bar's separatorColorLight to its system dependent default value.
     * @deprecated
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
     * Sets the background color at the left edge of the ruler bar.
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
     * Sets the background color at the bottom of the status bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setBackColorBottom(value) {
        return RequestHelper.Promise(
            this._txInternal.setBackColorBottom,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color in the middle of the status bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setBackColorMiddle(value) {
        return RequestHelper.Promise(
            this._txInternal.setBackColorMiddle,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color at the top of the status bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setBackColorTop(value) {
        return RequestHelper.Promise(
            this._txInternal.setBackColorTop,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color used for text and numbers.
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
     * Sets the color of the status bar's frames.
     * @deprecated
     * @param {string} value
     * @returns {Promise<void>}
     */
    setFrameColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setFrameColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color at the right edge of the status bar.
     * @deprecated
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
     * Sets the separator color.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setSeparatorColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setSeparatorColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color of the dark part of a separator.
     * @deprecated
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
     * Sets the color of the light part of a separator.
     * @deprecated
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

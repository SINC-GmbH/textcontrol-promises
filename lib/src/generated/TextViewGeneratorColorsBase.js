import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextViewGeneratorColors.d.ts.
 */
export class TextViewGeneratorColorsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TextViewGeneratorColors} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextViewGeneratorColors} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TextViewGeneratorColors} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getActiveFormFieldColor', 'getDarkShadowColor', 'getDesktopColor', 'getFormFieldColor', 'getHeaderFooterLabelColor', 'getHeaderFooterLineColor', 'getLightShadowColor', 'resetDarkShadowColor', 'resetDesktopColor', 'resetHeaderFooterLabelColor', 'resetHeaderFooterLineColor', 'resetLightShadowColor', 'setActiveFormFieldColor', 'setDarkShadowColor', 'setDesktopColor', 'setFormFieldColor', 'setHeaderFooterLabelColor', 'setHeaderFooterLineColor', 'setLightShadowColor');
    }

    /**
     * Gets the highlight color of a form field containing the current text input position.
     * @returns {Promise<string>}
     */
    getActiveFormFieldColor() {
        return RequestHelper.Promise(
            this._txInternal.getActiveFormFieldColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the display color for the shadow at the right and the bottom edge of the pages.
     * @returns {Promise<string>}
     */
    getDarkShadowColor() {
        return RequestHelper.Promise(
            this._txInternal.getDarkShadowColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the display color for the area around the pages.
     * @returns {Promise<string>}
     */
    getDesktopColor() {
        return RequestHelper.Promise(
            this._txInternal.getDesktopColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the default highlight color of form fields.
     * @returns {Promise<string>}
     */
    getFormFieldColor() {
        return RequestHelper.Promise(
            this._txInternal.getFormFieldColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the display color for the label showing which header or footer is activated.
     * @returns {Promise<string>}
     */
    getHeaderFooterLabelColor() {
        return RequestHelper.Promise(
            this._txInternal.getHeaderFooterLabelColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the display color for the dividing line between headers and footers and the main text.
     * @returns {Promise<string>}
     */
    getHeaderFooterLineColor() {
        return RequestHelper.Promise(
            this._txInternal.getHeaderFooterLineColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the display color for the shadow at the left and the top edge of the pages.
     * @returns {Promise<string>}
     */
    getLightShadowColor() {
        return RequestHelper.Promise(
            this._txInternal.getLightShadowColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the text control's DarkShadowColor to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetDarkShadowColor() {
        return RequestHelper.Promise(
            this._txInternal.resetDarkShadowColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the text control's DesktopColor to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetDesktopColor() {
        return RequestHelper.Promise(
            this._txInternal.resetDesktopColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the text control's HeaderFooterLabelColor to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetHeaderFooterLabelColor() {
        return RequestHelper.Promise(
            this._txInternal.resetHeaderFooterLabelColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the text control's HeaderFooterLineColor to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetHeaderFooterLineColor() {
        return RequestHelper.Promise(
            this._txInternal.resetHeaderFooterLineColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets the text control's LightShadowColor to its system dependent default value.
     * @returns {Promise<void>}
     */
    resetLightShadowColor() {
        return RequestHelper.Promise(
            this._txInternal.resetLightShadowColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the highlight color of a form field containing the current text input position.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setActiveFormFieldColor(color) {
        return RequestHelper.Promise(
            this._txInternal.setActiveFormFieldColor,
            color,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the display color for the shadow at the right and the bottom edge of the pages.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setDarkShadowColor(color) {
        return RequestHelper.Promise(
            this._txInternal.setDarkShadowColor,
            color,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the display color for the area around the pages.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setDesktopColor(color) {
        return RequestHelper.Promise(
            this._txInternal.setDesktopColor,
            color,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the default highlight color of a form field.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setFormFieldColor(color) {
        return RequestHelper.Promise(
            this._txInternal.setFormFieldColor,
            color,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the display color for the label showing which header or footer is activated.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setHeaderFooterLabelColor(color) {
        return RequestHelper.Promise(
            this._txInternal.setHeaderFooterLabelColor,
            color,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the display color for the dividing line between headers and footers and the main text.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setHeaderFooterLineColor(color) {
        return RequestHelper.Promise(
            this._txInternal.setHeaderFooterLineColor,
            color,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the display color for the shadow at the left and the top edge of the pages.
     * @param {string} color
     * @returns {Promise<void>}
     */
    setLightShadowColor(color) {
        return RequestHelper.Promise(
            this._txInternal.setLightShadowColor,
            color,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

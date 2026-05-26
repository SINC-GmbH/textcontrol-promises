import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Barcode.d.ts.
 */
export class BarcodeBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Barcode} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Barcode} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Barcode} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getAdditionalText', 'getAlignment', 'getAngle', 'getBackColor', 'getBarcodeType', 'getForeColor', 'getShowText', 'getText', 'getTextAlignment', 'getUpperTextLength', 'saveImage', 'setAdditionalText', 'setAlignment', 'setAngle', 'setBackColor', 'setBarcodeType', 'setForeColor', 'setShowText', 'setText', 'setTextAlignment', 'setUpperTextLength');
    }

    /**
     * Gets an additional text that is displayed below or above the barcode image.
     * @returns {Promise<string>}
     */
    getAdditionalText() {
        return RequestHelper.Promise(
            this._txInternal.getAdditionalText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the alignment of the barcode image inside the control.
     * @returns {Promise<TXTextControlTypeDefinition.BarcodeAlignment>}
     */
    getAlignment() {
        return RequestHelper.Promise(
            this._txInternal.getAlignment,
            CallbackType.RequestBarcodeAlignmentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the angle of the barcode image inside the control.
     * @returns {Promise<number>}
     */
    getAngle() {
        return RequestHelper.Promise(
            this._txInternal.getAngle,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the background color of the barcode control.
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
     * Gets the type of barcode that is rendered.
     * @returns {Promise<TXTextControlTypeDefinition.BarcodeType>}
     */
    getBarcodeType() {
        return RequestHelper.Promise(
            this._txInternal.getBarcodeType,
            CallbackType.RequestBarcodeTypeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the foreground color of the barcode control.
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
     * Gets a value indicating whether the encrypted barcode text value is displayed below or above the barcode image or not.
     * @returns {Promise<boolean>}
     */
    getShowText() {
        return RequestHelper.Promise(
            this._txInternal.getShowText,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text encrypted by the barcode.
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
     * Gets a value indicating whether the barcode text and additional text is displayed below or above the barcode image.
     * @returns {Promise<TXTextControlTypeDefinition.BarcodeTextAlignment>}
     */
    getTextAlignment() {
        return RequestHelper.Promise(
            this._txInternal.getTextAlignment,
            CallbackType.RequestBarcodeTextAlignmentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the maximum text length.
     * @returns {Promise<number>}
     */
    getUpperTextLength() {
        return RequestHelper.Promise(
            this._txInternal.getUpperTextLength,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Saves the barcode image.
     * @param {TXTextControlTypeDefinition.ImageFormat} imageFormat Specifies the format used to save the image.
     * @returns {Promise<string>}
     */
    saveImage(imageFormat) {
        return RequestHelper.Promise(
            this._txInternal.saveImage,
            imageFormat,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an additional text that is displayed below or above the barcode image.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setAdditionalText(value) {
        return RequestHelper.Promise(
            this._txInternal.setAdditionalText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the alignment of the barcode image inside the control.
     * @param {TXTextControlTypeDefinition.BarcodeAlignment} value
     * @returns {Promise<void>}
     */
    setAlignment(value) {
        return RequestHelper.Promise(
            this._txInternal.setAlignment,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the angle of the barcode image inside the control.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setAngle(value) {
        return RequestHelper.Promise(
            this._txInternal.setAngle,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color for the barcode control.
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
     * Sets the type of barcode that is rendered.
     * @param {TXTextControlTypeDefinition.BarcodeType} value
     * @returns {Promise<void>}
     */
    setBarcodeType(value) {
        return RequestHelper.Promise(
            this._txInternal.setBarcodeType,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the foreground color for the barcode control.
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
     * Sets a value indicating whether the encrypted barcode text value is displayed below or above the barcode image or not.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowText(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text the barcode should encrypt.
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
     * Sets a value indicating whether the barcode text and additional text is displayed below or above the barcode image.
     * @param {TXTextControlTypeDefinition.BarcodeTextAlignment} value
     * @returns {Promise<void>}
     */
    setTextAlignment(value) {
        return RequestHelper.Promise(
            this._txInternal.setTextAlignment,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the maximum text length.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setUpperTextLength(value) {
        return RequestHelper.Promise(
            this._txInternal.setUpperTextLength,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

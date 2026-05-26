import { FrameBase } from '../FrameBase.js';
import { Distances } from '../Distances.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextFrame.d.ts.
 */
export class TextFrameBase extends FrameBase {
    /** @returns {TXTextControlTypeDefinition.TextFrame} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextFrame} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TextFrame} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('activate', 'getBackColor', 'getBorderColor', 'getBorderStyle', 'getBorderWidth', 'getInternalMargins', 'getTransparency', 'setBackColor', 'setBorderColor', 'setBorderStyle', 'setBorderWidth', 'setInternalMargins', 'setTransparency', 'getDescriptiveText', 'setDescriptiveText');
    }

    /**
     * Activates the text frame.
     * @returns {Promise<boolean>}
     */
    activate() {
        return RequestHelper.Promise(
            this._txInternal.activate,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the background color of the text frame.
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
     * Gets the border color of the text frame.
     * @returns {Promise<string>}
     */
    getBorderColor() {
        return RequestHelper.Promise(
            this._txInternal.getBorderColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the style of a text frame's border line.
     * @returns {Promise<TXTextControlTypeDefinition.FrameStyle>}
     */
    getBorderStyle() {
        return RequestHelper.Promise(
            this._txInternal.getBorderStyle,
            CallbackType.RequestFrameStyleCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the width, in twips, of a text frame's border line.
     * @returns {Promise<number>}
     */
    getBorderWidth() {
        return RequestHelper.Promise(
            this._txInternal.getBorderWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distances, in twips, between the text frame's border line and the text.
     * @returns {Promise<TXTextControlTypeDefinition.Distances>}
     */
    getInternalMargins() {
        return RequestHelper.Promise(
            this._txInternal.getInternalMargins,
            CallbackType.RequestDistancesCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text frame's transparency.
     * @returns {Promise<number>}
     */
    getTransparency() {
        return RequestHelper.Promise(
            this._txInternal.getTransparency,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color for the text frame.
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
     * Sets the border color for the text frame.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setBorderColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setBorderColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the style of a text frame's border line.
     * @param {TXTextControlTypeDefinition.FrameStyle} value
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
     * Sets the width, in twips, of a text frame's border line.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setBorderWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setBorderWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distances, in twips, between the text frame's border line and the text.
     * @param {Distances} value
     * @returns {Promise<void>}
     */
    setInternalMargins(value) {
        return RequestHelper.Promise(
            this._txInternal.setInternalMargins,
            value._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text frame's transparency.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setTransparency(value) {
        return RequestHelper.Promise(
            this._txInternal.setTransparency,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text frame's descriptive text. An empty string indicates that the text frame has no such text.
     * @returns {Promise<string>}
     */
    getDescriptiveText() {
        return RequestHelper.Promise(
            this._txInternal.getDescriptiveText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text frame's descriptive text. An empty string or null can be used to delete a previously set text.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setDescriptiveText(value) {
        return RequestHelper.Promise(
            this._txInternal.setDescriptiveText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

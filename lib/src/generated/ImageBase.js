import { FrameBase } from '../FrameBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Image.d.ts.
 */
export class ImageBase extends FrameBase {
    /** @returns {TXTextControlTypeDefinition.Image} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Image} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Image} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getHorizontalScaling', 'getVerticalScaling', 'setHorizontalScaling', 'setVerticalScaling');
    }

    /**
     * Gets an images's horizontal scaling factor in percent.
     * @returns {Promise<number>}
     */
    getHorizontalScaling() {
        return RequestHelper.Promise(
            this._txInternal.getHorizontalScaling,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an images's vertical scaling factor in percent.
     * @returns {Promise<number>}
     */
    getVerticalScaling() {
        return RequestHelper.Promise(
            this._txInternal.getVerticalScaling,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an images's horizontal scaling factor in percent.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setHorizontalScaling(value) {
        return RequestHelper.Promise(
            this._txInternal.setHorizontalScaling,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an images's vertical scaling factor in percent.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setVerticalScaling(value) {
        return RequestHelper.Promise(
            this._txInternal.setVerticalScaling,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

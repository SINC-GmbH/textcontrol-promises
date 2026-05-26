import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SignatureImage.d.ts.
 */
export class SignatureImageBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.SignatureImage} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SignatureImage} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SignatureImage} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getExportCompressionQuality', 'getExportMaxResolution', 'setExportCompressionQuality', 'setExportMaxResolution');
    }

    /**
     * Gets the images's export compression quality as a value between 1 and 100.
     * @returns {Promise<number>}
     */
    getExportCompressionQuality() {
        return RequestHelper.Promise(
            this._txInternal.getExportCompressionQuality,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an images's vertical scaling factor in percent.
     * @returns {Promise<number>}
     */
    getExportMaxResolution() {
        return RequestHelper.Promise(
            this._txInternal.getExportMaxResolution,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the images's export compression quality as a value between 1 and 100.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setExportCompressionQuality(value) {
        return RequestHelper.Promise(
            this._txInternal.setExportCompressionQuality,
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
    setExportMaxResolution(value) {
        return RequestHelper.Promise(
            this._txInternal.setExportMaxResolution,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/BarcodeTypeSettings.d.ts.
 */
export class BarcodeTypeSettingsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.BarcodeTypeSettings} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.BarcodeTypeSettings} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.BarcodeTypeSettings} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getHasCheckValue', 'getShowCheckValue', 'setHasCheckValue', 'setShowCheckValue');
    }

    /**
     * Gets a value indicating whether the currently used barcode type includes a check value.
     * @returns {Promise<boolean>}
     */
    getHasCheckValue() {
        return RequestHelper.Promise(
            this._txInternal.getHasCheckValue,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the check value of the currently used barcode type is shown with the encrypted barcode text value.
     * @returns {Promise<boolean>}
     */
    getShowCheckValue() {
        return RequestHelper.Promise(
            this._txInternal.getShowCheckValue,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the currently used barcode type includes a check value.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setHasCheckValue(value) {
        return RequestHelper.Promise(
            this._txInternal.setHasCheckValue,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets or sets a value indicating whether the check value of the currently used barcode type is shown with the encrypted barcode text value.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowCheckValue(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowCheckValue,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

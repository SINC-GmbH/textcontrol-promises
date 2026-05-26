import { FrameBase } from '../FrameBase.js';
import { Barcode } from '../Barcode.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/BarcodeFrame.d.ts.
 */
export class BarcodeFrameBase extends FrameBase {
    /** @returns {TXTextControlTypeDefinition.BarcodeFrame} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.BarcodeFrame} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.BarcodeFrame} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('refresh');
    }

    /**
     * Refreshes the barcode.
     * @returns {Promise<void>}
     */
    refresh() {
        return RequestHelper.Promise(
            this._txInternal.refresh,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * The barcode control associated with the barcode frame.
     * @type {Barcode}
     */
    get barcode() { return new Barcode(this._txInternal.barcode); }

    //#endregion
}

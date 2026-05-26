import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SignatureImageInfo.d.ts.
 */
export class SignatureImageInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.SignatureImageInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SignatureImageInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SignatureImageInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Maximum resolution.
     * @type {number}
     */
    get exportMaxResolution() { return this._txInternal.exportMaxResolution; }

    /**
     * compression quality.
     * @type {number}
     */
    get exportCompressionQuality() { return this._txInternal.exportCompressionQuality; }

    //#endregion
}

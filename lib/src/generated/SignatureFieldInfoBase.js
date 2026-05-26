import { FrameInfo } from '../FrameInfo.js';
import { SignatureImageInfo } from '../SignatureImageInfo.js';
import { SignerData } from '../SignerData.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SignatureFieldInfo.d.ts.
 */
export class SignatureFieldInfoBase extends FrameInfo {
    /** @returns {TXTextControlTypeDefinition.SignatureFieldInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SignatureFieldInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SignatureFieldInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The signer data.
     * @type {SignerData}
     */
    get signerData() { return new SignerData(this._txInternal.signerData); }

    /**
     * Information about the signature image.
     * @type {SignatureImageInfo}
     */
    get image() { return new SignatureImageInfo(this._txInternal.image); }

    //#endregion
}

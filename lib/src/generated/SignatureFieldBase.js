import { FrameBase } from '../FrameBase.js';
import { SignatureImage } from '../SignatureImage.js';
import { SignerData } from '../SignerData.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SignatureField.d.ts.
 */
export class SignatureFieldBase extends FrameBase {
    /** @returns {TXTextControlTypeDefinition.SignatureField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SignatureField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SignatureField} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getSignerData', 'setImage', 'setSignerData');
    }

    /**
     * Gets the signer data of the signature field.
     * @returns {Promise<SignerData>}
     */
    async getSignerData() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getSignerData,
            CallbackType.RequestSignerDataCallback,
            CallbackType.ErrorCallback
        );
        return tx && new SignerData(tx);
    }

    /**
     * Sets the signature field's image.
     * @param {string} imageData The base64 encoded image data.
     * @returns {Promise<void>}
     */
    setImage(imageData) {
        return RequestHelper.Promise(
            this._txInternal.setImage,
            imageData,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the signer data of the signature field.
     * @param {SignerData} value
     * @returns {Promise<void>}
     */
    setSignerData(value) {
        return RequestHelper.Promise(
            this._txInternal.setSignerData,
            value._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * The signature field's image.
     * @type {SignatureImage}
     */
    get image() { return new SignatureImage(this._txInternal.image); }

    //#endregion
}

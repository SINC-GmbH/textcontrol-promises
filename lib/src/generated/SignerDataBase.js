import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SignerData.d.ts.
 */
export class SignerDataBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.SignerData} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SignerData} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SignerData} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The address of a suggested signer.
     * @type {string}
     */
    get address() { return this._txInternal.address; }

    /**
     * The contact information of a suggested signer, such as a phone number.
     * @type {string}
     */
    get contactInfo() { return this._txInternal.contactInfo; }

    /**
     * The name of a suggested signer.
     * @type {string}
     */
    get name() { return this._txInternal.name; }

    /**
     * A reason why the document is signed.
     * @type {string}
     */
    get reason() { return this._txInternal.reason; }

    /**
     * The title of a suggested signer.
     * @type {string}
     */
    get title() { return this._txInternal.title; }

    //#endregion
}

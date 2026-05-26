import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/HyperLinkInfo.d.ts.
 */
export class HyperLinkInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.HyperLinkInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.HyperLinkInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.HyperLinkInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The link target.
     * @type {string}
     */
    get target() { return this._txInternal.target; }

    //#endregion
}

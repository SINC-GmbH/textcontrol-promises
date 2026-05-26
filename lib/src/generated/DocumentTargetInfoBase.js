import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DocumentTargetInfo.d.ts.
 */
export class DocumentTargetInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.DocumentTargetInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DocumentTargetInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DocumentTargetInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The name of the document target.
     * @type {string}
     */
    get targetName() { return this._txInternal.targetName; }

    //#endregion
}

import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/NextField.d.ts.
 */
export class NextFieldBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.NextField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.NextField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.NextField} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Specifies whether the field's formatting should be preserved.
     * @type {boolean}
     */
    get preserveFormatting() { return this._txInternal.preserveFormatting; }

    //#endregion
}

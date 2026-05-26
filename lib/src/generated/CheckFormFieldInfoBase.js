import { TextFieldInfo } from '../TextFieldInfo.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/CheckFormFieldInfo.d.ts.
 */
export class CheckFormFieldInfoBase extends TextFieldInfo {
    /** @returns {TXTextControlTypeDefinition.CheckFormFieldInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.CheckFormFieldInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.CheckFormFieldInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The checked state of the check box.
     * @type {boolean}
     */
    get checked() { return this._txInternal.checked; }

    //#endregion
}

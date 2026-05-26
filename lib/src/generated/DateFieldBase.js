import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DateField.d.ts.
 */
export class DateFieldBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.DateField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DateField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DateField} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Specifies the format of the field. It must be a standard DateTime format string of the .NET Framework.
     * @type {string}
     */
    get format() { return this._txInternal.format; }

    /**
     * Specifies whether the field's formatting should be preserved.
     * @type {boolean}
     */
    get preserveFormatting() { return this._txInternal.preserveFormatting; }

    //#endregion
}

import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/MergeField.d.ts.
 */
export class MergeFieldBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.MergeField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.MergeField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.MergeField} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Specifies a string format which is applied to date / time values. Is equivalent to the MS Word field flag "\​
     * @type {string}
     */
    get dateTimeFormat() { return this._txInternal.dateTimeFormat; }

    /**
     * Specifies the name of the field.
     * @type {string}
     */
    get name() { return this._txInternal.name; }

    /**
     * Specifies a string format which is applied to numeric values. Is equivalent to the MS Word field flag "\#".
     * @type {string}
     */
    get numericFormat() { return this._txInternal.numericFormat; }

    /**
     * Specifies whether the field's formatting should be preserved.
     * @type {boolean}
     */
    get preserveFormatting() { return this._txInternal.preserveFormatting; }

    /**
     * Specifies the text of the field.
     * @type {string}
     */
    get text() { return this._txInternal.text; }

    /**
     * Specifies the text of the field that is displayed after the field's text.
     * @type {string}
     */
    get textAfter() { return this._txInternal.textAfter; }

    /**
     * Specifies the text of the field that is displayed before the field's text.
     * @type {string}
     */
    get textBefore() { return this._txInternal.textBefore; }

    /**
     * Specifies the text format of the field.
     * @type {TXTextControlTypeDefinition.MergeFieldTextFormat}
     */
    get textFormat() { return this._txInternal.textFormat; }

    //#endregion
}

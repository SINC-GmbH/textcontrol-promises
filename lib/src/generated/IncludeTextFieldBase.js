import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/IncludeTextField.d.ts.
 */
export class IncludeTextFieldBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.IncludeTextField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.IncludeTextField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.IncludeTextField} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Specifies the bookmark switch of the field.
     * @type {string}
     */
    get bookmark() { return this._txInternal.bookmark; }

    /**
     * Specifies the file name of the document that should be inserted.
     * @type {string}
     */
    get fileName() { return this._txInternal.fileName; }

    /**
     * Specifies whether the field's formatting should be preserved.
     * @type {boolean}
     */
    get preserveFormatting() { return this._txInternal.preserveFormatting; }

    /**
     * Specifies the initial text of the field. Let this property be null to use the default text "INCLUDETEXT".
     * @type {string}
     */
    get text() { return this._txInternal.text; }

    /**
     * Specifies the text format of the field.
     * @type {TXTextControlTypeDefinition.MergeFieldTextFormat}
     */
    get textFormat() { return this._txInternal.textFormat; }

    //#endregion
}

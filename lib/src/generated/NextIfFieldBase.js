import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/NextIfField.d.ts.
 */
export class NextIfFieldBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.NextIfField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.NextIfField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.NextIfField} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Specifies the first expression text that should be compared. This property must be a valid field name.
     * @type {string}
     */
    get expression1() { return this._txInternal.expression1; }

    /**
     * Specifies the second expression text that should be compared to Expression1.
     * @type {string}
     */
    get expression2() { return this._txInternal.expression2; }

    /**
     * Specifies the comparison operator.
     * @type {TXTextControlTypeDefinition.RelationalOperator}
     */
    get operator() { return this._txInternal.operator; }

    /**
     * Specifies whether the field's formatting should be preserved.
     * @type {boolean}
     */
    get preserveFormatting() { return this._txInternal.preserveFormatting; }

    /**
     * Specifies the initial text of the field. Let this property be null to use the default text "NEXTIF".
     * @type {string}
     */
    get text() { return this._txInternal.text; }

    //#endregion
}

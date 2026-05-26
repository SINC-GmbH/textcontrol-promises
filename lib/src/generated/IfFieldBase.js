import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/IfField.d.ts.
 */
export class IfFieldBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.IfField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.IfField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.IfField} txObj */
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
     * Specifies the text that should be displayed when the comparison is false.
     * @type {string}
     */
    get falseText() { return this._txInternal.falseText; }

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
     * Specifies the initial text of the field. Let this property be null to use the default text "IF".
     * @type {string}
     */
    get text() { return this._txInternal.text; }

    /**
     * Specifies the text that should be displayed when the comparison is true.
     * @type {string}
     */
    get trueText() { return this._txInternal.trueText; }

    //#endregion
}

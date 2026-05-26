import { ObjectBase } from '../ObjectBase.js';
import { Selection } from '../Selection.js';
import { SubTextPartInfo } from '../SubTextPartInfo.js';
import { TextField } from '../TextField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextPart.d.ts.
 */
export class TextPartBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TextPart} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextPart} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TextPart} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('removeSubTextPart');
    }

    /**
     * @deprecated
     * @param {(adddResult: TXTextControlTypeDefinition.AddResult) => void} callback
     * @param {SubTextPartInfo} subTextPart
     */
    addSubTextPart(callback, subTextPart) {
        return this._txInternal.addSubTextPart(callback, subTextPart._txInternal);
    }

    /**
     * @deprecated
     * @param {TextField} textField
     */
    addTextField(textField) {
        return this._txInternal.addTextField(textField._txInternal);
    }

    /**
     * @deprecated
     * @param {(subtextparts: any[]) => void} callback
     * @param {boolean} atInputPosition
     */
    getSubTextParts(callback, atInputPosition) {
        return this._txInternal.getSubTextParts(callback, atInputPosition);
    }

    /**
     * @deprecated
     * @param {(textfields: TXTextControlTypeDefinition.TextField[]) => void} callback
     * @param {boolean} atInputPosition
     */
    getTextFields(callback, atInputPosition) {
        return this._txInternal.getTextFields(callback, atInputPosition);
    }

    /**
     * @deprecated
     * @param {boolean} keepText
     * @param {boolean} keepNested
     * @param {SubTextPartInfo} subTextPart
     * @returns {Promise<boolean>}
     */
    removeSubTextPart(keepText, keepNested, subTextPart) {
        return RequestHelper.Promise(
            this._txInternal.removeSubTextPart,
            CallbackType.RequestBooleanCallback,
            keepText,
            keepNested,
            subTextPart._txInternal
        );
    }
    //#region properties

    /**
     * @deprecated
     * @type {number}
     */
    get index() { return this._txInternal.index; }

    /**
     * @deprecated
     * @type {Selection}
     */
    get selection() { return new Selection(this._txInternal.selection); }

    /**
     * @deprecated
     * @type {string}
     */
    get type() { return this._txInternal.type; }

    //#endregion
}

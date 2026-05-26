import { TextFieldInfo } from '../TextFieldInfo.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DateFormFieldInfo.d.ts.
 */
export class DateFormFieldInfoBase extends TextFieldInfo {
    /** @returns {TXTextControlTypeDefinition.DateFormFieldInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DateFormFieldInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DateFormFieldInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The date as a Unix time stamp in milliseconds.
     * @type {number}
     */
    get date() { return this._txInternal.date; }

    /**
     * The date format.
     * @type {string}
     */
    get dateFormat() { return this._txInternal.dateFormat; }

    /**
     * The horizontal width of the empty field in twips.
     * @type {number}
     */
    get emptyWidth() { return this._txInternal.emptyWidth; }

    //#endregion
}

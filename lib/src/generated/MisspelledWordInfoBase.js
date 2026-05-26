import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/MisspelledWordInfo.d.ts.
 */
export class MisspelledWordInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.MisspelledWordInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.MisspelledWordInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.MisspelledWordInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * A value which marks the misspelled word as duplicate.
     * @type {boolean}
     */
    get isDuplicate() { return this._txInternal.isDuplicate; }

    /**
     * A value which marks the misspelled word as ignored.
     * @type {boolean}
     */
    get isIgnored() { return this._txInternal.isIgnored; }

    /**
     * The length of the misspelled word.
     * @type {number}
     */
    get length() { return this._txInternal.length; }

    /**
     * The number of the misspelled word.
     * @type {number}
     */
    get number() { return this._txInternal.number; }

    /**
     * The starting position of the misspelled word.
     * @type {number}
     */
    get start() { return this._txInternal.start; }

    /**
     * The text of the misspelled word.
     * @type {string}
     */
    get text() { return this._txInternal.text; }

    //#endregion
}

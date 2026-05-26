import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DictionaryInfo.d.ts.
 */
export class DictionaryInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.DictionaryInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DictionaryInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DictionaryInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The dictionary file name.
     * @type {string}
     */
    get fileName() { return this._txInternal.fileName; }

    /**
     * Indicates whether the dictionary is currently loaded.
     * @type {boolean}
     */
    get isLoaded() { return this._txInternal.isLoaded; }

    //#endregion
}

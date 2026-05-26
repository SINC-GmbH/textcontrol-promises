import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/UserDictionaryInfo.d.ts.
 */
export class UserDictionaryInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.UserDictionaryInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.UserDictionaryInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.UserDictionaryInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * Indicates whether the user dictionary is editable or not.
     * @type {boolean}
     */
    get isEditable() { return this._txInternal.isEditable; }

    /**
     * Indicates whether suggestions are created using this dictionary or not.
     * @type {boolean}
     */
    get isGetSuggestionsEnabled() { return this._txInternal.isGetSuggestionsEnabled; }

    /**
     * Indicates whether the dictionary is selected as the default dictionary by the Language property.
     * @type {boolean}
     */
    get isSelectAsDefault() { return this._txInternal.isSelectAsDefault; }

    /**
     * Indicates whether spell checking of this dictionary is enabled or not.
     * @type {boolean}
     */
    get isSpellCheckingEnabled() { return this._txInternal.isSpellCheckingEnabled; }

    /**
     * The user dictionary's language in the format languagecode2-country/regioncode2.
     * @type {string}
     */
    get language() { return this._txInternal.language; }

    /**
     * The number of words the user dictionary contains.
     * @type {number}
     */
    get length() { return this._txInternal.length; }

    /**
     * The user dictionary's name.
     * @type {string}
     */
    get name() { return this._txInternal.name; }

    //#endregion
}

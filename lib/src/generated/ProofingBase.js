import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Proofing.d.ts.
 */
export class ProofingBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Proofing} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Proofing} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Proofing} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getDictionaryList', 'getUserDictionaryInfo', 'saveUserDictionary');
    }

    /**
     * Adds a word to an existing user dictionary.
     * @param {string} name The name of the user dictionary.
     * @param {string[]} words An array of words to add to the user dictionary.
     */
    addWordToUserDictionary(name, words) {
        return this._txInternal.addWordToUserDictionary(name, words);
    }

    /**
     * Retrieves a list of the names of all dictionary files on the server.
     * @returns {Promise<TXTextControlTypeDefinition.DictionaryInfo[]>}
     */
    getDictionaryList() {
        return RequestHelper.Promise(
            this._txInternal.getDictionaryList,
            CallbackType.GetDictionaryListCallback
        );
    }

    /**
     * Retrieves information about all currently existing user dictionaries via a callback function.
     * @returns {Promise<TXTextControlTypeDefinition.UserDictionaryInfo[]>}
     */
    getUserDictionaryInfo() {
        return RequestHelper.Promise(
            this._txInternal.getUserDictionaryInfo,
            CallbackType.GetUserDictionaryInfoCallback
        );
    }

    /**
     * Loads a dictionary.
     * @param {string} fileName
     */
    loadDictionary(fileName) {
        return this._txInternal.loadDictionary(fileName);
    }

    /**
     * Loads a list of words given as a string array as a user dictionary.
     * @param {string} name The name of the user dictionary.
     * @param {string[]} words An array of words to add to the user dictionary.
     * @param {string} language The user dictionary's language in the format languagecode2-country/regioncode2. (e. g. "en-US" or "de-DE")
     */
    loadUserDictionary(name, words, language) {
        return this._txInternal.loadUserDictionary(name, words, language);
    }

    /**
     * Removes a dictionary from the loaded dictionaries.
     * @param {string} fileName
     */
    removeDictionary(fileName) {
        return this._txInternal.removeDictionary(fileName);
    }

    /**
     * Removes an existing user dictionary.
     * @param {string} name
     */
    removeUserDictionary(name) {
        return this._txInternal.removeUserDictionary(name);
    }

    /**
     * Removes a word from an existing user dictionary.
     * @param {string} name
     * @param {string[]} words
     */
    removeWordFromUserDictionary(name, words) {
        return this._txInternal.removeWordFromUserDictionary(name, words);
    }

    /**
     * Saves an existing user dictionary by supplying the contained words as a string array to a callback function.
     * @param {string} name
     * @returns {Promise<{ name: string; words: string[] }>}
     */
    saveUserDictionary(name) {
        return RequestHelper.Promise(
            this._txInternal.saveUserDictionary,
            name,
            CallbackType.SaveUserDictionaryCallback
        );
    }}

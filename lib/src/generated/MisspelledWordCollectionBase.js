import { Collection } from '../Collection.js';
import { MisspelledWord } from '../MisspelledWord.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<MisspelledWord>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/MisspelledWordCollection.d.ts.
 */
export class MisspelledWordCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.MisspelledWordCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.MisspelledWordCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.MisspelledWordCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new MisspelledWord(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('getCountOf', 'getItemAtInputPosition', 'getItemAtLocation', 'getItemAtTextPosition', 'ignore', 'remove');
    }

    /**
     * Gets the number of misspelled words with a special meaning from the collection.
     * @param {TXTextControlTypeDefinition.MisspelledWordKind} kind
     * @returns {Promise<number>}
     */
    getCountOf(kind) {
        return RequestHelper.Promise(
            this._txInternal.getCountOf,
            kind,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the misspelled word of the specified kind at the current text input position.
     * @param {TXTextControlTypeDefinition.MisspelledWordKind} kind
     * @returns {Promise<MisspelledWord>}
     */
    async getItemAtInputPosition(kind) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemAtInputPosition, kind, CallbackType.RequestMisspelledWordCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the misspelled word at a certain geometrical location.
     * @param {number} x
     * @param {number} y
     * @returns {Promise<MisspelledWord>}
     */
    async getItemAtLocation(x, y) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemAtLocation, x, y, CallbackType.RequestMisspelledWordCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the misspelled word of the specified kind at the specified text input position.
     * @param {number} textPosition
     * @param {TXTextControlTypeDefinition.MisspelledWordKind} kind
     * @returns {Promise<MisspelledWord>}
     */
    async getItemAtTextPosition(textPosition, kind) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemAtTextPosition, textPosition, kind, CallbackType.RequestMisspelledWordCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Changes the text of the specified misspelled word and marks it as ignored. Ignored misspelled words are not underlined with a red zigzag line.
     * @param {MisspelledWord} misspelledWord Specifies the misspelled word to change.
     * @param {string} changedText Specifies the changed text. The current text of the word is replaced with this text.
     * @returns {Promise<boolean>}
     */
    ignore(misspelledWord, changedText) {
        return RequestHelper.Promise(
            this._txInternal.ignore,
            misspelledWord._txInternal,
            changedText,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Removes the specified misspelled word from a Text Control document. The method removes the word's reference in the list of misspelled words and replaces the word's text with the specified text.
     * @param {MisspelledWord} misspelledWord Specifies the misspelled word to remove.
     * @param {string} correctedText Specifies the corrected text. The current text of the word is replaced with this text.
     * @returns {Promise<boolean>}
     */
    remove(misspelledWord, correctedText) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            misspelledWord._txInternal,
            correctedText,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/MisspelledWord.d.ts.
 */
export class MisspelledWordBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.MisspelledWord} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.MisspelledWord} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.MisspelledWord} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getIsDuplicate', 'getIsIgnored', 'getLength', 'getNumber', 'getStart', 'getText', 'select', 'setIsDuplicate', 'setIsIgnored');
    }

    /**
     * Gets a value which marks the misspelled word as duplicate.
     * @returns {Promise<boolean>}
     */
    getIsDuplicate() {
        return RequestHelper.Promise(
            this._txInternal.getIsDuplicate,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value which marks the misspelled word as ignored.
     * @returns {Promise<boolean>}
     */
    getIsIgnored() {
        return RequestHelper.Promise(
            this._txInternal.getIsIgnored,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the length of a misspelled word.
     * @returns {Promise<number>}
     */
    getLength() {
        return RequestHelper.Promise(
            this._txInternal.getLength,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of this misspelled word.
     * @returns {Promise<number>}
     */
    getNumber() {
        return RequestHelper.Promise(
            this._txInternal.getNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the starting position of a misspelled word.
     * @returns {Promise<number>}
     */
    getStart() {
        return RequestHelper.Promise(
            this._txInternal.getStart,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text of the misspelled word.
     * @returns {Promise<string>}
     */
    getText() {
        return RequestHelper.Promise(
            this._txInternal.getText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects the misspelled word in the text.
     * @returns {Promise<void>}
     */
    select() {
        return RequestHelper.Promise(
            this._txInternal.select,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value which marks the misspelled word as duplicate.
     * @param {boolean} isDuplicate
     * @returns {Promise<void>}
     */
    setIsDuplicate(isDuplicate) {
        return RequestHelper.Promise(
            this._txInternal.setIsDuplicate,
            isDuplicate,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value which marks the misspelled word as ignored.
     * @param {boolean} isIgnored
     * @returns {Promise<void>}
     */
    setIsIgnored(isIgnored) {
        return RequestHelper.Promise(
            this._txInternal.setIsIgnored,
            isIgnored,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

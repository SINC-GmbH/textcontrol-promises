import { Collection } from '../Collection.js';
import { TextPart } from '../TextPart.js';
import { FormattedText } from '../FormattedText.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<TextPart>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextPartCollection.d.ts.
 */
export class TextPartCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TextPartCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextPartCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TextPartCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new TextPart(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('activate', 'getItem', 'getMainText');
    }

    /**
     * Sets the input focus to the specified text part.
     * @param {FormattedText} formattedText
     * @returns {Promise<boolean>}
     */
    activate(formattedText) {
        return RequestHelper.Promise(
            this._txInternal.activate,
            formattedText._txInternal,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text part with the input focus.
     * @returns {Promise<TextPart>}
     */
    async getItem() {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestTextPartCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the main text part of the document.
     * @returns {Promise<TextPart>}
     */
    async getMainText() {
        const tx = await RequestHelper.Promise(this._txInternal.getMainText, CallbackType.RequestTextPartCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }
}

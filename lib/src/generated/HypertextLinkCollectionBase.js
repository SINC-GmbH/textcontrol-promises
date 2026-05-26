import { Collection } from '../Collection.js';
import { HypertextLink } from '../HypertextLink.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<HypertextLink>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/HypertextLinkCollection.d.ts.
 */
export class HypertextLinkCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.HypertextLinkCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.HypertextLinkCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.HypertextLinkCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new HypertextLink(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'getItem', 'remove');
    }

    /**
     * Inserts a new hypertext link at the current input position.
     * @param {string} text
     * @param {string} target
     * @returns {Promise<HypertextLink>}
     */
    async add(text, target) {
        const tx = await RequestHelper.Promise(this._txInternal.add, text, target, CallbackType.RequestHypertextLinkCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the hypertext link with the specified id.
     * @param {number} [id]
     * @returns {Promise<HypertextLink>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestHypertextLinkCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes a hypertext link from a Text Control document.
     * @param {HypertextLink} HypertextLink
     * @param {boolean} keepText
     * @returns {Promise<boolean>}
     */
    remove(HypertextLink, keepText) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            HypertextLink?._txInternal,
            keepText,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

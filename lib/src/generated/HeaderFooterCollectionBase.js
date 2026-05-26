import { Collection } from '../Collection.js';
import { HeaderFooter } from '../HeaderFooter.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<HeaderFooter>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/HeaderFooterCollection.d.ts.
 */
export class HeaderFooterCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.HeaderFooterCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.HeaderFooterCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.HeaderFooterCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new HeaderFooter(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'getItem', 'remove');
    }

    /**
     * Adds a new header or footer to a document or to a certain section of the document.
     * @param {TXTextControlTypeDefinition.HeaderFooterType} headerFooterType
     * @returns {Promise<boolean>}
     */
    add(headerFooterType) {
        return RequestHelper.Promise(
            this._txInternal.add,
            headerFooterType,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a particular header or footer from the collection.
     * @param {TXTextControlTypeDefinition.HeaderFooterType} headerFooterType
     * @returns {Promise<HeaderFooter>}
     */
    async getItem(headerFooterType) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, headerFooterType, CallbackType.RequestHeaderFooterCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes a header or footer from the document or from a certain section.
     * @param {TXTextControlTypeDefinition.HeaderFooterType} headerFooterType
     * @returns {Promise<boolean>}
     */
    remove(headerFooterType) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            headerFooterType,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

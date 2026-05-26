import { Collection } from '../Collection.js';
import { Page } from '../Page.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<Page>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/PageCollection.d.ts.
 */
export class PageCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.PageCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.PageCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.PageCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new Page(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('getItem', 'getItemAtTextPosition');
    }

    /**
     * Gets the Page containing the current text input position from the collection.
     * @returns {Promise<Page>}
     */
    async getItem() {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestPageCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the page at a certain text input position.
     * @param {number} textPosition
     * @returns {Promise<Page>}
     */
    async getItemAtTextPosition(textPosition) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemAtTextPosition, textPosition, CallbackType.RequestPageCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }
}

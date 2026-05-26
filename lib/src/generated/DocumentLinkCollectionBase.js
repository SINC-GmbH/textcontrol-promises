import { Collection } from '../Collection.js';
import { DocumentLink } from '../DocumentLink.js';
import { DocumentTarget } from '../DocumentTarget.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<DocumentLink>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DocumentLinkCollection.d.ts.
 */
export class DocumentLinkCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.DocumentLinkCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DocumentLinkCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.DocumentLinkCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new DocumentLink(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'clear', 'getItem', 'remove');
    }

    /**
     * Inserts a new document link at the current input position.
     * @param {string} text
     * @param {DocumentTarget} documentTarget
     * @returns {Promise<DocumentLink>}
     */
    async add(text, documentTarget) {
        const tx = await RequestHelper.Promise(this._txInternal.add, text, documentTarget._txInternal, CallbackType.RequestDocumentLinkCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes all document links from the collection.
     * @param {boolean} keepText
     * @returns {Promise<void>}
     */
    clear(keepText) {
        return RequestHelper.Promise(
            this._txInternal.clear,
            keepText,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the document link at the current text input position or the document link with the specified id.
     * @param {number} id
     * @returns {Promise<DocumentLink>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestDocumentLinkCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * @param {DocumentLink} documentLink
     * @returns {Promise<boolean>}
     */
    remove(documentLink) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            documentLink._txInternal,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

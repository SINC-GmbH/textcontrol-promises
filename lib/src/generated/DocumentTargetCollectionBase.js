import { Collection } from '../Collection.js';
import { DocumentTarget } from '../DocumentTarget.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<DocumentTarget>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DocumentTargetCollection.d.ts.
 */
export class DocumentTargetCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.DocumentTargetCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DocumentTargetCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.DocumentTargetCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new DocumentTarget(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'clear', 'getCanAdd', 'getItem', 'remove');
    }

    /**
     * Adds a new document target to the collection.
     * @param {string} targetName
     * @returns {Promise<DocumentTarget>}
     */
    async add(targetName) {
        const tx = await RequestHelper.Promise(this._txInternal.add, targetName, CallbackType.RequestDocumentTargetCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes all document targets from the collection.
     * @returns {Promise<DocumentTarget>}
     */
    async clear() {
        const tx = await RequestHelper.Promise(this._txInternal.clear, CallbackType.RequestDocumentTargetCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets a value indicating whether a new document target can be inserted at the current input position.
     * @returns {Promise<boolean>}
     */
    getCanAdd() {
        return RequestHelper.Promise(
            this._txInternal.getCanAdd,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the document target at the current text input position or the document target with the specified id.
     * @param {number} [nameOrId]
     * @returns {Promise<DocumentTarget>}
     */
    async getItem(nameOrId) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestDocumentTargetCallback, CallbackType.ErrorCallback, nameOrId);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes the target from the collection.
     * @param {DocumentTarget} documentTarget
     * @returns {Promise<void>}
     */
    remove(documentTarget) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            documentTarget?._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

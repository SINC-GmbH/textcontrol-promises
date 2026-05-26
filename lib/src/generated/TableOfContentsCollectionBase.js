import { Collection } from '../Collection.js';
import { TableOfContents } from '../TableOfContents.js';
import { TableOfContentsCollectionAddParams } from '../TableOfContentsCollectionAddParams.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<TableOfContents>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableOfContentsCollection.d.ts.
 */
export class TableOfContentsCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TableOfContentsCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableOfContentsCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TableOfContentsCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new TableOfContents(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'getItem', 'getItemByName', 'remove');
    }

    /**
     * Adds a new table of contents to the document at the current text input position.
     * @param {TableOfContentsCollectionAddParams} [parameters]
     * @returns {Promise<TableOfContents>}
     */
    async add(parameters) {
        const tx = await RequestHelper.Promise(this._txInternal.add, parameters?._txInternal, CallbackType.RequestTableOfContentsCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the table of contents at the current input position or the table of contents with the specified identifier.
     * @param {number} [id]
     * @returns {Promise<TableOfContents>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestTableOfContentsCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the table of contents with the specified name.
     * @param {string} name
     * @returns {Promise<TableOfContents>}
     */
    async getItemByName(name) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemByName, CallbackType.RequestTableOfContentsCallback, CallbackType.ErrorCallback, name);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes a table of contents from the collection including all its text and including all DocumentTargets to where the table's links point.
     * @param {TableOfContents} element
     * @returns {Promise<void>}
     */
    remove(element) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            element?._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

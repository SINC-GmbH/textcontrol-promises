import { Collection } from '../Collection.js';
import { SubTextPart } from '../SubTextPart.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<SubTextPart>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SubTextPartCollection.d.ts.
 */
export class SubTextPartCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.SubTextPartCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SubTextPartCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.SubTextPartCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new SubTextPart(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'clear', 'getItem', 'remove');
    }

    /**
     * Adds a new SubTextPart to the collection.
     * @param {string} name Specifies the name of the subtextpart. This parameter can be null or an empty string to indicate, that the subtextpart has no name.
     * @param {number} id Specifies an identifier for the subtextpart. This parameter can be 0 to indicate, that the subtextpart has no identifier.
     * @param {number} start Specifies the index (one-based) of the first character which belongs to the subtextpart.
     * @param {number} length Specifies the number of characters which belong to the subtextpart.
     * @returns {Promise<TXTextControlTypeDefinition.SubTextPartCallbackData>}
     */
    add(name, id, start, length) {
        return RequestHelper.Promise(
            this._txInternal.add,
            name,
            id,
            start,
            length,
            CallbackType.AddSubTextPartCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Removes all subtextparts from a Text Control document.
     * @returns {Promise<void>}
     */
    clear() {
        return RequestHelper.Promise(
            this._txInternal.clear,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the subtextpart at the current text input position.
     * @returns {Promise<SubTextPart>}
     */
    async getItem() {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestSubTextPartCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes a subtextpart from the collection including all its nested subtextparts.
     * @param {SubTextPart} subTextPart
     * @param {boolean} keepText
     * @param {boolean} keepNested
     * @returns {Promise<boolean>}
     */
    remove(subTextPart, keepText, keepNested) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            subTextPart?._txInternal,
            keepText,
            keepNested,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

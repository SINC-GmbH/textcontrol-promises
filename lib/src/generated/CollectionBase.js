import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Collection.d.ts.
 */
export class CollectionBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Collection<unknown>} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Collection<unknown>} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Collection<unknown>} txCollection */
    constructor(txCollection) {
        super(txCollection);
        this._bindMethods('elementAt', 'forEach', 'getCount');
    }

    /**
     * Returns the element at a specified index in the collection.
     * @param {number} index
     * @returns {Promise<unknown>}
     */
    elementAt(index) {
        return RequestHelper.Promise(
            this._txInternal.elementAt,
            index,
            CallbackType.RequestObjectCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Executes a callback function for each element.
     * @param {TXTextControlTypeDefinition.ForEachCallback<unknown>} callback
     * @returns {Promise<void>}
     */
    forEach(callback) {
        return RequestHelper.Promise(
            this._txInternal.forEach,
            callback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of elements contained in the collection.
     * @returns {Promise<number>}
     */
    getCount() {
        return RequestHelper.Promise(
            this._txInternal.getCount,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }}

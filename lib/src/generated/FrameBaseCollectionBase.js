import { Collection } from '../Collection.js';
import { FrameBase } from '../FrameBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<FrameBase>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FrameBaseCollection.d.ts.
 */
export class FrameBaseCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.FrameBaseCollection<TXTextControlTypeDefinition.FrameBase>} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FrameBaseCollection<TXTextControlTypeDefinition.FrameBase>} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.FrameBaseCollection<TXTextControlTypeDefinition.FrameBase>} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new FrameBase(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('clear');
    }

    /**
     * Removes all objects from the collection and from the document.
     * @returns {Promise<void>}
     */
    clear() {
        return RequestHelper.Promise(
            this._txInternal.clear,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

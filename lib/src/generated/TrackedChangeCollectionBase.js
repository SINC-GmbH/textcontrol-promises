import { Collection } from '../Collection.js';
import { TrackedChange } from '../TrackedChange.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<TrackedChange>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TrackedChangeCollection.d.ts.
 */
export class TrackedChangeCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TrackedChangeCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TrackedChangeCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TrackedChangeCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new TrackedChange(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('getItem', 'remove');
    }

    /**
     * Gets the change at the current text input position or the next or the previous change in the textflow.
     * @param {boolean} next Optional. If this parameter is true, the next change in the textflow is returned. If this parameter is false, the previous change in the textflow is returned. The next or the previous change is returned independent whether there is a change at the current text input position.
     * @returns {Promise<TrackedChange>}
     */
    async getItem(next) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestTrackedChangeCallback, next, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes a tracked change from the collection.
     * @param {TrackedChange} trackedChange The removing tracked change.
     * @param {boolean} accept Specifies wether the change is either accepted or rejected. When a change is rejected, inserted text is removed and deleted text is reinserted.
     * @returns {Promise<boolean>}
     */
    remove(trackedChange, accept) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            trackedChange._txInternal,
            accept,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

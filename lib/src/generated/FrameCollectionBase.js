import { FrameBaseCollection } from '../FrameBaseCollection.js';
// TODO: create lib/src/Frame.js — item wrapper not found
import { FrameBase } from '../FrameBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {FrameBaseCollection}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FrameCollection.d.ts.
 */
export class FrameCollectionBase extends FrameBaseCollection {
    /** @returns {TXTextControlTypeDefinition.FrameCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FrameCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.FrameCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => tx /* TODO: wrap with Frame */);
        this._bindMethods('getItem', 'getItemByName', 'remove');
    }

    /**
     * Gets the frame selected by the user or the frame with the specified identifier.
     * @param {number} id
     * @returns {Promise<FrameBase>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(
            this._txInternal.getItem,
            CallbackType.RequestFrameBaseCallback,
            CallbackType.ErrorCallback,
            id
        );
        return tx && new FrameBase(tx);
    }

    /**
     * Gets the frame with the specified name.
     * @param {string} name
     * @returns {Promise<FrameBase>}
     */
    async getItemByName(name) {
        const tx = await RequestHelper.Promise(
            this._txInternal.getItemByName,
            CallbackType.RequestFrameBaseCallback,
            CallbackType.ErrorCallback,
            name
        );
        return tx && new FrameBase(tx);
    }

    /**
     * Removes a frame from a Text Control document.
     * @param {FrameBase} frame
     * @returns {Promise<void>}
     */
    remove(frame) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            frame._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

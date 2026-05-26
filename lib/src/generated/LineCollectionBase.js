import { Collection } from '../Collection.js';
import { Line } from '../Line.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<Line>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/LineCollection.d.ts.
 */
export class LineCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.LineCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.LineCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.LineCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new Line(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('getItemAtLocation', 'getItem');
    }

    /**
     * Gets a particular line from the collection.
     * @param {number} x
     * @param {number} y
     * @returns {Promise<Line>}
     */
    async getItemAtLocation(x, y) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemAtLocation, x, y, CallbackType.RequestLineCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the line at a certain geometrical position.
     * @param {number} textPosition
     * @returns {Promise<Line>}
     */
    async getItem(textPosition) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestLineCallback, textPosition, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }
}

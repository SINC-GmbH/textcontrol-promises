import { Collection } from '../Collection.js';
import { Paragraph } from '../Paragraph.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<Paragraph>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ParagraphCollection.d.ts.
 */
export class ParagraphCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.ParagraphCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ParagraphCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.ParagraphCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new Paragraph(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('getItem', 'getItemAtLocation');
    }

    /**
     * Gets the Paragraph at a certain geometrical position.
     * @param {number} textPosition
     * @returns {Promise<Paragraph>}
     */
    async getItem(textPosition) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, textPosition, CallbackType.RequestParagraphCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets a particular Paragraph from the collection.
     * @param {number} x
     * @param {number} y
     * @returns {Promise<Paragraph>}
     */
    async getItemAtLocation(x, y) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemAtLocation, x, y, CallbackType.RequestParagraphCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }
}

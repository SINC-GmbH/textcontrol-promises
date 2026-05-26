import { FormattingStyleCollection } from '../FormattingStyleCollection.js';
import { ParagraphStyle } from '../ParagraphStyle.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {FormattingStyleCollection}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ParagraphStyleCollection.d.ts.
 */
export class ParagraphStyleCollectionBase extends FormattingStyleCollection {
    /** @returns {TXTextControlTypeDefinition.ParagraphStyleCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ParagraphStyleCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.ParagraphStyleCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => new ParagraphStyle(tx));
        this._bindMethods('add', 'getItem');
    }

    /**
     * Gets a style from the collection by the style's name.
     * @param {string} styleName
     * @returns {Promise<ParagraphStyle>}
     */
    async add(styleName) {
        const tx = await RequestHelper.Promise(this._txInternal.add, styleName, CallbackType.RequestParagraphStyleCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Adds a new style to the current document.
     * @param {string} styleName
     * @returns {Promise<ParagraphStyle>}
     */
    async getItem(styleName) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, styleName, CallbackType.RequestParagraphStyleCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }
}

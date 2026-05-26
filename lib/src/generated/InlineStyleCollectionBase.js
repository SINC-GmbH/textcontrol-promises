import { FormattingStyleCollection } from '../FormattingStyleCollection.js';
import { InlineStyle } from '../InlineStyle.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {FormattingStyleCollection}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/InlineStyleCollection.d.ts.
 */
export class InlineStyleCollectionBase extends FormattingStyleCollection {
    /** @returns {TXTextControlTypeDefinition.InlineStyleCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.InlineStyleCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.InlineStyleCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => new InlineStyle(tx));
        this._bindMethods('add', 'getItem');
    }

    /**
     * Adds a new style to the current document.
     * @param {string} styleName
     * @returns {Promise<InlineStyle>}
     */
    async add(styleName) {
        const tx = await RequestHelper.Promise(this._txInternal.add, styleName, CallbackType.RequestInlineStyleCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets a style from the collection by the style's name.
     * @param {string} styleName
     * @returns {Promise<InlineStyle>}
     */
    async getItem(styleName) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, styleName, CallbackType.RequestInlineStyleCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }
}

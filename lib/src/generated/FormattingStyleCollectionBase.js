import { Collection } from '../Collection.js';
import { FormattingStyle } from '../FormattingStyle.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<FormattingStyle>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FormattingStyleCollection.d.ts.
 */
export class FormattingStyleCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.FormattingStyleCollection<TXTextControlTypeDefinition.FormattingStyle>} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FormattingStyleCollection<TXTextControlTypeDefinition.FormattingStyle>} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.FormattingStyleCollection<TXTextControlTypeDefinition.FormattingStyle>} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new FormattingStyle(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('remove');
    }

    /**
     * Removes a formatting style from the collection.
     * @param {string} styleName
     * @returns {Promise<boolean>}
     */
    remove(styleName) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            styleName,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

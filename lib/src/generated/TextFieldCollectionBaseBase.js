import { Collection } from '../Collection.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<object>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextFieldCollectionBase.d.ts.
 */
export class TextFieldCollectionBaseBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TextFieldCollectionBase<TXTextControlTypeDefinition.TextField>} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextFieldCollectionBase<TXTextControlTypeDefinition.TextField>} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TextFieldCollectionBase<TXTextControlTypeDefinition.TextField>} txCollection
     * @param {function(*):*} wrapItem
     */
    constructor(txCollection, wrapItem) {
        super(txCollection, wrapItem);
        this._bindMethods('getCanAdd');
    }

    /**
     * Gets a value indicating whether a new text field can be inserted at the current input position.
     * @returns {Promise<boolean>}
     */
    getCanAdd() {
        return RequestHelper.Promise(
            this._txInternal.getCanAdd,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }}

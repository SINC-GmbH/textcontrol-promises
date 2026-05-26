import { Collection } from '../Collection.js';
import { EditableRegion } from '../EditableRegion.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<EditableRegion>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/EditableRegionCollection.d.ts.
 */
export class EditableRegionCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.EditableRegionCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.EditableRegionCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.EditableRegionCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new EditableRegion(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'getItems', 'remove');
    }

    /**
     * Adds a new editable region to the document. Its position is defined through the start and length parameters. If the editable region's length is zero, the current text selection is used to define the position.
     * @param {string} username
     * @param {number} id
     * @param {number} start
     * @param {number} length
     * @returns {Promise<TXTextControlTypeDefinition.EditableRegionCallbackData>}
     */
    add(username, id, start, length) {
        return RequestHelper.Promise(
            this._txInternal.add,
            username,
            id,
            start,
            length,
            CallbackType.AddEditableRegionCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets all editable regions at the current text input position. The callback returns null, if there is no region at the current input position.
     * @returns {Promise<TXTextControlTypeDefinition.EditableRegion[]>}
     */
    getItems() {
        return RequestHelper.Promise(
            this._txInternal.getItems,
            CallbackType.RequestEditableRegionsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Removes an editable region from the collection. The region's text is not removed.
     * @param {EditableRegion} editableRegion Specifies the editable region to remove.
     * @param {boolean} selectedPart Optional. When this parameter is true, only the selected part of the editable region is removed.
If the selection is in the middle od the region, it is split into two parts with the same parameters.
     * @returns {Promise<boolean>}
     */
    remove(editableRegion, selectedPart) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            editableRegion._txInternal,
            selectedPart,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

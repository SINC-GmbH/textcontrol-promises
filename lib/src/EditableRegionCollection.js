import { Collection } from "./Collection.js";
import { EditableRegion } from "./EditableRegion.js";
import { CallbackType, RequestHelper } from "./helper/index.js";

/**
 * @extends {Collection<EditableRegion>}
 */
export class EditableRegionCollection extends Collection {

    /**
     * Wrapper für TXTextControl.EditableRegionCollection
     * @param {any} txEditableRegionCollection
     */
    constructor(txEditableRegionCollection) {
        super(txEditableRegionCollection, (/** @type {EditableRegion} */ txEditableRegion) => new EditableRegion(txEditableRegion));
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this._txCollection.remove = this._txCollection.remove.bind(this._txCollection);
        this._txCollection.add = this._txCollection.add.bind(this._txCollection);
    }

    /**
     *  Removes an editable region from the collection
     * @param {EditableRegion} editableRegion
     * @param {boolean=} selectedPart
     * @returns {Promise<boolean>}
     */
    async remove(editableRegion, selectedPart) {
        return RequestHelper.Promise(this._txCollection.remove,
            editableRegion.txEditableRegion,
            selectedPart,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback);
    }

    /**
     * Adds a new editable region to the document
     * @param {string} username
     * @param {number} id
     * @param {number} start
     * @param {number} length
     * @returns {Promise<{response, addResult}>}
     */
    async add(username, id, start, length) {
        return RequestHelper.Promise(this._txCollection.add,
            username, id, start, length,
            CallbackType.AddEditableRegionCallback,
            CallbackType.ErrorCallback);
    }
}

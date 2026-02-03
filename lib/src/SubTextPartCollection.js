import { Collection } from "./Collection.js";
import { SubTextPart } from "./SubTextPart.js";
import { CallbackType, RequestHelper } from "./helper/index.js";

/**
 * @extends {Collection<SubTextPart>}
 */
export class SubTextPartCollection extends Collection  {
    /**
     * Wrapper für TXTextControl.SubTextPartCollection
     * @param {any} txSubTextPartCollection
     */
    constructor(txSubTextPartCollection) {
        super(txSubTextPartCollection, (/** @type {SubTextPart} */ txSubTextPart) => new SubTextPart(txSubTextPart));
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this._txCollection.add = this._txCollection.add.bind(this._txCollection);
        this._txCollection.getItem = this._txCollection.getItem.bind(this._txCollection);
    }

    /**
     * Adds a new SubTextPart to the collection
     * @param {string} name
     * @param {number} id
     * @param {number} start
     * @param {number} length
     * @returns {Promise<{response, addResult}>}
     */
    async add(name, id, start, length) {
        return RequestHelper.Promise(this._txCollection.add,
            name, id, start, length,
            CallbackType.AddSubTextPartCallback,
            CallbackType.ErrorCallback);
    }

    /**
     * Gets the SubTextPart at the current text input position
     * @returns {Promise<SubTextPart>}
     */
    async getItem() {
        let txSubTextPart = await RequestHelper.Promise(this._txCollection.getItem,
            CallbackType.RequestSubTextPartCallback,
            CallbackType.ErrorCallback);
        return txSubTextPart &&= new SubTextPart(txSubTextPart);
    }
}

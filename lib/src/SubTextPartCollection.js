import { SubTextPart } from "./SubTextPart.js";
import { CallbackType, RequestHelper } from "./helper/index.js";

export class SubTextPartCollection {

    /** @type {any} */
    #txSubTextPartCollection;

    /**
     * Wrapper für TXTextControl.SubTextPartCollection
     * @param {any} txSubTextPartCollection
     */
    constructor(txSubTextPartCollection) {
        this.#txSubTextPartCollection = txSubTextPartCollection;
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this.#txSubTextPartCollection.add = this.#txSubTextPartCollection.add.bind(this.#txSubTextPartCollection);
        this.#txSubTextPartCollection.getItem = this.#txSubTextPartCollection.getItem.bind(this.#txSubTextPartCollection);
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
        return RequestHelper.Promise(this.#txSubTextPartCollection.add,
            name, id, start, length,
            CallbackType.AddSubTextPartCallback,
            CallbackType.ErrorCallback);
    }

    /**
     * Gets the SubTextPart at the current text input position
     * @returns {Promise<SubTextPart>}
     */
    async getItem() {
        return RequestHelper.Promise(this.#txSubTextPartCollection.getItem,
            CallbackType.RequestSubTextPartCallback,
            CallbackType.ErrorCallback);
    }
}

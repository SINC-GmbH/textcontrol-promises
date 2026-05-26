import { CollectionBase } from './generated/CollectionBase.js';
import { CallbackType, RequestHelper } from "./helper/index.js";

/**
 * @classdesc generic representation of a collection
 * @template T
 */
export class Collection extends CollectionBase {
    /** @type {function(*):T} */
    #wrapItem;

    /**
     * Wrapper für TXTextControl.Collection
     * @param {any} txCollection
     * @param {function(*):T} wrapItem
     */
    constructor(txCollection, wrapItem) {
        super(txCollection);
        this.#wrapItem = wrapItem;
    }

    /** @protected @param {*} tx @returns {T} */
    _wrapItem(tx) { return this.#wrapItem(tx); }

    async *[Symbol.asyncIterator]() {
        var count = await this.getCount();
        for (let i = 0; i < count; i++) {
            let value = await this.elementAt(i);
            yield value;
        }
    }

    /**
     * iterates the collection in reverse
     * use in for await
     * @returns {AsyncGenerator<Awaited<T>, void, unknown>}
     */
    async *reverse() {
        var count = await this.getCount() - 1;
        for (let i = count; i > -1; i--) {
            let value = await this.elementAt(i);
            yield value;
        }
    }

    /**
     * Executes a callback function for each element
     * @public
     * @param {function(T, number, number ):void} forEachCallback
     * @returns {Promise<void>}
     * @deprecated may use "for await" instead forEachCallback
     */
    async forEach(forEachCallback) {
        return RequestHelper.Promise(this._txInternal.forEach,
            (/** @type {*} */item, /** @type {number} */ index, /** @type {number} */ itemCount) => { forEachCallback(this.#wrapItem(item), index, itemCount); },
            CallbackType.ErrorCallback);
    }

    // getCount() inherited from CollectionBase — no item wrapping needed

    /**
     * Returns the element at a specified index in the collection
     * @param {number} index
     * @returns {Promise<T>}
     */
    async elementAt(index) {
        const element = await super.elementAt(index);
        return this.#wrapItem(element);
    }
}

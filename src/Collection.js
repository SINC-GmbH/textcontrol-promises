import { CallbackType, RequestHelper } from "./helper/module";

/** 
 * @classdesc generic representation of a collection
 * @template T
 */
export class Collection {
    /** 
     * @protected
     * @type {any} 
     * 
    */
    _txCollection;

    /** @type {(txItem:T)=>T} */
    #wrapItem;

    /**
     * Wrapper für TXTextControl.Collection
     * @param {any} txCollection 
     * @param {(txItem:T)=>T} wrapItem
     */
    constructor(txCollection, wrapItem) {
        this._txCollection = txCollection;
        this.#wrapItem = wrapItem
        this.#bindCallbacks();
    }

    /**
     * binding callback functions
     */
    #bindCallbacks() {
        this._txCollection.forEach = this._txCollection.forEach.bind(this._txCollection);
        this._txCollection.getCount = this._txCollection.getCount.bind(this._txCollection);
        this._txCollection.elementAt = this._txCollection.elementAt.bind(this._txCollection);
    }

    async *[Symbol.asyncIterator]() {
        var count = await this.getCount();
        for (let i = 0; i < count; i++) {
            let value = await this.elementAt(i);
            yield value;
        }
    }

    /**
     * Executes a callback function for each element
     * @public
     * @param {( item: T, index: number, itemCount: number ) => void} forEachCallback 
     * @returns {Promise<void>}
     * @deprecated may use "for await" instead forEachCallback
     */
    async forEach(forEachCallback) {
        return RequestHelper.Promise(this._txCollection.forEach,
            (/** @type {any} */item,/** @type {number} */ index,/** @type {number} */ itemCount) => { forEachCallback(this.#wrapItem(item), index, itemCount); },
            CallbackType.ErrorCallback);
    }

    /**
     * Gets the number of elements contained in the collection
     * @returns {Promise<number>}
     */
    async getCount() {
        return RequestHelper.Promise(this._txCollection.getCount,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback);
    }

    /**
     * Returns the element at a specified index in the collection
     * @param {number} index
     * @returns {Promise<T>}
     */
    async elementAt(index) {
        let element = await RequestHelper.Promise(this._txCollection.elementAt,
            index,
            CallbackType.RequestObjectCallback,
            CallbackType.ErrorCallback);
        return this.#wrapItem(element);
    }
}
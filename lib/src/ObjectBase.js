/**
 * @classdesc Base class for all TX TextControl wrapper objects.
 * Stores the underlying TX API object and provides binding utilities.
 */
export class ObjectBase {
    /** @type {any} */
    #txInternalStorage;

    /** @type {Map<string, Promise<any>>} */
    #cache = new Map();

    /** @param {any} txObj */
    constructor(txObj) {
        this.#txInternalStorage = txObj;
    }

    /** @returns {any} */
    get _txInternal() { return this.#txInternalStorage; }

    /**
     * Binds the named TX API methods to their owner object.
     * @protected
     * @param {...string} names
     */
    _bindMethods(...names) {
        const obj = this.#txInternalStorage;
        for (const name of names) {
            if (typeof obj[name] === 'function') {
                obj[name] = obj[name].bind(obj);
            }
        }
    }

    /**
     * Returns a cached Promise for a given key, creating it on first access.
     * Stores the Promise itself so concurrent callers share one in-flight request.
     * @template T
     * @protected
     * @param {string} key
     * @param {function(): Promise<T>} factory
     * @returns {Promise<T>}
     */
    _cached(key, factory) {
        if (!this.#cache.has(key)) this.#cache.set(key, factory());
        return /** @type {Promise<T>} */(this.#cache.get(key));
    }

    /**
     * Drops one cached entry (or all entries when called without a key).
     * @protected
     * @param {string} [key]
     */
    _invalidateCache(key) {
        if (key === undefined) this.#cache.clear();
        else this.#cache.delete(key);
    }
}

import { RequestObjectCallback, ForEachCallback, RequestNumberCallback } from "../callbacks";

/** Provides methods for accessing collections. */
export interface Collection<T> {
    /** Returns the element at a specified index in the collection. */
    elementAt(index: number, callback: RequestObjectCallback<T>, errorCallback?: ErrorCallback): void;
    /** Executes a callback function for each element. */
    forEach(callback: ForEachCallback<T>, errorCallback?: ErrorCallback): void;
    /** Gets the number of elements contained in the collection. */
    getCount(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
}

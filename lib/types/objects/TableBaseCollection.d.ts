import { RequestTableCallback, RequestBooleanCallback } from '../callbacks';
import { Collection } from './Collection';
import { Table } from './Table';

/** The base class for table collections. */
export interface TableBaseCollection extends Collection<Table> {
    /** Gets the requested table or null if there is no table at the current input position or with the requested id */
    getItem(callback: RequestTableCallback, errorCallback?: ErrorCallback, id?: number): void;
    /** Removes the table at the current input position. */
    removeAtInputPosition(callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Removes the first table with the passed id. */
    removeById(id: number, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

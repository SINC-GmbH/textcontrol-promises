import { TableBaseCollectionBase } from './generated/TableBaseCollectionBase.js';
import { Table } from './Table.js';

// Collection methods (getCount, elementAt, forEach, async iterator) come from Collection via TableBaseCollectionBase.
export class TableBaseCollection extends TableBaseCollectionBase {
    /**
     * @param {*} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new Table(tx)) {
        super(txCollection, wrapItem);
    }
}

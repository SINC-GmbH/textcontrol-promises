import { TableBaseCollection } from '../TableBaseCollection.js';
import { Table } from '../Table.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {TableBaseCollection}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TableCollection.d.ts.
 */
export class TableCollectionBase extends TableBaseCollection {
    /** @returns {TXTextControlTypeDefinition.TableCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TableCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TableCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => new Table(tx));
        this._bindMethods('add', 'getCanAdd', 'getGridLines', 'setGridLines');
    }

    /**
     * Adds a table at the current input position.
     * @param {number} rows
     * @param {number} columns
     * @param {number} id
     * @returns {Promise<boolean>}
     */
    add(rows, columns, id) {
        return RequestHelper.Promise(
            this._txInternal.add,
            rows,
            columns,
            id,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether a new table can be inserted at the current input position.
     * @returns {Promise<boolean>}
     */
    getCanAdd() {
        return RequestHelper.Promise(
            this._txInternal.getCanAdd,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether table's gridlines are shown or not.
     * @returns {Promise<boolean>}
     */
    getGridLines() {
        return RequestHelper.Promise(
            this._txInternal.getGridLines,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating wether table grid lines are shown or not.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setGridLines(value) {
        return RequestHelper.Promise(
            this._txInternal.setGridLines,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

import { ObjectBase } from '../ObjectBase.js';
import { Table } from '../Table.js';
import { TableBaseCollection } from '../TableBaseCollection.js';
import { TableCellCollection } from '../TableCellCollection.js';
import { TableColumnCollection } from '../TableColumnCollection.js';
import { TableRowCollection } from '../TableRowCollection.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Table.d.ts.
 */
export class TableBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Table} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Table} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Table} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getCanMergeCells', 'getCanSplit', 'getCanSplitCells', 'getID', 'getNestedLevel', 'getOuterMostTable', 'getOuterTable', 'mergeCells', 'select', 'selectCells', 'setID', 'split', 'splitCells', 'getDescriptiveText', 'setDescriptiveText');
    }

    /**
     * Checks whether table cells can be merged.
     * @returns {Promise<boolean>}
     */
    getCanMergeCells() {
        return RequestHelper.Promise(
            this._txInternal.getCanMergeCells,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Checks whether this table can be split.
     * @returns {Promise<boolean>}
     */
    getCanSplit() {
        return RequestHelper.Promise(
            this._txInternal.getCanSplit,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Checks whether previously merged table cells in this table can be split.
     * @returns {Promise<boolean>}
     */
    getCanSplitCells() {
        return RequestHelper.Promise(
            this._txInternal.getCanSplitCells,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the table's identifier.
     * @returns {Promise<number>}
     */
    getID() {
        return RequestHelper.Promise(
            this._txInternal.getID,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the nested level for the specified table.
     * @returns {Promise<number>}
     */
    getNestedLevel() {
        return RequestHelper.Promise(
            this._txInternal.getNestedLevel,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a table's outermost table.
     * @returns {Promise<Table>}
     */
    async getOuterMostTable() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getOuterMostTable,
            CallbackType.RequestTableCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Table(tx);
    }

    /**
     * Gets table's outer table.
     * @returns {Promise<Table>}
     */
    async getOuterTable() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getOuterTable,
            CallbackType.RequestTableCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Table(tx);
    }

    /**
     * Merges all selected table cells in this table.
     * @returns {Promise<boolean>}
     */
    mergeCells() {
        return RequestHelper.Promise(
            this._txInternal.mergeCells,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects the complete table.
     * @returns {Promise<void>}
     */
    select() {
        return RequestHelper.Promise(
            this._txInternal.select,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects the part of the table defined through two table cells.
     * @param {number} startRow
     * @param {number} startColumn
     * @param {number} stopRow
     * @param {number} stopColumn
     * @returns {Promise<void>}
     */
    selectCells(startRow, startColumn, stopRow, stopColumn) {
        return RequestHelper.Promise(
            this._txInternal.selectCells,
            startRow,
            startColumn,
            stopRow,
            stopColumn,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the table's id.
     * @param {number} id
     * @returns {Promise<void>}
     */
    setID(id) {
        return RequestHelper.Promise(
            this._txInternal.setID,
            id,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Splits a table below or above the current input position.
     * @param {TXTextControlTypeDefinition.TableAddPosition} tableAddPosition
     * @returns {Promise<boolean>}
     */
    split(tableAddPosition) {
        return RequestHelper.Promise(
            this._txInternal.split,
            tableAddPosition,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Splits all selected table cells in this table.
     * @returns {Promise<boolean>}
     */
    splitCells() {
        return RequestHelper.Promise(
            this._txInternal.splitCells,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the table's descriptive text. The descriptive text is used by screen readers to describe the table to users with visual impairments. An empty string is returned if no descriptive text is set.
     * @returns {Promise<string>}
     */
    getDescriptiveText() {
        return RequestHelper.Promise(
            this._txInternal.getDescriptiveText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the table's descriptive text. The descriptive text is used by screen readers to describe the table to users with visual impairments. An empty string or null can be passed to remove the descriptive text.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setDescriptiveText(value) {
        return RequestHelper.Promise(
            this._txInternal.setDescriptiveText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * The collection of all table cells the table consists of.
     * @type {TableCellCollection}
     */
    get cells() { return new TableCellCollection(this._txInternal.cells); }

    /**
     * Gets a collection of all columns the table consists of.
     * @type {TableColumnCollection}
     */
    get columns() { return new TableColumnCollection(this._txInternal.columns); }

    /**
     * Gets a collection of all tables nested in this table.
     * @type {TableBaseCollection}
     */
    get nestedTables() { return new TableBaseCollection(this._txInternal.nestedTables); }

    /**
     * Gets a collection of all rows the table consists of.
     * @type {TableRowCollection}
     */
    get rows() { return new TableRowCollection(this._txInternal.rows); }

    //#endregion
}

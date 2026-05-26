import { ObjectBase } from '../ObjectBase.js';
import { PageBorder } from '../PageBorder.js';
import { PageMargins } from '../PageMargins.js';
import { PageSize } from '../PageSize.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SectionFormat.d.ts.
 */
export class SectionFormatBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.SectionFormat} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SectionFormat} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SectionFormat} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBreakKind', 'getColumnDistances', 'getColumnLineColor', 'getColumnLineWidth', 'getColumnWidths', 'getColumns', 'getEqualColumnWidth', 'getLandscape', 'getRestartPageNumbering', 'setBreakKind', 'setColumnLineColor', 'setColumnLineWidth', 'setColumnWidths', 'setColumns', 'setEqualColumnWidth', 'setLandscape', 'setRestartPageNumbering');
    }

    /**
     * Gets the kind of the section break the section starts with.
     * @returns {Promise<TXTextControlTypeDefinition.SectionBreakKind>}
     */
    getBreakKind() {
        return RequestHelper.Promise(
            this._txInternal.getBreakKind,
            CallbackType.RequestSectionBreakKindCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distances, in twips, between the columns on a page.
     * @returns {Promise<number[]>}
     */
    getColumnDistances() {
        return RequestHelper.Promise(
            this._txInternal.getColumnDistances,
            CallbackType.RequestNumbersCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color of a dividing line between two columns.
     * @returns {Promise<string>}
     */
    getColumnLineColor() {
        return RequestHelper.Promise(
            this._txInternal.getColumnLineColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the width of a dividing line between two columns.
     * @returns {Promise<number>}
     */
    getColumnLineWidth() {
        return RequestHelper.Promise(
            this._txInternal.getColumnLineWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the widths, in twips, of the columns on a page.
     * @returns {Promise<number[]>}
     */
    getColumnWidths() {
        return RequestHelper.Promise(
            this._txInternal.getColumnWidths,
            CallbackType.RequestNumbersCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of columns on a page.
     * @returns {Promise<number>}
     */
    getColumns() {
        return RequestHelper.Promise(
            this._txInternal.getColumns,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the columns on a page have all the same width and the same distance between them.
     * @returns {Promise<boolean>}
     */
    getEqualColumnWidth() {
        return RequestHelper.Promise(
            this._txInternal.getEqualColumnWidth,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the section's page size is in landscape orientation.
     * @returns {Promise<boolean>}
     */
    getLandscape() {
        return RequestHelper.Promise(
            this._txInternal.getLandscape,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether page numbering is restarted at the section's beginning.
     * @returns {Promise<boolean>}
     */
    getRestartPageNumbering() {
        return RequestHelper.Promise(
            this._txInternal.getRestartPageNumbering,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the kind of the section break the section starts with.
     * @param {TXTextControlTypeDefinition.SectionBreakKind} value
     * @returns {Promise<void>}
     */
    setBreakKind(value) {
        return RequestHelper.Promise(
            this._txInternal.setBreakKind,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color of a dividing line between two columns.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setColumnLineColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setColumnLineColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the width of a dividing line between two columns.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setColumnLineWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setColumnLineWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the widths, in twips, of the columns on a page.
     * @param {number[]} value
     * @returns {Promise<void>}
     */
    setColumnWidths(value) {
        return RequestHelper.Promise(
            this._txInternal.setColumnWidths,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the number of columns on a page.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setColumns(value) {
        return RequestHelper.Promise(
            this._txInternal.setColumns,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the columns on a page have all the same width and the same distance between them.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setEqualColumnWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setEqualColumnWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the section's page size is in landscape orientation.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setLandscape(value) {
        return RequestHelper.Promise(
            this._txInternal.setLandscape,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether page numbering is restarted at the section's beginning.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setRestartPageNumbering(value) {
        return RequestHelper.Promise(
            this._txInternal.setRestartPageNumbering,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * Gets the attributes of a section's page border.
     * @type {PageBorder}
     */
    get pageBorder() { return new PageBorder(this._txInternal.pageBorder); }

    /**
     * Gets the section's page margins.
     * @type {PageMargins}
     */
    get pageMargins() { return new PageMargins(this._txInternal.pageMargins); }

    /**
     * Gets the section's page size.
     * @type {PageSize}
     */
    get pageSize() { return new PageSize(this._txInternal.pageSize); }

    //#endregion
}

import { TableCellFormatBase } from './generated/TableCellFormatBase.js';

export class TableCellFormat extends TableCellFormatBase {
    /** @returns {Promise<*>} */
    get backColor() { return this._cached('backColor', () => super.getBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBackColor(value) {
        this._invalidateCache('backColor');
        this._cached('backColor', () => Promise.resolve(value));
        await super.setBackColor(value);
    }

    /** @returns {Promise<*>} */
    get numberFormat() { return this._cached('numberFormat', () => super.getNumberFormat()); }

    /** @param {*} value @returns {Promise<void>} */
    async setNumberFormat(value) {
        this._invalidateCache('numberFormat');
        this._cached('numberFormat', () => Promise.resolve(value));
        await super.setNumberFormat(value);
    }

    /** @returns {Promise<*>} */
    get textType() { return this._cached('textType', () => super.getTextType()); }

    /** @param {*} value @returns {Promise<void>} */
    async setTextType(value) {
        this._invalidateCache('textType');
        this._cached('textType', () => Promise.resolve(value));
        await super.setTextType(value);
    }

    /** @returns {Promise<*>} */
    get verticalAlignment() { return this._cached('verticalAlignment', () => super.getVerticalAlignment()); }

    /** @param {*} value @returns {Promise<void>} */
    async setVerticalAlignment(value) {
        this._invalidateCache('verticalAlignment');
        this._cached('verticalAlignment', () => Promise.resolve(value));
        await super.setVerticalAlignment(value);
    }
}

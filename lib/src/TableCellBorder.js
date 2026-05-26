import { TableCellBorderBase } from './generated/TableCellBorderBase.js';

export class TableCellBorder extends TableCellBorderBase {
    /** @returns {Promise<*>} */
    get color() { return this._cached('color', () => super.getColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setColor(value) {
        this._invalidateCache('color');
        this._cached('color', () => Promise.resolve(value));
        await super.setColor(value);
    }

    /** @returns {Promise<number>} */
    get textDistance() { return this._cached('textDistance', () => super.getTextDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setTextDistance(value) {
        this._invalidateCache('textDistance');
        this._cached('textDistance', () => Promise.resolve(value));
        await super.setTextDistance(value);
    }

    /** @returns {Promise<number>} */
    get width() { return this._cached('width', () => super.getWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setWidth(value) {
        this._invalidateCache('width');
        this._cached('width', () => Promise.resolve(value));
        await super.setWidth(value);
    }
}

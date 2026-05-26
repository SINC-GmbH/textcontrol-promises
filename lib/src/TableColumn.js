import { TableColumnBase } from './generated/TableColumnBase.js';

export class TableColumn extends TableColumnBase {
    /** @returns {Promise<number>} */
    get position() { return this._cached('position', () => super.getPosition()); }

    /** @param {number} value @returns {Promise<void>} */
    async setPosition(value) {
        this._invalidateCache('position');
        this._cached('position', () => Promise.resolve(value));
        await super.setPosition(value);
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

import { TableCellBase } from './generated/TableCellBase.js';

export class TableCell extends TableCellBase {
    /** @returns {Promise<string>} */
    get formula() { return this._cached('formula', () => super.getFormula()); }

    /** @param {string} value @returns {Promise<void>} */
    async setFormula(value) {
        this._invalidateCache('formula');
        this._cached('formula', () => Promise.resolve(value));
        await super.setFormula(value);
    }

    /** @returns {Promise<string>} */
    get name() { return this._cached('name', () => super.getName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setName(value) {
        this._invalidateCache('name');
        this._cached('name', () => Promise.resolve(value));
        await super.setName(value);
    }

    /** @returns {Promise<*>} */
    get position() { return this._cached('position', () => super.getPosition()); }

    /** @param {*} value @returns {Promise<void>} */
    async setPosition(value) {
        this._invalidateCache('position');
        this._cached('position', () => Promise.resolve(value));
        await super.setPosition(value);
    }

    /** @returns {Promise<string>} */
    get text() { return this._cached('text', () => super.getText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setText(value) {
        this._invalidateCache('text');
        this._cached('text', () => Promise.resolve(value));
        await super.setText(value);
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

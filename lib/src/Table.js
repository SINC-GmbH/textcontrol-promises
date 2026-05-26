import { TableBase } from './generated/TableBase.js';

export class Table extends TableBase {
    /** @returns {Promise<number>} */
    get id() { return this._cached('id', () => super.getID()); }

    /** @param {number} value @returns {Promise<void>} */
    async setID(value) {
        this._invalidateCache('id');
        this._cached('id', () => Promise.resolve(value));
        await super.setID(value);
    }

    /** @returns {Promise<string>} */
    get descriptiveText() { return this._cached('descriptiveText', () => super.getDescriptiveText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDescriptiveText(value) {
        this._invalidateCache('descriptiveText');
        this._cached('descriptiveText', () => Promise.resolve(value));
        await super.setDescriptiveText(value);
    }
}

import { EditableRegionBase } from './generated/EditableRegionBase.js';

export class EditableRegion extends EditableRegionBase {
    /** @returns {Promise<*>} */
    get highlightColor() { return this._cached('highlightColor', () => super.getHighlightColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setHighlightColor(value) {
        this._invalidateCache('highlightColor');
        this._cached('highlightColor', () => Promise.resolve(value));
        await super.setHighlightColor(value);
    }

    /** @returns {Promise<*>} */
    get highlightMode() { return this._cached('highlightMode', () => super.getHighlightMode()); }

    /** @param {*} value @returns {Promise<void>} */
    async setHighlightMode(value) {
        this._invalidateCache('highlightMode');
        this._cached('highlightMode', () => Promise.resolve(value));
        await super.setHighlightMode(value);
    }

    /** @returns {Promise<number>} */
    get id() { return this._cached('id', () => super.getID()); }

    /** @param {number} value @returns {Promise<void>} */
    async setID(value) {
        this._invalidateCache('id');
        this._cached('id', () => Promise.resolve(value));
        await super.setID(value);
    }

    /** @returns {Promise<string>} */
    get userName() { return this._cached('userName', () => super.getUserName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setUserName(value) {
        this._invalidateCache('userName');
        this._cached('userName', () => Promise.resolve(value));
        await super.setUserName(value);
    }
}

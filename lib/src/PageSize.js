import { PageSizeBase } from './generated/PageSizeBase.js';

export class PageSize extends PageSizeBase {
    /** @returns {Promise<number>} */
    get height() { return this._cached('height', () => super.getHeight()); }

    /** @param {number} value @returns {Promise<void>} */
    async setHeight(value) {
        this._invalidateCache('height');
        this._cached('height', () => Promise.resolve(value));
        await super.setHeight(value);
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

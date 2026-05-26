import { ImageBase } from './generated/ImageBase.js';

export class Image extends ImageBase {
    /** @returns {Promise<number>} */
    get horizontalScaling() { return this._cached('horizontalScaling', () => super.getHorizontalScaling()); }

    /** @param {number} value @returns {Promise<void>} */
    async setHorizontalScaling(value) {
        this._invalidateCache('horizontalScaling');
        this._cached('horizontalScaling', () => Promise.resolve(value));
        await super.setHorizontalScaling(value);
    }

    /** @returns {Promise<number>} */
    get verticalScaling() { return this._cached('verticalScaling', () => super.getVerticalScaling()); }

    /** @param {number} value @returns {Promise<void>} */
    async setVerticalScaling(value) {
        this._invalidateCache('verticalScaling');
        this._cached('verticalScaling', () => Promise.resolve(value));
        await super.setVerticalScaling(value);
    }
}

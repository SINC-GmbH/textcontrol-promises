import { PageMarginsBase } from './generated/PageMarginsBase.js';

export class PageMargins extends PageMarginsBase {
    /** @returns {Promise<number>} */
    get bottom() { return this._cached('bottom', () => super.getBottom()); }

    /** @param {number} value @returns {Promise<void>} */
    async setBottom(value) {
        this._invalidateCache('bottom');
        this._cached('bottom', () => Promise.resolve(value));
        await super.setBottom(value);
    }

    /** @returns {Promise<number>} */
    get left() { return this._cached('left', () => super.getLeft()); }

    /** @param {number} value @returns {Promise<void>} */
    async setLeft(value) {
        this._invalidateCache('left');
        this._cached('left', () => Promise.resolve(value));
        await super.setLeft(value);
    }

    /** @returns {Promise<number>} */
    get right() { return this._cached('right', () => super.getRight()); }

    /** @param {number} value @returns {Promise<void>} */
    async setRight(value) {
        this._invalidateCache('right');
        this._cached('right', () => Promise.resolve(value));
        await super.setRight(value);
    }

    /** @returns {Promise<number>} */
    get top() { return this._cached('top', () => super.getTop()); }

    /** @param {number} value @returns {Promise<void>} */
    async setTop(value) {
        this._invalidateCache('top');
        this._cached('top', () => Promise.resolve(value));
        await super.setTop(value);
    }
}

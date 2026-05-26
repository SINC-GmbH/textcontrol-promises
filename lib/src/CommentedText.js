import { CommentedTextBase } from './generated/CommentedTextBase.js';

export class CommentedText extends CommentedTextBase {
    /** @returns {Promise<boolean>} */
    get active() { return this._cached('active', () => super.getActive()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setActive(value) {
        this._invalidateCache('active');
        this._cached('active', () => Promise.resolve(value));
        await super.setActive(value);
    }

    /** @returns {Promise<string>} */
    get comment() { return this._cached('comment', () => super.getComment()); }

    /** @param {string} value @returns {Promise<void>} */
    async setComment(value) {
        this._invalidateCache('comment');
        this._cached('comment', () => Promise.resolve(value));
        await super.setComment(value);
    }

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
}

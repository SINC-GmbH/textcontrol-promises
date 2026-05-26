import { TrackedChangeBase } from './generated/TrackedChangeBase.js';

export class TrackedChange extends TrackedChangeBase {
    /** @returns {Promise<boolean>} */
    get active() { return this._cached('active', () => super.getActive()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setActive(value) {
        this._invalidateCache('active');
        this._cached('active', () => Promise.resolve(value));
        await super.setActive(value);
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
}

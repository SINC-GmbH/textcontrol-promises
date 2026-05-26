import { TextFrameBase } from './generated/TextFrameBase.js';

export class TextFrame extends TextFrameBase {
    /** @returns {Promise<*>} */
    get backColor() { return this._cached('backColor', () => super.getBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBackColor(value) {
        this._invalidateCache('backColor');
        this._cached('backColor', () => Promise.resolve(value));
        await super.setBackColor(value);
    }

    /** @returns {Promise<*>} */
    get borderColor() { return this._cached('borderColor', () => super.getBorderColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBorderColor(value) {
        this._invalidateCache('borderColor');
        this._cached('borderColor', () => Promise.resolve(value));
        await super.setBorderColor(value);
    }

    /** @returns {Promise<*>} */
    get borderStyle() { return this._cached('borderStyle', () => super.getBorderStyle()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBorderStyle(value) {
        this._invalidateCache('borderStyle');
        this._cached('borderStyle', () => Promise.resolve(value));
        await super.setBorderStyle(value);
    }

    /** @returns {Promise<number>} */
    get borderWidth() { return this._cached('borderWidth', () => super.getBorderWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setBorderWidth(value) {
        this._invalidateCache('borderWidth');
        this._cached('borderWidth', () => Promise.resolve(value));
        await super.setBorderWidth(value);
    }

    /** @returns {Promise<*>} */
    get internalMargins() { return this._cached('internalMargins', () => super.getInternalMargins()); }

    /** @param {*} value @returns {Promise<void>} */
    async setInternalMargins(value) {
        this._invalidateCache('internalMargins');
        this._cached('internalMargins', () => Promise.resolve(value));
        await super.setInternalMargins(value);
    }

    /** @returns {Promise<number>} */
    get transparency() { return this._cached('transparency', () => super.getTransparency()); }

    /** @param {number} value @returns {Promise<void>} */
    async setTransparency(value) {
        this._invalidateCache('transparency');
        this._cached('transparency', () => Promise.resolve(value));
        await super.setTransparency(value);
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

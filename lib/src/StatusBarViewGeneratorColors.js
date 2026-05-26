import { StatusBarViewGeneratorColorsBase } from './generated/StatusBarViewGeneratorColorsBase.js';

export class StatusBarViewGeneratorColors extends StatusBarViewGeneratorColorsBase {
    /** @returns {Promise<*>} */
    get backColor() { return this._cached('backColor', () => super.getBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBackColor(value) {
        this._invalidateCache('backColor');
        this._cached('backColor', () => Promise.resolve(value));
        await super.setBackColor(value);
    }

    /** @returns {Promise<*>} */
    get backColorBottom() { return this._cached('backColorBottom', () => super.getBackColorBottom()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBackColorBottom(value) {
        this._invalidateCache('backColorBottom');
        this._cached('backColorBottom', () => Promise.resolve(value));
        await super.setBackColorBottom(value);
    }

    /** @returns {Promise<*>} */
    get backColorMiddle() { return this._cached('backColorMiddle', () => super.getBackColorMiddle()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBackColorMiddle(value) {
        this._invalidateCache('backColorMiddle');
        this._cached('backColorMiddle', () => Promise.resolve(value));
        await super.setBackColorMiddle(value);
    }

    /** @returns {Promise<*>} */
    get backColorTop() { return this._cached('backColorTop', () => super.getBackColorTop()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBackColorTop(value) {
        this._invalidateCache('backColorTop');
        this._cached('backColorTop', () => Promise.resolve(value));
        await super.setBackColorTop(value);
    }

    /** @returns {Promise<*>} */
    get foreColor() { return this._cached('foreColor', () => super.getForeColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setForeColor(value) {
        this._invalidateCache('foreColor');
        this._cached('foreColor', () => Promise.resolve(value));
        await super.setForeColor(value);
    }

    /** @returns {Promise<*>} */
    get frameColor() { return this._cached('frameColor', () => super.getFrameColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFrameColor(value) {
        this._invalidateCache('frameColor');
        this._cached('frameColor', () => Promise.resolve(value));
        await super.setFrameColor(value);
    }

    /** @returns {Promise<*>} */
    get gradientBackColor() { return this._cached('gradientBackColor', () => super.getGradientBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setGradientBackColor(value) {
        this._invalidateCache('gradientBackColor');
        this._cached('gradientBackColor', () => Promise.resolve(value));
        await super.setGradientBackColor(value);
    }

    /** @returns {Promise<*>} */
    get separatorColorDark() { return this._cached('separatorColorDark', () => super.getSeparatorColorDark()); }

    /** @param {*} value @returns {Promise<void>} */
    async setSeparatorColorDark(value) {
        this._invalidateCache('separatorColorDark');
        this._cached('separatorColorDark', () => Promise.resolve(value));
        await super.setSeparatorColorDark(value);
    }

    /** @returns {Promise<*>} */
    get separatorColorLight() { return this._cached('separatorColorLight', () => super.getSeparatorColorLight()); }

    /** @param {*} value @returns {Promise<void>} */
    async setSeparatorColorLight(value) {
        this._invalidateCache('separatorColorLight');
        this._cached('separatorColorLight', () => Promise.resolve(value));
        await super.setSeparatorColorLight(value);
    }
}

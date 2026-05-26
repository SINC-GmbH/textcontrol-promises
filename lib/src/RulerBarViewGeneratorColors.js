import { RulerBarViewGeneratorColorsBase } from './generated/RulerBarViewGeneratorColorsBase.js';

export class RulerBarViewGeneratorColors extends RulerBarViewGeneratorColorsBase {
    /** @returns {Promise<*>} */
    get backColor() { return this._cached('backColor', () => super.getBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBackColor(value) {
        this._invalidateCache('backColor');
        this._cached('backColor', () => Promise.resolve(value));
        await super.setBackColor(value);
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
    get gradientBackColor() { return this._cached('gradientBackColor', () => super.getGradientBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setGradientBackColor(value) {
        this._invalidateCache('gradientBackColor');
        this._cached('gradientBackColor', () => Promise.resolve(value));
        await super.setGradientBackColor(value);
    }

    /** @returns {Promise<*>} */
    get rulerColor() { return this._cached('rulerColor', () => super.getRulerColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setRulerColor(value) {
        this._invalidateCache('rulerColor');
        this._cached('rulerColor', () => Promise.resolve(value));
        await super.setRulerColor(value);
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

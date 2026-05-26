import { FormattingStyleBase } from './generated/FormattingStyleBase.js';

export class FormattingStyle extends FormattingStyleBase {
    /** @returns {Promise<*>} */
    get autoBaseline() { return this._cached('autoBaseline', () => super.getAutoBaseline()); }

    /** @param {*} value @returns {Promise<void>} */
    async setAutoBaseline(value) {
        this._invalidateCache('autoBaseline');
        this._cached('autoBaseline', () => Promise.resolve(value));
        await super.setAutoBaseline(value);
    }

    /** @returns {Promise<*>} */
    get baseline() { return this._cached('baseline', () => super.getBaseline()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBaseline(value) {
        this._invalidateCache('baseline');
        this._cached('baseline', () => Promise.resolve(value));
        await super.setBaseline(value);
    }

    /** @returns {Promise<boolean>} */
    get bold() { return this._cached('bold', () => super.getBold()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setBold(value) {
        this._invalidateCache('bold');
        this._cached('bold', () => Promise.resolve(value));
        await super.setBold(value);
    }

    /** @returns {Promise<*>} */
    get capitals() { return this._cached('capitals', () => super.getCapitals()); }

    /** @param {*} value @returns {Promise<void>} */
    async setCapitals(value) {
        this._invalidateCache('capitals');
        this._cached('capitals', () => Promise.resolve(value));
        await super.setCapitals(value);
    }

    /** @returns {Promise<number>} */
    get characterScaling() { return this._cached('characterScaling', () => super.getCharacterScaling()); }

    /** @param {number} value @returns {Promise<void>} */
    async setCharacterScaling(value) {
        this._invalidateCache('characterScaling');
        this._cached('characterScaling', () => Promise.resolve(value));
        await super.setCharacterScaling(value);
    }

    /** @returns {Promise<number>} */
    get characterSpacing() { return this._cached('characterSpacing', () => super.getCharacterSpacing()); }

    /** @param {number} value @returns {Promise<void>} */
    async setCharacterSpacing(value) {
        this._invalidateCache('characterSpacing');
        this._cached('characterSpacing', () => Promise.resolve(value));
        await super.setCharacterSpacing(value);
    }

    /** @returns {Promise<string>} */
    get culture() { return this._cached('culture', () => super.getCulture()); }

    /** @param {string} value @returns {Promise<void>} */
    async setCulture(value) {
        this._invalidateCache('culture');
        this._cached('culture', () => Promise.resolve(value));
        await super.setCulture(value);
    }

    /** @returns {Promise<string>} */
    get fontName() { return this._cached('fontName', () => super.getFontName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setFontName(value) {
        this._invalidateCache('fontName');
        this._cached('fontName', () => Promise.resolve(value));
        await super.setFontName(value);
    }

    /** @returns {Promise<number>} */
    get fontSize() { return this._cached('fontSize', () => super.getFontSize()); }

    /** @param {number} value @returns {Promise<void>} */
    async setFontSize(value) {
        this._invalidateCache('fontSize');
        this._cached('fontSize', () => Promise.resolve(value));
        await super.setFontSize(value);
    }

    /** @returns {Promise<*>} */
    get foreColor() { return this._cached('foreColor', () => super.getForeColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setForeColor(value) {
        this._invalidateCache('foreColor');
        this._cached('foreColor', () => Promise.resolve(value));
        await super.setForeColor(value);
    }

    /** @returns {Promise<boolean>} */
    get italic() { return this._cached('italic', () => super.getItalic()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setItalic(value) {
        this._invalidateCache('italic');
        this._cached('italic', () => Promise.resolve(value));
        await super.setItalic(value);
    }

    /** @returns {Promise<string>} */
    get name() { return this._cached('name', () => super.getName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setName(value) {
        this._invalidateCache('name');
        this._cached('name', () => Promise.resolve(value));
        await super.setName(value);
    }

    /** @returns {Promise<*>} */
    get strikeout() { return this._cached('strikeout', () => super.getStrikeout()); }

    /** @param {*} value @returns {Promise<void>} */
    async setStrikeout(value) {
        this._invalidateCache('strikeout');
        this._cached('strikeout', () => Promise.resolve(value));
        await super.setStrikeout(value);
    }

    /** @returns {Promise<*>} */
    get textBackColor() { return this._cached('textBackColor', () => super.getTextBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setTextBackColor(value) {
        this._invalidateCache('textBackColor');
        this._cached('textBackColor', () => Promise.resolve(value));
        await super.setTextBackColor(value);
    }

    /** @returns {Promise<*>} */
    get underline() { return this._cached('underline', () => super.getUnderline()); }

    /** @param {*} value @returns {Promise<void>} */
    async setUnderline(value) {
        this._invalidateCache('underline');
        this._cached('underline', () => Promise.resolve(value));
        await super.setUnderline(value);
    }
}

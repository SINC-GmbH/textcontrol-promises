import { ListFormatBase } from './generated/ListFormatBase.js';

export class ListFormat extends ListFormatBase {
    /** @returns {Promise<string>} */
    get bulletCharacter() { return this._cached('bulletCharacter', () => super.getBulletCharacter()); }

    /** @param {string} value @returns {Promise<void>} */
    async setBulletCharacter(value) {
        this._invalidateCache('bulletCharacter');
        this._cached('bulletCharacter', () => Promise.resolve(value));
        await super.setBulletCharacter(value);
    }

    /** @returns {Promise<number>} */
    get bulletSize() { return this._cached('bulletSize', () => super.getBulletSize()); }

    /** @param {number} value @returns {Promise<void>} */
    async setBulletSize(value) {
        this._invalidateCache('bulletSize');
        this._cached('bulletSize', () => Promise.resolve(value));
        await super.setBulletSize(value);
    }

    /** @returns {Promise<number>} */
    get firstNumber() { return this._cached('firstNumber', () => super.getFirstNumber()); }

    /** @param {number} value @returns {Promise<void>} */
    async setFirstNumber(value) {
        this._invalidateCache('firstNumber');
        this._cached('firstNumber', () => Promise.resolve(value));
        await super.setFirstNumber(value);
    }

    /** @returns {Promise<string>} */
    get fontName() { return this._cached('fontName', () => super.getFontName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setFontName(value) {
        this._invalidateCache('fontName');
        this._cached('fontName', () => Promise.resolve(value));
        await super.setFontName(value);
    }

    /** @returns {Promise<*>} */
    get formatCharacter() { return this._cached('formatCharacter', () => super.getFormatCharacter()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFormatCharacter(value) {
        this._invalidateCache('formatCharacter');
        this._cached('formatCharacter', () => Promise.resolve(value));
        await super.setFormatCharacter(value);
    }

    /** @returns {Promise<number>} */
    get hangingIndent() { return this._cached('hangingIndent', () => super.getHangingIndent()); }

    /** @param {number} value @returns {Promise<void>} */
    async setHangingIndent(value) {
        this._invalidateCache('hangingIndent');
        this._cached('hangingIndent', () => Promise.resolve(value));
        await super.setHangingIndent(value);
    }

    /** @returns {Promise<number>} */
    get leftIndent() { return this._cached('leftIndent', () => super.getLeftIndent()); }

    /** @param {number} value @returns {Promise<void>} */
    async setLeftIndent(value) {
        this._invalidateCache('leftIndent');
        this._cached('leftIndent', () => Promise.resolve(value));
        await super.setLeftIndent(value);
    }

    /** @returns {Promise<number>} */
    get level() { return this._cached('level', () => super.getLevel()); }

    /** @param {number} value @returns {Promise<void>} */
    async setLevel(value) {
        this._invalidateCache('level');
        this._cached('level', () => Promise.resolve(value));
        await super.setLevel(value);
    }

    /** @returns {Promise<*>} */
    get numberFormat() { return this._cached('numberFormat', () => super.getNumberFormat()); }

    /** @param {*} value @returns {Promise<void>} */
    async setNumberFormat(value) {
        this._invalidateCache('numberFormat');
        this._cached('numberFormat', () => Promise.resolve(value));
        await super.setNumberFormat(value);
    }

    /** @returns {Promise<boolean>} */
    get restartNumbering() { return this._cached('restartNumbering', () => super.getRestartNumbering()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setRestartNumbering(value) {
        this._invalidateCache('restartNumbering');
        this._cached('restartNumbering', () => Promise.resolve(value));
        await super.setRestartNumbering(value);
    }

    /** @returns {Promise<string>} */
    get textAfterNumber() { return this._cached('textAfterNumber', () => super.getTextAfterNumber()); }

    /** @param {string} value @returns {Promise<void>} */
    async setTextAfterNumber(value) {
        this._invalidateCache('textAfterNumber');
        this._cached('textAfterNumber', () => Promise.resolve(value));
        await super.setTextAfterNumber(value);
    }

    /** @returns {Promise<string>} */
    get textBeforeNumber() { return this._cached('textBeforeNumber', () => super.getTextBeforeNumber()); }

    /** @param {string} value @returns {Promise<void>} */
    async setTextBeforeNumber(value) {
        this._invalidateCache('textBeforeNumber');
        this._cached('textBeforeNumber', () => Promise.resolve(value));
        await super.setTextBeforeNumber(value);
    }

    /** @returns {Promise<*>} */
    get type() { return this._cached('type', () => super.getType()); }

    /** @param {*} value @returns {Promise<void>} */
    async setType(value) {
        this._invalidateCache('type');
        this._cached('type', () => Promise.resolve(value));
        await super.setType(value);
    }
}

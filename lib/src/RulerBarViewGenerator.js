import { RulerBarViewGeneratorBase } from './generated/RulerBarViewGeneratorBase.js';

export class RulerBarViewGenerator extends RulerBarViewGeneratorBase {
    /** @returns {Promise<*>} */
    get borderStyle() { return this._cached('borderStyle', () => super.getBorderStyle()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBorderStyle(value) {
        this._invalidateCache('borderStyle');
        this._cached('borderStyle', () => Promise.resolve(value));
        await super.setBorderStyle(value);
    }

    /** @returns {Promise<boolean>} */
    get enablePageMargins() { return this._cached('enablePageMargins', () => super.getEnablePageMargins()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setEnablePageMargins(value) {
        this._invalidateCache('enablePageMargins');
        this._cached('enablePageMargins', () => Promise.resolve(value));
        await super.setEnablePageMargins(value);
    }

    /** @returns {Promise<*>} */
    get formulaMode() { return this._cached('formulaMode', () => super.getFormulaMode()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFormulaMode(value) {
        this._invalidateCache('formulaMode');
        this._cached('formulaMode', () => Promise.resolve(value));
        await super.setFormulaMode(value);
    }

    /** @returns {Promise<boolean>} */
    get readOnly() { return this._cached('readOnly', () => super.getReadOnly()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setReadOnly(value) {
        this._invalidateCache('readOnly');
        this._cached('readOnly', () => Promise.resolve(value));
        await super.setReadOnly(value);
    }

    /** @returns {Promise<*>} */
    get scaleUnit() { return this._cached('scaleUnit', () => super.getScaleUnit()); }

    /** @param {*} value @returns {Promise<void>} */
    async setScaleUnit(value) {
        this._invalidateCache('scaleUnit');
        this._cached('scaleUnit', () => Promise.resolve(value));
        await super.setScaleUnit(value);
    }
}

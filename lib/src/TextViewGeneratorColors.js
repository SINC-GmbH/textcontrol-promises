import { TextViewGeneratorColorsBase } from './generated/TextViewGeneratorColorsBase.js';

export class TextViewGeneratorColors extends TextViewGeneratorColorsBase {
    /** @returns {Promise<*>} */
    get activeFormFieldColor() { return this._cached('activeFormFieldColor', () => super.getActiveFormFieldColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setActiveFormFieldColor(value) {
        this._invalidateCache('activeFormFieldColor');
        this._cached('activeFormFieldColor', () => Promise.resolve(value));
        await super.setActiveFormFieldColor(value);
    }

    /** @returns {Promise<*>} */
    get darkShadowColor() { return this._cached('darkShadowColor', () => super.getDarkShadowColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setDarkShadowColor(value) {
        this._invalidateCache('darkShadowColor');
        this._cached('darkShadowColor', () => Promise.resolve(value));
        await super.setDarkShadowColor(value);
    }

    /** @returns {Promise<*>} */
    get desktopColor() { return this._cached('desktopColor', () => super.getDesktopColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setDesktopColor(value) {
        this._invalidateCache('desktopColor');
        this._cached('desktopColor', () => Promise.resolve(value));
        await super.setDesktopColor(value);
    }

    /** @returns {Promise<*>} */
    get formFieldColor() { return this._cached('formFieldColor', () => super.getFormFieldColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFormFieldColor(value) {
        this._invalidateCache('formFieldColor');
        this._cached('formFieldColor', () => Promise.resolve(value));
        await super.setFormFieldColor(value);
    }

    /** @returns {Promise<*>} */
    get headerFooterLabelColor() { return this._cached('headerFooterLabelColor', () => super.getHeaderFooterLabelColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setHeaderFooterLabelColor(value) {
        this._invalidateCache('headerFooterLabelColor');
        this._cached('headerFooterLabelColor', () => Promise.resolve(value));
        await super.setHeaderFooterLabelColor(value);
    }

    /** @returns {Promise<*>} */
    get headerFooterLineColor() { return this._cached('headerFooterLineColor', () => super.getHeaderFooterLineColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setHeaderFooterLineColor(value) {
        this._invalidateCache('headerFooterLineColor');
        this._cached('headerFooterLineColor', () => Promise.resolve(value));
        await super.setHeaderFooterLineColor(value);
    }

    /** @returns {Promise<*>} */
    get lightShadowColor() { return this._cached('lightShadowColor', () => super.getLightShadowColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setLightShadowColor(value) {
        this._invalidateCache('lightShadowColor');
        this._cached('lightShadowColor', () => Promise.resolve(value));
        await super.setLightShadowColor(value);
    }
}

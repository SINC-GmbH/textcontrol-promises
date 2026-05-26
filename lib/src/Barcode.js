import { BarcodeBase } from './generated/BarcodeBase.js';

export class Barcode extends BarcodeBase {
    /** @returns {Promise<string>} */
    get additionalText() { return this._cached('additionalText', () => super.getAdditionalText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setAdditionalText(value) {
        this._invalidateCache('additionalText');
        this._cached('additionalText', () => Promise.resolve(value));
        await super.setAdditionalText(value);
    }

    /** @returns {Promise<*>} */
    get alignment() { return this._cached('alignment', () => super.getAlignment()); }

    /** @param {*} value @returns {Promise<void>} */
    async setAlignment(value) {
        this._invalidateCache('alignment');
        this._cached('alignment', () => Promise.resolve(value));
        await super.setAlignment(value);
    }

    /** @returns {Promise<number>} */
    get angle() { return this._cached('angle', () => super.getAngle()); }

    /** @param {number} value @returns {Promise<void>} */
    async setAngle(value) {
        this._invalidateCache('angle');
        this._cached('angle', () => Promise.resolve(value));
        await super.setAngle(value);
    }

    /** @returns {Promise<*>} */
    get backColor() { return this._cached('backColor', () => super.getBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBackColor(value) {
        this._invalidateCache('backColor');
        this._cached('backColor', () => Promise.resolve(value));
        await super.setBackColor(value);
    }

    /** @returns {Promise<*>} */
    get barcodeType() { return this._cached('barcodeType', () => super.getBarcodeType()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBarcodeType(value) {
        this._invalidateCache('barcodeType');
        this._cached('barcodeType', () => Promise.resolve(value));
        await super.setBarcodeType(value);
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
    get showText() { return this._cached('showText', () => super.getShowText()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowText(value) {
        this._invalidateCache('showText');
        this._cached('showText', () => Promise.resolve(value));
        await super.setShowText(value);
    }

    /** @returns {Promise<string>} */
    get text() { return this._cached('text', () => super.getText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setText(value) {
        this._invalidateCache('text');
        this._cached('text', () => Promise.resolve(value));
        await super.setText(value);
    }

    /** @returns {Promise<*>} */
    get textAlignment() { return this._cached('textAlignment', () => super.getTextAlignment()); }

    /** @param {*} value @returns {Promise<void>} */
    async setTextAlignment(value) {
        this._invalidateCache('textAlignment');
        this._cached('textAlignment', () => Promise.resolve(value));
        await super.setTextAlignment(value);
    }

    /** @returns {Promise<number>} */
    get upperTextLength() { return this._cached('upperTextLength', () => super.getUpperTextLength()); }

    /** @param {number} value @returns {Promise<void>} */
    async setUpperTextLength(value) {
        this._invalidateCache('upperTextLength');
        this._cached('upperTextLength', () => Promise.resolve(value));
        await super.setUpperTextLength(value);
    }
}

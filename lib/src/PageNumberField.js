import { PageNumberFieldBase } from './generated/PageNumberFieldBase.js';

export class PageNumberField extends PageNumberFieldBase {
    /** @returns {Promise<*>} */
    get numberFormat() { return this._cached('numberFormat', () => super.getNumberFormat()); }

    /** @param {*} value @returns {Promise<void>} */
    async setNumberFormat(value) {
        this._invalidateCache('numberFormat');
        this._cached('numberFormat', () => Promise.resolve(value));
        await super.setNumberFormat(value);
    }

    /** @returns {Promise<boolean>} */
    get showNumberOfPages() { return this._cached('showNumberOfPages', () => super.getShowNumberOfPages()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowNumberOfPages(value) {
        this._invalidateCache('showNumberOfPages');
        this._cached('showNumberOfPages', () => Promise.resolve(value));
        await super.setShowNumberOfPages(value);
    }

    /** @returns {Promise<number>} */
    get startNumber() { return this._cached('startNumber', () => super.getStartNumber()); }

    /** @param {number} value @returns {Promise<void>} */
    async setStartNumber(value) {
        this._invalidateCache('startNumber');
        this._cached('startNumber', () => Promise.resolve(value));
        await super.setStartNumber(value);
    }
}

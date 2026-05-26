import { DateFormFieldBase } from './generated/DateFormFieldBase.js';

export class DateFormField extends DateFormFieldBase {
    /** @returns {Promise<*>} */
    get date() { return this._cached('date', () => super.getDate()); }

    /** @param {*} value @returns {Promise<void>} */
    async setDate(value) {
        this._invalidateCache('date');
        this._cached('date', () => Promise.resolve(value));
        await super.setDate(value);
    }

    /** @returns {Promise<string>} */
    get dateFormat() { return this._cached('dateFormat', () => super.getDateFormat()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDateFormat(value) {
        this._invalidateCache('dateFormat');
        this._cached('dateFormat', () => Promise.resolve(value));
        await super.setDateFormat(value);
    }

    /** @returns {Promise<number>} */
    get emptyWidth() { return this._cached('emptyWidth', () => super.getEmptyWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setEmptyWidth(value) {
        this._invalidateCache('emptyWidth');
        this._cached('emptyWidth', () => Promise.resolve(value));
        await super.setEmptyWidth(value);
    }
}

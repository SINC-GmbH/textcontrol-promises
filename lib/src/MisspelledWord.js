import { MisspelledWordBase } from './generated/MisspelledWordBase.js';

export class MisspelledWord extends MisspelledWordBase {
    /** @returns {Promise<boolean>} */
    get isDuplicate() { return this._cached('isDuplicate', () => super.getIsDuplicate()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setIsDuplicate(value) {
        this._invalidateCache('isDuplicate');
        this._cached('isDuplicate', () => Promise.resolve(value));
        await super.setIsDuplicate(value);
    }

    /** @returns {Promise<boolean>} */
    get isIgnored() { return this._cached('isIgnored', () => super.getIsIgnored()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setIsIgnored(value) {
        this._invalidateCache('isIgnored');
        this._cached('isIgnored', () => Promise.resolve(value));
        await super.setIsIgnored(value);
    }
}

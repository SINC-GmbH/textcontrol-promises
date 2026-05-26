import { BarcodeTypeSettingsBase } from './generated/BarcodeTypeSettingsBase.js';

export class BarcodeTypeSettings extends BarcodeTypeSettingsBase {
    /** @returns {Promise<boolean>} */
    get hasCheckValue() { return this._cached('hasCheckValue', () => super.getHasCheckValue()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setHasCheckValue(value) {
        this._invalidateCache('hasCheckValue');
        this._cached('hasCheckValue', () => Promise.resolve(value));
        await super.setHasCheckValue(value);
    }

    /** @returns {Promise<boolean>} */
    get showCheckValue() { return this._cached('showCheckValue', () => super.getShowCheckValue()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setShowCheckValue(value) {
        this._invalidateCache('showCheckValue');
        this._cached('showCheckValue', () => Promise.resolve(value));
        await super.setShowCheckValue(value);
    }
}

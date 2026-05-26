import { FormFieldBase } from './generated/FormFieldBase.js';

export class FormField extends FormFieldBase {
    /** @returns {Promise<boolean>} */
    get enabled() { return this._cached('enabled', () => super.getEnabled()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setEnabled(value) {
        this._invalidateCache('enabled');
        this._cached('enabled', () => Promise.resolve(value));
        await super.setEnabled(value);
    }

    /** @returns {Promise<string>} */
    get descriptiveText() { return this._cached('descriptiveText', () => super.getDescriptiveText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDescriptiveText(value) {
        this._invalidateCache('descriptiveText');
        this._cached('descriptiveText', () => Promise.resolve(value));
        await super.setDescriptiveText(value);
    }
}

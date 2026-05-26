import { CheckFormFieldBase } from './generated/CheckFormFieldBase.js';

export class CheckFormField extends CheckFormFieldBase {
    /** @returns {Promise<boolean>} */
    get checked() { return this._cached('checked', () => super.getChecked()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setChecked(value) {
        this._invalidateCache('checked');
        this._cached('checked', () => Promise.resolve(value));
        await super.setChecked(value);
    }

    /** @returns {Promise<string>} */
    get checkedCharacter() { return this._cached('checkedCharacter', () => super.getCheckedCharacter()); }

    /** @param {string} value @returns {Promise<void>} */
    async setCheckedCharacter(value) {
        this._invalidateCache('checkedCharacter');
        this._cached('checkedCharacter', () => Promise.resolve(value));
        await super.setCheckedCharacter(value);
    }

    /** @returns {Promise<string>} */
    get uncheckedCharacter() { return this._cached('uncheckedCharacter', () => super.getUncheckedCharacter()); }

    /** @param {string} value @returns {Promise<void>} */
    async setUncheckedCharacter(value) {
        this._invalidateCache('uncheckedCharacter');
        this._cached('uncheckedCharacter', () => Promise.resolve(value));
        await super.setUncheckedCharacter(value);
    }
}

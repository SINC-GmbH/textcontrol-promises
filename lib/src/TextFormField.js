import { TextFormFieldBase } from './generated/TextFormFieldBase.js';

export class TextFormField extends TextFormFieldBase {
    /** @returns {Promise<number>} */
    get emptyWidth() { return this._cached('emptyWidth', () => super.getEmptyWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setEmptyWidth(value) {
        this._invalidateCache('emptyWidth');
        this._cached('emptyWidth', () => Promise.resolve(value));
        await super.setEmptyWidth(value);
    }
}

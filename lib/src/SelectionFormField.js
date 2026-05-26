import { SelectionFormFieldBase } from './generated/SelectionFormFieldBase.js';

export class SelectionFormField extends SelectionFormFieldBase {
    /** @returns {Promise<number>} */
    get emptyWidth() { return this._cached('emptyWidth', () => super.getEmptyWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setEmptyWidth(value) {
        this._invalidateCache('emptyWidth');
        this._cached('emptyWidth', () => Promise.resolve(value));
        await super.setEmptyWidth(value);
    }

    /** @returns {Promise<boolean>} */
    get isDropDownArrowVisible() { return this._cached('isDropDownArrowVisible', () => super.getIsDropDownArrowVisible()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setIsDropDownArrowVisible(value) {
        this._invalidateCache('isDropDownArrowVisible');
        this._cached('isDropDownArrowVisible', () => Promise.resolve(value));
        await super.setIsDropDownArrowVisible(value);
    }

    /** @returns {Promise<*>} */
    get items() { return this._cached('items', () => super.getItems()); }

    /** @param {*} value @returns {Promise<void>} */
    async setItems(value) {
        this._invalidateCache('items');
        this._cached('items', () => Promise.resolve(value));
        await super.setItems(value);
    }

    /** @returns {Promise<number>} */
    get selectedIndex() { return this._cached('selectedIndex', () => super.getSelectedIndex()); }

    /** @param {number} value @returns {Promise<void>} */
    async setSelectedIndex(value) {
        this._invalidateCache('selectedIndex');
        this._cached('selectedIndex', () => Promise.resolve(value));
        await super.setSelectedIndex(value);
    }
}

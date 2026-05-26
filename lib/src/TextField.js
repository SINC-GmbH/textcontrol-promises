import { TextFieldBase } from './generated/TextFieldBase.js';

export class TextField extends TextFieldBase {
    /** @returns {Promise<boolean>} */
    get deleteable() { return this._cached('deleteable', () => super.getDeleteable()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setDeleteable(value) {
        this._invalidateCache('deleteable');
        this._cached('deleteable', () => Promise.resolve(value));
        await super.setDeleteable(value);
    }

    /** @returns {Promise<boolean>} */
    get doubledInputPosition() { return this._cached('doubledInputPosition', () => super.getDoubledInputPosition()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setDoubledInputPosition(value) {
        this._invalidateCache('doubledInputPosition');
        this._cached('doubledInputPosition', () => Promise.resolve(value));
        await super.setDoubledInputPosition(value);
    }

    /** @returns {Promise<boolean>} */
    get editable() { return this._cached('editable', () => super.getEditable()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setEditable(value) {
        this._invalidateCache('editable');
        this._cached('editable', () => Promise.resolve(value));
        await super.setEditable(value);
    }

    /** @returns {Promise<*>} */
    get highlightColor() { return this._cached('highlightColor', () => super.getHighlightColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setHighlightColor(value) {
        this._invalidateCache('highlightColor');
        this._cached('highlightColor', () => Promise.resolve(value));
        await super.setHighlightColor(value);
    }

    /** @returns {Promise<*>} */
    get highlightMode() { return this._cached('highlightMode', () => super.getHighlightMode()); }

    /** @param {*} value @returns {Promise<void>} */
    async setHighlightMode(value) {
        this._invalidateCache('highlightMode');
        this._cached('highlightMode', () => Promise.resolve(value));
        await super.setHighlightMode(value);
    }

    /** @returns {Promise<number>} */
    get id() { return this._cached('id', () => super.getID()); }

    /** @param {number} value @returns {Promise<void>} */
    async setID(value) {
        this._invalidateCache('id');
        this._cached('id', () => Promise.resolve(value));
        await super.setID(value);
    }

    /** @returns {Promise<boolean>} */
    get isSpellCheckingEnabled() { return this._cached('isSpellCheckingEnabled', () => super.getIsSpellCheckingEnabled()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setIsSpellCheckingEnabled(value) {
        this._invalidateCache('isSpellCheckingEnabled');
        this._cached('isSpellCheckingEnabled', () => Promise.resolve(value));
        await super.setIsSpellCheckingEnabled(value);
    }

    /** @returns {Promise<string>} */
    get name() { return this._cached('name', () => super.getName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setName(value) {
        this._invalidateCache('name');
        this._cached('name', () => Promise.resolve(value));
        await super.setName(value);
    }

    /** @returns {Promise<string>} */
    get text() { return this._cached('text', () => super.getText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setText(value) {
        this._invalidateCache('text');
        this._cached('text', () => Promise.resolve(value));
        await super.setText(value);
    }
}

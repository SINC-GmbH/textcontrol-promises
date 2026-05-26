import { FrameBaseBase } from './generated/FrameBaseBase.js';

export class FrameBase extends FrameBaseBase {
    /** @returns {Promise<*>} */
    get alignment() { return this._cached('alignment', () => super.getAlignment()); }

    /** @param {*} value @returns {Promise<void>} */
    async setAlignment(value) {
        this._invalidateCache('alignment');
        this._cached('alignment', () => Promise.resolve(value));
        await super.setAlignment(value);
    }

    /** @returns {Promise<string>} */
    get descriptiveText() { return this._cached('descriptiveText', () => super.getDescriptiveText()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDescriptiveText(value) {
        this._invalidateCache('descriptiveText');
        this._cached('descriptiveText', () => Promise.resolve(value));
        await super.setDescriptiveText(value);
    }

    /** @returns {Promise<number>} */
    get id() { return this._cached('id', () => super.getID()); }

    /** @param {number} value @returns {Promise<void>} */
    async setID(value) {
        this._invalidateCache('id');
        this._cached('id', () => Promise.resolve(value));
        await super.setID(value);
    }

    /** @returns {Promise<*>} */
    get insertionMode() { return this._cached('insertionMode', () => super.getInsertionMode()); }

    /** @param {*} value @returns {Promise<void>} */
    async setInsertionMode(value) {
        this._invalidateCache('insertionMode');
        this._cached('insertionMode', () => Promise.resolve(value));
        await super.setInsertionMode(value);
    }

    /** @returns {Promise<boolean>} */
    get moveable() { return this._cached('moveable', () => super.getMoveable()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setMoveable(value) {
        this._invalidateCache('moveable');
        this._cached('moveable', () => Promise.resolve(value));
        await super.setMoveable(value);
    }

    /** @returns {Promise<string>} */
    get name() { return this._cached('name', () => super.getName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setName(value) {
        this._invalidateCache('name');
        this._cached('name', () => Promise.resolve(value));
        await super.setName(value);
    }

    /** @returns {Promise<boolean>} */
    get sizeable() { return this._cached('sizeable', () => super.getSizeable()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setSizeable(value) {
        this._invalidateCache('sizeable');
        this._cached('sizeable', () => Promise.resolve(value));
        await super.setSizeable(value);
    }

    /** @returns {Promise<*>} */
    get textDistances() { return this._cached('textDistances', () => super.getTextDistances()); }

    /** @param {*} value @returns {Promise<void>} */
    async setTextDistances(value) {
        this._invalidateCache('textDistances');
        this._cached('textDistances', () => Promise.resolve(value));
        await super.setTextDistances(value);
    }
}

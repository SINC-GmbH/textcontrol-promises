import { DocumentTargetBase } from './generated/DocumentTargetBase.js';

export class DocumentTarget extends DocumentTargetBase {
    /** @returns {Promise<boolean>} */
    get deleteable() { return this._cached('deleteable', () => super.getDeleteable()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setDeleteable(value) {
        this._invalidateCache('deleteable');
        this._cached('deleteable', () => Promise.resolve(value));
        await super.setDeleteable(value);
    }

    /** @returns {Promise<number>} */
    get id() { return this._cached('id', () => super.getID()); }

    /** @param {number} value @returns {Promise<void>} */
    async setID(value) {
        this._invalidateCache('id');
        this._cached('id', () => Promise.resolve(value));
        await super.setID(value);
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
    get targetName() { return this._cached('targetName', () => super.getTargetName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setTargetName(value) {
        this._invalidateCache('targetName');
        this._cached('targetName', () => Promise.resolve(value));
        await super.setTargetName(value);
    }
}

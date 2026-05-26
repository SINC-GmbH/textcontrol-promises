import { EmbeddedFileBase } from './generated/EmbeddedFileBase.js';

export class EmbeddedFile extends EmbeddedFileBase {
    /** @returns {Promise<*>} */
    get creationDate() { return this._cached('creationDate', () => super.getCreationDate()); }

    /** @param {*} value @returns {Promise<void>} */
    async setCreationDate(value) {
        this._invalidateCache('creationDate');
        this._cached('creationDate', () => Promise.resolve(value));
        await super.setCreationDate(value);
    }

    /** @returns {Promise<string>} */
    get description() { return this._cached('description', () => super.getDescription()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDescription(value) {
        this._invalidateCache('description');
        this._cached('description', () => Promise.resolve(value));
        await super.setDescription(value);
    }

    /** @returns {Promise<*>} */
    get lastModificationDate() { return this._cached('lastModificationDate', () => super.getLastModificationDate()); }

    /** @param {*} value @returns {Promise<void>} */
    async setLastModificationDate(value) {
        this._invalidateCache('lastModificationDate');
        this._cached('lastModificationDate', () => Promise.resolve(value));
        await super.setLastModificationDate(value);
    }

    /** @returns {Promise<string>} */
    get mimeType() { return this._cached('mimeType', () => super.getMIMEType()); }

    /** @param {string} value @returns {Promise<void>} */
    async setMIMEType(value) {
        this._invalidateCache('mimeType');
        this._cached('mimeType', () => Promise.resolve(value));
        await super.setMIMEType(value);
    }

    /** @returns {Promise<*>} */
    get relationship() { return this._cached('relationship', () => super.getRelationship()); }

    /** @param {*} value @returns {Promise<void>} */
    async setRelationship(value) {
        this._invalidateCache('relationship');
        this._cached('relationship', () => Promise.resolve(value));
        await super.setRelationship(value);
    }
}

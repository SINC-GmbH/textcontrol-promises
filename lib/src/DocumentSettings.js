import { DocumentSettingsBase } from './generated/DocumentSettingsBase.js';

export class DocumentSettings extends DocumentSettingsBase {
    /** @returns {Promise<string>} */
    get author() { return this._cached('author', () => super.getAuthor()); }

    /** @param {string} value @returns {Promise<void>} */
    async setAuthor(value) {
        this._invalidateCache('author');
        this._cached('author', () => Promise.resolve(value));
        await super.setAuthor(value);
    }

    /** @returns {Promise<*>} */
    get creationDate() { return this._cached('creationDate', () => super.getCreationDate()); }

    /** @param {*} value @returns {Promise<void>} */
    async setCreationDate(value) {
        this._invalidateCache('creationDate');
        this._cached('creationDate', () => Promise.resolve(value));
        await super.setCreationDate(value);
    }

    /** @returns {Promise<string>} */
    get creatorApplication() { return this._cached('creatorApplication', () => super.getCreatorApplication()); }

    /** @param {string} value @returns {Promise<void>} */
    async setCreatorApplication(value) {
        this._invalidateCache('creatorApplication');
        this._cached('creatorApplication', () => Promise.resolve(value));
        await super.setCreatorApplication(value);
    }

    /** @returns {Promise<string>} */
    get documentBasePath() { return this._cached('documentBasePath', () => super.getDocumentBasePath()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDocumentBasePath(value) {
        this._invalidateCache('documentBasePath');
        this._cached('documentBasePath', () => Promise.resolve(value));
        await super.setDocumentBasePath(value);
    }

    /** @returns {Promise<*>} */
    get documentKeywords() { return this._cached('documentKeywords', () => super.getDocumentKeywords()); }

    /** @param {*} value @returns {Promise<void>} */
    async setDocumentKeywords(value) {
        this._invalidateCache('documentKeywords');
        this._cached('documentKeywords', () => Promise.resolve(value));
        await super.setDocumentKeywords(value);
    }

    /** @returns {Promise<string>} */
    get documentSubject() { return this._cached('documentSubject', () => super.getDocumentSubject()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDocumentSubject(value) {
        this._invalidateCache('documentSubject');
        this._cached('documentSubject', () => Promise.resolve(value));
        await super.setDocumentSubject(value);
    }

    /** @returns {Promise<string>} */
    get documentTitle() { return this._cached('documentTitle', () => super.getDocumentTitle()); }

    /** @param {string} value @returns {Promise<void>} */
    async setDocumentTitle(value) {
        this._invalidateCache('documentTitle');
        this._cached('documentTitle', () => Promise.resolve(value));
        await super.setDocumentTitle(value);
    }

}

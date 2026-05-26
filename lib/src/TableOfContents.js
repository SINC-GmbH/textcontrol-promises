import { TableOfContentsBase } from './generated/TableOfContentsBase.js';

export class TableOfContents extends TableOfContentsBase {
    /** @returns {Promise<boolean>} */
    get hasLinks() { return this._cached('hasLinks', () => super.getHasLinks()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setHasLinks(value) {
        this._invalidateCache('hasLinks');
        this._cached('hasLinks', () => Promise.resolve(value));
        await super.setHasLinks(value);
    }

    /** @returns {Promise<boolean>} */
    get hasPageNumbers() { return this._cached('hasPageNumbers', () => super.getHasPageNumbers()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setHasPageNumbers(value) {
        this._invalidateCache('hasPageNumbers');
        this._cached('hasPageNumbers', () => Promise.resolve(value));
        await super.setHasPageNumbers(value);
    }

    /** @returns {Promise<boolean>} */
    get hasRightAlignedPageNumbers() { return this._cached('hasRightAlignedPageNumbers', () => super.getHasRightAlignedPageNumbers()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setHasRightAlignedPageNumbers(value) {
        this._invalidateCache('hasRightAlignedPageNumbers');
        this._cached('hasRightAlignedPageNumbers', () => Promise.resolve(value));
        await super.setHasRightAlignedPageNumbers(value);
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

    /** @returns {Promise<number>} */
    get maximumStructureLevel() { return this._cached('maximumStructureLevel', () => super.getMaximumStructureLevel()); }

    /** @param {number} value @returns {Promise<void>} */
    async setMaximumStructureLevel(value) {
        this._invalidateCache('maximumStructureLevel');
        this._cached('maximumStructureLevel', () => Promise.resolve(value));
        await super.setMaximumStructureLevel(value);
    }

    /** @returns {Promise<number>} */
    get minimumStructureLevel() { return this._cached('minimumStructureLevel', () => super.getMinimumStructureLevel()); }

    /** @param {number} value @returns {Promise<void>} */
    async setMinimumStructureLevel(value) {
        this._invalidateCache('minimumStructureLevel');
        this._cached('minimumStructureLevel', () => Promise.resolve(value));
        await super.setMinimumStructureLevel(value);
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
    get title() { return this._cached('title', () => super.getTitle()); }

    /** @param {string} value @returns {Promise<void>} */
    async setTitle(value) {
        this._invalidateCache('title');
        this._cached('title', () => Promise.resolve(value));
        await super.setTitle(value);
    }
}

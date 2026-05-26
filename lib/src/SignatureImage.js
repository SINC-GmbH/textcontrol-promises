import { SignatureImageBase } from './generated/SignatureImageBase.js';

export class SignatureImage extends SignatureImageBase {
    /** @returns {Promise<number>} */
    get exportCompressionQuality() { return this._cached('exportCompressionQuality', () => super.getExportCompressionQuality()); }

    /** @param {number} value @returns {Promise<void>} */
    async setExportCompressionQuality(value) {
        this._invalidateCache('exportCompressionQuality');
        this._cached('exportCompressionQuality', () => Promise.resolve(value));
        await super.setExportCompressionQuality(value);
    }

    /** @returns {Promise<number>} */
    get exportMaxResolution() { return this._cached('exportMaxResolution', () => super.getExportMaxResolution()); }

    /** @param {number} value @returns {Promise<void>} */
    async setExportMaxResolution(value) {
        this._invalidateCache('exportMaxResolution');
        this._cached('exportMaxResolution', () => Promise.resolve(value));
        await super.setExportMaxResolution(value);
    }
}

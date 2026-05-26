import { HeaderFooterBase } from './generated/HeaderFooterBase.js';

export class HeaderFooter extends HeaderFooterBase {
    /** @returns {Promise<boolean>} */
    get connectedToPrevious() { return this._cached('connectedToPrevious', () => super.getConnectedToPrevious()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setConnectedToPrevious(value) {
        this._invalidateCache('connectedToPrevious');
        this._cached('connectedToPrevious', () => Promise.resolve(value));
        await super.setConnectedToPrevious(value);
    }

    /** @returns {Promise<number>} */
    get distance() { return this._cached('distance', () => super.getDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setDistance(value) {
        this._invalidateCache('distance');
        this._cached('distance', () => Promise.resolve(value));
        await super.setDistance(value);
    }
}

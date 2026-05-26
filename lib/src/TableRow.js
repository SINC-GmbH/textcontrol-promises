import { TableRowBase } from './generated/TableRowBase.js';

export class TableRow extends TableRowBase {
    /** @returns {Promise<boolean>} */
    get allowPageBreak() { return this._cached('allowPageBreak', () => super.getAllowPageBreak()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setAllowPageBreak(value) {
        this._invalidateCache('allowPageBreak');
        this._cached('allowPageBreak', () => Promise.resolve(value));
        await super.setAllowPageBreak(value);
    }

    /** @returns {Promise<boolean>} */
    get isHeader() { return this._cached('isHeader', () => super.getIsHeader()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setIsHeader(value) {
        this._invalidateCache('isHeader');
        this._cached('isHeader', () => Promise.resolve(value));
        await super.setIsHeader(value);
    }

    /** @returns {Promise<number>} */
    get minimumHeight() { return this._cached('minimumHeight', () => super.getMinimumHeight()); }

    /** @param {number} value @returns {Promise<void>} */
    async setMinimumHeight(value) {
        this._invalidateCache('minimumHeight');
        this._cached('minimumHeight', () => Promise.resolve(value));
        await super.setMinimumHeight(value);
    }
}

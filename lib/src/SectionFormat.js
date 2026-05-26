import { SectionFormatBase } from './generated/SectionFormatBase.js';

export class SectionFormat extends SectionFormatBase {
    /** @returns {Promise<*>} */
    get breakKind() { return this._cached('breakKind', () => super.getBreakKind()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBreakKind(value) {
        this._invalidateCache('breakKind');
        this._cached('breakKind', () => Promise.resolve(value));
        await super.setBreakKind(value);
    }

    /** @returns {Promise<*>} */
    get columnLineColor() { return this._cached('columnLineColor', () => super.getColumnLineColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setColumnLineColor(value) {
        this._invalidateCache('columnLineColor');
        this._cached('columnLineColor', () => Promise.resolve(value));
        await super.setColumnLineColor(value);
    }

    /** @returns {Promise<number>} */
    get columnLineWidth() { return this._cached('columnLineWidth', () => super.getColumnLineWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setColumnLineWidth(value) {
        this._invalidateCache('columnLineWidth');
        this._cached('columnLineWidth', () => Promise.resolve(value));
        await super.setColumnLineWidth(value);
    }

    /** @returns {Promise<*>} */
    get columnWidths() { return this._cached('columnWidths', () => super.getColumnWidths()); }

    /** @param {*} value @returns {Promise<void>} */
    async setColumnWidths(value) {
        this._invalidateCache('columnWidths');
        this._cached('columnWidths', () => Promise.resolve(value));
        await super.setColumnWidths(value);
    }

    /** @returns {Promise<number>} */
    get columns() { return this._cached('columns', () => super.getColumns()); }

    /** @param {number} value @returns {Promise<void>} */
    async setColumns(value) {
        this._invalidateCache('columns');
        this._cached('columns', () => Promise.resolve(value));
        await super.setColumns(value);
    }

    /** @returns {Promise<boolean>} */
    get equalColumnWidth() { return this._cached('equalColumnWidth', () => super.getEqualColumnWidth()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setEqualColumnWidth(value) {
        this._invalidateCache('equalColumnWidth');
        this._cached('equalColumnWidth', () => Promise.resolve(value));
        await super.setEqualColumnWidth(value);
    }

    /** @returns {Promise<boolean>} */
    get landscape() { return this._cached('landscape', () => super.getLandscape()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setLandscape(value) {
        this._invalidateCache('landscape');
        this._cached('landscape', () => Promise.resolve(value));
        await super.setLandscape(value);
    }

    /** @returns {Promise<boolean>} */
    get restartPageNumbering() { return this._cached('restartPageNumbering', () => super.getRestartPageNumbering()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setRestartPageNumbering(value) {
        this._invalidateCache('restartPageNumbering');
        this._cached('restartPageNumbering', () => Promise.resolve(value));
        await super.setRestartPageNumbering(value);
    }
}

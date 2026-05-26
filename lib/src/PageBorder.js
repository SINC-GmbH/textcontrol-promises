import { PageBorderBase } from './generated/PageBorderBase.js';

export class PageBorder extends PageBorderBase {
    /** @returns {Promise<number>} */
    get bottomDistance() { return this._cached('bottomDistance', () => super.getBottomDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setBottomDistance(value) {
        this._invalidateCache('bottomDistance');
        this._cached('bottomDistance', () => Promise.resolve(value));
        await super.setBottomDistance(value);
    }

    /** @returns {Promise<*>} */
    get bottomLineColor() { return this._cached('bottomLineColor', () => super.getBottomLineColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBottomLineColor(value) {
        this._invalidateCache('bottomLineColor');
        this._cached('bottomLineColor', () => Promise.resolve(value));
        await super.setBottomLineColor(value);
    }

    /** @returns {Promise<number>} */
    get bottomLineWidth() { return this._cached('bottomLineWidth', () => super.getBottomLineWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setBottomLineWidth(value) {
        this._invalidateCache('bottomLineWidth');
        this._cached('bottomLineWidth', () => Promise.resolve(value));
        await super.setBottomLineWidth(value);
    }

    /** @returns {Promise<boolean>} */
    get firstPageOnly() { return this._cached('firstPageOnly', () => super.getFirstPageOnly()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setFirstPageOnly(value) {
        this._invalidateCache('firstPageOnly');
        this._cached('firstPageOnly', () => Promise.resolve(value));
        await super.setFirstPageOnly(value);
    }

    /** @returns {Promise<number>} */
    get leftDistance() { return this._cached('leftDistance', () => super.getLeftDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setLeftDistance(value) {
        this._invalidateCache('leftDistance');
        this._cached('leftDistance', () => Promise.resolve(value));
        await super.setLeftDistance(value);
    }

    /** @returns {Promise<*>} */
    get leftLineColor() { return this._cached('leftLineColor', () => super.getLeftLineColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setLeftLineColor(value) {
        this._invalidateCache('leftLineColor');
        this._cached('leftLineColor', () => Promise.resolve(value));
        await super.setLeftLineColor(value);
    }

    /** @returns {Promise<number>} */
    get leftLineWidth() { return this._cached('leftLineWidth', () => super.getLeftLineWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setLeftLineWidth(value) {
        this._invalidateCache('leftLineWidth');
        this._cached('leftLineWidth', () => Promise.resolve(value));
        await super.setLeftLineWidth(value);
    }

    /** @returns {Promise<boolean>} */
    get measureFromText() { return this._cached('measureFromText', () => super.getMeasureFromText()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setMeasureFromText(value) {
        this._invalidateCache('measureFromText');
        this._cached('measureFromText', () => Promise.resolve(value));
        await super.setMeasureFromText(value);
    }

    /** @returns {Promise<boolean>} */
    get omitFirstPage() { return this._cached('omitFirstPage', () => super.getOmitFirstPage()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setOmitFirstPage(value) {
        this._invalidateCache('omitFirstPage');
        this._cached('omitFirstPage', () => Promise.resolve(value));
        await super.setOmitFirstPage(value);
    }

    /** @returns {Promise<number>} */
    get rightDistance() { return this._cached('rightDistance', () => super.getRightDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setRightDistance(value) {
        this._invalidateCache('rightDistance');
        this._cached('rightDistance', () => Promise.resolve(value));
        await super.setRightDistance(value);
    }

    /** @returns {Promise<*>} */
    get rightLineColor() { return this._cached('rightLineColor', () => super.getRightLineColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setRightLineColor(value) {
        this._invalidateCache('rightLineColor');
        this._cached('rightLineColor', () => Promise.resolve(value));
        await super.setRightLineColor(value);
    }

    /** @returns {Promise<number>} */
    get rightLineWidth() { return this._cached('rightLineWidth', () => super.getRightLineWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setRightLineWidth(value) {
        this._invalidateCache('rightLineWidth');
        this._cached('rightLineWidth', () => Promise.resolve(value));
        await super.setRightLineWidth(value);
    }

    /** @returns {Promise<boolean>} */
    get surroundFooter() { return this._cached('surroundFooter', () => super.getSurroundFooter()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setSurroundFooter(value) {
        this._invalidateCache('surroundFooter');
        this._cached('surroundFooter', () => Promise.resolve(value));
        await super.setSurroundFooter(value);
    }

    /** @returns {Promise<boolean>} */
    get surroundHeader() { return this._cached('surroundHeader', () => super.getSurroundHeader()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setSurroundHeader(value) {
        this._invalidateCache('surroundHeader');
        this._cached('surroundHeader', () => Promise.resolve(value));
        await super.setSurroundHeader(value);
    }

    /** @returns {Promise<number>} */
    get topDistance() { return this._cached('topDistance', () => super.getTopDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setTopDistance(value) {
        this._invalidateCache('topDistance');
        this._cached('topDistance', () => Promise.resolve(value));
        await super.setTopDistance(value);
    }

    /** @returns {Promise<*>} */
    get topLineColor() { return this._cached('topLineColor', () => super.getTopLineColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setTopLineColor(value) {
        this._invalidateCache('topLineColor');
        this._cached('topLineColor', () => Promise.resolve(value));
        await super.setTopLineColor(value);
    }

    /** @returns {Promise<number>} */
    get topLineWidth() { return this._cached('topLineWidth', () => super.getTopLineWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setTopLineWidth(value) {
        this._invalidateCache('topLineWidth');
        this._cached('topLineWidth', () => Promise.resolve(value));
        await super.setTopLineWidth(value);
    }
}

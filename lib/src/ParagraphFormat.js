import { ParagraphFormatBase } from './generated/ParagraphFormatBase.js';

export class ParagraphFormat extends ParagraphFormatBase {
    /** @returns {Promise<number>} */
    get absoluteLineSpacing() { return this._cached('absoluteLineSpacing', () => super.getAbsoluteLineSpacing()); }

    /** @param {number} value @returns {Promise<void>} */
    async setAbsoluteLineSpacing(value) {
        this._invalidateCache('absoluteLineSpacing');
        this._cached('absoluteLineSpacing', () => Promise.resolve(value));
        await super.setAbsoluteLineSpacing(value);
    }

    /** @returns {Promise<*>} */
    get alignment() { return this._cached('alignment', () => super.getAlignment()); }

    /** @param {*} value @returns {Promise<void>} */
    async setAlignment(value) {
        this._invalidateCache('alignment');
        this._cached('alignment', () => Promise.resolve(value));
        await super.setAlignment(value);
    }

    /** @returns {Promise<*>} */
    get backColor() { return this._cached('backColor', () => super.getBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setBackColor(value) {
        this._invalidateCache('backColor');
        this._cached('backColor', () => Promise.resolve(value));
        await super.setBackColor(value);
    }

    /** @returns {Promise<number>} */
    get bottomDistance() { return this._cached('bottomDistance', () => super.getBottomDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setBottomDistance(value) {
        this._invalidateCache('bottomDistance');
        this._cached('bottomDistance', () => Promise.resolve(value));
        await super.setBottomDistance(value);
    }

    /** @returns {Promise<*>} */
    get direction() { return this._cached('direction', () => super.getDirection()); }

    /** @param {*} value @returns {Promise<void>} */
    async setDirection(value) {
        this._invalidateCache('direction');
        this._cached('direction', () => Promise.resolve(value));
        await super.setDirection(value);
    }

    /** @returns {Promise<*>} */
    get frame() { return this._cached('frame', () => super.getFrame()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFrame(value) {
        this._invalidateCache('frame');
        this._cached('frame', () => Promise.resolve(value));
        await super.setFrame(value);
    }

    /** @returns {Promise<number>} */
    get frameDistance() { return this._cached('frameDistance', () => super.getFrameDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setFrameDistance(value) {
        this._invalidateCache('frameDistance');
        this._cached('frameDistance', () => Promise.resolve(value));
        await super.setFrameDistance(value);
    }

    /** @returns {Promise<*>} */
    get frameLineColor() { return this._cached('frameLineColor', () => super.getFrameLineColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFrameLineColor(value) {
        this._invalidateCache('frameLineColor');
        this._cached('frameLineColor', () => Promise.resolve(value));
        await super.setFrameLineColor(value);
    }

    /** @returns {Promise<number>} */
    get frameLineWidth() { return this._cached('frameLineWidth', () => super.getFrameLineWidth()); }

    /** @param {number} value @returns {Promise<void>} */
    async setFrameLineWidth(value) {
        this._invalidateCache('frameLineWidth');
        this._cached('frameLineWidth', () => Promise.resolve(value));
        await super.setFrameLineWidth(value);
    }

    /** @returns {Promise<*>} */
    get frameStyle() { return this._cached('frameStyle', () => super.getFrameStyle()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFrameStyle(value) {
        this._invalidateCache('frameStyle');
        this._cached('frameStyle', () => Promise.resolve(value));
        await super.setFrameStyle(value);
    }

    /** @returns {Promise<number>} */
    get hangingIndent() { return this._cached('hangingIndent', () => super.getHangingIndent()); }

    /** @param {number} value @returns {Promise<void>} */
    async setHangingIndent(value) {
        this._invalidateCache('hangingIndent');
        this._cached('hangingIndent', () => Promise.resolve(value));
        await super.setHangingIndent(value);
    }

    /** @returns {Promise<*>} */
    get justification() { return this._cached('justification', () => super.getJustification()); }

    /** @param {*} value @returns {Promise<void>} */
    async setJustification(value) {
        this._invalidateCache('justification');
        this._cached('justification', () => Promise.resolve(value));
        await super.setJustification(value);
    }

    /** @returns {Promise<boolean>} */
    get keepLinesTogether() { return this._cached('keepLinesTogether', () => super.getKeepLinesTogether()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setKeepLinesTogether(value) {
        this._invalidateCache('keepLinesTogether');
        this._cached('keepLinesTogether', () => Promise.resolve(value));
        await super.setKeepLinesTogether(value);
    }

    /** @returns {Promise<boolean>} */
    get keepWithNext() { return this._cached('keepWithNext', () => super.getKeepWithNext()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setKeepWithNext(value) {
        this._invalidateCache('keepWithNext');
        this._cached('keepWithNext', () => Promise.resolve(value));
        await super.setKeepWithNext(value);
    }

    /** @returns {Promise<number>} */
    get leftIndent() { return this._cached('leftIndent', () => super.getLeftIndent()); }

    /** @param {number} value @returns {Promise<void>} */
    async setLeftIndent(value) {
        this._invalidateCache('leftIndent');
        this._cached('leftIndent', () => Promise.resolve(value));
        await super.setLeftIndent(value);
    }

    /** @returns {Promise<number>} */
    get lineSpacing() { return this._cached('lineSpacing', () => super.getLineSpacing()); }

    /** @param {number} value @returns {Promise<void>} */
    async setLineSpacing(value) {
        this._invalidateCache('lineSpacing');
        this._cached('lineSpacing', () => Promise.resolve(value));
        await super.setLineSpacing(value);
    }

    /** @returns {Promise<boolean>} */
    get pageBreakBefore() { return this._cached('pageBreakBefore', () => super.getPageBreakBefore()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setPageBreakBefore(value) {
        this._invalidateCache('pageBreakBefore');
        this._cached('pageBreakBefore', () => Promise.resolve(value));
        await super.setPageBreakBefore(value);
    }

    /** @returns {Promise<number>} */
    get rightIndent() { return this._cached('rightIndent', () => super.getRightIndent()); }

    /** @param {number} value @returns {Promise<void>} */
    async setRightIndent(value) {
        this._invalidateCache('rightIndent');
        this._cached('rightIndent', () => Promise.resolve(value));
        await super.setRightIndent(value);
    }

    /** @returns {Promise<number>} */
    get structureLevel() { return this._cached('structureLevel', () => super.getStructureLevel()); }

    /** @param {number} value @returns {Promise<void>} */
    async setStructureLevel(value) {
        this._invalidateCache('structureLevel');
        this._cached('structureLevel', () => Promise.resolve(value));
        await super.setStructureLevel(value);
    }

    /** @returns {Promise<*>} */
    get tabPositions() { return this._cached('tabPositions', () => super.getTabPositions()); }

    /** @param {*} value @returns {Promise<void>} */
    async setTabPositions(value) {
        this._invalidateCache('tabPositions');
        this._cached('tabPositions', () => Promise.resolve(value));
        await super.setTabPositions(value);
    }

    /** @returns {Promise<*>} */
    get tabTypes() { return this._cached('tabTypes', () => super.getTabTypes()); }

    /** @param {*} value @returns {Promise<void>} */
    async setTabTypes(value) {
        this._invalidateCache('tabTypes');
        this._cached('tabTypes', () => Promise.resolve(value));
        await super.setTabTypes(value);
    }

    /** @returns {Promise<number>} */
    get topDistance() { return this._cached('topDistance', () => super.getTopDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setTopDistance(value) {
        this._invalidateCache('topDistance');
        this._cached('topDistance', () => Promise.resolve(value));
        await super.setTopDistance(value);
    }

    /** @returns {Promise<number>} */
    get widowOrphanLines() { return this._cached('widowOrphanLines', () => super.getWidowOrphanLines()); }

    /** @param {number} value @returns {Promise<void>} */
    async setWidowOrphanLines(value) {
        this._invalidateCache('widowOrphanLines');
        this._cached('widowOrphanLines', () => Promise.resolve(value));
        await super.setWidowOrphanLines(value);
    }
}

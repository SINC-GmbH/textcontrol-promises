import { InputFormatBase } from './generated/InputFormatBase.js';

export class InputFormat extends InputFormatBase {
    /** @returns {Promise<boolean>} */
    get allFrameLines() { return this._cached('allFrameLines', () => super.getAllFrameLines()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setAllFrameLines(value) {
        this._invalidateCache('allFrameLines');
        this._cached('allFrameLines', () => Promise.resolve(value));
        await super.setAllFrameLines(value);
    }

    /** @returns {Promise<boolean>} */
    get bold() { return this._cached('bold', () => super.getBold()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setBold(value) {
        this._invalidateCache('bold');
        this._cached('bold', () => Promise.resolve(value));
        await super.setBold(value);
    }

    /** @returns {Promise<boolean>} */
    get bottomAligned() { return this._cached('bottomAligned', () => super.getBottomAligned()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setBottomAligned(value) {
        this._invalidateCache('bottomAligned');
        this._cached('bottomAligned', () => Promise.resolve(value));
        await super.setBottomAligned(value);
    }

    /** @returns {Promise<number>} */
    get bottomDistance() { return this._cached('bottomDistance', () => super.getBottomDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setBottomDistance(value) {
        this._invalidateCache('bottomDistance');
        this._cached('bottomDistance', () => Promise.resolve(value));
        await super.setBottomDistance(value);
    }

    /** @returns {Promise<boolean>} */
    get boxFrame() { return this._cached('boxFrame', () => super.getBoxFrame()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setBoxFrame(value) {
        this._invalidateCache('boxFrame');
        this._cached('boxFrame', () => Promise.resolve(value));
        await super.setBoxFrame(value);
    }

    /** @returns {Promise<string>} */
    get bulletCharacter() { return this._cached('bulletCharacter', () => super.getBulletCharacter()); }

    /** @param {string} value @returns {Promise<void>} */
    async setBulletCharacter(value) {
        this._invalidateCache('bulletCharacter');
        this._cached('bulletCharacter', () => Promise.resolve(value));
        await super.setBulletCharacter(value);
    }

    /** @returns {Promise<boolean>} */
    get bulletedList() { return this._cached('bulletedList', () => super.getBulletedList()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setBulletedList(value) {
        this._invalidateCache('bulletedList');
        this._cached('bulletedList', () => Promise.resolve(value));
        await super.setBulletedList(value);
    }

    /** @returns {Promise<boolean>} */
    get centered() { return this._cached('centered', () => super.getCentered()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setCentered(value) {
        this._invalidateCache('centered');
        this._cached('centered', () => Promise.resolve(value));
        await super.setCentered(value);
    }

    /** @returns {Promise<string>} */
    get fontFamily() { return this._cached('fontFamily', () => super.getFontFamily()); }

    /** @param {string} value @returns {Promise<void>} */
    async setFontFamily(value) {
        this._invalidateCache('fontFamily');
        this._cached('fontFamily', () => Promise.resolve(value));
        await super.setFontFamily(value);
    }

    /** @returns {Promise<number>} */
    get fontSize() { return this._cached('fontSize', () => super.getFontSize()); }

    /** @param {number} value @returns {Promise<void>} */
    async setFontSize(value) {
        this._invalidateCache('fontSize');
        this._cached('fontSize', () => Promise.resolve(value));
        await super.setFontSize(value);
    }

    /** @returns {Promise<*>} */
    get frameFillColor() { return this._cached('frameFillColor', () => super.getFrameFillColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setFrameFillColor(value) {
        this._invalidateCache('frameFillColor');
        this._cached('frameFillColor', () => Promise.resolve(value));
        await super.setFrameFillColor(value);
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

    /** @returns {Promise<number>} */
    get hangingIndent() { return this._cached('hangingIndent', () => super.getHangingIndent()); }

    /** @param {number} value @returns {Promise<void>} */
    async setHangingIndent(value) {
        this._invalidateCache('hangingIndent');
        this._cached('hangingIndent', () => Promise.resolve(value));
        await super.setHangingIndent(value);
    }

    /** @returns {Promise<boolean>} */
    get innerHorizontalFrameLines() { return this._cached('innerHorizontalFrameLines', () => super.getInnerHorizontalFrameLines()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setInnerHorizontalFrameLines(value) {
        this._invalidateCache('innerHorizontalFrameLines');
        this._cached('innerHorizontalFrameLines', () => Promise.resolve(value));
        await super.setInnerHorizontalFrameLines(value);
    }

    /** @returns {Promise<boolean>} */
    get innerVerticalFrameLines() { return this._cached('innerVerticalFrameLines', () => super.getInnerVerticalFrameLines()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setInnerVerticalFrameLines(value) {
        this._invalidateCache('innerVerticalFrameLines');
        this._cached('innerVerticalFrameLines', () => Promise.resolve(value));
        await super.setInnerVerticalFrameLines(value);
    }

    /** @returns {Promise<boolean>} */
    get italic() { return this._cached('italic', () => super.getItalic()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setItalic(value) {
        this._invalidateCache('italic');
        this._cached('italic', () => Promise.resolve(value));
        await super.setItalic(value);
    }

    /** @returns {Promise<boolean>} */
    get justified() { return this._cached('justified', () => super.getJustified()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setJustified(value) {
        this._invalidateCache('justified');
        this._cached('justified', () => Promise.resolve(value));
        await super.setJustified(value);
    }

    /** @returns {Promise<boolean>} */
    get leftAligned() { return this._cached('leftAligned', () => super.getLeftAligned()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setLeftAligned(value) {
        this._invalidateCache('leftAligned');
        this._cached('leftAligned', () => Promise.resolve(value));
        await super.setLeftAligned(value);
    }

    /** @returns {Promise<boolean>} */
    get leftFrameLine() { return this._cached('leftFrameLine', () => super.getLeftFrameLine()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setLeftFrameLine(value) {
        this._invalidateCache('leftFrameLine');
        this._cached('leftFrameLine', () => Promise.resolve(value));
        await super.setLeftFrameLine(value);
    }

    /** @returns {Promise<number>} */
    get leftIndent() { return this._cached('leftIndent', () => super.getLeftIndent()); }

    /** @param {number} value @returns {Promise<void>} */
    async setLeftIndent(value) {
        this._invalidateCache('leftIndent');
        this._cached('leftIndent', () => Promise.resolve(value));
        await super.setLeftIndent(value);
    }

    /** @returns {Promise<boolean>} */
    get leftToRight() { return this._cached('leftToRight', () => super.getLeftToRight()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setLeftToRight(value) {
        this._invalidateCache('leftToRight');
        this._cached('leftToRight', () => Promise.resolve(value));
        await super.setLeftToRight(value);
    }

    /** @returns {Promise<number>} */
    get linespacing() { return this._cached('linespacing', () => super.getLinespacing()); }

    /** @param {number} value @returns {Promise<void>} */
    async setLinespacing(value) {
        this._invalidateCache('linespacing');
        this._cached('linespacing', () => Promise.resolve(value));
        await super.setLinespacing(value);
    }

    /** @returns {Promise<boolean>} */
    get numberedList() { return this._cached('numberedList', () => super.getNumberedList()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setNumberedList(value) {
        this._invalidateCache('numberedList');
        this._cached('numberedList', () => Promise.resolve(value));
        await super.setNumberedList(value);
    }

    /** @returns {Promise<*>} */
    get numberedListFormat() { return this._cached('numberedListFormat', () => super.getNumberedListFormat()); }

    /** @param {*} value @returns {Promise<void>} */
    async setNumberedListFormat(value) {
        this._invalidateCache('numberedListFormat');
        this._cached('numberedListFormat', () => Promise.resolve(value));
        await super.setNumberedListFormat(value);
    }

    /** @returns {Promise<boolean>} */
    get rightAligned() { return this._cached('rightAligned', () => super.getRightAligned()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setRightAligned(value) {
        this._invalidateCache('rightAligned');
        this._cached('rightAligned', () => Promise.resolve(value));
        await super.setRightAligned(value);
    }

    /** @returns {Promise<boolean>} */
    get rightFrameLine() { return this._cached('rightFrameLine', () => super.getRightFrameLine()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setRightFrameLine(value) {
        this._invalidateCache('rightFrameLine');
        this._cached('rightFrameLine', () => Promise.resolve(value));
        await super.setRightFrameLine(value);
    }

    /** @returns {Promise<number>} */
    get rightIndent() { return this._cached('rightIndent', () => super.getRightIndent()); }

    /** @param {number} value @returns {Promise<void>} */
    async setRightIndent(value) {
        this._invalidateCache('rightIndent');
        this._cached('rightIndent', () => Promise.resolve(value));
        await super.setRightIndent(value);
    }

    /** @returns {Promise<boolean>} */
    get rightToLeft() { return this._cached('rightToLeft', () => super.getRightToLeft()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setRightToLeft(value) {
        this._invalidateCache('rightToLeft');
        this._cached('rightToLeft', () => Promise.resolve(value));
        await super.setRightToLeft(value);
    }

    /** @returns {Promise<boolean>} */
    get strikeout() { return this._cached('strikeout', () => super.getStrikeout()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setStrikeout(value) {
        this._invalidateCache('strikeout');
        this._cached('strikeout', () => Promise.resolve(value));
        await super.setStrikeout(value);
    }

    /** @returns {Promise<number>} */
    get structureLevel() { return this._cached('structureLevel', () => super.getStructureLevel()); }

    /** @param {number} value @returns {Promise<void>} */
    async setStructureLevel(value) {
        this._invalidateCache('structureLevel');
        this._cached('structureLevel', () => Promise.resolve(value));
        await super.setStructureLevel(value);
    }

    /** @returns {Promise<boolean>} */
    get structuredList() { return this._cached('structuredList', () => super.getStructuredList()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setStructuredList(value) {
        this._invalidateCache('structuredList');
        this._cached('structuredList', () => Promise.resolve(value));
        await super.setStructuredList(value);
    }

    /** @returns {Promise<*>} */
    get structuredListFormat() { return this._cached('structuredListFormat', () => super.getStructuredListFormat()); }

    /** @param {*} value @returns {Promise<void>} */
    async setStructuredListFormat(value) {
        this._invalidateCache('structuredListFormat');
        this._cached('structuredListFormat', () => Promise.resolve(value));
        await super.setStructuredListFormat(value);
    }

    /** @returns {Promise<string>} */
    get styleName() { return this._cached('styleName', () => super.getStyleName()); }

    /** @param {string} value @returns {Promise<void>} */
    async setStyleName(value) {
        this._invalidateCache('styleName');
        this._cached('styleName', () => Promise.resolve(value));
        await super.setStyleName(value);
    }

    /** @returns {Promise<boolean>} */
    get subscript() { return this._cached('subscript', () => super.getSubscript()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setSubscript(value) {
        this._invalidateCache('subscript');
        this._cached('subscript', () => Promise.resolve(value));
        await super.setSubscript(value);
    }

    /** @returns {Promise<boolean>} */
    get superscript() { return this._cached('superscript', () => super.getSuperscript()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setSuperscript(value) {
        this._invalidateCache('superscript');
        this._cached('superscript', () => Promise.resolve(value));
        await super.setSuperscript(value);
    }

    /** @returns {Promise<*>} */
    get textBackColor() { return this._cached('textBackColor', () => super.getTextBackColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setTextBackColor(value) {
        this._invalidateCache('textBackColor');
        this._cached('textBackColor', () => Promise.resolve(value));
        await super.setTextBackColor(value);
    }

    /** @returns {Promise<*>} */
    get textColor() { return this._cached('textColor', () => super.getTextColor()); }

    /** @param {*} value @returns {Promise<void>} */
    async setTextColor(value) {
        this._invalidateCache('textColor');
        this._cached('textColor', () => Promise.resolve(value));
        await super.setTextColor(value);
    }

    /** @returns {Promise<boolean>} */
    get topAligned() { return this._cached('topAligned', () => super.getTopAligned()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setTopAligned(value) {
        this._invalidateCache('topAligned');
        this._cached('topAligned', () => Promise.resolve(value));
        await super.setTopAligned(value);
    }

    /** @returns {Promise<number>} */
    get topDistance() { return this._cached('topDistance', () => super.getTopDistance()); }

    /** @param {number} value @returns {Promise<void>} */
    async setTopDistance(value) {
        this._invalidateCache('topDistance');
        this._cached('topDistance', () => Promise.resolve(value));
        await super.setTopDistance(value);
    }

    /** @returns {Promise<boolean>} */
    get topFrameLine() { return this._cached('topFrameLine', () => super.getTopFrameLine()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setTopFrameLine(value) {
        this._invalidateCache('topFrameLine');
        this._cached('topFrameLine', () => Promise.resolve(value));
        await super.setTopFrameLine(value);
    }

    /** @returns {Promise<boolean>} */
    get underline() { return this._cached('underline', () => super.getUnderline()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setUnderline(value) {
        this._invalidateCache('underline');
        this._cached('underline', () => Promise.resolve(value));
        await super.setUnderline(value);
    }

    /** @returns {Promise<*>} */
    get underlineStyle() { return this._cached('underlineStyle', () => super.getUnderlineStyle()); }

    /** @param {*} value @returns {Promise<void>} */
    async setUnderlineStyle(value) {
        this._invalidateCache('underlineStyle');
        this._cached('underlineStyle', () => Promise.resolve(value));
        await super.setUnderlineStyle(value);
    }

    /** @returns {Promise<boolean>} */
    get verticallyCentered() { return this._cached('verticallyCentered', () => super.getVerticallyCentered()); }

    /** @param {boolean} value @returns {Promise<void>} */
    async setVerticallyCentered(value) {
        this._invalidateCache('verticallyCentered');
        this._cached('verticallyCentered', () => Promise.resolve(value));
        await super.setVerticallyCentered(value);
    }
}

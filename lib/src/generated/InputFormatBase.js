import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/InputFormat.d.ts.
 */
export class InputFormatBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.InputFormat} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.InputFormat} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.InputFormat} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getAllFrameLines', 'getBold', 'getBottomAligned', 'getBottomDistance', 'getBoxFrame', 'getBulletCharacter', 'getBulletedList', 'getCentered', 'getFontFamily', 'getFontSize', 'getFrameFillColor', 'getFrameLineColor', 'getFrameLineWidth', 'getHangingIndent', 'getInnerHorizontalFrameLines', 'getInnerVerticalFrameLines', 'getItalic', 'getJustified', 'getLeftAligned', 'getLeftFrameLine', 'getLeftIndent', 'getLeftToRight', 'getLinespacing', 'getNumberFormats', 'getNumberedList', 'getNumberedListFormat', 'getRightAligned', 'getRightFrameLine', 'getRightIndent', 'getRightToLeft', 'getStrikeout', 'getStructureLevel', 'getStructuredList', 'getStructuredListFormat', 'getStyleName', 'getStyleNames', 'getSubscript', 'getSuperscript', 'getSupportedFontFamilies', 'getSupportedFontSizes', 'getSupportedUnderlineStyles', 'getTextBackColor', 'getTextColor', 'getTopAligned', 'getTopDistance', 'getTopFrameLine', 'getUnderline', 'getUnderlineStyle', 'getVerticallyCentered', 'setAllFrameLines', 'setBold', 'setBottomAligned', 'setBottomDistance', 'setBoxFrame', 'setBulletCharacter', 'setBulletedList', 'setCentered', 'setFontFamily', 'setFontSize', 'setFrameFillColor', 'setFrameLineColor', 'setFrameLineWidth', 'setHangingIndent', 'setInnerHorizontalFrameLines', 'setInnerVerticalFrameLines', 'setItalic', 'setJustified', 'setLeftAligned', 'setLeftFrameLine', 'setLeftIndent', 'setLeftToRight', 'setLinespacing', 'setNumberedList', 'setNumberedListFormat', 'setRightAligned', 'setRightFrameLine', 'setRightIndent', 'setRightToLeft', 'setStrikeout', 'setStructureLevel', 'setStructuredList', 'setStructuredListFormat', 'setStyleName', 'setSubscript', 'setSuperscript', 'setTextBackColor', 'setTextColor', 'setTopAligned', 'setTopDistance', 'setTopFrameLine', 'setUnderline', 'setUnderlineStyle', 'setVerticallyCentered');
    }

    /**
     * The addEventListener function registers event listener functions on the InputFormat object.
     * @template {keyof TXTextControlTypeDefinition.InputFormatEventMap} T
     * @param {T} eventName
     * @param {TXTextControlTypeDefinition.InputFormatEventMap[T]} callback
     */
    addEventListener(eventName, callback) {
        return this._txInternal.addEventListener(eventName, callback);
    }

    /**
     * Gets a value specifying whether all frame lines, including all inner frame lines, are set for the selected text.
     * @returns {Promise<boolean>}
     */
    getAllFrameLines() {
        return RequestHelper.Promise(
            this._txInternal.getAllFrameLines,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is bold at the current input position.
     * @returns {Promise<boolean>}
     */
    getBold() {
        return RequestHelper.Promise(
            this._txInternal.getBold,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is bottom aligned at the current input position.
     * @returns {Promise<boolean>}
     */
    getBottomAligned() {
        return RequestHelper.Promise(
            this._txInternal.getBottomAligned,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets bottom's paragraph distance, in twips, at the current input position.
     * @returns {Promise<number>}
     */
    getBottomDistance() {
        return RequestHelper.Promise(
            this._txInternal.getBottomDistance,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether there is a complete frame around the text.
     * @returns {Promise<boolean>}
     */
    getBoxFrame() {
        return RequestHelper.Promise(
            this._txInternal.getBoxFrame,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the bullet character at the current input position.
     * @returns {Promise<string>}
     */
    getBulletCharacter() {
        return RequestHelper.Promise(
            this._txInternal.getBulletCharacter,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether there is a bulleted list at the current input position.
     * @returns {Promise<boolean>}
     */
    getBulletedList() {
        return RequestHelper.Promise(
            this._txInternal.getBulletedList,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is centered at the current input position.
     * @returns {Promise<boolean>}
     */
    getCentered() {
        return RequestHelper.Promise(
            this._txInternal.getCentered,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the font family at the current input position.
     * @returns {Promise<string>}
     */
    getFontFamily() {
        return RequestHelper.Promise(
            this._txInternal.getFontFamily,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the font's size, in points, at the current input position.
     * @returns {Promise<number>}
     */
    getFontSize() {
        return RequestHelper.Promise(
            this._txInternal.getFontSize,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color used to display the frame fill color at the current input position.
     * @returns {Promise<string>}
     */
    getFrameFillColor() {
        return RequestHelper.Promise(
            this._txInternal.getFrameFillColor,
            CallbackType.RequestColorStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color used to display the color of frame lines at the current text input position.
     * @returns {Promise<string>}
     */
    getFrameLineColor() {
        return RequestHelper.Promise(
            this._txInternal.getFrameLineColor,
            CallbackType.RequestColorStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the line width, in twips, of the paragraph's or table's frame at the current input position.
     * @returns {Promise<number>}
     */
    getFrameLineWidth() {
        return RequestHelper.Promise(
            this._txInternal.getFrameLineWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the hanging indent, in twips, at the current input position.
     * @returns {Promise<number>}
     */
    getHangingIndent() {
        return RequestHelper.Promise(
            this._txInternal.getHangingIndent,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether all inner horizontal frame lines are set for the selected text.
     * @returns {Promise<boolean>}
     */
    getInnerHorizontalFrameLines() {
        return RequestHelper.Promise(
            this._txInternal.getInnerHorizontalFrameLines,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether all inner vertical frame lines are set for the selected text.
     * @returns {Promise<boolean>}
     */
    getInnerVerticalFrameLines() {
        return RequestHelper.Promise(
            this._txInternal.getInnerVerticalFrameLines,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether the text is italic at the current input position.
     * @returns {Promise<boolean>}
     */
    getItalic() {
        return RequestHelper.Promise(
            this._txInternal.getItalic,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is justified at the current input position.
     * @returns {Promise<boolean>}
     */
    getJustified() {
        return RequestHelper.Promise(
            this._txInternal.getJustified,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is left aligned at the current input position.
     * @returns {Promise<boolean>}
     */
    getLeftAligned() {
        return RequestHelper.Promise(
            this._txInternal.getLeftAligned,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether there is a frame line at the left side of the text.
     * @returns {Promise<boolean>}
     */
    getLeftFrameLine() {
        return RequestHelper.Promise(
            this._txInternal.getLeftFrameLine,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the left indent, in twips, at the current input position.
     * @returns {Promise<number>}
     */
    getLeftIndent() {
        return RequestHelper.Promise(
            this._txInternal.getLeftIndent,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether the writung direction is left-to-right at the current input position.
     * @returns {Promise<boolean>}
     */
    getLeftToRight() {
        return RequestHelper.Promise(
            this._txInternal.getLeftToRight,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the line spacing, in percent, at the current input position.
     * @returns {Promise<number>}
     */
    getLinespacing() {
        return RequestHelper.Promise(
            this._txInternal.getLinespacing,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an array of all supported number formats for numbered and structured lists.
     * @returns {Promise<TXTextControlTypeDefinition.NumberFormat[]>}
     */
    getNumberFormats() {
        return RequestHelper.Promise(
            this._txInternal.getNumberFormats,
            CallbackType.RequestNumberFormatsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether there is a numbered list at the current input position.
     * @returns {Promise<boolean>}
     */
    getNumberedList() {
        return RequestHelper.Promise(
            this._txInternal.getNumberedList,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number format for a numbered list at the current input position.
     * @returns {Promise<TXTextControlTypeDefinition.NumberFormat>}
     */
    getNumberedListFormat() {
        return RequestHelper.Promise(
            this._txInternal.getNumberedListFormat,
            CallbackType.RequestNumberFormatCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is right aligned at the current input position.
     * @returns {Promise<boolean>}
     */
    getRightAligned() {
        return RequestHelper.Promise(
            this._txInternal.getRightAligned,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether there is a frame line at the right side of the text.
     * @returns {Promise<boolean>}
     */
    getRightFrameLine() {
        return RequestHelper.Promise(
            this._txInternal.getRightFrameLine,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the right indent, in twips, at the current input position.
     * @returns {Promise<number>}
     */
    getRightIndent() {
        return RequestHelper.Promise(
            this._txInternal.getRightIndent,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether the writing direction is right-to-left at the current input position.
     * @returns {Promise<boolean>}
     */
    getRightToLeft() {
        return RequestHelper.Promise(
            this._txInternal.getRightToLeft,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether the text is strikeout at the current input position.
     * @returns {Promise<boolean>}
     */
    getStrikeout() {
        return RequestHelper.Promise(
            this._txInternal.getStrikeout,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the structure level of all selected paragraphs.
     * @returns {Promise<number>}
     */
    getStructureLevel() {
        return RequestHelper.Promise(
            this._txInternal.getStructureLevel,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether there is a structured list at the current input position.
     * @returns {Promise<boolean>}
     */
    getStructuredList() {
        return RequestHelper.Promise(
            this._txInternal.getStructuredList,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number format for a structured list at the current input position.
     * @returns {Promise<TXTextControlTypeDefinition.NumberFormat>}
     */
    getStructuredListFormat() {
        return RequestHelper.Promise(
            this._txInternal.getStructuredListFormat,
            CallbackType.RequestNumberFormatCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the formatting style name at the current input position.
     * @returns {Promise<string>}
     */
    getStyleName() {
        return RequestHelper.Promise(
            this._txInternal.getStyleName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Returns an array of the names of all formatting styles, the document contains.
     * @returns {Promise<string[]>}
     */
    getStyleNames() {
        return RequestHelper.Promise(
            this._txInternal.getStyleNames,
            CallbackType.RequestStringsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is subscript at the current input position.
     * @returns {Promise<boolean>}
     */
    getSubscript() {
        return RequestHelper.Promise(
            this._txInternal.getSubscript,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is superscript at the current input position.
     * @returns {Promise<boolean>}
     */
    getSuperscript() {
        return RequestHelper.Promise(
            this._txInternal.getSuperscript,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Returns an array of strings specifying all supported fonts.
     * @returns {Promise<string[]>}
     */
    getSupportedFontFamilies() {
        return RequestHelper.Promise(
            this._txInternal.getSupportedFontFamilies,
            CallbackType.RequestStringsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an array of strings specifying all possible font sizes for the font at the text input position.
     * @param {string} fontFamily
     * @returns {Promise<number[]>}
     */
    getSupportedFontSizes(fontFamily) {
        return RequestHelper.Promise(
            this._txInternal.getSupportedFontSizes,
            CallbackType.RequestNumbersCallback,
            fontFamily,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an array of all supported underline styles.
     * @returns {Promise<number[]>}
     */
    getSupportedUnderlineStyles() {
        return RequestHelper.Promise(
            this._txInternal.getSupportedUnderlineStyles,
            CallbackType.RequestNumbersCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color used to display the text's background color at the current input position.
     * @returns {Promise<string>}
     */
    getTextBackColor() {
        return RequestHelper.Promise(
            this._txInternal.getTextBackColor,
            CallbackType.RequestColorStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color used to display the text at the current input position.
     * @returns {Promise<string>}
     */
    getTextColor() {
        return RequestHelper.Promise(
            this._txInternal.getTextColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is top aligned at the current input position.
     * @returns {Promise<boolean>}
     */
    getTopAligned() {
        return RequestHelper.Promise(
            this._txInternal.getTopAligned,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a top paragraph distance, in twips, at the current input position.
     * @returns {Promise<number>}
     */
    getTopDistance() {
        return RequestHelper.Promise(
            this._txInternal.getTopDistance,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether there is a frame line at the top of the text.
     * @returns {Promise<boolean>}
     */
    getTopFrameLine() {
        return RequestHelper.Promise(
            this._txInternal.getTopFrameLine,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is underlined at the current input position.
     * @returns {Promise<boolean>}
     */
    getUnderline() {
        return RequestHelper.Promise(
            this._txInternal.getUnderline,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying the style at the current input position.
     * @returns {Promise<TXTextControlTypeDefinition.FontUnderlineStyle>}
     */
    getUnderlineStyle() {
        return RequestHelper.Promise(
            this._txInternal.getUnderlineStyle,
            CallbackType.RequestFontUnderlineStyleCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value specifying whether text is vertically centered at the current text input position.
     * @returns {Promise<boolean>}
     */
    getVerticallyCentered() {
        return RequestHelper.Promise(
            this._txInternal.getVerticallyCentered,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * The removeListener function removes the specified event listener from the InputFormat object.
     * @template {keyof TXTextControlTypeDefinition.EventMap} T
     * @param {T} eventName
     * @param {TXTextControlTypeDefinition.EventMap[T]} callback
     */
    removeEventListener(eventName, callback) {
        return this._txInternal.removeEventListener(eventName, callback);
    }

    /**
     * Sets a value specifying whether all frame lines, including all inner frame lines, are set for the selected text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setAllFrameLines(value) {
        return RequestHelper.Promise(
            this._txInternal.setAllFrameLines,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is bold at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setBold(value) {
        return RequestHelper.Promise(
            this._txInternal.setBold,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is bottom aligned at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setBottomAligned(value) {
        return RequestHelper.Promise(
            this._txInternal.setBottomAligned,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a bottom paragraph distance, in twips, at the current input position.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setBottomDistance(value) {
        return RequestHelper.Promise(
            this._txInternal.setBottomDistance,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether there is a complete frame around the text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setBoxFrame(value) {
        return RequestHelper.Promise(
            this._txInternal.setBoxFrame,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the bullet character at the current input position.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setBulletCharacter(value) {
        return RequestHelper.Promise(
            this._txInternal.setBulletCharacter,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether there is a bulleted list at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setBulletedList(value) {
        return RequestHelper.Promise(
            this._txInternal.setBulletedList,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is centered at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setCentered(value) {
        return RequestHelper.Promise(
            this._txInternal.setCentered,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the font family at the current input position.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setFontFamily(value) {
        return RequestHelper.Promise(
            this._txInternal.setFontFamily,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the font's size, in points, at the current input position.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setFontSize(value) {
        return RequestHelper.Promise(
            this._txInternal.setFontSize,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color used to display the frame fill color at the current input position.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setFrameFillColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setFrameFillColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color used to display the color of frame lines at the current text input position.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setFrameLineColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setFrameLineColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the line width, in twips, of the paragraph's or table's frame at the current input position.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setFrameLineWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setFrameLineWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the hanging indent, in twips, at the current input position.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setHangingIndent(value) {
        return RequestHelper.Promise(
            this._txInternal.setHangingIndent,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether all inner horizontal frame lines are set for the selected text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setInnerHorizontalFrameLines(value) {
        return RequestHelper.Promise(
            this._txInternal.setInnerHorizontalFrameLines,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether all inner vertical frame lines are set for the selected text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setInnerVerticalFrameLines(value) {
        return RequestHelper.Promise(
            this._txInternal.setInnerVerticalFrameLines,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether the text is italic at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setItalic(value) {
        return RequestHelper.Promise(
            this._txInternal.setItalic,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is justified at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setJustified(value) {
        return RequestHelper.Promise(
            this._txInternal.setJustified,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is left aligned at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setLeftAligned(value) {
        return RequestHelper.Promise(
            this._txInternal.setLeftAligned,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether there is a frame line at the left side of the text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setLeftFrameLine(value) {
        return RequestHelper.Promise(
            this._txInternal.setLeftFrameLine,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the left indent, in twips, at the current input position.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setLeftIndent(value) {
        return RequestHelper.Promise(
            this._txInternal.setLeftIndent,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether the writung direction is left-to-right at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setLeftToRight(value) {
        return RequestHelper.Promise(
            this._txInternal.setLeftToRight,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the line spacing, in percent, at the current input position.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setLinespacing(value) {
        return RequestHelper.Promise(
            this._txInternal.setLinespacing,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether there is a numbered list at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setNumberedList(value) {
        return RequestHelper.Promise(
            this._txInternal.setNumberedList,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the number format for a numbered list at the current input position.
     * @param {TXTextControlTypeDefinition.NumberFormat} value
     * @returns {Promise<void>}
     */
    setNumberedListFormat(value) {
        return RequestHelper.Promise(
            this._txInternal.setNumberedListFormat,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is right aligned at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setRightAligned(value) {
        return RequestHelper.Promise(
            this._txInternal.setRightAligned,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether there is a frame line at the right side of the text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setRightFrameLine(value) {
        return RequestHelper.Promise(
            this._txInternal.setRightFrameLine,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the right indent, in twips, at the current input position.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setRightIndent(value) {
        return RequestHelper.Promise(
            this._txInternal.setRightIndent,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether the writing direction is right-to-left at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setRightToLeft(value) {
        return RequestHelper.Promise(
            this._txInternal.setRightToLeft,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether the text is strikeout at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setStrikeout(value) {
        return RequestHelper.Promise(
            this._txInternal.setStrikeout,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the structure level of all selected paragraphs.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setStructureLevel(value) {
        return RequestHelper.Promise(
            this._txInternal.setStructureLevel,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether there is a structured list at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setStructuredList(value) {
        return RequestHelper.Promise(
            this._txInternal.setStructuredList,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the number format for a structured list at the current input position.
     * @param {TXTextControlTypeDefinition.NumberFormat} value
     * @returns {Promise<void>}
     */
    setStructuredListFormat(value) {
        return RequestHelper.Promise(
            this._txInternal.setStructuredListFormat,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the formatting style name at the current input position.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setStyleName(value) {
        return RequestHelper.Promise(
            this._txInternal.setStyleName,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is subscript at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setSubscript(value) {
        return RequestHelper.Promise(
            this._txInternal.setSubscript,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is superscript at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setSuperscript(value) {
        return RequestHelper.Promise(
            this._txInternal.setSuperscript,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color used to display the text background color at the current input position.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setTextBackColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setTextBackColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color used to display the text at the current input position as a CSS color string.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setTextColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setTextColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is top aligned at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setTopAligned(value) {
        return RequestHelper.Promise(
            this._txInternal.setTopAligned,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a top paragraph distance, in twips, at the current input position.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setTopDistance(value) {
        return RequestHelper.Promise(
            this._txInternal.setTopDistance,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether there is a frame line at the top of the text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setTopFrameLine(value) {
        return RequestHelper.Promise(
            this._txInternal.setTopFrameLine,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is underlined at the current input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setUnderline(value) {
        return RequestHelper.Promise(
            this._txInternal.setUnderline,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying the style at the current input position.
     * @param {TXTextControlTypeDefinition.FontUnderlineStyle} value
     * @returns {Promise<void>}
     */
    setUnderlineStyle(value) {
        return RequestHelper.Promise(
            this._txInternal.setUnderlineStyle,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value specifying whether text is vertically centered at the current text input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setVerticallyCentered(value) {
        return RequestHelper.Promise(
            this._txInternal.setVerticallyCentered,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

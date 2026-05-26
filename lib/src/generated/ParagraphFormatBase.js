import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ParagraphFormat.d.ts.
 */
export class ParagraphFormatBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.ParagraphFormat} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ParagraphFormat} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.ParagraphFormat} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getAbsoluteLineSpacing', 'getAlignment', 'getBackColor', 'getBottomDistance', 'getDirection', 'getFrame', 'getFrameDistance', 'getFrameLineColor', 'getFrameLineWidth', 'getFrameStyle', 'getHangingIndent', 'getJustification', 'getKeepLinesTogether', 'getKeepWithNext', 'getLeftIndent', 'getLineSpacing', 'getPageBreakBefore', 'getRightIndent', 'getStructureLevel', 'getTabLeaders', 'getTabPositions', 'getTabTypes', 'getTopDistance', 'getWidowOrphanLines', 'setAbsoluteLineSpacing', 'setAlignment', 'setBackColor', 'setBottomDistance', 'setDirection', 'setFrame', 'setFrameDistance', 'setFrameLineColor', 'setFrameLineWidth', 'setFrameStyle', 'setHangingIndent', 'setJustification', 'setKeepLinesTogether', 'setKeepWithNext', 'setLeftIndent', 'setLineSpacing', 'setPageBreakBefore', 'setRightIndent', 'setStructureLevel', 'setTabLeaders', 'setTabPositions', 'setTabTypes', 'setTopDistance', 'setWidowOrphanLines');
    }

    /**
     * Gets the line spacing of a paragraph in twips.
     * @returns {Promise<number>}
     */
    getAbsoluteLineSpacing() {
        return RequestHelper.Promise(
            this._txInternal.getAbsoluteLineSpacing,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the horizontal text alignment.
     * @returns {Promise<TXTextControlTypeDefinition.HorizontalAlignment>}
     */
    getAlignment() {
        return RequestHelper.Promise(
            this._txInternal.getAlignment,
            CallbackType.RequestHorizontalAlignmentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the background color of a paragraph.
     * @returns {Promise<string>}
     */
    getBackColor() {
        return RequestHelper.Promise(
            this._txInternal.getBackColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the bottom distance, in twips, between this and the next paragraph.
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
     * Gets the writing direction.
     * @returns {Promise<TXTextControlTypeDefinition.Direction>}
     */
    getDirection() {
        return RequestHelper.Promise(
            this._txInternal.getDirection,
            CallbackType.RequestDirectionCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the framesetting of the paragraph.
     * @returns {Promise<TXTextControlTypeDefinition.Frame>}
     */
    getFrame() {
        return RequestHelper.Promise(
            this._txInternal.getFrame,
            CallbackType.RequestFrameCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance, in twips, between the text and the paragraph's frame.
     * @returns {Promise<number>}
     */
    getFrameDistance() {
        return RequestHelper.Promise(
            this._txInternal.getFrameDistance,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color used for the frame lines of a paragraph.
     * @returns {Promise<string>}
     */
    getFrameLineColor() {
        return RequestHelper.Promise(
            this._txInternal.getFrameLineColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the line width, in twips, of the paragraph's frame.
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
     * Gets the style of the paragraph's frame.
     * @returns {Promise<TXTextControlTypeDefinition.FrameStyle>}
     */
    getFrameStyle() {
        return RequestHelper.Promise(
            this._txInternal.getFrameStyle,
            CallbackType.RequestFrameStyleCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance, in twips, for the hanging indent.
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
     * Gets the kind of justification in documents containing Arabic or Hebrew characters.
     * @returns {Promise<TXTextControlTypeDefinition.Justification>}
     */
    getJustification() {
        return RequestHelper.Promise(
            this._txInternal.getJustification,
            CallbackType.RequestJustificationCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether a page break is allowed within the paragraph.
     * @returns {Promise<boolean>}
     */
    getKeepLinesTogether() {
        return RequestHelper.Promise(
            this._txInternal.getKeepLinesTogether,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the paragraph is displayed on the same page as its following paragraph.
     * @returns {Promise<boolean>}
     */
    getKeepWithNext() {
        return RequestHelper.Promise(
            this._txInternal.getKeepWithNext,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance, in twips, between the left edge of the Text Control and the left edge of the text.
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
     * Gets the line spacing of a paragraph as a percentage of the font size.
     * @returns {Promise<number>}
     */
    getLineSpacing() {
        return RequestHelper.Promise(
            this._txInternal.getLineSpacing,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the paragraph is always displayed on top of a page.
     * @returns {Promise<boolean>}
     */
    getPageBreakBefore() {
        return RequestHelper.Promise(
            this._txInternal.getPageBreakBefore,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance, in twips, between the right edge of a Text Control document and the right edge of the text.
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
     * Gets the structure level of a paragraph in the document.
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
     * Gets an array containing the tab leaders in a paragraph.
     * @param {TXTextControlTypeDefinition.Callback<TXTextControlTypeDefinition.TabLeader[]>} callback
     * @returns {Promise<void>}
     */
    getTabLeaders(callback) {
        return RequestHelper.Promise(
            this._txInternal.getTabLeaders,
            callback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the absolute tab stop positions, in twips, in a paragraph.
     * @returns {Promise<number[]>}
     */
    getTabPositions() {
        return RequestHelper.Promise(
            this._txInternal.getTabPositions,
            CallbackType.RequestNumbersCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the tab types in a paragraph.
     * @returns {Promise<TXTextControlTypeDefinition.TabType[]>}
     */
    getTabTypes() {
        return RequestHelper.Promise(
            this._txInternal.getTabTypes,
            CallbackType.RequestTabTypesCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance, in twips, between this and the previous paragraph.
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
     * Gets the number of lines for widow/orphan control.
     * @returns {Promise<number>}
     */
    getWidowOrphanLines() {
        return RequestHelper.Promise(
            this._txInternal.getWidowOrphanLines,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the line spacing of a paragraph in twips.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setAbsoluteLineSpacing(value) {
        return RequestHelper.Promise(
            this._txInternal.setAbsoluteLineSpacing,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the horizontal text alignment.
     * @param {TXTextControlTypeDefinition.HorizontalAlignment} value
     * @returns {Promise<void>}
     */
    setAlignment(value) {
        return RequestHelper.Promise(
            this._txInternal.setAlignment,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the background color of a paragraph.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setBackColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setBackColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the bottom distance, in twips, between this and the next paragraph.
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
     * Sets the writing direction.
     * @param {TXTextControlTypeDefinition.Direction} value
     * @returns {Promise<void>}
     */
    setDirection(value) {
        return RequestHelper.Promise(
            this._txInternal.setDirection,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the framesetting of the paragraph.
     * @param {TXTextControlTypeDefinition.Frame} value
     * @returns {Promise<void>}
     */
    setFrame(value) {
        return RequestHelper.Promise(
            this._txInternal.setFrame,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance, in twips, between the text and the paragraph's frame.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setFrameDistance(value) {
        return RequestHelper.Promise(
            this._txInternal.setFrameDistance,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color used for the frame lines of a paragraph.
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
     * Sets the line width, in twips, of the paragraph's frame.
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
     * Sets the style of the paragraph's frame.
     * @param {TXTextControlTypeDefinition.FrameStyle} value
     * @returns {Promise<void>}
     */
    setFrameStyle(value) {
        return RequestHelper.Promise(
            this._txInternal.setFrameStyle,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance, in twips, for the hanging indent.
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
     * Sets the kind of justification in documents containing Arabic or Hebrew characters.
     * @param {TXTextControlTypeDefinition.Justification} value
     * @returns {Promise<void>}
     */
    setJustification(value) {
        return RequestHelper.Promise(
            this._txInternal.setJustification,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether a page break is allowed within the paragraph.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setKeepLinesTogether(value) {
        return RequestHelper.Promise(
            this._txInternal.setKeepLinesTogether,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether paragraph is displayed on the same page as its following paragraph.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setKeepWithNext(value) {
        return RequestHelper.Promise(
            this._txInternal.setKeepWithNext,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance, in twips, between the left edge of the Text Control and the left edge of the text.
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
     * Sets the line spacing of a paragraph as a percentage of the font size.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setLineSpacing(value) {
        return RequestHelper.Promise(
            this._txInternal.setLineSpacing,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether the paragraph is always displayed on top of a page.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setPageBreakBefore(value) {
        return RequestHelper.Promise(
            this._txInternal.setPageBreakBefore,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance, in twips, between the right edge of a Text Control document and the right edge of the text.
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
     * Sets the structure level of a paragraph in the document.
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
     * Sets an array containing the tab leaders in a paragraph.
     * @param {TXTextControlTypeDefinition.TabLeader[]} value
     * @returns {Promise<void>}
     */
    setTabLeaders(value) {
        return RequestHelper.Promise(
            this._txInternal.setTabLeaders,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an array containing the absolute tab stop positions, in twips, in a paragraph.
     * @param {number[]} value
     * @returns {Promise<void>}
     */
    setTabPositions(value) {
        return RequestHelper.Promise(
            this._txInternal.setTabPositions,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an array containing the tab types in a paragraph.
     * @param {TXTextControlTypeDefinition.TabType[]} value
     * @returns {Promise<void>}
     */
    setTabTypes(value) {
        return RequestHelper.Promise(
            this._txInternal.setTabTypes,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets distance, in twips, between this and the previous paragraph.
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
     * Sets the number of lines for widow/orphan control.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setWidowOrphanLines(value) {
        return RequestHelper.Promise(
            this._txInternal.setWidowOrphanLines,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

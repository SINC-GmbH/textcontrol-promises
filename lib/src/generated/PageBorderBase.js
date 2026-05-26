import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/PageBorder.d.ts.
 */
export class PageBorderBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.PageBorder} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.PageBorder} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.PageBorder} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBottomDistance', 'getBottomLineColor', 'getBottomLineWidth', 'getFirstPageOnly', 'getLeftDistance', 'getLeftLineColor', 'getLeftLineWidth', 'getMeasureFromText', 'getOmitFirstPage', 'getRightDistance', 'getRightLineColor', 'getRightLineWidth', 'getSurroundFooter', 'getSurroundHeader', 'getTopDistance', 'getTopLineColor', 'getTopLineWidth', 'setBottomDistance', 'setBottomLineColor', 'setBottomLineWidth', 'setFirstPageOnly', 'setLeftDistance', 'setLeftLineColor', 'setLeftLineWidth', 'setMeasureFromText', 'setOmitFirstPage', 'setRightDistance', 'setRightLineColor', 'setRightLineWidth', 'setSurroundFooter', 'setSurroundHeader', 'setTopDistance', 'setTopLineColor', 'setTopLineWidth');
    }

    /**
     * Gets the distance, in twips, of the bottom border line either from the edge of the page or from the text, depending on the MeasureFromText.
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
     * Gets the color of the bottom border line.
     * @returns {Promise<string>}
     */
    getBottomLineColor() {
        return RequestHelper.Promise(
            this._txInternal.getBottomLineColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the width of the bottom border line.
     * @returns {Promise<number>}
     */
    getBottomLineWidth() {
        return RequestHelper.Promise(
            this._txInternal.getBottomLineWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the page border is drawn only on the first page of the section.
     * @returns {Promise<boolean>}
     */
    getFirstPageOnly() {
        return RequestHelper.Promise(
            this._txInternal.getFirstPageOnly,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance, in twips, of the left border line either from the edge of the page or from the text, depending on the MeasureFromText.
     * @returns {Promise<number>}
     */
    getLeftDistance() {
        return RequestHelper.Promise(
            this._txInternal.getLeftDistance,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color of the left border line.
     * @returns {Promise<string>}
     */
    getLeftLineColor() {
        return RequestHelper.Promise(
            this._txInternal.getLeftLineColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the width of the left border line.
     * @returns {Promise<number>}
     */
    getLeftLineWidth() {
        return RequestHelper.Promise(
            this._txInternal.getLeftLineWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the page border's distances are measured from the text.
     * @returns {Promise<boolean>}
     */
    getMeasureFromText() {
        return RequestHelper.Promise(
            this._txInternal.getMeasureFromText,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the page border is not drawn on the first page of the section.
     * @returns {Promise<boolean>}
     */
    getOmitFirstPage() {
        return RequestHelper.Promise(
            this._txInternal.getOmitFirstPage,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance, in twips, of the right border line either from the edge of the page or from the text, depending on the MeasureFromText.
     * @returns {Promise<number>}
     */
    getRightDistance() {
        return RequestHelper.Promise(
            this._txInternal.getRightDistance,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the color of the right border line.
     * @returns {Promise<string>}
     */
    getRightLineColor() {
        return RequestHelper.Promise(
            this._txInternal.getRightLineColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the width of the right border line.
     * @returns {Promise<number>}
     */
    getRightLineWidth() {
        return RequestHelper.Promise(
            this._txInternal.getRightLineWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the page border surrounds the section's footer.
     * @returns {Promise<boolean>}
     */
    getSurroundFooter() {
        return RequestHelper.Promise(
            this._txInternal.getSurroundFooter,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the page border surrounds the section's header.
     * @returns {Promise<boolean>}
     */
    getSurroundHeader() {
        return RequestHelper.Promise(
            this._txInternal.getSurroundHeader,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distance, in twips, of the top border line either from the edge of the page or from the text, depending on the {@link MeasureFromText}.
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
     * Gets the color of the top border line.
     * @returns {Promise<string>}
     */
    getTopLineColor() {
        return RequestHelper.Promise(
            this._txInternal.getTopLineColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the width of the top border line.
     * @returns {Promise<number>}
     */
    getTopLineWidth() {
        return RequestHelper.Promise(
            this._txInternal.getTopLineWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance, in twips, of the bottom border line either from the edge of the page or from the text, depending on the MeasureFromText.
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
     * Sets the color of the bottom border line.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setBottomLineColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setBottomLineColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the width of the bottom border line.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setBottomLineWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setBottomLineWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether the page border is drawn only on the first page of the section.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setFirstPageOnly(value) {
        return RequestHelper.Promise(
            this._txInternal.setFirstPageOnly,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance, in twips, of the left border line either from the edge of the page or from the text, depending on the MeasureFromText.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setLeftDistance(value) {
        return RequestHelper.Promise(
            this._txInternal.setLeftDistance,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color of the left border line.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setLeftLineColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setLeftLineColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the width of the left border line.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setLeftLineWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setLeftLineWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether the page border's distances are measured from the text.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setMeasureFromText(value) {
        return RequestHelper.Promise(
            this._txInternal.setMeasureFromText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether the page border is not drawn on the first page of the section.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setOmitFirstPage(value) {
        return RequestHelper.Promise(
            this._txInternal.setOmitFirstPage,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance, in twips, of the right border line either from the edge of the page or from the text, depending on the MeasureFromText.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setRightDistance(value) {
        return RequestHelper.Promise(
            this._txInternal.setRightDistance,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the color of the right border line.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setRightLineColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setRightLineColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the width of the right border line.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setRightLineWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setRightLineWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the whether the page border surrounds the section's footer.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setSurroundFooter(value) {
        return RequestHelper.Promise(
            this._txInternal.setSurroundFooter,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the whether the page border surrounds the section's header.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setSurroundHeader(value) {
        return RequestHelper.Promise(
            this._txInternal.setSurroundHeader,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distance, in twips, of the top border line either from the edge of the page or from the text, depending on the MeasureFromText.
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
     * Sets the color of the top border line.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setTopLineColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setTopLineColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the width of the top border line.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setTopLineWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setTopLineWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

import { ObjectBase } from '../ObjectBase.js';
import { StatusBarViewGeneratorColors } from '../StatusBarViewGeneratorColors.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/StatusBarViewGenerator.d.ts.
 */
export class StatusBarViewGeneratorBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.StatusBarViewGenerator} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.StatusBarViewGenerator} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.StatusBarViewGenerator} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBorderStyle', 'getColumnText', 'getLineText', 'getPageCounterText', 'getPageText', 'getSectionCounterText', 'getSectionText', 'getShowColumn', 'getShowKeyStates', 'getShowLanguage', 'getShowLine', 'getShowPage', 'getShowPageCounter', 'getShowSection', 'getShowSectionCounter', 'getShowZoom', 'getShowZoomTrackBar', 'resetDisplayColors', 'setBorderStyle', 'setColumnText', 'setLineText', 'setPageCounterText', 'setPageText', 'setSectionCounterText', 'setSectionText', 'setShowColumn', 'setShowKeyStates', 'setShowLanguage', 'setShowLine', 'setShowPage', 'setShowPageCounter', 'setShowSection', 'setShowSectionCounter', 'setShowZoom', 'setShowZoomTrackBar');
    }

    /**
     * Gets the border style of the status bar.
     * @param {TXTextControlTypeDefinition.Callback<TXTextControlTypeDefinition.StatusBarBorderStyle>} callback
     * @returns {Promise<void>} Always returns Fixed3D.
     */
    getBorderStyle(callback) {
        return RequestHelper.Promise(
            this._txInternal.getBorderStyle,
            callback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text in the 'Column' area of the status bar.
     * @returns {Promise<string>}
     */
    getColumnText() {
        return RequestHelper.Promise(
            this._txInternal.getColumnText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text in the 'Line' area of the status bar.
     * @returns {Promise<string>}
     */
    getLineText() {
        return RequestHelper.Promise(
            this._txInternal.getLineText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text in the 'Page counter' area of the status bar.
     * @returns {Promise<string>}
     */
    getPageCounterText() {
        return RequestHelper.Promise(
            this._txInternal.getPageCounterText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text in the 'Page' area of the status bar.
     * @returns {Promise<string>}
     */
    getPageText() {
        return RequestHelper.Promise(
            this._txInternal.getPageText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text in the 'Section counter' area of the status bar.
     * @returns {Promise<string>}
     */
    getSectionCounterText() {
        return RequestHelper.Promise(
            this._txInternal.getSectionCounterText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text in the 'Section' area of the status bar.
     * @returns {Promise<string>}
     */
    getSectionText() {
        return RequestHelper.Promise(
            this._txInternal.getSectionText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the column number of the current text input position.
     * @returns {Promise<boolean>}
     */
    getShowColumn() {
        return RequestHelper.Promise(
            this._txInternal.getShowColumn,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the key state of the current insertion mode, insert or overwrite.
     * @returns {Promise<boolean>}
     */
    getShowKeyStates() {
        return RequestHelper.Promise(
            this._txInternal.getShowKeyStates,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the language of the text selection or the text input position.
     * @returns {Promise<boolean>}
     */
    getShowLanguage() {
        return RequestHelper.Promise(
            this._txInternal.getShowLanguage,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the line number of the current text input position.
     * @returns {Promise<boolean>}
     */
    getShowLine() {
        return RequestHelper.Promise(
            this._txInternal.getShowLine,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the page number of the current text input position.
     * @returns {Promise<boolean>}
     */
    getShowPage() {
        return RequestHelper.Promise(
            this._txInternal.getShowPage,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the number of pages the document consists of.
     * @returns {Promise<boolean>}
     */
    getShowPageCounter() {
        return RequestHelper.Promise(
            this._txInternal.getShowPageCounter,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the section number of the current text input position.
     * @returns {Promise<boolean>}
     */
    getShowSection() {
        return RequestHelper.Promise(
            this._txInternal.getShowSection,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the number of sections the document consists of.
     * @returns {Promise<boolean>}
     */
    getShowSectionCounter() {
        return RequestHelper.Promise(
            this._txInternal.getShowSectionCounter,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the current zoom factor.
     * @returns {Promise<boolean>}
     */
    getShowZoom() {
        return RequestHelper.Promise(
            this._txInternal.getShowZoom,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar displays a track bar instead of a simple number to show and to set the zooming factor.
     * @returns {Promise<boolean>}
     */
    getShowZoomTrackBar() {
        return RequestHelper.Promise(
            this._txInternal.getShowZoomTrackBar,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets all display colors of a status bar to their system dependent default values.
     * @returns {Promise<void>}
     */
    resetDisplayColors() {
        return RequestHelper.Promise(
            this._txInternal.resetDisplayColors,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the border style of the status bar.
     * @deprecated
     * @param {TXTextControlTypeDefinition.StatusBarBorderStyle} value
     * @returns {Promise<void>}
     */
    setBorderStyle(value) {
        return RequestHelper.Promise(
            this._txInternal.setBorderStyle,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text in the 'Column' area of the status bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setColumnText(value) {
        return RequestHelper.Promise(
            this._txInternal.setColumnText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text in the 'Line' area of the status bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setLineText(value) {
        return RequestHelper.Promise(
            this._txInternal.setLineText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text in the 'Page counter' area of the status bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setPageCounterText(value) {
        return RequestHelper.Promise(
            this._txInternal.setPageCounterText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text in the 'Page' area of the status bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setPageText(value) {
        return RequestHelper.Promise(
            this._txInternal.setPageText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text in the 'Section counter' area of the status bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setSectionCounterText(value) {
        return RequestHelper.Promise(
            this._txInternal.setSectionCounterText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text in the 'Section' area of the status bar.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setSectionText(value) {
        return RequestHelper.Promise(
            this._txInternal.setSectionText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the column number of the current text input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowColumn(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowColumn,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the key state of the current insertion mode, insert or overwrite.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowKeyStates(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowKeyStates,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the language of the text selection or the text input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowLanguage(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowLanguage,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the line number of the current text input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowLine(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowLine,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the page number of the current text input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowPage(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowPage,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the number of pages the document consists of.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowPageCounter(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowPageCounter,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the section number of the current text input position.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowSection(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowSection,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the number of sections the document consists of.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowSectionCounter(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowSectionCounter,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar shows the current zoom factor.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowZoom(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowZoom,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Specifies whether the status bar displays a track bar instead of a simple number to show and to set the zooming factor.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setShowZoomTrackBar(value) {
        return RequestHelper.Promise(
            this._txInternal.setShowZoomTrackBar,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * The displayed colors of the status bar.
     * @type {StatusBarViewGeneratorColors}
     */
    get displayColors() { return new StatusBarViewGeneratorColors(this._txInternal.displayColors); }

    //#endregion
}

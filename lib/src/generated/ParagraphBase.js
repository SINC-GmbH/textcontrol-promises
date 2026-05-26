import { ObjectBase } from '../ObjectBase.js';
import { ListFormat } from '../ListFormat.js';
import { ParagraphFormat } from '../ParagraphFormat.js';
import { SaveSettings } from '../SaveSettings.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Paragraph.d.ts.
 */
export class ParagraphBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Paragraph} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Paragraph} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Paragraph} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getFormattingStyle', 'getLength', 'getLines', 'getListNumber', 'getListNumberText', 'getStart', 'getStartLine', 'getText', 'save', 'select', 'setFormattingStyle');
    }

    /**
     * Gets the paragraph's formatting style.
     * @returns {Promise<string>}
     */
    getFormattingStyle() {
        return RequestHelper.Promise(
            this._txInternal.getFormattingStyle,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of characters in the paragraph including the paragraph end character.
     * @returns {Promise<number>}
     */
    getLength() {
        return RequestHelper.Promise(
            this._txInternal.getLength,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of lines the paragraph consists of.
     * @returns {Promise<number>}
     */
    getLines() {
        return RequestHelper.Promise(
            this._txInternal.getLines,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the paragraph's list number.
     * @returns {Promise<number>}
     */
    getListNumber() {
        return RequestHelper.Promise(
            this._txInternal.getListNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the paragraph's list number text.
     * @returns {Promise<string>}
     */
    getListNumberText() {
        return RequestHelper.Promise(
            this._txInternal.getListNumberText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number (one-based) of the paragraph's first character.
     * @returns {Promise<number>}
     */
    getStart() {
        return RequestHelper.Promise(
            this._txInternal.getStart,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number (one-based) of the paragraph's first line.
     * @returns {Promise<number>}
     */
    getStartLine() {
        return RequestHelper.Promise(
            this._txInternal.getStartLine,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the paragraph's text.
     * @returns {Promise<string>}
     */
    getText() {
        return RequestHelper.Promise(
            this._txInternal.getText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Saves the paragraph in a certain format and sends the result back asynchronously by calling a given callback function.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {SaveSettings} saveSettings
     * @returns {Promise<void>}
     */
    save(streamType, saveSettings) {
        return RequestHelper.Promise(
            this._txInternal.save,
            streamType,
            CallbackType.SaveDocumentCallback,
            saveSettings._txInternal,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects the paragraph.
     * @returns {Promise<void>}
     */
    select() {
        return RequestHelper.Promise(
            this._txInternal.select,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the paragraph's formatting style.
     * @param {string} formattingStyle
     * @returns {Promise<void>}
     */
    setFormattingStyle(formattingStyle) {
        return RequestHelper.Promise(
            this._txInternal.setFormattingStyle,
            formattingStyle,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * The paragraph's formatting attributes.
     * @type {ParagraphFormat}
     */
    get format() { return new ParagraphFormat(this._txInternal.format); }

    /**
     * The paragraph's bulleted or numbered list and/or its formatting attributes.
     * @type {ListFormat}
     */
    get listFormat() { return new ListFormat(this._txInternal.listFormat); }

    //#endregion
}

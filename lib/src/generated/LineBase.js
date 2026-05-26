import { ObjectBase } from '../ObjectBase.js';
import { Rectangle } from '../Rectangle.js';
import { SaveSettings } from '../SaveSettings.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Line.d.ts.
 */
export class LineBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Line} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Line} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Line} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBaseline', 'getLength', 'getNumber', 'getPage', 'getStart', 'getText', 'getTextBounds', 'save');
    }

    /**
     * Gets the line's baseline position.
     * @returns {Promise<number>}
     */
    getBaseline() {
        return RequestHelper.Promise(
            this._txInternal.getBaseline,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of characters in the line including the break character.
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
     * Gets the line's number.
     * @returns {Promise<number>}
     */
    getNumber() {
        return RequestHelper.Promise(
            this._txInternal.getNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of the page to which the line belongs.
     * @returns {Promise<number>}
     */
    getPage() {
        return RequestHelper.Promise(
            this._txInternal.getPage,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number (one-based) of the first character in the line.
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
     * Gets the line's text.
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
     * Gets the bounding rectangle of the text belonging to the line.
     * @returns {Promise<Rectangle>}
     */
    async getTextBounds() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getTextBounds,
            CallbackType.RequestRectangleCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Rectangle(tx);
    }

    /**
     * Saves the line in a certain format and sends the result back asynchronously by calling a given callback function.
     * @param {TXTextControlTypeDefinition.StreamType} streamType
     * @param {SaveSettings} [saveSettings]
     * @returns {Promise<void>}
     */
    save(streamType, saveSettings) {
        return RequestHelper.Promise(
            this._txInternal.save,
            streamType,
            CallbackType.SaveDocumentCallback,
            saveSettings?._txInternal,
            CallbackType.ErrorCallback
        );
    }}

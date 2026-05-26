import { ObjectBase } from '../ObjectBase.js';
import { SaveSettings } from '../SaveSettings.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/EditableRegion.d.ts.
 */
export class EditableRegionBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.EditableRegion} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.EditableRegion} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.EditableRegion} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getHighlightColor', 'getHighlightMode', 'getID', 'getLength', 'getStart', 'getText', 'getUserName', 'save', 'scrollTo', 'setHighlightColor', 'setHighlightMode', 'setID', 'setUserName');
    }

    /**
     * Gets the highlight color for the editable region.
     * @returns {Promise<string>}
     */
    getHighlightColor() {
        return RequestHelper.Promise(
            this._txInternal.getHighlightColor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating whether the editable region is highlighted.
     * @returns {Promise<TXTextControlTypeDefinition.HighlightMode>}
     */
    getHighlightMode() {
        return RequestHelper.Promise(
            this._txInternal.getHighlightMode,
            CallbackType.RequestHighlightModeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an identifier for a editable region.
     * @returns {Promise<number>}
     */
    getID() {
        return RequestHelper.Promise(
            this._txInternal.getID,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of characters which belong to the editable region.
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
     * Gets the index (one-based) of the first character which belongs to the editable region.
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
     * Gets the editable region's text.
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
     * Gets the name of the user who can edit the region.
     * @returns {Promise<string>}
     */
    getUserName() {
        return RequestHelper.Promise(
            this._txInternal.getUserName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Saves this editable region in a certain format and sends the result back asynchronously by calling a given callback function.
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
     * Sets the current input position to the beginning of an editable region and scrolls it into the visible part of the document.
     * @returns {Promise<void>}
     */
    scrollTo() {
        return RequestHelper.Promise(
            this._txInternal.scrollTo,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the highlight color for the editable region.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setHighlightColor(value) {
        return RequestHelper.Promise(
            this._txInternal.setHighlightColor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating whether the editable region is highlighted.
     * @param {TXTextControlTypeDefinition.HighlightMode} value
     * @returns {Promise<void>}
     */
    setHighlightMode(value) {
        return RequestHelper.Promise(
            this._txInternal.setHighlightMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an identifier for the editable region.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setID(value) {
        return RequestHelper.Promise(
            this._txInternal.setID,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the name of the user who can edit the region.
     * @param {string} username
     * @returns {Promise<void>}
     */
    setUserName(username) {
        return RequestHelper.Promise(
            this._txInternal.setUserName,
            username,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

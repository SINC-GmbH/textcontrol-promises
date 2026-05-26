import { ObjectBase } from '../ObjectBase.js';
import { SaveSettings } from '../SaveSettings.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TrackedChange.d.ts.
 */
export class TrackedChangeBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TrackedChange} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TrackedChange} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TrackedChange} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getActive', 'getChangeKind', 'getChangeTime', 'getHighlightColor', 'getHighlightMode', 'getLength', 'getNumber', 'getStart', 'getText', 'getUserName', 'save', 'setActive', 'setHighlightColor', 'setHighlightMode');
    }

    /**
     * Gets a value specifying whether the TrackedChange is currently active or not.
     * @returns {Promise<boolean>}
     */
    getActive() {
        return RequestHelper.Promise(
            this._txInternal.getActive,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the kind of change.
     * @returns {Promise<TXTextControlTypeDefinition.ChangeKind>}
     */
    getChangeKind() {
        return RequestHelper.Promise(
            this._txInternal.getChangeKind,
            CallbackType.RequestChangeKindCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the date and time when the change has been made.
     * @returns {Promise<number>}
     */
    getChangeTime() {
        return RequestHelper.Promise(
            this._txInternal.getChangeTime,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the highlight color for the tracked change.
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
     * Gets a value indicating whether the tracked change is highlighted.
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
     * Gets the number of changed characters.
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
     * Gets the change's number.
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
     * Gets the index (one-based) of the first changed character.
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
     * Gets the changed text.
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
     * Gets the name of the user who has done the change.
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
     * Saves the tracked change in a certain format and sends the result back asynchronously by calling a given callback function.
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
    }

    /**
     * Sets a value specifying whether the TrackedChange is currently active or not.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setActive(value) {
        return RequestHelper.Promise(
            this._txInternal.setActive,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the highlight color for the tracked change.
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
     * Sets a value indicating whether the tracked change is highlighted.
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
    }}

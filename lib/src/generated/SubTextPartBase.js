import { ObjectBase } from '../ObjectBase.js';
import { SaveSettings } from '../SaveSettings.js';
import { SubTextPart } from '../SubTextPart.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SubTextPart.d.ts.
 */
export class SubTextPartBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.SubTextPart} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SubTextPart} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SubTextPart} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getChildren', 'getData', 'getHighlightColor', 'getHighlightMode', 'getID', 'getLength', 'getName', 'getNestedLevel', 'getNumber', 'getOuterMostSubTextPart', 'getOuterSubTextPart', 'getStart', 'getText', 'getTextFields', 'save', 'scrollTo', 'setData', 'setHighlightColor', 'setHighlightMode', 'setID', 'setName');
    }

    /**
     * Returns an array of the children of this SubTextPart.
     * @returns {Promise<TXTextControlTypeDefinition.SubTextPart[]>}
     */
    getChildren() {
        return RequestHelper.Promise(
            this._txInternal.getChildren,
            CallbackType.RequestSubTextPartsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets additional data of the subtextpart.
     * @returns {Promise<string>}
     */
    getData() {
        return RequestHelper.Promise(
            this._txInternal.getData,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the highlight color for the subtextpart.
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
     * Gets a value indicating when the subtextpart is highlighted.
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
     * Gets an identifier for a subtextpart.
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
     * Gets the number of characters in a subtextpart.
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
     * Relates a user-defined name to a subtextpart.
     * @returns {Promise<string>}
     */
    getName() {
        return RequestHelper.Promise(
            this._txInternal.getName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the subtextpart's nested level.
     * @returns {Promise<number>}
     */
    getNestedLevel() {
        return RequestHelper.Promise(
            this._txInternal.getNestedLevel,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the subtextpart's number.
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
     * Gets a subtextpart's outermost subtextpart.
     * @returns {Promise<SubTextPart>}
     */
    async getOuterMostSubTextPart() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getOuterMostSubTextPart,
            CallbackType.RequestSubTextPartCallback,
            CallbackType.ErrorCallback
        );
        return tx && new SubTextPart(tx);
    }

    /**
     * Gets a subtextpart's outer subtextpart.
     * @returns {Promise<SubTextPart>}
     */
    async getOuterSubTextPart() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getOuterSubTextPart,
            CallbackType.RequestSubTextPartCallback,
            CallbackType.ErrorCallback
        );
        return tx && new SubTextPart(tx);
    }

    /**
     * Gets the first character position (one-based) of a subtextpart.
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
     * Gets the subtextpart's text.
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
     * Returns an array of static text field information objects.
     * @param {TXTextControlTypeDefinition.TextFieldType} fieldType
     * @returns {Promise<TXTextControlTypeDefinition.TextFieldInfo[]>}
     */
    getTextFields(fieldType) {
        return RequestHelper.Promise(
            this._txInternal.getTextFields,
            fieldType,
            CallbackType.RequestTextFieldInfoArrayCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Saves the subtextpart in a certain format and sends the result back asynchronously by calling a given callback function.
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
     * Sets the current input position to the beginning of a subtextpart and scrolls it into the visible part of the document.
     * @returns {Promise<boolean>}
     */
    scrollTo() {
        return RequestHelper.Promise(
            this._txInternal.scrollTo,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets additional data of the subtextpart.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setData(value) {
        return RequestHelper.Promise(
            this._txInternal.setData,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the highlight color for the subtextpart.
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
     * Sets a value indicating when the subtextpart is highlighted.
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
     * Sets an identifier for the subtextpart.
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
     * Sets the name of a subtextpart.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setName(value) {
        return RequestHelper.Promise(
            this._txInternal.setName,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

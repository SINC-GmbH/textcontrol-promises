import { ObjectBase } from '../ObjectBase.js';
import { Rectangle } from '../Rectangle.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextField.d.ts.
 */
export class TextFieldBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TextField} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextField} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TextField} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBounds', 'getContainsInputPosition', 'getDeleteable', 'getDoubledInputPosition', 'getEditable', 'getFormattingBounds', 'getHighlightColor', 'getHighlightMode', 'getID', 'getIsSpellCheckingEnabled', 'getLength', 'getName', 'getStart', 'getText', 'scrollTo', 'setDeleteable', 'setDoubledInputPosition', 'setEditable', 'setHighlightColor', 'setHighlightMode', 'setID', 'setIsSpellCheckingEnabled', 'setName', 'setText');
    }

    /**
     * Gets the bounding rectangle of a text field.
     * @returns {Promise<Rectangle>}
     */
    async getBounds() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getBounds,
            CallbackType.RequestRectangleCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Rectangle(tx);
    }

    /**
     * Returns true, if the Textfield contains the current text input position.
     * @returns {Promise<boolean>}
     */
    getContainsInputPosition() {
        return RequestHelper.Promise(
            this._txInternal.getContainsInputPosition,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether a text field can be deleted by the end-user while a TX Text Control document is being edited.
     * @returns {Promise<boolean>}
     */
    getDeleteable() {
        return RequestHelper.Promise(
            this._txInternal.getDeleteable,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether a text field has a doubled input position in front of its first character and behind its last character.
     * @returns {Promise<boolean>}
     */
    getDoubledInputPosition() {
        return RequestHelper.Promise(
            this._txInternal.getDoubledInputPosition,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the text of a text field can be changed by the end-user while a TX Text Control document is being edited.
     * @returns {Promise<boolean>}
     */
    getEditable() {
        return RequestHelper.Promise(
            this._txInternal.getEditable,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the formatting rectangle of a text field.
     * @returns {Promise<Rectangle>}
     */
    async getFormattingBounds() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getFormattingBounds,
            CallbackType.RequestRectangleCallback
        );
        return tx && new Rectangle(tx);
    }

    /**
     * Gets the highlight color for the text field.
     * @returns {Promise<string>}
     */
    getHighlightColor() {
        return RequestHelper.Promise(
            this._txInternal.getHighlightColor,
            CallbackType.RequestColorStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value indicating when the text field is highlighted.
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
     * Gets an identifier for a text field.
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
     * Gets whether a text field's text is checked on misspelled words.
     * @returns {Promise<boolean>}
     */
    getIsSpellCheckingEnabled() {
        return RequestHelper.Promise(
            this._txInternal.getIsSpellCheckingEnabled,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number of characters in a text field.
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
     * Gets the name of a text field.
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
     * Gets the first character position (one-based) of a text field.
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
     * Gets the text which is contained within a text field.
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
     * Sets the current input position to the beginning of a text field and scrolls it into the visible part of the document.
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
     * Sets whether a text field can be deleted by the end-user while a TX Text Control document is being edited.
     * @param {boolean} deleteable
     * @returns {Promise<void>}
     */
    setDeleteable(deleteable) {
        return RequestHelper.Promise(
            this._txInternal.setDeleteable,
            deleteable,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether a text field has a doubled input position in front of its first character and behind its last character.
     * @param {boolean} doubledInputPosition
     * @returns {Promise<void>}
     */
    setDoubledInputPosition(doubledInputPosition) {
        return RequestHelper.Promise(
            this._txInternal.setDoubledInputPosition,
            doubledInputPosition,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether the text of a text field can be changed by the end-user while a TX Text Control document is being edited.
     * @param {boolean} editable
     * @returns {Promise<void>}
     */
    setEditable(editable) {
        return RequestHelper.Promise(
            this._txInternal.setEditable,
            editable,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the highlight color for the text field.
     * @param {string} highlightColor
     * @returns {Promise<void>}
     */
    setHighlightColor(highlightColor) {
        return RequestHelper.Promise(
            this._txInternal.setHighlightColor,
            highlightColor,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value indicating when the text field is highlighted.
     * @param {TXTextControlTypeDefinition.HighlightMode} highlightMode
     * @returns {Promise<void>}
     */
    setHighlightMode(highlightMode) {
        return RequestHelper.Promise(
            this._txInternal.setHighlightMode,
            highlightMode,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an identifier for the text field.
     * @param {number} id
     * @returns {Promise<void>}
     */
    setID(id) {
        return RequestHelper.Promise(
            this._txInternal.setID,
            id,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether a text field's text is checked on misspelled words.
     * @param {boolean} isSpellCheckingEnabled
     * @returns {Promise<void>}
     */
    setIsSpellCheckingEnabled(isSpellCheckingEnabled) {
        return RequestHelper.Promise(
            this._txInternal.setIsSpellCheckingEnabled,
            isSpellCheckingEnabled,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the name of a text field.
     * @param {string} name
     * @returns {Promise<void>}
     */
    setName(name) {
        return RequestHelper.Promise(
            this._txInternal.setName,
            name,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text which is contained within a text field.
     * @param {string} text
     * @returns {Promise<void>}
     */
    setText(text) {
        return RequestHelper.Promise(
            this._txInternal.setText,
            text,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

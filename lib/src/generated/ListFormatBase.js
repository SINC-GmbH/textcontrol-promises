import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ListFormat.d.ts.
 */
export class ListFormatBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.ListFormat} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ListFormat} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.ListFormat} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBulletCharacter', 'getBulletSize', 'getFirstNumber', 'getFontName', 'getFormatCharacter', 'getHangingIndent', 'getLeftIndent', 'getLevel', 'getNumberFormat', 'getRestartNumbering', 'getTextAfterNumber', 'getTextBeforeNumber', 'getType', 'setBulletCharacter', 'setBulletSize', 'setFirstNumber', 'setFontName', 'setFormatCharacter', 'setHangingIndent', 'setLeftIndent', 'setLevel', 'setNumberFormat', 'setRestartNumbering', 'setTextAfterNumber', 'setTextBeforeNumber', 'setType');
    }

    /**
     * Gets the symbol character for a bulleted list.
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
     * Gets the size of the symbol character for a bulleted list.
     * @returns {Promise<number>}
     */
    getBulletSize() {
        return RequestHelper.Promise(
            this._txInternal.getBulletSize,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the starting number for a numbered list.
     * @returns {Promise<number>}
     */
    getFirstNumber() {
        return RequestHelper.Promise(
            this._txInternal.getFirstNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the font used for the bullet character.
     * @returns {Promise<string>}
     */
    getFontName() {
        return RequestHelper.Promise(
            this._txInternal.getFontName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the formatting character for a bulleted or numbered list.
     * @returns {Promise<TXTextControlTypeDefinition.ListFormatCharacter>}
     */
    getFormatCharacter() {
        return RequestHelper.Promise(
            this._txInternal.getFormatCharacter,
            CallbackType.RequestListFormatCharacterCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the hanging indent of a numbered list.
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
     * Gets the left indent for a numbered list.
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
     * Gets the level for a bulleted or numbered list.
     * @returns {Promise<number>}
     */
    getLevel() {
        return RequestHelper.Promise(
            this._txInternal.getLevel,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number format for a numbered list.
     * @returns {Promise<TXTextControlTypeDefinition.NumberFormat>}
     */
    getNumberFormat() {
        return RequestHelper.Promise(
            this._txInternal.getNumberFormat,
            CallbackType.RequestNumberFormatCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a value determining whether a new numbered list begins.
     * @returns {Promise<boolean>}
     */
    getRestartNumbering() {
        return RequestHelper.Promise(
            this._txInternal.getRestartNumbering,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text that is displayed behind the number in a numbered list.
     * @returns {Promise<string>}
     */
    getTextAfterNumber() {
        return RequestHelper.Promise(
            this._txInternal.getTextAfterNumber,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text that is displayed in front of the number in a numbered list.
     * @returns {Promise<string>}
     */
    getTextBeforeNumber() {
        return RequestHelper.Promise(
            this._txInternal.getTextBeforeNumber,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the type of the list, bulleted, numbered or none.
     * @returns {Promise<TXTextControlTypeDefinition.TextType>}
     */
    getType() {
        return RequestHelper.Promise(
            this._txInternal.getType,
            CallbackType.RequestTextTypeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the symbol character for a bulleted list.
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
     * Sets the size of the symbol character for a bulleted list.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setBulletSize(value) {
        return RequestHelper.Promise(
            this._txInternal.setBulletSize,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the starting number for a numbered list.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setFirstNumber(value) {
        return RequestHelper.Promise(
            this._txInternal.setFirstNumber,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the font used for the bullet character.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setFontName(value) {
        return RequestHelper.Promise(
            this._txInternal.setFontName,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the formatting character for a bulleted or numbered list.
     * @param {TXTextControlTypeDefinition.ListFormatCharacter} value
     * @returns {Promise<void>}
     */
    setFormatCharacter(value) {
        return RequestHelper.Promise(
            this._txInternal.setFormatCharacter,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the hanging indent of a numbered list.
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
     * Sets the left indent for a numbered list.
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
     * Sets the level for a bulleted or numbered list.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setLevel(value) {
        return RequestHelper.Promise(
            this._txInternal.setLevel,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the number format for a numbered list.
     * @param {TXTextControlTypeDefinition.NumberFormat} value
     * @returns {Promise<void>}
     */
    setNumberFormat(value) {
        return RequestHelper.Promise(
            this._txInternal.setNumberFormat,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the value determining whether a new numbered list begins.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setRestartNumbering(value) {
        return RequestHelper.Promise(
            this._txInternal.setRestartNumbering,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text that is displayed behind the number in a numbered list.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setTextAfterNumber(value) {
        return RequestHelper.Promise(
            this._txInternal.setTextAfterNumber,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the text that is displayed in front of the number in a numbered list.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setTextBeforeNumber(value) {
        return RequestHelper.Promise(
            this._txInternal.setTextBeforeNumber,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the type of the list, bulleted, numbered or none.
     * @param {TXTextControlTypeDefinition.ListType} value
     * @returns {Promise<void>}
     */
    setType(value) {
        return RequestHelper.Promise(
            this._txInternal.setType,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

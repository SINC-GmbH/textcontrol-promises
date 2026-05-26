import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/EmbeddedFile.d.ts.
 */
export class EmbeddedFileBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.EmbeddedFile} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.EmbeddedFile} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.EmbeddedFile} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getCreationDate', 'getData', 'getDescription', 'getFileName', 'getLastModificationDate', 'getMIMEType', 'getRelationship', 'setCreationDate', 'setDescription', 'setLastModificationDate', 'setMIMEType', 'setRelationship');
    }

    /**
     * Gets the file's creation date as a unix timestamp.
     * @returns {Promise<number>}
     */
    getCreationDate() {
        return RequestHelper.Promise(
            this._txInternal.getCreationDate,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the file's data as a base64 string.
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
     * Gets an optional file description.
     * @returns {Promise<string>}
     */
    getDescription() {
        return RequestHelper.Promise(
            this._txInternal.getDescription,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the file's name.
     * @returns {Promise<string>}
     */
    getFileName() {
        return RequestHelper.Promise(
            this._txInternal.getFileName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the date the file was last modified as a unix timestamp.
     * @returns {Promise<number>}
     */
    getLastModificationDate() {
        return RequestHelper.Promise(
            this._txInternal.getLastModificationDate,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an optional string specifying the file's type using types specified through the Multipurpose Internet Mail Extensions (MIME) specification.
     * @returns {Promise<string>}
     */
    getMIMEType() {
        return RequestHelper.Promise(
            this._txInternal.getMIMEType,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * PDF/A only. This string can be a predefined value or should follow the rules for second-class names (ISO 32000-1, Annex E). Predefined values are "Source", "Data", "Alternative", "Supplement" or "Unspecified".
     * @returns {Promise<string>}
     */
    getRelationship() {
        return RequestHelper.Promise(
            this._txInternal.getRelationship,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the file's creation date as a unix timestamp.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setCreationDate(value) {
        return RequestHelper.Promise(
            this._txInternal.setCreationDate,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an optional file description.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setDescription(value) {
        return RequestHelper.Promise(
            this._txInternal.setDescription,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the date the file was last modified as a unix timestamp.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setLastModificationDate(value) {
        return RequestHelper.Promise(
            this._txInternal.setLastModificationDate,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an optional string specifying the file's type using types specified through the Multipurpose Internet Mail Extensions (MIME) specification.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setMIMEType(value) {
        return RequestHelper.Promise(
            this._txInternal.setMIMEType,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * PDF/A only. This string can be a predefined value or should follow the rules for second-class names (ISO 32000-1, Annex E). Predefined values are "Source", "Data", "Alternative", "Supplement" or "Unspecified".
     * @param {number} value
     * @returns {Promise<void>}
     */
    setRelationship(value) {
        return RequestHelper.Promise(
            this._txInternal.setRelationship,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

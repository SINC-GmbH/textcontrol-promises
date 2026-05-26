import { ObjectBase } from '../ObjectBase.js';
import { EmbeddedFileCollection } from '../EmbeddedFileCollection.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DocumentSettings.d.ts.
 */
export class DocumentSettingsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.DocumentSettings} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DocumentSettings} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DocumentSettings} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getAuthor', 'getCreationDate', 'getCreatorApplication', 'getDocumentBasePath', 'getDocumentKeywords', 'getDocumentSubject', 'getDocumentTitle', 'getUserDefinedDocumentProperties', 'setAuthor', 'setCreationDate', 'setCreatorApplication', 'setDocumentBasePath', 'setDocumentKeywords', 'setDocumentSubject', 'setDocumentTitle', 'setUserDefinedDocumentProperties');
    }

    /**
     * Gets the author of the current document.
     * @returns {Promise<string>}
     */
    getAuthor() {
        return RequestHelper.Promise(
            this._txInternal.getAuthor,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the document's creation date as a unix timestamp.
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
     * Gets the application, which has created the current document.
     * @returns {Promise<string>}
     */
    getCreatorApplication() {
        return RequestHelper.Promise(
            this._txInternal.getCreatorApplication,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a file path that is used to search for resources like images or hypertext links.
     * @returns {Promise<string>}
     */
    getDocumentBasePath() {
        return RequestHelper.Promise(
            this._txInternal.getDocumentBasePath,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the current document's keywords.
     * @returns {Promise<string[]>}
     */
    getDocumentKeywords() {
        return RequestHelper.Promise(
            this._txInternal.getDocumentKeywords,
            CallbackType.RequestStringsCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the subject string of the current document.
     * @returns {Promise<string>}
     */
    getDocumentSubject() {
        return RequestHelper.Promise(
            this._txInternal.getDocumentSubject,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the title string of the current document.
     * @returns {Promise<string>}
     */
    getDocumentTitle() {
        return RequestHelper.Promise(
            this._txInternal.getDocumentTitle,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets an object with all user-defined document properties contained in the current document.
     * @template T
     * @param {TXTextControlTypeDefinition.RequestObjectCallback<T>} callback
     * @returns {Promise<void>}
     */
    getUserDefinedDocumentProperties(callback) {
        return RequestHelper.Promise(
            this._txInternal.getUserDefinedDocumentProperties,
            callback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the author of the current document.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setAuthor(value) {
        return RequestHelper.Promise(
            this._txInternal.setAuthor,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the document's creation date as a unix timestamp.
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
     * Sets the application, which has created the current document.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setCreatorApplication(value) {
        return RequestHelper.Promise(
            this._txInternal.setCreatorApplication,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a file path that is used to search for resources like images or hypertext links.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setDocumentBasePath(value) {
        return RequestHelper.Promise(
            this._txInternal.setDocumentBasePath,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the current document's keywords.
     * @param {string[]} value
     * @returns {Promise<void>}
     */
    setDocumentKeywords(value) {
        return RequestHelper.Promise(
            this._txInternal.setDocumentKeywords,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the subject string of the current document.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setDocumentSubject(value) {
        return RequestHelper.Promise(
            this._txInternal.setDocumentSubject,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the title string of the current document.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setDocumentTitle(value) {
        return RequestHelper.Promise(
            this._txInternal.setDocumentTitle,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an object with all user-defined document properties contained in the current document.
     * @template T
     * @param {T} value
     * @returns {Promise<void>}
     */
    setUserDefinedDocumentProperties(value) {
        return RequestHelper.Promise(
            this._txInternal.setUserDefinedDocumentProperties,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * Gets a collection of all files embedded in the document.
     * @type {EmbeddedFileCollection}
     */
    get embeddedFiles() { return new EmbeddedFileCollection(this._txInternal.embeddedFiles); }

    //#endregion
}

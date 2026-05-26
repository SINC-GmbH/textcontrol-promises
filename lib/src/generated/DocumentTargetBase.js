import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DocumentTarget.d.ts.
 */
export class DocumentTargetBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.DocumentTarget} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DocumentTarget} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DocumentTarget} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getAutoGenerationType', 'getDeleteable', 'getID', 'getName', 'getNumber', 'getStart', 'getTargetName', 'scrollTo', 'setDeleteable', 'setID', 'setName', 'setTargetName');
    }

    /**
     * Gets the type of auto-generation.
     * @returns {Promise<number>}
     */
    getAutoGenerationType() {
        return RequestHelper.Promise(
            this._txInternal.getAutoGenerationType,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether a document target can be deleted by the end-user while a TX Text Control document is being edited.
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
     * Gets an identifier for a document target.
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
     * Relates a user-defined name to a document target.
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
     * Gets the one-based number of the document target in the document.
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
     * Gets the first character position (one-based) of a document target.
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
     * Gets the name of the document target.
     * @returns {Promise<string>}
     */
    getTargetName() {
        return RequestHelper.Promise(
            this._txInternal.getTargetName,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the current input position to the beginning of the document target and scrolls it into the visible part of the document.
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
     * Sets whether a document target can be deleted by the end-user while a TX Text Control document is being edited.
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
     * Sets an identifier for the document target.
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
     * Sets the name of a document target.
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
     * Sets the name of the document target.
     * @param {string} targetName
     * @returns {Promise<void>}
     */
    setTargetName(targetName) {
        return RequestHelper.Promise(
            this._txInternal.setTargetName,
            targetName,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

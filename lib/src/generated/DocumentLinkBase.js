import { TextField } from '../TextField.js';
import { DocumentTarget } from '../DocumentTarget.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/DocumentLink.d.ts.
 */
export class DocumentLinkBase extends TextField {
    /** @returns {TXTextControlTypeDefinition.DocumentLink} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.DocumentLink} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.DocumentLink} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getAutoGenerationType', 'getDocumentTarget', 'setDocumentTarget', 'getDescriptiveText', 'setDescriptiveText');
    }

    /**
     * Gets the type of auto-generation. A document link in a table of contents is automatically generated when the table of contents is inserted into the document.
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
     * Gets an object of the type DocumentTarget specifying to where the link points.
     * @returns {Promise<DocumentTarget>}
     */
    async getDocumentTarget() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getDocumentTarget,
            CallbackType.RequestDocumentTargetCallback,
            CallbackType.ErrorCallback
        );
        return tx && new DocumentTarget(tx);
    }

    /**
     * Sets an object of the type DocumentTarget specifying to where the link points.
     * @param {DocumentTarget} documentTarget
     * @returns {Promise<void>}
     */
    setDocumentTarget(documentTarget) {
        return RequestHelper.Promise(
            this._txInternal.setDocumentTarget,
            documentTarget?._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the document link's descriptive text. An empty string indicates that the link has no such text.
     * @returns {Promise<string>}
     */
    getDescriptiveText() {
        return RequestHelper.Promise(
            this._txInternal.getDescriptiveText,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the document link's descriptive text. An empty string or null can be used to delete a previously set text.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setDescriptiveText(value) {
        return RequestHelper.Promise(
            this._txInternal.setDescriptiveText,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

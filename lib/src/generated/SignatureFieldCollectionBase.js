import { FrameBaseCollection } from '../FrameBaseCollection.js';
import { SignatureField } from '../SignatureField.js';
import { Point } from '../Point.js';
import { Size } from '../Size.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {FrameBaseCollection}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SignatureFieldCollection.d.ts.
 */
export class SignatureFieldCollectionBase extends FrameBaseCollection {
    /** @returns {TXTextControlTypeDefinition.SignatureFieldCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SignatureFieldCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SignatureFieldCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => new SignatureField(tx));
        this._bindMethods('addAnchored', 'addAnchoredAtLocation', 'addAtFixedPositionInDocument', 'addAtFixedPositionOnPage', 'addInline', 'addWithMouse', 'getItem', 'getItemByName', 'remove');
    }

    /**
     * Creates and inserts a new signature field which is anchored to the specified text position.
     * @param {Size} size
     * @param {TXTextControlTypeDefinition.HorizontalAlignment} horizontalAlignment
     * @param {number} textPosition
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<SignatureField>}
     */
    async addAnchored(size, horizontalAlignment, textPosition, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAnchored, size._txInternal, horizontalAlignment, textPosition, insertionMode, CallbackType.RequestSignatureFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a new signature field which is anchored to the specified text position.
     * @param {Size} size
     * @param {Point} location
     * @param {number} textPosition
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<SignatureField>}
     */
    async addAnchoredAtLocation(size, location, textPosition, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAnchoredAtLocation, size._txInternal, location._txInternal, textPosition, insertionMode, CallbackType.RequestSignatureFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Creates and inserts a new signature field which has a fixed geometrical position in the document.
     * @param {Size} size
     * @param {Point} location
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<SignatureField>}
     */
    async addAtFixedPositionInDocument(size, location, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAtFixedPositionInDocument, size._txInternal, location._txInternal, insertionMode, CallbackType.RequestSignatureFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a new image which has a fixed geometrical position in the document.
     * @param {Size} size
     * @param {number} pageNumber
     * @param {Point} location
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<SignatureField>}
     */
    async addAtFixedPositionOnPage(size, pageNumber, location, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAtFixedPositionOnPage, size._txInternal, pageNumber, location._txInternal, insertionMode, CallbackType.RequestSignatureFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a signature field inline, which means that it is treated in the text like a single character.
     * @param {Size} size
     * @param {number} textPosition
     * @returns {Promise<SignatureField>}
     */
    async addInline(size, textPosition) {
        const tx = await RequestHelper.Promise(this._txInternal.addInline, size._txInternal, textPosition, CallbackType.RequestSignatureFieldCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a signature field with the built-in mouse interface.
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<void>}
     */
    addWithMouse(insertionMode) {
        return RequestHelper.Promise(
            this._txInternal.addWithMouse,
            insertionMode,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the signature field selected by the user or the signature field with the specified identifier.
     * @param {number} id
     * @returns {Promise<SignatureField>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestSignatureFieldCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the signature field with the specified name.
     * @param {string} name
     * @returns {Promise<SignatureField>}
     */
    async getItemByName(name) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemByName, CallbackType.RequestSignatureFieldCallback, CallbackType.ErrorCallback, name);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes a signature field from a Text Control document.
     * @param {SignatureField} field
     * @returns {Promise<void>}
     */
    remove(field) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            field._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

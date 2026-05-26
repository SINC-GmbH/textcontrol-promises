import { FrameBaseCollection } from '../FrameBaseCollection.js';
import { TextFrame } from '../TextFrame.js';
import { Point } from '../Point.js';
import { Size } from '../Size.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {FrameBaseCollection}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextFrameCollection.d.ts.
 */
export class TextFrameCollectionBase extends FrameBaseCollection {
    /** @returns {TXTextControlTypeDefinition.TextFrameCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextFrameCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TextFrameCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => new TextFrame(tx));
        this._bindMethods('addAnchored', 'addAnchoredAtLocation', 'addAtFixedPositionInDocument', 'addAtFixedPositionOnPage', 'addInline', 'addWithMouse', 'getItem', 'getItemByName', 'remove');
    }

    /**
     * Creates and inserts a new text frame which is anchored to the specified text position.
     * @param {Size} size The text frame's size in twips.
     * @param {TXTextControlTypeDefinition.HorizontalAlignment} horizontalAlignment Specifies the text frame's horizontal alignment.
     * @param {number} textPosition Specifies the text position at which the text frame is to be inserted. If -1 is specified, the text frame is inserted at the current input position.
     * @param {TXTextControlTypeDefinition.TextFrameInsertionMode} insertionMode Specifies how the text flow is handled.
     * @returns {Promise<TextFrame>}
     */
    async addAnchored(size, horizontalAlignment, textPosition, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAnchored, size._txInternal, horizontalAlignment, textPosition, insertionMode, CallbackType.RequestTextFrameCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a new text frame which is anchored to the specified text position.
     * @param {Size} size The text frame's size in twips.
     * @param {Point} location Specifies the location, in twips, at which the text frame is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
     * @param {number} textPosition Specifies the text position at which the text frame is to be inserted. If -1 is specified, the text frame is inserted at the current input position.
     * @param {TXTextControlTypeDefinition.TextFrameInsertionMode} insertionMode Specifies how the text flow is handled.
     * @returns {Promise<TextFrame>}
     */
    async addAnchoredAtLocation(size, location, textPosition, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAnchoredAtLocation, size._txInternal, location._txInternal, textPosition, insertionMode, CallbackType.RequestTextFrameCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Creates and inserts a new text frame which has a fixed geometrical position in the document.
     * @param {Size} size The text frame's size in twips.
     * @param {Point} location Specifies the location, in twips, at which the text frame is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
     * @param {TXTextControlTypeDefinition.TextFrameInsertionMode} insertionMode Specifies how the text flow is handled.
     * @returns {Promise<TextFrame>}
     */
    async addAtFixedPositionInDocument(size, location, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAtFixedPositionInDocument, size._txInternal, location._txInternal, insertionMode, CallbackType.RequestTextFrameCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a new image which has a fixed geometrical position in the document. This position is specified through a page number and a location on this page.
     * @param {Size} size The text frame's size in twips.
     * @param {number} pageNumber Specifies the number of a page beginning with 1 where the text frame is located.
     * @param {Point} location Specifies the location, in twips, at which the text frame is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
     * @param {TXTextControlTypeDefinition.TextFrameInsertionMode} insertionMode Specifies how the text flow is handled.
     * @returns {Promise<TextFrame>}
     */
    async addAtFixedPositionOnPage(size, pageNumber, location, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAtFixedPositionOnPage, size._txInternal, pageNumber, location._txInternal, insertionMode, CallbackType.RequestTextFrameCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a text frame inline, which means that it is treated in the text like a single character.
     * @param {Size} size The text frame's size in twips.
     * @param {number} textPosition Specifies the text position at which the text frame is to be inserted. If -1 is specified, the text frame is inserted at the current input position.
     * @returns {Promise<TextFrame>}
     */
    async addInline(size, textPosition) {
        const tx = await RequestHelper.Promise(this._txInternal.addInline, size._txInternal, textPosition, CallbackType.RequestTextFrameCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a text frame with the built-in mouse interface.
     * @param {TXTextControlTypeDefinition.TextFrameInsertionMode} insertionMode Specifies how the text flow is handled.
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
     * Gets the text frame selected by the user or the text frame with the specified identifier.
     * @param {number} id
     * @returns {Promise<TextFrame>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestTextFrameCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the text frame with the specified name.
     * @param {string} name
     * @returns {Promise<TextFrame>}
     */
    async getItemByName(name) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemByName, CallbackType.RequestTextFrameCallback, CallbackType.ErrorCallback, name);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes a text frame from a Text Control document.
     * @param {TextFrame} text
     * @returns {Promise<void>}
     */
    remove(text) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            text._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

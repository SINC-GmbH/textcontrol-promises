import { FrameBaseCollection } from '../FrameBaseCollection.js';
import { Image } from '../Image.js';
import { Point } from '../Point.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {FrameBaseCollection}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ImageCollection.d.ts.
 */
export class ImageCollectionBase extends FrameBaseCollection {
    /** @returns {TXTextControlTypeDefinition.ImageCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ImageCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.ImageCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => new Image(tx));
        this._bindMethods('addAnchored', 'addAnchoredAtLocation', 'addAtFixedPosition', 'addAtFixedPositionInDocument', 'addAtFixedPositionOnPage', 'addInline', 'getItem', 'getItemByName', 'remove');
    }

    /**
     * Creates and inserts a new image which is anchored to the specified text position.
     * @param {string} imageData The base64 encoded image data.
     * @param {TXTextControlTypeDefinition.HorizontalAlignment} horizontalAlignment Specifies the image's horizontal alignment.
     * @param {number} textPosition Specifies the text position at which the image is to be inserted. If -1 is specified, the image is inserted at the current input position.
     * @param {TXTextControlTypeDefinition.ImageInsertionMode} insertionMode Specifies how the text flow is handled.
     * @returns {Promise<Image>}
     */
    async addAnchored(imageData, horizontalAlignment, textPosition, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAnchored, imageData, horizontalAlignment, textPosition, insertionMode, CallbackType.RequestImageCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a new image which is anchored to the specified text position.
     * @param {string} imageData The base64 encoded image data.
     * @param {Point} location Specifies the location, in twips, at which the image is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
     * @param {number} textPosition Specifies the text position at which the image is to be inserted. If -1 is specified, the image is inserted at the current input position.
     * @param {TXTextControlTypeDefinition.ImageInsertionMode} insertionMode Specifies how the text flow is handled.
     * @returns {Promise<Image>}
     */
    async addAnchoredAtLocation(imageData, location, textPosition, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAnchoredAtLocation, imageData, location?._txInternal, textPosition, insertionMode, CallbackType.RequestImageCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a new image which has a fixed geometrical position in the document. This position is specified through a page number and a location on this page.
     * @deprecated
     * @param {string} imageData
     * @param {number} pageNumber
     * @param {Point} location
     * @param {TXTextControlTypeDefinition.ImageInsertionMode} insertionMode
     * @returns {Promise<void>}
     */
    addAtFixedPosition(imageData, pageNumber, location, insertionMode) {
        return RequestHelper.Promise(
            this._txInternal.addAtFixedPosition,
            imageData,
            pageNumber,
            location?._txInternal,
            insertionMode,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Creates and inserts a new image which has a fixed geometrical position in the document.
     * @param {string} imageData The base64 encoded image data.
     * @param {Point} location Specifies the location, in twips, at which the image is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
     * @param {TXTextControlTypeDefinition.ImageInsertionMode} insertionMode Specifies how the text flow is handled.
     * @returns {Promise<Image>}
     */
    async addAtFixedPositionInDocument(imageData, location, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAtFixedPositionInDocument, imageData, location?._txInternal, insertionMode, CallbackType.RequestImageCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Inserts a new image which has a fixed geometrical position in the document.
     * @param {string} imageData The base64 encoded image data.
     * @param {number} pageNumber Specifies the number of a page beginning with 1 where the image is located.
     * @param {Point} location Specifies the location, in twips, at which the image is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
     * @param {TXTextControlTypeDefinition.ImageInsertionMode} insertionMode Specifies how the text flow is handled.
     * @returns {Promise<Image>}
     */
    async addAtFixedPositionOnPage(imageData, pageNumber, location, insertionMode) {
        const tx = await RequestHelper.Promise(this._txInternal.addAtFixedPositionOnPage, imageData, pageNumber, location?._txInternal, insertionMode, CallbackType.RequestImageCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Creates and inserts a new image inline, which means that it is treated in the text like a single character.
     * @param {string} imageData The base64 encoded image data.
     * @param {number} textPosition Specifies the text position at which the image is to be inserted. If -1 is specified, the image is inserted at the current input position.
     * @returns {Promise<Image>}
     */
    async addInline(imageData, textPosition) {
        const tx = await RequestHelper.Promise(this._txInternal.addInline, imageData, textPosition, CallbackType.RequestImageCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the image selected by the user or the image with the specified identifier.
     * @param {number} [id]
     * @returns {Promise<Image>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, CallbackType.RequestImageCallback, CallbackType.ErrorCallback, id);
        return tx && this._wrapItem(tx);
    }

    /**
     * Gets the image with the specified name.
     * @param {string} name
     * @returns {Promise<Image>}
     */
    async getItemByName(name) {
        const tx = await RequestHelper.Promise(this._txInternal.getItemByName, CallbackType.RequestImageCallback, CallbackType.ErrorCallback, name);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes an image from a Text Control document.
     * @param {Image} image
     * @returns {Promise<void>}
     */
    remove(image) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            image?._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

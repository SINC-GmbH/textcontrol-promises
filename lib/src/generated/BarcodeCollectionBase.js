import { FrameBaseCollection } from '../FrameBaseCollection.js';
import { Barcode } from '../Barcode.js';
import { BarcodeFrame } from '../BarcodeFrame.js';
import { Point } from '../Point.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {FrameBaseCollection}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/BarcodeCollection.d.ts.
 */
export class BarcodeCollectionBase extends FrameBaseCollection {
    /** @returns {TXTextControlTypeDefinition.BarcodeCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.BarcodeCollection} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.BarcodeCollection} txCollection */
    constructor(txCollection) {
        super(txCollection, (/** @type {*} */ tx) => new Barcode(tx));
        this._bindMethods('addAnchored', 'addAnchoredAtLocation', 'addAtFixedPositionInDocument', 'addAtFixedPositionOnPage', 'addInline', 'addWithMouse', 'getItem', 'getItemByName', 'remove');
    }

    /**
     * Creates and inserts a new barcode which is anchored to the specified text position. It has the specified horizontal alignment and a textflow which is given through the insertionMode parameter. Anchored barcodes are moved with the text.
     * @param {TXTextControlTypeDefinition.BarcodeType} barcodeType
     * @param {string} text
     * @param {TXTextControlTypeDefinition.HorizontalAlignment} horizontalAlignment
     * @param {number} textPosition
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<BarcodeFrame>}
     */
    async addAnchored(barcodeType, text, horizontalAlignment, textPosition, insertionMode) {
        const tx = await RequestHelper.Promise(
            this._txInternal.addAnchored,
            CallbackType.RequestBarcodeFrameCallback,
            CallbackType.ErrorCallback,
            barcodeType,
            text,
            horizontalAlignment,
            textPosition,
            insertionMode
        );
        return tx && new BarcodeFrame(tx);
    }

    /**
     * Inserts a new barcode which is anchored to the specified text position. It has the specified location relative to the paragraph it is anchored to and a textflow which is given through the insertionMode parameter. Anchored barcode are moved with the text.
     * @param {TXTextControlTypeDefinition.BarcodeType} barcodeType
     * @param {string} text
     * @param {Point} location
     * @param {number} textPosition
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<BarcodeFrame>}
     */
    async addAnchoredAtLocation(barcodeType, text, location, textPosition, insertionMode) {
        const tx = await RequestHelper.Promise(
            this._txInternal.addAnchoredAtLocation,
            CallbackType.RequestBarcodeFrameCallback,
            CallbackType.ErrorCallback,
            barcodeType,
            text,
            location?._txInternal,
            textPosition,
            insertionMode
        );
        return tx && new BarcodeFrame(tx);
    }

    /**
     * Creates and inserts a new barcode which has a fixed geometrical position in the document. This position is specified through a location relative to the top left corner of the complete document. All gaps between the pages must be included.
     * @param {TXTextControlTypeDefinition.BarcodeType} barcodeType
     * @param {string} text
     * @param {Point} location
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<BarcodeFrame>}
     */
    async addAtFixedPositionInDocument(barcodeType, text, location, insertionMode) {
        const tx = await RequestHelper.Promise(
            this._txInternal.addAtFixedPositionInDocument,
            CallbackType.RequestBarcodeFrameCallback,
            CallbackType.ErrorCallback,
            barcodeType,
            text,
            location?._txInternal,
            insertionMode
        );
        return tx && new BarcodeFrame(tx);
    }

    /**
     * Inserts a new image which has a fixed geometrical position in the document. This position is specified through a page number and a location on this page.
     * @param {TXTextControlTypeDefinition.BarcodeType} barcodeType
     * @param {string} text
     * @param {number} pageNumber
     * @param {Point} location
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<BarcodeFrame>}
     */
    async addAtFixedPositionOnPage(barcodeType, text, pageNumber, location, insertionMode) {
        const tx = await RequestHelper.Promise(
            this._txInternal.addAtFixedPositionOnPage,
            CallbackType.RequestBarcodeFrameCallback,
            CallbackType.ErrorCallback,
            barcodeType,
            text,
            pageNumber,
            location?._txInternal,
            insertionMode
        );
        return tx && new BarcodeFrame(tx);
    }

    /**
     * Creates and inserts a new barcode inline, which means that it is treated in the text like a single character.
     * @param {TXTextControlTypeDefinition.BarcodeType} barcodeType The barcode type.
     * @param {string} text The text the barcode should encrypt.
     * @param {number} [textPosition] Optional. Specifies the text position at which the barcode is to be inserted. If -1 or no value is specified, the barcode is inserted at the current input position.
     * @returns {Promise<BarcodeFrame>}
     */
    async addInline(barcodeType, text, textPosition) {
        const tx = await RequestHelper.Promise(
            this._txInternal.addInline,
            CallbackType.RequestBarcodeFrameCallback,
            CallbackType.ErrorCallback,
            barcodeType,
            text,
            textPosition
        );
        return tx && new BarcodeFrame(tx);
    }

    /**
     * Inserts a barcode with the built -in mouse interface. The barcode's size is determined through the end-user. A cross cursor indicates where the barcode can be inserted. Changing the document aborts the insertion process.
     * @param {TXTextControlTypeDefinition.BarcodeType} barcodeType
     * @param {string} text
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} insertionMode
     * @returns {Promise<void>}
     */
    addWithMouse(barcodeType, text, insertionMode) {
        return RequestHelper.Promise(
            this._txInternal.addWithMouse,
            barcodeType,
            text,
            insertionMode,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the barcode selected by the user or the barcode with the specified identifier.
     * @param {number} [id]
     * @returns {Promise<BarcodeFrame>}
     */
    async getItem(id) {
        const tx = await RequestHelper.Promise(
            this._txInternal.getItem,
            CallbackType.RequestBarcodeFrameCallback,
            CallbackType.ErrorCallback,
            id
        );
        return tx && new BarcodeFrame(tx);
    }

    /**
     * Gets the barcode with the specified name.
     * @param {string} name
     * @returns {Promise<BarcodeFrame>}
     */
    async getItemByName(name) {
        const tx = await RequestHelper.Promise(
            this._txInternal.getItemByName,
            CallbackType.RequestBarcodeFrameCallback,
            CallbackType.ErrorCallback,
            name
        );
        return tx && new BarcodeFrame(tx);
    }

    /**
     * Removes a barcode.
     * @param {BarcodeFrame} barcode
     * @returns {Promise<void>}
     */
    remove(barcode) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            barcode?._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
}

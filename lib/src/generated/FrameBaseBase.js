import { ObjectBase } from '../ObjectBase.js';
import { Distances } from '../Distances.js';
import { Point } from '../Point.js';
import { Rectangle } from '../Rectangle.js';
import { Size } from '../Size.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FrameBase.d.ts.
 */
export class FrameBaseBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.FrameBase} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FrameBase} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.FrameBase} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('changeZOrder', 'getAlignment', 'getBounds', 'getID', 'getInsertionMode', 'getLocation', 'getMoveable', 'getName', 'getSize', 'getSizeable', 'getTextDistances', 'getTextPosition', 'setAlignment', 'setID', 'setInsertionMode', 'setLocation', 'setMoveable', 'setName', 'setSize', 'setSizeable', 'setTextDistances', 'getDescriptiveText', 'setDescriptiveText');
    }

    /**
     * Changes the frame's z-order.
     * @param {TXTextControlTypeDefinition.ZOrder} zOrder
     * @returns {Promise<boolean>}
     */
    changeZOrder(zOrder) {
        return RequestHelper.Promise(
            this._txInternal.changeZOrder,
            zOrder,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the frame's horizontal alignment when it is anchored to a paragraph.
     * @returns {Promise<TXTextControlTypeDefinition.HorizontalAlignment>}
     */
    getAlignment() {
        return RequestHelper.Promise(
            this._txInternal.getAlignment,
            CallbackType.RequestHorizontalAlignmentCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the frame's bounding rectangle relative to the upper left corner of the document.
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
     * Gets an identifier for the frame.
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
     * Gets a value determining whether the frame is treated as a single character or the document's text either flows around or overwrites the frame.
     * @returns {Promise<TXTextControlTypeDefinition.FrameInsertionMode>}
     */
    getInsertionMode() {
        return RequestHelper.Promise(
            this._txInternal.getInsertionMode,
            CallbackType.RequestFrameInsertionModeCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets, in twips, the frame's current location.
     * @returns {Promise<Point>}
     */
    async getLocation() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getLocation,
            CallbackType.RequestPointCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Point(tx);
    }

    /**
     * Gets whether a frame can be moved in the document at run time with the built-in mouse interface.
     * @returns {Promise<boolean>}
     */
    getMoveable() {
        return RequestHelper.Promise(
            this._txInternal.getMoveable,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the name for the frame.
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
     * Gets the frame's size in twips.
     * @returns {Promise<Size>}
     */
    async getSize() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getSize,
            CallbackType.RequestSizeCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Size(tx);
    }

    /**
     * Gets whether the frame can be resized at run time with the built-in mouse interface.
     * @returns {Promise<boolean>}
     */
    getSizeable() {
        return RequestHelper.Promise(
            this._txInternal.getSizeable,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the distances, in twips, between the frame and the document's text.
     * @returns {Promise<TXTextControlTypeDefinition.Distances>}
     */
    getTextDistances() {
        return RequestHelper.Promise(
            this._txInternal.getTextDistances,
            CallbackType.RequestDistancesCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the frame's character position in the document's text (one-based).
     * @returns {Promise<number>}
     */
    getTextPosition() {
        return RequestHelper.Promise(
            this._txInternal.getTextPosition,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the frame's horizontal alignment when it is anchored to a paragraph.
     * @param {TXTextControlTypeDefinition.HorizontalAlignment} value
     * @returns {Promise<void>}
     */
    setAlignment(value) {
        return RequestHelper.Promise(
            this._txInternal.setAlignment,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets an identifier for the frame.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setID(value) {
        return RequestHelper.Promise(
            this._txInternal.setID,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a value determining whether the frame is treated as a single character or the document's text either flows around or overwrites the frame.
     * @param {TXTextControlTypeDefinition.FrameInsertionMode} value
     * @returns {Promise<void>}
     */
    setInsertionMode(value) {
        return RequestHelper.Promise(
            this._txInternal.setInsertionMode,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets, in twips, the frame's current location.
     * @param {Point} value
     * @returns {Promise<void>}
     */
    setLocation(value) {
        return RequestHelper.Promise(
            this._txInternal.setLocation,
            value._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether a frame can be moved in the document at run time with the built-in mouse interface.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setMoveable(value) {
        return RequestHelper.Promise(
            this._txInternal.setMoveable,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a name for the frame.
     * @param {string} value
     * @returns {Promise<void>}
     */
    setName(value) {
        return RequestHelper.Promise(
            this._txInternal.setName,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the frame's size in twips.
     * @param {Size} value
     * @returns {Promise<void>}
     */
    setSize(value) {
        return RequestHelper.Promise(
            this._txInternal.setSize,
            value._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether the frame can be resized at run time with the built-in mouse interface.
     * @param {boolean} value
     * @returns {Promise<void>}
     */
    setSizeable(value) {
        return RequestHelper.Promise(
            this._txInternal.setSizeable,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the distances, in twips, between the frame and the document's text.
     * @param {Distances} value
     * @returns {Promise<void>}
     */
    setTextDistances(value) {
        return RequestHelper.Promise(
            this._txInternal.setTextDistances,
            value._txInternal,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the frame's descriptive text. An empty string indicates that the link has no such text.
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
     * Sets the frame's descriptive text. An empty string or null can be used to delete a previously set text.
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

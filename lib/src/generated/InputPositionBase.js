import { ObjectBase } from '../ObjectBase.js';
import { Point } from '../Point.js';
import { Size } from '../Size.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/InputPosition.d.ts.
 */
export class InputPositionBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.InputPosition} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.InputPosition} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.InputPosition} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getCaretSize', 'getColumn', 'getInactiveMarker', 'getLine', 'getLocation', 'getPage', 'getPageInSection', 'getSection', 'getTextPosition', 'scrollTo', 'setInactiveMarker');
    }

    /**
     * Gets the size of the caret, in pixels, at the current text input position.
     * @returns {Promise<Size>}
     */
    async getCaretSize() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getCaretSize,
            CallbackType.RequestSizeCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Size(tx);
    }

    /**
     * Gets the column number of the current text input position.
     * @returns {Promise<number>}
     */
    getColumn() {
        return RequestHelper.Promise(
            this._txInternal.getColumn,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets whether the current text input position when the TextControl is inactive and the blinking caret is not visible.
     * @returns {Promise<boolean>}
     */
    getInactiveMarker() {
        return RequestHelper.Promise(
            this._txInternal.getInactiveMarker,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the line number of the current text input position.
     * @returns {Promise<number>}
     */
    getLine() {
        return RequestHelper.Promise(
            this._txInternal.getLine,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the geometric location of the current text input position.
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
     * Gets the page number of the current text input position.
     * @returns {Promise<number>}
     */
    getPage() {
        return RequestHelper.Promise(
            this._txInternal.getPage,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the page number in the section containing the current text input position.
     * @returns {Promise<number>}
     */
    getPageInSection() {
        return RequestHelper.Promise(
            this._txInternal.getPageInSection,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the section number of the current text input position.
     * @returns {Promise<number>}
     */
    getSection() {
        return RequestHelper.Promise(
            this._txInternal.getSection,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the text position of the current text input position.
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
     * Scrolls the contents of a Text Control so that the current input position becomes visible.
     * @param {TXTextControlTypeDefinition.InputPosition.ScrollPosition} scrollPosition
     * @returns {Promise<void>}
     */
    scrollTo(scrollPosition) {
        return RequestHelper.Promise(
            this._txInternal.scrollTo,
            scrollPosition,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets whether the current text input position when the TextControl is inactive and the blinking caret is not visible.
     * @param {boolean} isInactive
     * @returns {Promise<void>}
     */
    setInactiveMarker(isInactive) {
        return RequestHelper.Promise(
            this._txInternal.setInactiveMarker,
            isInactive,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

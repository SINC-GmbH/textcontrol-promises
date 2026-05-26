import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/PageMargins.d.ts.
 */
export class PageMarginsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.PageMargins} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.PageMargins} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.PageMargins} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBottom', 'getLeft', 'getRight', 'getTop', 'setBottom', 'setLeft', 'setRight', 'setTop');
    }

    /**
     * Gets the bottom margin of a TX Text Control document or document section.
     * @returns {Promise<number>}
     */
    getBottom() {
        return RequestHelper.Promise(
            this._txInternal.getBottom,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the left margin of a TX Text Control document or document section.
     * @returns {Promise<number>}
     */
    getLeft() {
        return RequestHelper.Promise(
            this._txInternal.getLeft,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the right margin of a TX Text Control document or document section.
     * @returns {Promise<number>}
     */
    getRight() {
        return RequestHelper.Promise(
            this._txInternal.getRight,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the top margin of a TX Text Control document or document section.
     * @returns {Promise<number>}
     */
    getTop() {
        return RequestHelper.Promise(
            this._txInternal.getTop,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the bottom margin of a TX Text Control document or document section.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setBottom(value) {
        return RequestHelper.Promise(
            this._txInternal.setBottom,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the left margin of a TX Text Control document or document section.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setLeft(value) {
        return RequestHelper.Promise(
            this._txInternal.setLeft,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the right margin of a TX Text Control document or document section.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setRight(value) {
        return RequestHelper.Promise(
            this._txInternal.setRight,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the top margin of a TX Text Control document or document section.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setTop(value) {
        return RequestHelper.Promise(
            this._txInternal.setTop,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

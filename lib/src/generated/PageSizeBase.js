import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/PageSize.d.ts.
 */
export class PageSizeBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.PageSize} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.PageSize} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.PageSize} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getHeight', 'getWidth', 'setHeight', 'setWidth');
    }

    /**
     * Gets the page height of a document or document section.
     * @returns {Promise<number>}
     */
    getHeight() {
        return RequestHelper.Promise(
            this._txInternal.getHeight,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the page width of a document or document section.
     * @returns {Promise<number>}
     */
    getWidth() {
        return RequestHelper.Promise(
            this._txInternal.getWidth,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the page height of a document or document section.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setHeight(value) {
        return RequestHelper.Promise(
            this._txInternal.setHeight,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets the page width of a document or document section.
     * @param {number} value
     * @returns {Promise<void>}
     */
    setWidth(value) {
        return RequestHelper.Promise(
            this._txInternal.setWidth,
            value,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }}

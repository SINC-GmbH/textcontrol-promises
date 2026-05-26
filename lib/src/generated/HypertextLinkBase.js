import { TextField } from '../TextField.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/HypertextLink.d.ts.
 */
export class HypertextLinkBase extends TextField {
    /** @returns {TXTextControlTypeDefinition.HypertextLink} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.HypertextLink} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.HypertextLink} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getTarget', 'setTarget', 'getDescriptiveText', 'setDescriptiveText');
    }

    /**
     * Gets a string that specifies the target to where the hypertext link points.
     * @returns {Promise<string>}
     */
    getTarget() {
        return RequestHelper.Promise(
            this._txInternal.getTarget,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Sets a string that specifies the target to where the hypertext link points.
     * @param {string} target
     * @returns {Promise<void>}
     */
    setTarget(target) {
        return RequestHelper.Promise(
            this._txInternal.setTarget,
            target,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the hyperlink's descriptive text. An empty string indicates that the link has no such text.
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
     * Sets the hyperlink's descriptive text. An empty string or null can be used to delete a previously set text.
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

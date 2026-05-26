import { FormattingStyle } from '../FormattingStyle.js';
import { ListFormat } from '../ListFormat.js';
import { ParagraphFormat } from '../ParagraphFormat.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/ParagraphStyle.d.ts.
 */
export class ParagraphStyleBase extends FormattingStyle {
    /** @returns {TXTextControlTypeDefinition.ParagraphStyle} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.ParagraphStyle} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.ParagraphStyle} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getFollowingStyle', 'getParagraphFormat', 'setFollowingStyle');
    }

    /**
     * Gets the name of the style that the document automatically uses for the following paragraph after the user has pressed the ENTER key.
     * @returns {Promise<string>}
     */
    getFollowingStyle() {
        return RequestHelper.Promise(
            this._txInternal.getFollowingStyle,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the style's paragraph attributes.
     * @returns {Promise<ParagraphFormat>}
     */
    async getParagraphFormat() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getParagraphFormat,
            CallbackType.RequestParagraphFormatCallback,
            CallbackType.ErrorCallback
        );
        return tx && new ParagraphFormat(tx);
    }

    /**
     * Sets the name of the style that the document automatically uses for the following paragraph after the user has pressed the ENTER key.
     * @param {string} styleName
     * @returns {Promise<void>}
     */
    setFollowingStyle(styleName) {
        return RequestHelper.Promise(
            this._txInternal.setFollowingStyle,
            styleName,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * The paragraph style's bulleted or numbered list and/or its formatting attributes.
     * @type {ListFormat}
     */
    get listFormat() { return new ListFormat(this._txInternal.listFormat); }

    /**
     * The paragraph style's paragraph attributes.
     * @type {ParagraphFormat}
     */
    get paragraphFormat() { return new ParagraphFormat(this._txInternal.paragraphFormat); }

    //#endregion
}

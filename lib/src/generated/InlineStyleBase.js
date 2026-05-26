import { FormattingStyle } from '../FormattingStyle.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/InlineStyle.d.ts.
 */
export class InlineStyleBase extends FormattingStyle {
    /** @returns {TXTextControlTypeDefinition.InlineStyle} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.InlineStyle} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.InlineStyle} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('isInheritedFromParagraph', 'resetToParagraph');
    }

    /**
     * Informs about whether one or more of the style's attributes are inherited from the surrounding paragraph.
     * @param {TXTextControlTypeDefinition.InlineStyle.Attributes} attributes
     * @returns {Promise<boolean>}
     */
    isInheritedFromParagraph(attributes) {
        return RequestHelper.Promise(
            this._txInternal.isInheritedFromParagraph,
            attributes,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Resets one or more of the style's attributes to its default value which is the same value as defined for the surrounding paragraph.
     * @param {TXTextControlTypeDefinition.InlineStyle.Attributes} attributes
     * @returns {Promise<void>}
     */
    resetToParagraph(attributes) {
        return RequestHelper.Promise(
            this._txInternal.resetToParagraph,
            attributes,
            CallbackType.ErrorCallback
        );
    }}

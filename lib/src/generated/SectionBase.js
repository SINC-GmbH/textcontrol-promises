import { ObjectBase } from '../ObjectBase.js';
import { HeaderFooterCollection } from '../HeaderFooterCollection.js';
import { SectionFormat } from '../SectionFormat.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Section.d.ts.
 */
export class SectionBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Section} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Section} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Section} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getLength', 'getNumber', 'getStart', 'select');
    }

    /**
     * Gets the number of characters in the section.
     * @returns {Promise<number>}
     */
    getLength() {
        return RequestHelper.Promise(
            this._txInternal.getLength,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the section's number.
     * @returns {Promise<number>}
     */
    getNumber() {
        return RequestHelper.Promise(
            this._txInternal.getNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the number (one-based) of the first character in the section.
     * @returns {Promise<number>}
     */
    getStart() {
        return RequestHelper.Promise(
            this._txInternal.getStart,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Selects the section.
     * @returns {Promise<void>}
     */
    select() {
        return RequestHelper.Promise(
            this._txInternal.select,
            CallbackType.EmptyRequestCallback,
            CallbackType.ErrorCallback
        );
    }
    //#region properties

    /**
     * The section's formatting attributes.
     * @type {SectionFormat}
     */
    get format() { return new SectionFormat(this._txInternal.format); }

    /**
     * The section's headers and footers.
     * @type {HeaderFooterCollection}
     */
    get headersAndFooters() { return new HeaderFooterCollection(this._txInternal.headersAndFooters); }

    //#endregion
}

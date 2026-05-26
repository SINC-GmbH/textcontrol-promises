import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SubTextPartInfo.d.ts.
 */
export class SubTextPartInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.SubTextPartInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SubTextPartInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SubTextPartInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The name of the SubTextPart.
     * @type {string}
     */
    get name() { return this._txInternal.name; }

    /**
     * @type {number | undefined}
     */
    get id() { return this._txInternal.id; }

    /**
     * @type {number | undefined}
     */
    get start() { return this._txInternal.start; }

    /**
     * @type {number | undefined}
     */
    get length() { return this._txInternal.length; }

    /**
     * @type {TXTextControlTypeDefinition.HighlightMode | undefined}
     */
    get highlightMode() { return this._txInternal.highlightMode; }

    //#endregion
}

import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/SelectionBounds.d.ts.
 */
export class SelectionBoundsBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.SelectionBounds} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.SelectionBounds} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.SelectionBounds} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The length of the selection in characters.
     * @type {number}
     */
    get start() { return this._txInternal.start; }

    /**
     * The 0-based start character position of the selection.
     * @type {number}
     */
    get length() { return this._txInternal.length; }

    //#endregion
}

import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Distances.d.ts.
 */
export class DistancesBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Distances} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Distances} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Distances} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The bottom distance in twips.
     * @type {number}
     */
    get bottom() { return this._txInternal.bottom; }

    /**
     * The left distance in twips.
     * @type {number}
     */
    get left() { return this._txInternal.left; }

    /**
     * The right distance in twips.
     * @type {number}
     */
    get right() { return this._txInternal.right; }

    /**
     * The top distance in twips.
     * @type {number}
     */
    get top() { return this._txInternal.top; }

    //#endregion
}

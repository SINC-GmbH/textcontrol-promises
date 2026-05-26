import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Color.d.ts.
 */
export class ColorBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Color} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Color} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Color} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The alpha component (0–255).
     * @type {number}
     */
    get a() { return this._txInternal.a; }

    /**
     * The red component (0–255).
     * @type {number}
     */
    get r() { return this._txInternal.r; }

    /**
     * The green component (0–255).
     * @type {number}
     */
    get g() { return this._txInternal.g; }

    /**
     * The blue component (0–255).
     * @type {number}
     */
    get b() { return this._txInternal.b; }

    //#endregion
}

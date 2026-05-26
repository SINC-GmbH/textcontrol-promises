import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Size.d.ts.
 */
export class SizeBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Size} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Size} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Size} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The width
     * @type {number}
     */
    get width() { return this._txInternal.width; }

    /**
     * the height
     * @type {number}
     */
    get height() { return this._txInternal.height; }

    //#endregion
}

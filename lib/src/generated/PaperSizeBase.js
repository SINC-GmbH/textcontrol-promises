import { Size } from '../Size.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/PaperSize.d.ts.
 */
export class PaperSizeBase extends Size {
    /** @returns {TXTextControlTypeDefinition.PaperSize} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.PaperSize} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.PaperSize} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The name of the Paper
     * @type {string}
     */
    get name() { return this._txInternal.name; }

    //#endregion
}

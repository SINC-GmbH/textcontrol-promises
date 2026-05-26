import { ObjectBase } from '../ObjectBase.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Point.d.ts.
 */
export class PointBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Point} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Point} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Point} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The x-coordinate of the point.
     * @type {number}
     */
    get x() { return this._txInternal.x; }

    /**
     * The y-coordinate of the point.
     * @type {number}
     */
    get y() { return this._txInternal.y; }

    //#endregion
}

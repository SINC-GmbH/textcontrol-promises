import { ObjectBase } from '../ObjectBase.js';
import { Point } from '../Point.js';
import { Size } from '../Size.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/Rectangle.d.ts.
 */
export class RectangleBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.Rectangle} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.Rectangle} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.Rectangle} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The location of the rectangle.
     * @type {Point}
     */
    get location() { return new Point(this._txInternal.location); }

    /**
     * The size of the rectangle.
     * @type {Size}
     */
    get size() { return new Size(this._txInternal.size); }

    //#endregion
}

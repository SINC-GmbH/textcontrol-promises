import { ObjectBase } from '../ObjectBase.js';
import { Point } from '../Point.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/FrameInfo.d.ts.
 */
export class FrameInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.FrameInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.FrameInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.FrameInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The frame's identifier.
     * @type {number}
     */
    get id() { return this._txInternal.id; }

    /**
     * The frame's location in twips.
     * @type {Point}
     */
    get location() { return new Point(this._txInternal.location); }

    /**
     * The frame's name.
     * @type {string}
     */
    get name() { return this._txInternal.name; }

    /**
     * The frame's character position in the document's text (one-based).
     * @type {number}
     */
    get textPosition() { return this._txInternal.textPosition; }

    //#endregion
}

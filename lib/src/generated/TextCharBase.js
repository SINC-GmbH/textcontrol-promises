import { ObjectBase } from '../ObjectBase.js';
import { Rectangle } from '../Rectangle.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextChar.d.ts.
 */
export class TextCharBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TextChar} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextChar} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TextChar} txObj */
    constructor(txObj) {
        super(txObj);
        this._bindMethods('getBounds', 'getChar', 'getNumber');
    }

    /**
     * Gets the bounding rectangle of the character.
     * @returns {Promise<Rectangle>}
     */
    async getBounds() {
        const tx = await RequestHelper.Promise(
            this._txInternal.getBounds,
            CallbackType.RequestRectangleCallback,
            CallbackType.ErrorCallback
        );
        return tx && new Rectangle(tx);
    }

    /**
     * Gets the value of the character.
     * @returns {Promise<string>}
     */
    getChar() {
        return RequestHelper.Promise(
            this._txInternal.getChar,
            CallbackType.RequestStringCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets the character's number.
     * @returns {Promise<number>}
     */
    getNumber() {
        return RequestHelper.Promise(
            this._txInternal.getNumber,
            CallbackType.RequestNumberCallback,
            CallbackType.ErrorCallback
        );
    }}

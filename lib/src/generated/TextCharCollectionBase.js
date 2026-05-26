import { Collection } from '../Collection.js';
import { TextChar } from '../TextChar.js';
import { Point } from '../Point.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @extends {Collection<TextChar>}
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextCharCollection.d.ts.
 */
export class TextCharCollectionBase extends Collection {
    /** @returns {TXTextControlTypeDefinition.TextCharCollection} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextCharCollection} */ (super._txInternal); }

    /**
     * @param {TXTextControlTypeDefinition.TextCharCollection} txCollection
     * @param {function(*):*} [wrapItem]
     */
    constructor(txCollection, wrapItem = (/** @type {*} */ tx) => new TextChar(tx)) {
        super(txCollection, wrapItem);
        this._bindMethods('add', 'addControlChar', 'getItem', 'remove');
    }

    /**
     * Inserts a character at the specified position using the specified font.
     * @param {string} character
     * @param {string} fontName
     * @param {number} textPosition
     * @returns {Promise<boolean>}
     */
    add(character, fontName, textPosition) {
        return RequestHelper.Promise(
            this._txInternal.add,
            character,
            fontName,
            textPosition,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Inserts a control character at the specified text input position.
     * @param {TXTextControlTypeDefinition.ControlChars} controlChar
     * @param {number} textPosition
     * @returns {Promise<boolean>}
     */
    addControlChar(controlChar, textPosition) {
        return RequestHelper.Promise(
            this._txInternal.addControlChar,
            controlChar,
            textPosition,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }

    /**
     * Gets a particular character from the collection specified through a certain geometrical position.
     * @param {Point} location Specifies the character's location. The point must be specified in pixels with an origin at the top left corner of the control.
     * @param {boolean} getNearest Specifies whether the nearest character is returned.
If this parameter is set to true, the nearest character is returned.
Otherwise, if set to false, a character is only returned, if the specified location is inside the bounding rectangle of an existing character.
     * @returns {Promise<TextChar>}
     */
    async getItem(location, getNearest) {
        const tx = await RequestHelper.Promise(this._txInternal.getItem, location._txInternal, getNearest, CallbackType.RequestTextCharCallback, CallbackType.ErrorCallback);
        return tx && this._wrapItem(tx);
    }

    /**
     * Removes the character by number.
     * @param {number} number Specifies which character to remove by the textchar's number. The first character has the number 1.
     * @returns {Promise<boolean>}
     */
    remove(number) {
        return RequestHelper.Promise(
            this._txInternal.remove,
            number,
            CallbackType.RequestBooleanCallback,
            CallbackType.ErrorCallback
        );
    }
}

import { ObjectBase } from '../ObjectBase.js';
import { Rectangle } from '../Rectangle.js';
import { CallbackType, RequestHelper } from '../helper/index.js';
/** @import * as TXTextControlTypeDefinition from "../../types/TXTextControlNamespace" */

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/objects/TextFieldInfo.d.ts.
 */
export class TextFieldInfoBase extends ObjectBase {
    /** @returns {TXTextControlTypeDefinition.TextFieldInfo} */
    get _txInternal() { return /** @type {TXTextControlTypeDefinition.TextFieldInfo} */ (super._txInternal); }

    /** @param {TXTextControlTypeDefinition.TextFieldInfo} txObj */
    constructor(txObj) {
        super(txObj);
    }


    //#region properties

    /**
     * The bounding rectangle of a text field.
     * @type {Rectangle}
     */
    get bounds() { return new Rectangle(this._txInternal.bounds); }

    /**
     * Returns true if the Textfield contains the current text input position.
     * @type {boolean}
     */
    get containsInputPosition() { return this._txInternal.containsInputPosition; }

    /**
     * Specifies whether a text field can be deleted by the end-user while a TX Text Control document is being edited.
     * @type {boolean}
     */
    get deleteable() { return this._txInternal.deleteable; }

    /**
     * Specifies whether a text field has a doubled input position in front of its first character and behind its last character.
     * @type {boolean}
     */
    get doubledInputPosition() { return this._txInternal.doubledInputPosition; }

    /**
     * Specifies whether the text of a text field can be changed by the end-user while a TX Text Control document is being edited.
     * @type {boolean}
     */
    get editable() { return this._txInternal.editable; }

    /**
     * The formatting rectangle of a text field.
     * @type {Rectangle}
     */
    get formattingBounds() { return new Rectangle(this._txInternal.formattingBounds); }

    /**
     * The identifier of the text field.
     * @type {number}
     */
    get id() { return this._txInternal.id; }

    /**
     * Specifies whether a text field's text is checked on misspelled words.
     * @type {boolean}
     */
    get isSpellCheckingEnabled() { return this._txInternal.isSpellCheckingEnabled; }

    /**
     * The number of characters in the text field.
     * @type {number}
     */
    get length() { return this._txInternal.length; }

    /**
     * The text field's name.
     * @type {string}
     */
    get name() { return this._txInternal.name; }

    /**
     * Specifies whether a text field toggles its background to gray, if the current input position is in the field.
     * @type {boolean}
     */
    get showActivated() { return this._txInternal.showActivated; }

    /**
     * The 1-based first character position of the text field.
     * @type {number}
     */
    get start() { return this._txInternal.start; }

    /**
     * The text field's text content.
     * @type {string}
     */
    get text() { return this._txInternal.text; }

    /**
     * The field type. Docs declare this as string, but the actual values are a known union.
     * @type {'APPLICATIONFIELD' | 'TEXTFIELD' | 'TEXTFORMFIELD' | 'CHECKFORMFIELD' | 'SELECTIONFORMFIELD' | 'DATEFORMFIELD' | 'HYPERTEXTLINK' | 'PAGENUMBERFIELD'}
     */
    get type() { return this._txInternal.type; }

    //#endregion
}

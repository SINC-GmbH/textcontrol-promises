import {
    RequestRectangleCallback,
    RequestBooleanCallback,
    RequestColorStringCallback,
    RequestHighlightModeCallback,
    RequestNumberCallback,
    RequestStringCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { HighlightMode } from '../enums';

/**
 * Represents a text field in a Text Control document.
 * A text field is a marked piece of text that has properties like text or a name.
 */
export class TextField {
    /**
     * Initializes a new instance of the TextField class.
     * @param text Optional. Specifies the visible text of the field. The default value is "«MERGEFIELD»".
     */
    constructor(text?: string);

    /** Gets the bounding rectangle of a text field.*/
    getBounds(callback: RequestRectangleCallback, errorCallback?: ErrorCallback): void;
    /** Returns true, if the Textfield contains the current text input position.*/
    getContainsInputPosition(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether a text field can be deleted by the end-user while a TX Text Control document is being edited.*/
    getDeleteable(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether a text field has a doubled input position in front of its first character and behind its last character.*/
    getDoubledInputPosition(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether the text of a text field can be changed by the end-user while a TX Text Control document is being edited.*/
    getEditable(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the formatting rectangle of a text field.*/
    getFormattingBounds(callback: RequestRectangleCallback): void;
    /** Gets the highlight color for the text field.*/
    getHighlightColor(callback: RequestColorStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating when the text field is highlighted.*/
    getHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets an identifier for a text field.*/
    getID(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets whether a text field's text is checked on misspelled words.*/
    getIsSpellCheckingEnabled(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of characters in a text field.*/
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the name of a text field.*/
    getName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the first character position (one-based) of a text field.*/
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text which is contained within a text field.*/
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Sets the current input position to the beginning of a text field and scrolls it into the visible part of the document.*/
    scrollTo(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether a text field can be deleted by the end-user while a TX Text Control document is being edited.*/
    setDeleteable(deleteable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether a text field has a doubled input position in front of its first character and behind its last character.*/
    setDoubledInputPosition(doubledInputPosition: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether the text of a text field can be changed by the end-user while a TX Text Control document is being edited.*/
    setEditable(editable: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the highlight color for the text field.*/
    setHighlightColor(highlightColor: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating when the text field is highlighted.*/
    setHighlightMode(highlightMode: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an identifier for the text field.*/
    setID(id: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets whether a text field's text is checked on misspelled words.*/
    setIsSpellCheckingEnabled(isSpellCheckingEnabled: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the name of a text field.*/
    setName(name: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the text which is contained within a text field.*/
    setText(text: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

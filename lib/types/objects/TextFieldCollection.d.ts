import { RequestTextFieldCallback, EmptyRequestCallback } from '../callbacks';
import { Collection } from './Collection';
import { TextField } from './TextField';

/** Contains all standard text fields in a Text Control document or part of the document. */
export interface TextFieldCollection extends Collection<TextField> {
    /** Adds a new TextField to the collection. */
    add(callback?: RequestTextFieldCallback, errorCallback?: ErrorCallback): void;
    /** Adds a new TextField with the given text to the collection. */
    addWithText(text: string, callback?: RequestTextFieldCallback, errorCallback?: ErrorCallback): void;
    /** Removes all text fields from a Text Control document. */
    clear(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text field at the current text input position or the text field with the specified id. */
    getItem(callback: RequestTextFieldCallback, errorCallback?: ErrorCallback, id?: number): void;
    /** Removes the text field from the Text Control document. */
    remove(textField: TextField, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

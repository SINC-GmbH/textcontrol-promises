import { RequestBooleanCallback } from "../callbacks";
import { Collection } from "./Collection";
import { TextField } from "./TextField";

/** Contains all standard text fields in a Text Control document or part of the document. */
export interface TextFieldCollectionBase<T extends TextField> extends Collection<T> {
    /** Gets a value indicating whether a new text field can be inserted at the current input position. */
    getCanAdd(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

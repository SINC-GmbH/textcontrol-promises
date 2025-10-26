import { EmptyRequestCallback, RequestNumberCallback, RequestStringCallback, RequestStringsCallback } from "../callbacks";
import { ApplicationFieldFormat } from "../enums";
import { TextField } from "./TextField";

/**
 * The ApplicationField object supports text field formats of applications such as Microsoft Word.
 * The object only provides an interface to retrieve and change the data and parameters of such fields.
 * The field logic itself is not implemented.
 * Currently supported applications and components are Microsoft Word and Heiler HeighEdit.
 */
export interface ApplicationField extends TextField {
    /** Gets the field's format. */
    getFormat(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the field' parameters. */
    getParameters(callback: RequestStringsCallback, errorCallback?: ErrorCallback): void;
    /** Gets the field's type name. */
    getTypeName(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Sets the field's format. */
    setFormat(format: ApplicationFieldFormat, callback?: EmptyRequestCallback): void;
    /** Sets the field's parameters. */
    setParameters(parameters: string[], callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the field's type name. */
    setTypeName(typeName: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

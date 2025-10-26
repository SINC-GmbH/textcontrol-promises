import { RequestBooleanCallback, RequestNumberCallback, RequestHeaderFooterTypeCallback, EmptyRequestCallback } from "../callbacks";
import { FormattedText } from "./FormattedText";
import { PageNumberFieldCollection } from "./PageNumberFieldCollection";

/** Represents a header or footer in the document. */
export interface HeaderFooter extends FormattedText {
    /** A collection of page number fields in the header or footer. */
    pageNumberFields: PageNumberFieldCollection;

    /** Activates the this header or footer. */
    activate(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Deactivates the this header or footer. */
    deactivate(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value specifying whether the header or footer is connected with the header or footer of the previous section. */
    getConnectedToPrevious(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the distance, in twips, of a header or footer to the top or bottom of the page. */
    getDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the type of the header or footer. */
    getType(callback: RequestHeaderFooterTypeCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value specifying whether the header or footer is connected with the header or footer of the previous section. */
    setConnectedToPrevious(connectedToPrevious: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the distance, in twips, of a header or footer to the top or bottom of the page. */
    setDistance(distance: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

import { RequestNumberCallback, EmptyRequestCallback } from '../callbacks';

/** The SignatureImage object represents a signature image of a signature field in a Text Control document. */
export interface SignatureImage {
    /** Gets the images's export compression quality as a value between 1 and 100. */
    getExportCompressionQuality(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets an images's vertical scaling factor in percent. */
    getExportMaxResolution(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets the images's export compression quality as a value between 1 and 100. */
    setExportCompressionQuality(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an images's vertical scaling factor in percent. */
    setExportMaxResolution(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

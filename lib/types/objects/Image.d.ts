import { RequestNumberCallback, EmptyRequestCallback } from "../callbacks";
import { FrameBase } from "./FrameBase";

/** The Image object represents an image in a Text Control document. */
export interface Image extends FrameBase {
    /** Gets an images's horizontal scaling factor in percent. */
    getHorizontalScaling(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets an images's vertical scaling factor in percent. */
    getVerticalScaling(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Sets an images's horizontal scaling factor in percent. */
    setHorizontalScaling(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets an images's vertical scaling factor in percent. */
    setVerticalScaling(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

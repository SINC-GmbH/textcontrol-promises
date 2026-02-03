import { EmptyRequestCallback } from "../callbacks";
import { Collection } from "./Collection";
import { FrameBase } from "./FrameBase";

/** Base of all collections containing frame objects. */
export interface FrameBaseCollection<T extends FrameBase> extends Collection<T> {
    /** Removes all objects from the collection and from the document. */
    clear(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

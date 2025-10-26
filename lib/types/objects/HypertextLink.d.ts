import { EmptyRequestCallback, RequestStringCallback } from '../callbacks';
import { TextField } from './TextField';

/** The HypertextLink object represents a hypertext link in a document that points to a target outside of the document. */
export interface HypertextLink extends TextField {
    /** Gets a string that specifies the target to where the hypertext link points. */
    getTarget(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /**  Sets a string that specifies the target to where the hypertext link points. */
    setTarget(target: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

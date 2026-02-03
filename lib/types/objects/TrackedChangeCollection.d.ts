import { RequestTrackedChangeCallback, RequestBooleanCallback } from '../callbacks';
import { Collection } from './Collection';
import { TrackedChange } from './TrackedChange';

/**
 * Contains all tracked changes in the main text or another part of a document.
 * After tracking changes has been turned on with the setIsTrackChangesEnabled method,
 * the made changes to the document will be tracked.
 */
export interface TrackedChangeCollection extends Collection<TrackedChange> {
    /**
     * Gets the change at the current text input position or the next or the previous change in the textflow.
     * @param callback Receives the tracked change as parameter. The result value is null if a change could not be found.
     * @param next Optional. If this parameter is true, the next change in the textflow is returned. If this parameter is false, the previous change in the textflow is returned. The next or the previous change is returned independent whether there is a change at the current text input position.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    getItem(callback: RequestTrackedChangeCallback, next?: boolean, errorCallback?: ErrorCallback): void;
    /**
     * Removes a tracked change from the collection.
     * @param trackedChange The removing tracked change.
     * @param accept Specifies wether the change is either accepted or rejected. When a change is rejected, inserted text is removed and deleted text is reinserted.
     * @param callback Optional. Receives as parameter whether the change could be removed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    remove(trackedChange: TrackedChange, accept: boolean, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

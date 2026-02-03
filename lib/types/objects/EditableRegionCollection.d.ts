import { AddEditableRegionCallback, RequestEditableRegionsCallback, RequestBooleanCallback } from '../callbacks';
import { Collection } from './Collection';
import { EditableRegion } from './EditableRegion';

/** Contains all editable regions in the main text or another part of a document. */
export interface EditableRegionCollection extends Collection<EditableRegion> {
    /**
     * Adds a new editable region to the document.
     * Its position is defined through the start and length parameters.
     * If the editable region's length is zero, the current text selection is used to define the position.
     */
    add(username: string, id: number, start: number, length: number, callback?: AddEditableRegionCallback, errorCallback?: ErrorCallback): void;
    /**
     * Gets all editable regions at the current text input position.
     * The callback returns null, if there is no region at the current input position.
     */
    getItems(callback: RequestEditableRegionsCallback, errorCallback?: ErrorCallback): void;
    /**
     * Removes an editable region from the collection. The region's text is not removed.
     * @param editableRegion Specifies the editable region to remove.
     * @param selectedPart Optional. When this parameter is true, only the selected part of the editable region is removed.
     * If the selection is in the middle od the region, it is split into two parts with the same parameters.
     * @param callback Optional. Receives whether the removal was successful.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    remove(editableRegion: EditableRegion, selectedPart?: boolean, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

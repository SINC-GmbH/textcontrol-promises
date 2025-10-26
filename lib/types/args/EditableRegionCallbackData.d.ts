import { AddResult } from "../enums";
import { EditableRegion } from "../objects";

/** The type of the response parameter of the AddEditableRegionCallback callback function. */
export interface EditableRegionCallbackData {
    /** Added editable region. */
    editableRegion: EditableRegion;
    addResult: AddResult;
}

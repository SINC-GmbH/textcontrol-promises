import { EditableRegion } from "../objects";

/** Callback function for functions requesting editable regions. */
export type RequestEditableRegionsCallback = (result: EditableRegion[]) => void;

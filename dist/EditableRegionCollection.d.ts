export class EditableRegionCollection extends Collection<EditableRegion> {
    constructor(txEditableRegionCollection: any);
    remove(editableRegion: EditableRegion, selectedPart?: boolean | undefined): Promise<boolean>;
    add(username: string, id: number, start: number, length: number): Promise<{
        response;
        addResult;
    }>;
    #private;
}
import { EditableRegion } from "./EditableRegion";
import { Collection } from "./Collection";

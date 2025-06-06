export class TextControlContext {
    get selection(): Selection;
    get tables(): TableCollection;
    get subTextParts(): SubTextPartCollection;
    get applicationFields(): ApplicationFieldCollection;
    get formFields(): FormFieldCollection;
    get editableRegions(): EditableRegionCollection;
    get inputPosition(): InputPosition;
    load(streamType: any, base64Data: string, loadSettings?: any | undefined): Promise<any>;
    save(streamType: any, saveSettings?: any | undefined): Promise<any>;
    setInputPositionByTextPosition(textPosition: number, textFieldPosition: any): Promise<void>;
    setRenderMode(value: TXTextControl.ComponentRenderMode): Promise<any>;
    init(componentSettings: TXTextControl.ComponentSettings, jsResourceFilePath?: string | undefined): Promise<void>;
    isReady(): Promise<void>;
    #private;
}
import { Selection } from "./Selection";
import { TableCollection } from "./TableCollection";
import { SubTextPartCollection } from "./SubTextPartCollection";
import { ApplicationFieldCollection } from "./ApplicationFieldCollection";
import { FormFieldCollection } from "./FormFieldCollection";
import { EditableRegionCollection } from "./EditableRegionCollection";
import { InputPosition } from "./InputPosition";

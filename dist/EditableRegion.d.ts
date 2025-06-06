export class EditableRegion {
    constructor(txEditableRegion: any);
    get txEditableRegion(): any;
    get name(): string | undefined;
    get start(): number | undefined;
    get length(): number | undefined;
    get id(): number | undefined;
    get highlightColor(): string | undefined;
    getUserName(): Promise<string>;
    getLength(): Promise<number>;
    getStart(): Promise<number>;
    getID(): Promise<number>;
    getHighlightColor(): Promise<string>;
    setHighlightColor(value: string): Promise<void>;
    #private;
}

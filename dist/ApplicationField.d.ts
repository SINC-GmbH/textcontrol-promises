export class ApplicationField {
    constructor(txApplicationField: any);
    get txApplicationField(): any;
    get name(): string | undefined;
    get typeName(): string | undefined;
    get text(): string | undefined;
    get parameters(): string[] | undefined;
    get start(): number | undefined;
    public setName(name: string): Promise<void>;
    public setParameters(parameters: Array<string>): Promise<void>;
    setText(text: string): Promise<void>;
    getName(): Promise<string>;
    getTypeName(): Promise<string>;
    getParameters(): Promise<Array<string>>;
    getText(): Promise<string>;
    getStart(): Promise<number>;
    #private;
}

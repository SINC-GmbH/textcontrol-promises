export class SubTextPart {
    constructor(txSubTextPart: any);
    get data(): string | undefined;
    get id(): number | undefined;
    get text(): string | undefined;
    getData(): Promise<string>;
    getText(): Promise<string>;
    getID(): Promise<number>;
    #private;
}

export class TableCell {
    constructor(txTableCell: any);
    get start(): number | undefined;
    get length(): number | undefined;
    get text(): string | undefined;
    setText(text: string): Promise<void>;
    getText(): Promise<string>;
    getStart(): Promise<number>;
    getLength(): Promise<number>;
    #private;
}

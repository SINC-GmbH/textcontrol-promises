export class Selection {
    constructor(txSelection: any);
    get start(): number | undefined;
    get length(): number | undefined;
    get paragraphFormat(): ParagraphFormat;
    setStart(start: number): Promise<void>;
    setLength(length: number): Promise<void>;
    getStart(): Promise<number>;
    getLength(): Promise<number>;
    #private;
}
import { ParagraphFormat } from "./ParagraphFormat";

export class SubTextPartCollection {
    constructor(txSubTextPartCollection: any);
    add(name: string, id: number, start: number, length: number): Promise<{
        response;
        addResult;
    }>;
    getItem(): Promise<SubTextPart>;
    #private;
}
import { SubTextPart } from "./SubTextPart";

export class TableCollection {
    constructor(txTableCollection: any);
    add(rows: number, columns: number, id?: number | undefined): Promise<boolean>;
    getItem(id: number): Promise<Table>;
    #private;
}
import { Table } from "./Table";

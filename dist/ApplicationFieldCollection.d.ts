export class ApplicationFieldCollection extends Collection<ApplicationField> {
    constructor(txApplicationFieldCollection: any);
    getItem(): Promise<ApplicationField>;
    remove(applicationField: ApplicationField, keepText: boolean): Promise<boolean>;
    #private;
}
import { ApplicationField } from "./ApplicationField";
import { Collection } from "./Collection";

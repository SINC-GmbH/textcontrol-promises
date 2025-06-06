export class FormFieldCollection extends Collection<FormField> {
    constructor(txFormFieldCollection: any);
    getItem(id?: number | undefined): Promise<FormField>;
    remove(formField: FormField): Promise<boolean>;
    #private;
}
import { FormField } from "./FormField";
import { Collection } from "./Collection";

import { RequestBooleanCallback } from '../callbacks';
import { AddResult } from '../enums';
import { SubTextPartInfo } from './SubTextPartInfo';
import { TextField } from './TextField';

/**
 * @deprecated
 * Represents a part of the document, which can be the main text, a header or footer or a text frame.
 */
export interface TextPart {
    /** @deprecated Obsolete. */
    addSubTextPart(callback: (adddResult: AddResult) => void, subTextPart: SubTextPartInfo): void;
    /** @deprecated Obsolete. */
    addTextField(textField: TextField): void;
    /** @deprecated Obsolete. */
    getSubTextParts(callback: (subtextparts: any[]) => void, atInputPosition?: boolean): void;
    /** @deprecated Obsolete. */
    getTextFields(callback: (textfields: TextField[]) => void, atInputPosition?: boolean): void;
    /** @deprecated Obsolete. */
    removeSubTextPart(callback: RequestBooleanCallback, keepText?: boolean, keepNested?: boolean, subTextPart?: SubTextPartInfo): void;

    /** @deprecated Obsolete. */
    index: number;
    /** @deprecated Obsolete. */
    selection: Selection;
    /** @deprecated Obsolete. */
    type: string;
}

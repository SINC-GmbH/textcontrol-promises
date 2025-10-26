import { HighlightMode } from '../enums';

/** Specifies the properties of a new SubTextPart  */
export interface SubTextPartInfo {
    /** The name of the SubTextPart. */
    name: string;
    id?: number;
    start?: number;
    length?: number;
    highlightMode?: HighlightMode;
}

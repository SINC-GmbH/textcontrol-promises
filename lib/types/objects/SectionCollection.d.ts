import { RequestBooleanCallback, RequestSectionCallback } from "../callbacks";
import { SectionBreakKind } from "../enums";
import { Collection } from "./Collection";
import { Section } from "./Section";

/** Contains all sections of a document. A document has at least one section. */
export interface SectionCollection extends Collection<Section> {
    /** Adds a new section at the current text input position. */
    add(sectionBreakKind: SectionBreakKind, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Adds a new section at the specified text input position. */
    addAtTextPosition(sectionBreakKind: SectionBreakKind, textPosition: number, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the section at the current input position or or the section in the collection with the given number. */
    getItem(callback: RequestSectionCallback, number?: number, errorCallback?: ErrorCallback): void;
}

import {
    AddFootnoteCallback,
    RequestStringCallback,
    RequestHighlightModeCallback,
    RequestNumberFormatCallback,
    RequestNumberCallback,
    RequestBooleanCallback,
    EmptyRequestCallback,
} from '../callbacks';
import { HighlightMode, NumberFormat } from '../enums';
import { Collection } from './Collection';
import { Footnote } from './Footnote';

/** Contains all standard text fields in a Text Control document or part of the document. */
export interface FootnoteCollection extends Collection<Footnote> {
    /** Adds a new footnote with the given text to the document at the current input position. */
    add(text: string, name: string, id: number, callback: AddFootnoteCallback, errorCallback?: ErrorCallback): void;
    /** Gets the default highlight color for the reference mark and the footnote mark. */
    getDefaultFootnoteHighlightColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value indicating whether all the footnote numbers, reference marks as well as footnote marks, in the document are highlighted. */
    getHighlightMode(callback: RequestHighlightModeCallback, errorCallback?: ErrorCallback): void;
    /** Gets the footnotes' number format. */
    getNumberFormat(callback: RequestNumberFormatCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number for the first footnote. */
    getStartNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Removes a footnote from a Text Control document. */
    remove(footnote: Footnote, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value indicating whether all the footnote numbers, reference marks as well as footnote marks, in the document are highlighted. */
    setHighlightMode(value: HighlightMode, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the footnotes' number format. */
    setNumberFormat(value: NumberFormat, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets the number for the first footnote. */
    setStartNumber(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

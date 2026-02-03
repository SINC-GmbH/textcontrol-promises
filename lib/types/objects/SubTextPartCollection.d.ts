import { AddSubTextPartCallback, EmptyRequestCallback, RequestSubTextPartCallback, RequestBooleanCallback } from '../callbacks';
import { Collection } from './Collection';
import { SubTextPart } from './SubTextPart';

export namespace SubTextPartCollection {
    /** Specifies the result when a subtextpart has been added to the document. */
    export enum AddResult {
        /** An unexpected error has occurred. */
        Error,
        /** The subtextpart has successfully been inserted. */
        Successful,
        /** The subtextpart wasn't inserted because there is no selection. */
        NoSelection,
        /** The subtextpart wasn't inserted because the selection is too complex. It is not a continuous sequence of characters. */
        SelectionTooComplex,
        /** The subtextpart wasn't inserted because the specified position values are invalid. Invalid start and / or length values have been specified. */
        PositionInvalid,
        /** The subtextpart wasn't inserted because it already exists. */
        AlreadyExist,
        /** The subtextpart wasn't inserted because it overlaps with an existing textpart. */
        Overlapping,
        /** The subtextpart was inserted and combined with an existing one. A subtextpart is combined with an existing one, when it immediately follows it and has the same name and id. */
        Combined,
    }
}

/** The SubTextPartCollection object represents a collection of subtextparts. */
export interface SubTextPartCollection extends Collection<SubTextPart> {
    /**
     * Adds a new SubTextPart to the collection.
     * @param name Specifies the name of the subtextpart. This parameter can be null or an empty string to indicate, that the subtextpart has no name.
     * @param id Specifies an identifier for the subtextpart. This parameter can be 0 to indicate, that the subtextpart has no identifier.
     * @param start Specifies the index (one-based) of the first character which belongs to the subtextpart.
     * @param length Specifies the number of characters which belong to the subtextpart.
     * @param callback Optional. Receives information about the result of the adding and the added subtextpart.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    add(name: string, id: number, start: number, length: number, callback?: AddSubTextPartCallback, errorCallback?: ErrorCallback): void;
    /** Removes all subtextparts from a Text Control document. */
    clear(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Gets the subtextpart at the current text input position. */
    getItem(callback: RequestSubTextPartCallback, errorCallback?: ErrorCallback): void;
    /** Removes a subtextpart from the collection including all its nested subtextparts.     */
    remove(subTextPart: SubTextPart, keepText: boolean, keepNested: boolean, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

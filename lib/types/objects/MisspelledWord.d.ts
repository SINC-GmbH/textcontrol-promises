import { EmptyRequestCallback, RequestBooleanCallback, RequestNumberCallback, RequestStringCallback } from '../callbacks';

/** The MisspelledWord object represents a misspelled word in a document's text. */
export interface MisspelledWord {
    /** Gets a value which marks the misspelled word as duplicate. */
    getIsDuplicate(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets a value which marks the misspelled word as ignored. */
    getIsIgnored(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the length of a misspelled word. */
    getLength(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the number of this misspelled word. */
    getNumber(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the starting position of a misspelled word. */
    getStart(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text of the misspelled word. */
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Selects the misspelled word in the text. */
    select(callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value which marks the misspelled word as duplicate. */
    setIsDuplicate(isDuplicate: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    /** Sets a value which marks the misspelled word as ignored. */
    setIsIgnored(isIgnored: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

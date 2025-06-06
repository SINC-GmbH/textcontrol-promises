declare namespace TXTextControl {
    /** The SubTextPartCollection object represents a collection of subtextparts. */
    interface SubTextPartCollection extends Collection<SubTextPart> {
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
}
export interface PropsClass {
    /** A plain scalar property. */
    count: number;
    /** A readonly string property. */
    readonly name: string;
    /** An optional boolean property. */
    visible?: boolean;
    /**
     * A method whose params must NOT be mistaken for properties.
     * @param size The size in twips.
     * @param pageNumber The page number.
     * @param location Location on the page.
     * @param insertionMode How text flow is handled.
     * @param callback Optional success callback.
     * @param errorCallback Optional error callback.
     */
    addAtFixedPositionOnPage(
        size: Size,
        pageNumber: number,
        location: Point,
        insertionMode: TextFrameInsertionMode,
        callback?: RequestTextFrameCallback,
        errorCallback?: ErrorCallback
    ): void;
    /** A single-line method — must not produce false property hits. */
    remove(item: TextFrame, callback?: EmptyRequestCallback): void;
}

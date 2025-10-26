import { RequestImageCallback, EmptyRequestCallback } from '../callbacks';
import { HorizontalAlignment, ImageInsertionMode } from '../enums';
import { FrameBaseCollection } from './FrameBaseCollection';
import { Image } from './Image';
import { Point } from './Point';

/** Contains all images of a Text Control document or part of the document. */
export interface ImageCollection extends FrameBaseCollection<Image> {
    /**
     * Creates and inserts a new image which is anchored to the specified text position.
     * @param imageData The base64 encoded image data.
     * @param horizontalAlignment Specifies the image's horizontal alignment.
     * @param textPosition Specifies the text position at which the image is to be inserted. If -1 is specified, the image is inserted at the current input position.
     * @param insertionMode Specifies how the text flow is handled.
     * @param callback Optional. The newly created image object is returned via this callback function.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    addAnchored(
        imageData: string,
        horizontalAlignment: HorizontalAlignment,
        textPosition: number,
        insertionMode: ImageInsertionMode,
        callback?: RequestImageCallback,
        errorCallback?: ErrorCallback
    ): void;
    /**
     * Inserts a new image which is anchored to the specified text position.
     * @param imageData The base64 encoded image data.
     * @param location Specifies the location, in twips, at which the image is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
     * @param textPosition Specifies the text position at which the image is to be inserted. If -1 is specified, the image is inserted at the current input position.
     * @param insertionMode Specifies how the text flow is handled.
     * @param callback Optional. The newly created image object is returned via this callback function.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    addAnchoredAtLocation(
        imageData: string,
        location: Point,
        textPosition: number,
        insertionMode: ImageInsertionMode,
        callback?: RequestImageCallback,
        errorCallback?: ErrorCallback
    ): void;
    /**
     * Inserts a new image which has a fixed geometrical position in the document.
     * This position is specified through a page number and a location on this page.
     * @deprecated Obsolete. This method will be removed in one of the next versions.
     */
    addAtFixedPosition(
        imageData: string,
        pageNumber: number,
        location: Point,
        insertionMode: ImageInsertionMode,
        errorCallback?: ErrorCallback
    ): void;
    /**
     * Creates and inserts a new image which has a fixed geometrical position in the document.
     * @param imageData The base64 encoded image data.
     * @param location Specifies the location, in twips, at which the image is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
     * @param insertionMode Specifies how the text flow is handled.
     * @param callback Optional. The newly created image object is returned via this callback function.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    addAtFixedPositionInDocument(
        imageData: string,
        location: Point,
        insertionMode: ImageInsertionMode,
        callback?: RequestImageCallback,
        errorCallback?: ErrorCallback
    ): void;
    /**
     * Inserts a new image which has a fixed geometrical position in the document.
     * @param imageData The base64 encoded image data.
     * @param pageNumber Specifies the number of a page beginning with 1 where the image is located.
     * @param location Specifies the location, in twips, at which the image is to be inserted. This is a location relative to the top left corner either of a page or of a paragraph.
     * @param insertionMode Specifies how the text flow is handled.
     * @param callback Optional. The newly created image object is returned via this callback function.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    addAtFixedPositionOnPage(
        imageData: string,
        pageNumber: number,
        location: Point,
        insertionMode: ImageInsertionMode,
        callback?: RequestImageCallback,
        errorCallback?: ErrorCallback
    ): void;
    /**
     * Creates and inserts a new image inline, which means that it is treated in the text like a single character.
     * @param imageData The base64 encoded image data.
     * @param textPosition Specifies the text position at which the image is to be inserted. If -1 is specified, the image is inserted at the current input position.
     * @param callback Optional. The newly created image object is returned via this callback function.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    addInline(imageData: string, textPosition: number, callback?: RequestImageCallback, errorCallback?: ErrorCallback): void;
    /** Gets the image selected by the user or the image with the specified identifier. */
    getItem(callback: RequestImageCallback, errorCallback?: ErrorCallback, id?: number): void;
    /** Gets the image with the specified name. */
    getItemByName(callback: RequestImageCallback, errorCallback: ErrorCallback | null, name: string): void;
    /** Removes an image from a Text Control document. */
    remove(image: Image, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
}

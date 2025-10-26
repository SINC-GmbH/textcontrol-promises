/** The event argument object for the textDropped event. */
export interface TextDroppedEventArgs {
    /** Set this property to true to cancel the event. */
    cancel: boolean;
    /** The dropped text. */
    text: string;
    /** The MIME type of the dropped text. */
    textType: string;
}

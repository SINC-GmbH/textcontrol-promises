declare namespace TXTextControl {
    /** A ParagraphCollection contains all paragraphs in a Text Control document or part of the document. */
    interface ParagraphCollection extends Collection<Paragraph> {
        /** Gets the Paragraph at a certain geometrical position. */
        getItem(textPosition: number, callback: RequestParagraphCallback, errorCallback?: ErrorCallback): void;
        /** Gets a particular Paragraph from the collection. */
        getItemAtLocation(x: number, y: number, callback: RequestParagraphCallback, errorCallback?: ErrorCallback): void;
    }
}
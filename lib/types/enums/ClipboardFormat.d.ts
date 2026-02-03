/** Determines a certain clipboard format that can be pasted into a TextControl document. */
export enum ClipboardFormat {
    /** Specifies a barcode. */
    Barcode,
    /** Specifies a chart. */
    Chart,
    /** Specifies HTML format (Hypertext Markup Language). */
    HTMLFormat,
    /** Specifies an image. An image can be pasted, if it is a device dependent or a device independent bitmap, a TIFF image or a Windows metafile. */
    Image,
    /** Specifies unformatted text. */
    PlainText,
    /** Specifies RTF format (Rich Text Format). */
    RichTextFormat,
    /** Specifies formatted text in the internal TX Text Control format. */
    TXTextControlFormat,
    /** Specifies an image including information about how the image is positioned in the document (inline or geometrically positioned). */
    TXTextControlImage,
    /** Specifies a TX Text Control textframe including its contents. The clipbord contains also information about how the textframe is positioned in the document (inline or geometrically positioned). */
    TXTextControlTextframe,
}

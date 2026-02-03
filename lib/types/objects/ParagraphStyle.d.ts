import { RequestStringCallback, RequestParagraphFormatCallback, EmptyRequestCallback } from '../callbacks';
import { FormattingStyle } from './FormattingStyle';
import { ListFormat } from './ListFormat';
import { ParagraphFormat } from './ParagraphFormat';

/** The ParagraphStyle class defines a formatting style for paragraphs. */
export interface ParagraphStyle extends FormattingStyle {
    /** Gets the name of the style that the document automatically uses for the following paragraph after the user has pressed the ENTER key. */
    getFollowingStyle(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
    /** Gets the style's paragraph attributes. */
    getParagraphFormat(callback: RequestParagraphFormatCallback, errorCallback?: ErrorCallback): void;
    /** Sets the name of the style that the document automatically uses for the following paragraph after the user has pressed the ENTER key. */
    setFollowingStyle(styleName: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;

    /** The paragraph style's bulleted or numbered list and/or its formatting attributes. */
    listFormat: ListFormat;
    /** The paragraph style's paragraph attributes. */
    paragraphFormat: ParagraphFormat;
}

import { RequestParagraphStyleCallback } from '../callbacks';
import { FormattingStyleCollection } from './FormattingStyleCollection';
import { ParagraphStyle } from './ParagraphStyle';

/** Contains all paragraph formatting styles in the current document. */
export interface ParagraphStyleCollection extends FormattingStyleCollection<ParagraphStyle> {
    /** Gets a style from the collection by the style's name. */
    add(styleName: string, callback?: RequestParagraphStyleCallback, errorCallback?: ErrorCallback): void;
    /** Adds a new style to the current document. */
    getItem(styleName: string, callback: RequestParagraphStyleCallback, errorCallback?: ErrorCallback): void;
}

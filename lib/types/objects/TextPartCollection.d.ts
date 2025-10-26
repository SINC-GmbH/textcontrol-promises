import { RequestBooleanCallback, RequestTextPartCallback } from '../callbacks';
import { Collection } from './Collection';
import { FormattedText } from './FormattedText';

/** Contains all text parts in a TX Text Control document. */
export interface TextPartCollection extends Collection<FormattedText> {
    /** Sets the input focus to the specified text part. */
    activate(formattedText: FormattedText, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /** Gets the text part with the input focus. */
    getItem(callback: RequestTextPartCallback, errorCallback?: ErrorCallback): void;
    /** Gets the main text part of the document. */
    getMainText(callback: RequestTextPartCallback, errorCallback?: ErrorCallback): void;
}

import { RequestBooleanCallback } from '../callbacks';
import { Collection } from './Collection';
import { FormattingStyle } from './FormattingStyle';

/** Contains all formatting styles in a Text Control document or part of the document. */
export interface FormattingStyleCollection<T extends FormattingStyle> extends Collection<T> {
    /** Removes a formatting style from the collection. */
    remove(styleName: string, callback?: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

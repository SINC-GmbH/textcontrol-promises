import { RequestNumberCallback, RequestMisspelledWordCallback, RequestBooleanCallback } from '../callbacks';
import { MisspelledWordKind } from '../enums';
import { Collection } from './Collection';
import { MisspelledWord } from './MisspelledWord';

/** The MisspelledWordCollection contains all misspelled words in the main part of a Text Control document. */
export interface MisspelledWordCollection extends Collection<MisspelledWord> {
    /** Gets the number of misspelled words with a special meaning from the collection. */
    getCountOf(kind: MisspelledWordKind, callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
    /** Gets the misspelled word of the specified kind at the current text input position. */
    getItemAtInputPosition(kind: MisspelledWordKind, callback: RequestMisspelledWordCallback, errorCallback?: ErrorCallback): void;
    /** Gets the misspelled word at a certain geometrical location. */
    getItemAtLocation(x: number, y: number, callback: RequestMisspelledWordCallback, errorCallback?: ErrorCallback): void;
    /** Gets the misspelled word of the specified kind at the specified text input position. */
    getItemAtTextPosition(
        textPosition: number,
        kind: MisspelledWordKind,
        callback: RequestMisspelledWordCallback,
        errorCallback?: ErrorCallback
    ): void;
    /**
     * Changes the text of the specified misspelled word and marks it as ignored. Ignored misspelled words are not underlined with a red zigzag line.
     * @param misspelledWord Specifies the misspelled word to change.
     * @param changedText Specifies the changed text. The current text of the word is replaced with this text.
     * @param callback Receives whether the misspelled word could be changed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    ignore(misspelledWord: MisspelledWord, changedText: string, callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
    /**
     * Removes the specified misspelled word from a Text Control document. The method removes the word's reference in the list of misspelled words and replaces the word's text with the specified text.
     * @param misspelledWord Specifies the misspelled word to remove.
     * @param correctedText Specifies the corrected text. The current text of the word is replaced with this text.
     * @param callback Receives whether the misspelled word could be removed.
     * @param errorCallback Optional. Is called when the operation failed with an error.
     */
    remove(misspelledWord: MisspelledWord, correctedText: string, callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
}

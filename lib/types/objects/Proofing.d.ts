import { GetDictionaryListCallback, GetUserDictionaryInfoCallback, SaveUserDictionaryCallback } from '../callbacks';

/**
 * Adds a word to an existing user dictionary.
 * @param name The name of the user dictionary.
 * @param words An array of words to add to the user dictionary.
 */
export function addWordToUserDictionary(name: string, words: string[]): void;
/** Retrieves a list of the names of all dictionary files on the server. */
export function getDictionaryList(callback: GetDictionaryListCallback): void;
/** Retrieves information about all currently existing user dictionaries via a callback function. */
export function getUserDictionaryInfo(callback: GetUserDictionaryInfoCallback): void;
/** Loads a dictionary. */
export function loadDictionary(fileName: string): void;
/**
 * Loads a list of words given as a string array as a user dictionary.
 * @param name The name of the user dictionary.
 * @param words An array of words to add to the user dictionary.
 * @param language The user dictionary's language in the format languagecode2-country/regioncode2. (e. g. "en-US" or "de-DE")
 */
export function loadUserDictionary(name: string, words: string[], language: string): void;
/** Removes a dictionary from the loaded dictionaries. */
export function removeDictionary(fileName: string): void;
/** Removes an existing user dictionary. */
export function removeUserDictionary(name: string): void;
/** Removes a word from an existing user dictionary. */
export function removeWordFromUserDictionary(name: string, words: string[]): void;
/** Saves an existing user dictionary by supplying the contained words as a string array to a callback function. */
export function saveUserDictionary(name: string, callback: SaveUserDictionaryCallback): void;

export interface UserDictionaryInfo {
    /** Indicates whether the user dictionary is editable or not. */
    isEditable: boolean;
    /** Indicates whether suggestions are created using this dictionary or not. */
    isGetSuggestionsEnabled: boolean;
    /** Indicates whether the dictionary is selected as the default dictionary by the Language property. */
    isSelectAsDefault: boolean;
    /** Indicates whether spell checking of this dictionary is enabled or not. */
    isSpellCheckingEnabled: boolean;
    /** The user dictionary's language in the format languagecode2-country/regioncode2. */
    language: string;
    /** The number of words the user dictionary contains. */
    length: number;
    /** The user dictionary's name. */
    name: string;
}

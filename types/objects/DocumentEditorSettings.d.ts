declare namespace TXTextControl {
    /** Document editor settings. */
    interface DocumentEditorSettings {
        /** The unique connection ID string. */
        connectionID?: number;
        /** The culture. (e. g. 'de-DE') Affects date and time string formats, for example. */
        culture?: string;
        /** The user interface culture. (e. g. 'en-US') Affects the string resource language. */
        uiCulture?: string;
        /** Sets whether the document's text is read-only, can be selected or is editable. */
        editMode?: EditMode;
        /** Sets whether a right click opens a context menu or not. */
        contextMenusEnabled?: boolean;
        /** The name of a printer the text dimensions and capabilities of which are used to format the document. */
        formattingPrinter?: string;
        /** Time in seconds before stopping reconnection attempts after a connection loss. */
        reconnectTimeout?: number;
        /** An array of names specifying users who have access to editable regions. */
        userNames?: string[];
        /** Custom query parameters. */
        customQueryParams?: object;
    }
}
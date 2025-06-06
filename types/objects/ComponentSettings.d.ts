declare namespace TXTextControl {
    /** Component settings. */
    interface ComponentSettings {
        /** The ID of the editor container DIV element. */
        containerID: string;
        /** The WebSocket URL. */
        webSocketURL: string;
        /** Optional. The document editor settings */
        editorSettings?: DocumentEditorSettings;
        /** Optional. Replace the container element instead of appending ourselves to it as a child. */
        replaceContainer?: boolean;
        /** Optional. Is fired as soon as the document editor scaffolding has been inserted into the DOM */
        domContentLoaded?: Function;
    }
}
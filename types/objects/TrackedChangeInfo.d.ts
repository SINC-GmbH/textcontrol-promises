declare namespace TXTextControl {
    /** Information about a tracked change. */
    interface TrackedChangeInfo {
        /** The tracked change's kind. */
        changeKind: number;
        /** The tracked change's highlighting color. */
        highlightColor: number;
        /** The tracked change's highlighting mode. */
        highlightMode: number;
        /** The tracked change's time. */
        changeTime: number;
        /** The tracked change's length. */
        length: number;
        /** The tracked change's number. */
        number: number;
        /** The tracked change's starting position. */
        start: number;
        /** The tracked change's user name. */
        userName: number;
    }
}
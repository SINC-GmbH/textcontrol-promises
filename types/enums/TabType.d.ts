declare namespace TXTextControl {
    /** Determines the tabulator type. */
    enum TabType {
        /** The tab position is at the left side of the text. */
        LeftTab,
        /** The tab position is at the right side of the text. */
        RightTab,
        /** The text is centered to the tab position. */
        CenterTab,
        /** The decimal sign is aligned at the tab position. */
        DecimalTab,
        /** 
         * The tab is positioned right most and the text is diplayed at the left of this position. 
         * The tab position set with the TabPositions property is ignored. 
         * Only one tab of this kind is possible in a paragraph.
         */
        RightBorderTab
    }
}
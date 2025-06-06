declare namespace TXTextControl {
    /** The mode how Text Control displays a document. */
    enum ViewMode {
        /** 
         * Text is formatted like in Normal view mode, and additionally 
         * the Text Control displays the pages in 3D view with gaps and a desktop background. 
         * Headers and footers are displayed in WYSIWYG mode.
         */
        PageView,
        /** 
         * Text is formatted according to the settings of the PageSize and the PageMargins properties. 
         * Headers and footers can be inserted but they are not displayed.
         */
        Normal
    }
}
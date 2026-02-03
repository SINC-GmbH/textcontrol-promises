/** Defines the contents of a page's image returned from the Page.getImage method. */
export enum PageContent {
    /** The image contains the background of the page. */
    Background,
    /** The image contains the header and the footer of the page. */
    HeadersAndFooters,
    /** The image contains the page's text contents. */
    MainText,
    /** The image contains all parts without the screen elements. */
    All,
    /**
     * The image contains all elements which are additionally displayed on a screen,
     * such as the selection, the control characters and helper lines.
     */
    ScreenElements,
}

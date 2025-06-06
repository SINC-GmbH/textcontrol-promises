declare namespace TXTextControl {
    /** 
     * The PageBorder represents the attributes of a border, which is drawn in the margin area of a page. 
     * A page border can have a top, left, right or bottom line or a combination of these lines. 
     * The line width and the color can be defined for each line separately. 
     * For each line a distance can be specified, which is either a distance to the edge of the page or to the text. 
     * The page border can surround the text including page headers and footers or only the text of the page. 
     * The border can be defined for the first page, for all pages or beginning with the second page.
     */
    interface PageBorder {
        /** Gets the distance, in twips, of the bottom border line either from the edge of the page or from the text, depending on the MeasureFromText. */
        getBottomDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the color of the bottom border line. */
        getBottomLineColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the width of the bottom border line. */
        getBottomLineWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets whether the page border is drawn only on the first page of the section. */
        getFirstPageOnly(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the distance, in twips, of the left border line either from the edge of the page or from the text, depending on the MeasureFromText. */
        getLeftDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the color of the left border line. */
        getLeftLineColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the width of the left border line. */
        getLeftLineWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets whether the page border's distances are measured from the text. */
        getMeasureFromText(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets whether the page border is not drawn on the first page of the section. */
        getOmitFirstPage(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the distance, in twips, of the right border line either from the edge of the page or from the text, depending on the MeasureFromText. */
        getRightDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the color of the right border line. */
        getRightLineColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the width of the right border line. */
        getRightLineWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets whether the page border surrounds the section's footer. */
        getSurroundFooter(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets whether the page border surrounds the section's header. */
        getSurroundHeader(callback: RequestBooleanCallback, errorCallback?: ErrorCallback): void;
        /** Gets the distance, in twips, of the top border line either from the edge of the page or from the text, depending on the {@link MeasureFromText}. */
        getTopDistance(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Gets the color of the top border line. */
        getTopLineColor(callback: RequestStringCallback, errorCallback?: ErrorCallback): void;
        /** Gets the width of the top border line. */
        getTopLineWidth(callback: RequestNumberCallback, errorCallback?: ErrorCallback): void;
        /** Sets the distance, in twips, of the bottom border line either from the edge of the page or from the text, depending on the MeasureFromText. */
        setBottomDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the color of the bottom border line. */
        setBottomLineColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the width of the bottom border line. */
        setBottomLineWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets whether the page border is drawn only on the first page of the section. */
        setFirstPageOnly(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the distance, in twips, of the left border line either from the edge of the page or from the text, depending on the MeasureFromText. */
        setLeftDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the color of the left border line. */
        setLeftLineColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the width of the left border line. */
        setLeftLineWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets whether the page border's distances are measured from the text. */
        setMeasureFromText(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets whether the page border is not drawn on the first page of the section. */
        setOmitFirstPage(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the distance, in twips, of the right border line either from the edge of the page or from the text, depending on the MeasureFromText. */
        setRightDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the color of the right border line. */
        setRightLineColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the width of the right border line. */
        setRightLineWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the whether the page border surrounds the section's footer. */
        setSurroundFooter(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the whether the page border surrounds the section's header. */
        setSurroundHeader(value: boolean, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the distance, in twips, of the top border line either from the edge of the page or from the text, depending on the MeasureFromText. */
        setTopDistance(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the color of the top border line. */
        setTopLineColor(value: string, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
        /** Sets the width of the top border line. */
        setTopLineWidth(value: number, callback?: EmptyRequestCallback, errorCallback?: ErrorCallback): void;
    }
}
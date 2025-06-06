declare namespace TXTextControl {
    /** The type of the response parameter of the AddSubTextPartCallback callback function. */
    interface SubTextPartCallbackData {
        /**  */
        addResult: SubTextPartCollection.AddResult;
        /** The added subtextpart. */
        subTextPart: SubTextPart;
    }
}
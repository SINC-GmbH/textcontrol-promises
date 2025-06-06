declare namespace TXTextControl {
    /** 
     * Encapsulates information about an error. 
     * By default any unhandled error is thrown at the highest level. 
     * For signaling that an error has been handled, set the 'handled' parameter to true, 
     * which stops the propagation of the error to a higher level. 
     */
    interface ErrorArgument {
        /** The error message. */
        msg: string;
        /** Specifies whether the error has been handled. */
        handled: boolean;
    }
}
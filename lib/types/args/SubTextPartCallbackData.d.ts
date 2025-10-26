import { SubTextPart, SubTextPartCollection } from "../objects";

/** The type of the response parameter of the AddSubTextPartCallback callback function. */
export interface SubTextPartCallbackData {
    /**  */
    addResult: SubTextPartCollection.AddResult;
    /** The added subtextpart. */
    subTextPart: SubTextPart;
}

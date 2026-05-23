import { SubTextPart } from "../objects";

/** The type of the response parameter of the AddSubTextPartCallback callback function. */
export interface SubTextPartCallbackData {
    /** The added subtextpart. */
    subTextPart: SubTextPart;
}

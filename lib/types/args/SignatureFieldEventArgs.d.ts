import { SignatureFieldInfo } from "../objects";

/** The event argument for signature field related events. */
export interface SignatureFieldEventArgs {
    /** Information about the signature field. */
    signatureField: SignatureFieldInfo;
}

import { SignerData } from "../objects";

/** Callback function for requests receiving a SignerData object. */
export type RequestSignerDataCallback = (signerData: SignerData) => void;

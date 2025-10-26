/** The data of a suggested signer connected with a SignatureField. */
export interface SignerData {
    /** The address of a suggested signer. */
    address: string;
    /** The contact information of a suggested signer, such as a phone number. */
    contactInfo: string;
    /** The name of a suggested signer. */
    name: string;
    /** A reason why the document is signed. */
    reason: string;
    /** The title of a suggested signer. */
    title: string;
}

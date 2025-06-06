declare namespace TXTextControl {
    /** Information about a signature field. */
    interface SignatureFieldInfo extends FrameInfo {
        /** The signer data. */
        signerData: SignerData;
        /** Information about the signature image. */
        image: SignatureImageInfo;
    }
}
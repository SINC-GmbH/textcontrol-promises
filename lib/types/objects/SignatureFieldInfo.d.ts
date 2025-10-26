import { FrameInfo } from './FrameInfo';
import { SignatureImageInfo } from './SignatureImageInfo';
import { SignerData } from './SignerData';

/** Information about a signature field. */
export interface SignatureFieldInfo extends FrameInfo {
    /** The signer data. */
    signerData: SignerData;
    /** Information about the signature image. */
    image: SignatureImageInfo;
}

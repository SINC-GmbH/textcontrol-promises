/** Determines the type of barcode that is created by TX Barcode. */
export enum BarcodeType {
    /** Code128 is an alphanumeric barcode with high information density. */
    Code128,
    /** 2 of 5 is a barcode that encrypts digits only. */
    Interleaved2of5,
    /** 3 of 9 is a barcode that encrypts alphanumeric values. */
    Code39,
    /** AztecCode is a two-dimensional barcode that encrypts up to 1300 ASCII values. */
    AztecCode,
    /** Intelligent Mail barcode is a barcode type that encrypts postal zip codes and it the successor of Postnet. */
    IntelligentMail,
    /** EAN 13 is a barcode that encrypts 13 digits and is used for marking retail goods. */
    EAN13,
    /** EAN 8 is derived from barcode type EAN13 and encrypts 8 digits. */
    EAN8,
    /** UPC-A barcode encrypts 12 digits and is very similar to EAN 13. */
    UPCA,
    /** Postnet is a barcode type that encrypts postal zip codes. */
    Postnet,
    /** QR Code is a two-dimensional barcode that encrypts up to 1270 ASCII values or 1850 alphanumeric values. By design TX Barcode switches encryption mode when necessary. */
    QRCode,
    /** Datamatrix is a two-dimensional barcode that encrypts up to 1301 ASCII values. */
    Datamatrix,
    /** PDF 417 is a two-dimensional barcode that encrypts up to 1500 ASCII values. */
    PDF417,
    /** MicroPDF is a two-dimensional barcode that encrypts up to 250 ASCII values. */
    MicroPDF,
    /** Codabar is a barcode that encrypts digits and the characters '-', '$', ':', '/', '.' and '+'. */
    Codabar,
    /** 4State is a barcode that encrypts 8 digits. */
    FourState,
    /** Code 11 is a barcode that encrypts up to 50 digits. */
    Code11,
    /** Code 93 is a barcode that encrypts alphanumeric values and the characters '.', '$', '/', '+', and '%'. */
    Code93,
    /** PLANET is a barcode that encrypts digits. */
    PLANET,
    /** Royal Mail is a barcode that encrypts alphanumeric characters and characters ')' and '(' . */
    RoyalMail,
    /** Maxicode is a two-dimensional barcode that encrypts strings with the following regular expression: "[0-9]{3}~[0-9]{3}~[0-9A-Z ]{6}|[0-9 ]{9}~[0-9A-Z*-.!""#$+%&'\\(), -:;<=>?[]{}@^_|~\a\b\t\n\f\r]*" or "[)>~[0-9]{2}~[0-9]{2}[0-9 ]{9}|[0-9A-Z ]{6}~[0-9]{3}~[0-9]{3}~[0-9A-Z*-.!""#$+%&'\\(), -:;<=>?[]{}@^_|~\a\b\t\n\f\r]*" */
    Maxicode,
}

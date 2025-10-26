/** Specifies the format of additionally provided data when a PDF document is imported. It is used with the LoadSettings.EmbeddedData property */
export enum EmbeddedDataFormat {
    /** Specifies an XML format with information about the position and the kind of all form fields contained in the PDF document. */
    FormFields,
    /** Specifies the PDF document's metadata. */
    MetaData,
    /** Specifies an XML format where each line of text has attributes such as page number and geometrical position. */
    TextCoordinates,
}

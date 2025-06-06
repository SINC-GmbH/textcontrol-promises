declare namespace TXTextControl {
    namespace SaveSettings {
        /** HTML only. Specifies how to save stylesheet data with an HTML document. */
        enum CssSaveMode {
            /** All format information is saved in the body of the HTML document through HTML tags. */
            None,
            /** Stylesheets are saved in a newly created CSS file. 
             * This file has the same name and location as the corresponding HTML file or is specified through the SaveSettings.CssFileName property. 
             * The file is only created if it does not exist. 
             * If the HTML document is saved in a memory buffer, this setting cannot be used. 
             */
            CreateFile,
            /** 
             * Stylesheets are saved in a newly created CSS file.
             * This file has the same name and location as the corresponding HTML file or is specified through the SaveSettings.CssFileName property.
             * If the file already exists, it is overridden.
             * If the HTML document is saved in a memory buffer, this setting cannot be used.
             */
            OverwriteFile,
            /** Stylesheets are saved in the head of the HTML document. */
            Inline
        }
    }
}
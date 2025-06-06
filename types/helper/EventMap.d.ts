declare namespace TXTextControl {
    interface EventMap {
        /**	Is fired when a new barcode has been created.*/
        barcodeCreated: BarcodeCallback;
        /**	Is fired when a barcode has been deleted.*/
        barcodeDeleted: BarcodeCallback;
        /**	Is fired when a barcode has been deselected.*/
        barcodeDeselected: BarcodeCallback;
        /**	Is fired when a barcode has been selected.*/
        barcodeSelected: BarcodeCallback;
        /**	Is fired when the document editor has lost focus.*/
        blur: EventCallback;
        /**	Is fire when a change of the document cannot be added to the list of tracked changes.*/
        cannotTrackChange: CannotTrackChangeCallback;
        /**	Is fired when the document's content is changed.*/
        changed: EventCallback;
        /**	Is fired when the character formatting attributes either of the selected characters or the current text input position have been changed.*/
        charFormatChanged: EventCallback;
        /**	Is fired when a new chart has been created.*/
        chartCreated: ChartCallback;
        /**	Is fired when a chart has been deleted.*/
        chartDeleted: ChartCallback;
        /**	Is fired when a chart has been deselected.*/
        chartDeselected: ChartCallback;
        /**	Is fired when a chart has been selected.*/
        chartSelected: ChartCallback;
        /**	Is fired when an ongoing clipboard data transfer is aborted.*/
        clipboardDataTransferAborted: ClipboardDataTransferAbortedCallback;
        /**	Is fired when a clipboard data transfer is completed.*/
        clipboardDataTransferComplete: ClipboardDataTransferCompleteCallback;
        /**	Is fired for each transfered clipboard data packet.*/
        clipboardDataTransferProgress: ClipboardDataTransferProgressCallback;
        /**	Is fired when a clipboard data transfer starts.*/
        clipboardDataTransferStart: ClipboardDataTransferStartCallback;
        /**	Is fired when the clipboard mode has changed.*/
        clipboardModeChanged: ClipboardModeChangedCallback;
        /**	Is fired when the text of a comment has been altered.*/
        commentChanged: CommentEventCallback;
        /**	Is fired when a comment has been created.*/
        commentCreated: CommentEventCallback;
        /**	Is fired when a comment has been deleted.*/
        commentDeleted: CommentEventCallback;
        /**	Is fired when the current input position has been moved to a position that belongs to a commented piece of text.*/
        commentedTextEntered: CommentEventCallback;
        /**	Is fired when the current input position has left a commented piece of text.*/
        commentedTextLeft: CommentEventCallback;
        /**	Is fired when the state of a comment alters from active to inactive or vice versa.*/
        commentStateChanged: CommentEventCallback;
        /**	Is fired when all text contents have been deleted and all attributes have been reset to the state after initialization.*/
        contentsReset: EventCallback;
        /**	Is fired when the context menu opens.*/
        contextMenuOpening: ContextMenuEventCallback;
        /**	Is fired when a text field has been clicked on that represents a link to a target in the document.*/
        documentLinkClicked: DocumentLinkCallback;
        /**	Is fired after a document has been loaded.*/
        documentLoaded: DocumentLoadedCallback;
        /**	Is fired when the document's size is changed.*/
        documentSizeChanged: RequestSizeCallback;
        /**	Is fired when a drawing has been activated.*/
        drawingActivated: DrawingCallback;
        /**	Is fired when a new drawing has been created.*/
        drawingCreated: DrawingCallback;
        /**	Is fired when a drawing has been deactivated.*/
        drawingDeactivated: DrawingCallback;
        /**	Is fired when a drawing has been deleted.*/
        drawingDeleted: DrawingCallback;
        /**	Is fired when a drawing has been deselected.*/
        drawingDeselected: DrawingCallback;
        /**	Is fired when a drawing has been selected.*/
        drawingSelected: DrawingCallback;
        /**	Is fired when an editable region has been created.*/
        editableRegionCreated: EditableRegionCallback;
        /**	Is fired when an editable region has been deleted.*/
        editableRegionDeleted: EditableRegionCallback;
        /**	Is fired when the current input position has been moved to a position that belongs to an editable region.*/
        editableRegionEntered: EditableRegionCallback;
        /**	Is fired when the current input position has left an editable region.*/
        editableRegionLeft: EditableRegionCallback;
        /**	Is fired when a file is dragged and dropped onto the control.*/
        fileDropped: FileDroppedCallback;
        /**	Is fired when the document editor has received focus.*/
        focus: EventCallback;
        /**	Is fired when a footnote has been created.*/
        footnoteCreated: FootnoteCallback;
        /**	Is fired when a footnote has been deleted.*/
        footnoteDeleted: FootnoteCallback;
        /**	Is fired when the current input position has been moved to the position of a footnote reference mark.*/
        footnoteReferenceMarkEntered: FootnoteCallback;
        /**	Is fired when the current input position has left the position of a footnote reference mark.*/
        footnoteReferenceMarkLeft: FootnoteCallback;
        /**	Is fired when the footnote section of a document's page gets the current text input position from another part of the document*/
        footnoteSectionActivated: EventCallback;
        /**	Is fired when the footnote section of a document's page has loast the current text input position.*/
        footnoteSectionDeactivated: EventCallback;
        /**	Is fired when the checkmark of a check form field has been changed from checked to unchecked or vice versa.*/
        formFieldCheckChanged: CheckFormFieldCallback;
        /**	Is fired when the date of a date rorm field has been changed.*/
        formFieldDateChanged: DateFormFieldCallback;
        /**	Is fired when the selected item of a selection form field has been changed.*/
        formFieldSelectionChanged: SelectionFormFieldCallback;
        /**	Is fired when the text of a text form field has been changed.*/
        formFieldTextChanged: TextFormFieldCallback;
        /**	Is fired when a frame (image, text frame, chart, barcode or drawing) has been deselected.*/
        frameDeselected: FrameCallback;
        /**	Is fired when a frame (image, text frame, chart, barcode or drawing) has been moved.*/
        frameMoved: FrameCallback;
        /**	Is fired when a frame (image, text frame, chart, barcode or drawing) has been selected.*/
        frameSelected: FrameCallback;
        /**	Is fired when a frame (image, text frame, chart, barcode or drawing) has been sized.*/
        frameSized: FrameCallback;
        /**	Is fired when a header or footer gets the current text input position from another part of the document such as a text frame or the main text.*/
        headerFooterActivated: HeaderFooterCallback;
        /**	Is fired when a header or footer loses the current text input position and another part of the document such as a text frame or the main text gets it.*/
        headerFooterDeactivated: HeaderFooterCallback;
        /**	Is fired when a text field has been clicked on that represents the source of a hypertext link.*/
        hypertextLinkClicked: HypertextLinkClickedCallback;
        /**	Is fired, if a word does not fit in the line and must be hyphenated.*/
        hyphenateWord: HyphenateWordCallback;
        /**	Is fired when a new image has been created.*/
        imageCreated: ImageCallback;
        /**	Is fired when an image has been deleted.*/
        imageDeleted: ImageCallback;
        /**	Is fired when an image has been deselected.*/
        imageDeselected: ImageCallback;
        /**	Is fired when an image has been selected.*/
        imageSelected: ImageCallback;
        /**	Is fired when the text input position has been moved to another paragraph.*/
        inputParagraphChanged: EventCallback;
        /**	Is fired when the text input position has changed.*/
        inputPositionChanged: InputPositionChangedCallback;
        /**	Is fired when the main text of the document gets the current text input position from another part of the document, such as a header, a footer or a text frame.*/
        mainTextActivated: EventCallback;
        /**	Is fired when the page format settings have been changed.*/
        pageFormatChanged: EventCallback;
        /**	Is fired when the formatting attributes of the selected paragraphs have been changed.*/
        paragraphFormatChanged: EventCallback;
        /**	Is fired when the reconnection to the server failed.*/
        reconnectionFailed: ReconnectionFailedCallback;
        /**	Is fired when a combobox for a SelectionFormField must be removed*/
        removeCombobox: EventCallback;
        /**	Is fired each time a ribbon tab has been loaded.*/
        ribbonTabLoaded: RibbonTabLoadedCallback;
        /**	Is fired after the ribbon bar content has been loaded completely and the server supplied string resources have been applied.*/
        ribbonTabsLoaded: RibbonTabsLoadedCallback;
        /**	Is fired after the current ribbon tab index has changed.*/
        ribbonTabIndexChanged: RibbonTabIndexChangedCallback;
        /**	Is fired when a new signature field has been created.*/
        signatureFieldCreated: SignatureFieldCallback;
        /**	Is fired when a signature field has been deleted.*/
        signatureFieldDeleted: SignatureFieldCallback;
        /**	Is fired when a signature field has been deselected.*/
        signatureFieldDeselected: SignatureFieldCallback;
        /**	Is fired when a signature field has been selected.*/
        signatureFieldSelected: SignatureFieldCallback;
        /**	Is fired, if the document's text has been altered and the spelling of the new text must be checked.*/
        spellCheckText: SpellCheckTextCallback;
        /**	Is fired when a subtextpart has been created.*/
        subTextPartCreated: SubTextPartCallback;
        /**	Is fired when a subtextpart has been deleted.*/
        subTextPartDeleted: SubTextPartCallback;
        /**	Is fired when the user clicks into a sub text part.*/
        subTextPartClicked: SubTextPartCallback;
        /**	Is fired when the user double clicks into a sub text part.*/
        subTextPartDoubleClicked: SubTextPartCallback;
        /**	Is fired when the input position enters a sub text part.*/
        subTextPartEntered: SubTextPartCallback;
        /**	Is fired when the input position leaves a sub text part.*/
        subTextPartLeft: SubTextPartCallback;
        /**	Is fired after a new table has been created as a result of a text insertion via the clipboard or when loading a document which contains a table without an identifier.*/
        tableCreated: TableCallback;
        /**	Is fired after a table has been deleted.*/
        tableDeleted: TableCallback;
        /**	Is fired when a table of contents has been created.*/
        tableOfContentsCreated: TableOfContentsCallback;
        /**	Is fired when a table of contents has been deleted.*/
        tableOfContentsDeleted: TableOfContentsCallback;
        /**	Is fired when the current input position has been moved to a position that belongs to a table of contents.*/
        tableOfContentsEntered: TableOfContentsCallback;
        /**	Is fired when the current input position has left a table of contents.*/
        tableOfContentsLeft: TableOfContentsCallback;
        /** 
         * Is fired when the content of the current document has changed.
         * @deprecated Obsolete. Use the "changed" event instead.
         */
        textControlChanged: TextControlChangedCallback;
        /**	Is fired after the TextContol instance has been properly initialized and is ready to be used / manipulated programmatically.*/
        textControlLoaded: TextControlLoadedCallback;
        /**	Is fired when RTF text, HTML text or plain text is dragged and dropped onto the control.*/
        textDropped: TextDroppedCallback;
        /**	Is fired when the user clicks into a text field.*/
        textFieldClicked: TextFieldCallback;
        /**	Is fired when a text field has been created.*/
        textFieldCreated: TextFieldCallback;
        /**	Is fired when a text field has been deleted.*/
        textFieldDeleted: TextFieldCallback;
        /**	Is fired when the input position enters a text field.*/
        textFieldEntered: TextFieldCallback;
        /**	Is fired when the input position leaves a text field.*/
        textFieldLeft: TextFieldCallback;
        /**	Is fired when a text frame gets the current text input position from another part of the document such as a header, a footer or the main text.*/
        textPasted: TextPastedCallback;
        /**	Is fired when a new text frame has been created.*/
        textFrameActivated: TextFrameCallback;
        /**	Is fired when a text frame loses the current text input position and another part of the document such as a header, a footer or the main text gets it.*/
        textFrameCreated: TextFrameCallback;
        /**	Is fired when a text frame has been deleted.*/
        textFrameDeactivated: TextFrameCallback;
        /**	Is fired when a text frame has been deselected.*/
        textFrameDeleted: TextFrameCallback;
        /**	Is fired when a text frame has been selected.*/
        textFrameDeselected: TextFrameCallback;
        /**	Is fired when RTF text, HTML text or plain text is pasted into the control via Ctrl-V.*/
        textFrameSelected: TextFrameCallback;
        /**	Is fired when the position of the text view has changed.*/
        trackedChangeChanged: TrackedChangeCallback;
        /**	Is fired when the text of a tracked change has been altered.*/
        trackedChangeCreated: TrackedChangeCallback;
        /**	Is fired when a tracked change has been created.*/
        trackedChangeDeleted: TrackedChangeCallback;
        /**	Is fired when a tracked change has been deleted.*/
        trackedChangeStateChanged: TrackedChangeCallback;
        /**	Is fired when the state of a tracked change alters from active to inactive or vice versa.*/
        textViewLocationChanged: TextViewLocationChangedCallback;
        /**	Is fired before an error will be thrown.*/
        unhandledError: ErrorCallback;
        /**	Is fired if the websocket connection is closed.*/
        webSocketClosed: WebSocketClosedCallback;
        /**	Is fired when the zoom factor of the text editor has changed.*/
        zoomFactorChanged: ZoomFactorChangedCallback;
    }
}
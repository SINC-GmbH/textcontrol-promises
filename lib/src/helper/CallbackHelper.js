import { CallbackType } from './CallbackType.js';

/**
 * Ordered parameter names for every request/response callback type, keyed by CallbackType constant.
 * Generated from lib/types/callbacks/*.d.ts — do not edit by hand, re-run tools/generator instead.
 * @type {Record<string, string[] | undefined>}
 */
const CALLBACK_PARAMS = {
    AddCommentCallback: ['response'],
    AddEditableRegionCallback: ['response'],
    AddFootnoteCallback: ['response'],
    AddSubTextPartCallback: ['response'],
    BarcodeCallback: ['args'],
    Callback: ['value'],
    CannotTrackChangeCallback: ['defaultMessage'],
    ChartCallback: ['args'],
    CheckFormFieldCallback: ['args'],
    ClipboardDataTransferAbortedCallback: ['args'],
    ClipboardDataTransferCompleteCallback: ['args'],
    ClipboardDataTransferProgressCallback: ['args'],
    ClipboardDataTransferStartCallback: ['args'],
    ClipboardModeChangedCallback: ['args'],
    CommentEventCallback: ['args'],
    ContextMenuEventCallback: ['args'],
    ContextMenuItemClickHandler: ['args'],
    DateFormFieldCallback: ['args'],
    DocumentLinkCallback: ['args'],
    DocumentLoadedCallback: ['args'],
    DrawingCallback: ['args'],
    EditableRegionCallback: ['editableRegion'],
    EmptyRequestCallback: [],
    EventCallback: [],
    FileDroppedCallback: ['args'],
    FootnoteCallback: ['args'],
    ForEachCallback: ['item', 'index', 'itemCount'],
    FrameCallback: ['args'],
    GetDictionaryListCallback: ['dictionaries'],
    GetUserDictionaryInfoCallback: ['info'],
    HeaderFooterCallback: ['args'],
    HyperlinkClickedCallback: ['args'],
    HypertextLinkClickedCallback: ['args'],
    HyphenateWordCallback: ['args'],
    ImageCallback: ['args'],
    InputPositionChangedCallback: ['args'],
    LoadDocumentCallback: ['result'],
    PropertyChangedCallback: ['args'],
    ReconnectionFailedCallback: ['args'],
    RequestActivationStateCallback: ['activationState'],
    RequestApplicationFieldCallback: ['field'],
    RequestAutoBaselineCallback: ['result'],
    RequestBarcodeAlignmentCallback: ['alignment'],
    RequestBarcodeFrameCallback: ['barcodeFrame'],
    RequestBarcodeTextAlignmentCallback: ['alignment'],
    RequestBarcodeTypeCallback: ['barcodeType'],
    RequestBooleanCallback: ['result'],
    RequestCapitalsCallback: ['result'],
    RequestCellFormatCallback: ['format'],
    RequestChangeKindCallback: ['changeKind'],
    RequestCheckFormFieldCallback: ['checkFormField'],
    RequestCollectionElementCallback: ['element', 'moved'],
    RequestColorStringCallback: ['color'],
    RequestCommentCallback: ['comment'],
    RequestCommentsCallback: ['comments'],
    RequestDateFormFieldCallback: ['dateFormField'],
    RequestDirectionCallback: ['direction'],
    RequestDistancesCallback: ['distances'],
    RequestDocumentLinkCallback: ['result'],
    RequestDocumentTargetCallback: ['result'],
    RequestEditModeCallback: ['editMode'],
    RequestEditableRegionsCallback: ['result'],
    RequestFontUnderlineStyleCallback: ['result'],
    RequestFormFieldCallback: ['formField'],
    RequestFormattingStyleCallback: ['style'],
    RequestFormulaReferenceStyleCallback: ['style'],
    RequestFrameBaseCallback: ['frame'],
    RequestFrameCallback: ['frame'],
    RequestFrameInsertionModeCallback: ['insertionMode'],
    RequestFrameStyleCallback: ['style'],
    RequestHeaderFooterCallback: ['headerFooter'],
    RequestHeaderFooterTypeCallback: ['headerFooterType'],
    RequestHighlightModeCallback: ['result'],
    RequestHorizontalAlignmentCallback: ['alignment'],
    RequestHypertextLinkCallback: ['result'],
    RequestImageCallback: ['image'],
    RequestInlineStyleCallback: ['style'],
    RequestJustificationCallback: ['justification'],
    RequestLineCallback: ['result'],
    RequestListFormatCharacterCallback: ['result'],
    RequestMeasuringUnitCallback: ['unit'],
    RequestMisspelledWordCallback: ['result'],
    RequestNumberCallback: ['result'],
    RequestNumberFormatCallback: ['result'],
    RequestNumberFormatsCallback: ['result'],
    RequestNumbersCallback: ['result'],
    RequestObjectCallback: ['obj'],
    RequestPageCallback: ['page'],
    RequestPageNumberFieldCallback: ['field'],
    RequestPaperSizesCallback: ['paperSizes'],
    RequestParagraphCallback: ['result'],
    RequestParagraphFormatCallback: ['format'],
    RequestParagraphStyleCallback: ['style'],
    RequestPermanentControlCharsCallback: ['controlChars'],
    RequestPointCallback: ['position'],
    RequestRectangleCallback: ['rect'],
    RequestRenderModeCallback: ['renderMode'],
    RequestRulerBarBorderStyleCallback: ['borderStyle'],
    RequestRulerBarFormulaModeCallback: ['formulaMode'],
    RequestRulerBarScaleUnitCallback: ['scaleUnit'],
    RequestSectionBreakKindCallback: ['breakKind'],
    RequestSectionCallback: ['section'],
    RequestSelectionBoundsCallback: ['bounds', 'err'],
    RequestSelectionFormFieldCallback: ['selectionFormField'],
    RequestSignatureFieldCallback: ['signatureField'],
    RequestSignatureImageCallback: ['signatureImage'],
    RequestSignerDataCallback: ['signerData'],
    RequestSizeCallback: ['size'],
    RequestStatusBarBorderStyleCallback: ['borderStyle'],
    RequestStringCallback: ['result'],
    RequestStringsCallback: ['result'],
    RequestSubTextPartCallback: ['subTextPart'],
    RequestSubTextPartsCallback: ['subTextParts'],
    RequestTabTypesCallback: ['result'],
    RequestTableCallback: ['table'],
    RequestTableCellCallback: ['cell'],
    RequestTableColumnCallback: ['column'],
    RequestTableOfContentsCallback: ['toc'],
    RequestTableRowCallback: ['row'],
    RequestTextCharCallback: ['textChar'],
    RequestTextFieldCallback: ['field'],
    RequestTextFieldInfoArrayCallback: ['textFields'],
    RequestTextFieldsCallback: ['result'],
    RequestTextFormFieldCallback: ['textFormField'],
    RequestTextFrameCallback: ['textFrame'],
    RequestTextPartCallback: ['textPart'],
    RequestTextPartsCallback: ['result'],
    RequestTextTypeCallback: ['textType'],
    RequestTrackedChangeCallback: ['change'],
    RequestVerticalAlignmentCallback: ['alignment'],
    RequestViewModeCallback: ['viewMode'],
    RibbonTabIndexChangedCallback: ['args'],
    RibbonTabLoadedCallback: ['args'],
    RibbonTabsLoadedCallback: [],
    SaveDocumentCallback: ['result'],
    SaveDocumentResultCallback: ['args'],
    SaveUserDictionaryCallback: ['name', 'words'],
    SelectionFormFieldCallback: ['args'],
    SideBarTypeRequestCallback: ['sideBarType'],
    SignatureFieldCallback: ['args'],
    SpellCheckTextCallback: ['args'],
    SubTextPartCallback: ['args'],
    TableCallback: ['args'],
    TableOfContentsCallback: ['args'],
    TextControlChangedCallback: [],
    TextControlLoadedCallback: [],
    TextDroppedCallback: ['args'],
    TextFieldCallback: ['args'],
    TextFormFieldCallback: ['args'],
    TextFrameCallback: ['args'],
    TextPastedCallback: ['args'],
    TextViewLocationChangedCallback: ['args'],
    TrackedChangeCallback: ['args'],
    WebSocketClosedCallback: ['args'],
    ZoomFactorChangedCallback: ['args'],
};

/**
 * @class
 * @description Generated wrapper — do not edit by hand.
 * Re-run tools/generator to regenerate from lib/types/callbacks/*.d.ts.
 */
export class CallbackHelper {
    /**
     * @param {keyof typeof CallbackType} type
     * @param {Function} resolve
     * @param {Function} reject
     * @returns {Function|keyof typeof CallbackType}
     */
    static tryGet(type, resolve, reject) {
        if (type === CallbackType.ErrorCallback) {
            return (/** @type {unknown} */ err) => reject(err);
        }

        const params = CALLBACK_PARAMS[type];
        if (params === undefined) {
            // Not a recognized CallbackType value — e.g. an already-bound function such as
            // Collection#forEach's per-item callback, or a plain data argument (index, name, ...)
            // that RequestHelper.Promise passes through untouched. Return it unchanged.
            return type;
        }
        if (params.length <= 1) {
            return (/** @type {unknown} */ result) => resolve(result);
        }
        return (/** @type {unknown[]} */ ...args) => resolve(
            Object.fromEntries(params.map((name, i) => [name, args[i]]))
        );
    }
}

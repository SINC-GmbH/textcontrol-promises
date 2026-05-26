// Script file — no top-level import/export statements.
// This is intentional: script files allow "declare var X" and "declare namespace X"
// to be merged so that @type {TXTextControl.SomeType} annotations resolve in JSDoc.
// Referenced from lib/index.d.ts via triple-slash so consumers get this automatically.
/** @scraper-ignore */
declare var TXTextControl:
    import("./TXTextControl").TXTextControl
    & typeof import("./TXTextControlNamespace");

/** Namespace half — enables @type {TXTextControl.X} in JSDoc for consumers. */
declare namespace TXTextControl {

    // ── Dual namespace+interface types (namespace has nested sub-enums) ─────────
    export namespace InlineStyle {
        export type Attributes = import("./TXTextControlNamespace").InlineStyle.Attributes;
    }
    export namespace InputPosition {
        export type ScrollPosition = import("./TXTextControlNamespace").InputPosition.ScrollPosition;
    }
    export namespace ListFormat {
        export type Attribute = import("./TXTextControlNamespace").ListFormat.Attribute;
    }
    export namespace PageBorder {
        export type Attribute = import("./TXTextControlNamespace").PageBorder.Attribute;
    }
    export namespace PageMargins {
        export type Attribute = import("./TXTextControlNamespace").PageMargins.Attribute;
    }
    export namespace PageSize {
        export type Attribute = import("./TXTextControlNamespace").PageSize.Attribute;
    }
    export namespace ParagraphFormat {
        export type Attribute = import("./TXTextControlNamespace").ParagraphFormat.Attribute;
    }
    export namespace SaveSettings {
        export type CssSaveMode = import("./TXTextControlNamespace").SaveSettings.CssSaveMode;
        export type OmittedContent = import("./TXTextControlNamespace").SaveSettings.OmittedContent;
        export type ReportingMergeBlockFormat = import("./TXTextControlNamespace").SaveSettings.ReportingMergeBlockFormat;
    }
    export namespace SectionFormat {
        export type Attribute = import("./TXTextControlNamespace").SectionFormat.Attribute;
    }
    export namespace Selection {
        export type Attribute = import("./TXTextControlNamespace").Selection.Attribute;
    }
    export namespace SubTextPartCollection {
        export type AddResult = import("./TXTextControlNamespace").SubTextPartCollection.AddResult;
    }

    // ── Plain interfaces / object types ────────────────────────────────────────
    export type ApplicationField = import("./TXTextControlNamespace").ApplicationField;
    export type ApplicationFieldCollection = import("./TXTextControlNamespace").ApplicationFieldCollection;
    export type Barcode = import("./TXTextControlNamespace").Barcode;
    export type BarcodeCollection = import("./TXTextControlNamespace").BarcodeCollection;
    export type BarcodeFrame = import("./TXTextControlNamespace").BarcodeFrame;
    export type BarcodeTypeSettings = import("./TXTextControlNamespace").BarcodeTypeSettings;
    export type CheckFormField = import("./TXTextControlNamespace").CheckFormField;
    export type CheckFormFieldInfo = import("./TXTextControlNamespace").CheckFormFieldInfo;
    export type Collection<T> = import("./TXTextControlNamespace").Collection<T>;
    export type Color = import("./TXTextControlNamespace").Color;
    export type CommentCollection = import("./TXTextControlNamespace").CommentCollection;
    export type CommentedText = import("./TXTextControlNamespace").CommentedText;
    export type CommentedTextInfo = import("./TXTextControlNamespace").CommentedTextInfo;
    export type ComponentSettings = import("./TXTextControlNamespace").ComponentSettings;
    export type ContextMenuItem = import("./TXTextControlNamespace").ContextMenuItem;
    export type CultureSettings = import("./TXTextControlNamespace").CultureSettings;
    export type DateField = import("./TXTextControlNamespace").DateField;
    export type DateFormField = import("./TXTextControlNamespace").DateFormField;
    export type DateFormFieldInfo = import("./TXTextControlNamespace").DateFormFieldInfo;
    export type DictionaryInfo = import("./TXTextControlNamespace").DictionaryInfo;
    export type Distances = import("./TXTextControlNamespace").Distances;
    export type DocumentEditorSettings = import("./TXTextControlNamespace").DocumentEditorSettings;
    export type DocumentLink = import("./TXTextControlNamespace").DocumentLink;
    export type DocumentLinkCollection = import("./TXTextControlNamespace").DocumentLinkCollection;
    export type DocumentPermissions = import("./TXTextControlNamespace").DocumentPermissions;
    export type DocumentSettings = import("./TXTextControlNamespace").DocumentSettings;
    export type DocumentTarget = import("./TXTextControlNamespace").DocumentTarget;
    export type DocumentTargetCollection = import("./TXTextControlNamespace").DocumentTargetCollection;
    export type DocumentTargetInfo = import("./TXTextControlNamespace").DocumentTargetInfo;
    export type EditableRegion = import("./TXTextControlNamespace").EditableRegion;
    export type EditableRegionCollection = import("./TXTextControlNamespace").EditableRegionCollection;
    export type EmbeddedFile = import("./TXTextControlNamespace").EmbeddedFile;
    export type EmbeddedFileCollection = import("./TXTextControlNamespace").EmbeddedFileCollection;
    export type Footnote = import("./TXTextControlNamespace").Footnote;
    export type FootnoteCollection = import("./TXTextControlNamespace").FootnoteCollection;
    export type FormField = import("./TXTextControlNamespace").FormField;
    export type FormFieldCollection = import("./TXTextControlNamespace").FormFieldCollection;
    export type FormattedText = import("./TXTextControlNamespace").FormattedText;
    export type FormattingStyle = import("./TXTextControlNamespace").FormattingStyle;
    export type FormattingStyleCollection<T extends import("./TXTextControlNamespace").FormattingStyle> = import("./TXTextControlNamespace").FormattingStyleCollection<T>;
    export type FrameBase = import("./TXTextControlNamespace").FrameBase;
    export type FrameBaseCollection<T extends import("./TXTextControlNamespace").FrameBase> = import("./TXTextControlNamespace").FrameBaseCollection<T>;
    export type FrameCollection = import("./TXTextControlNamespace").FrameCollection;
    export type FrameInfo = import("./TXTextControlNamespace").FrameInfo;
    export type HeaderFooter = import("./TXTextControlNamespace").HeaderFooter;
    export type HeaderFooterCollection = import("./TXTextControlNamespace").HeaderFooterCollection;
    export type HyperLinkInfo = import("./TXTextControlNamespace").HyperLinkInfo;
    export type HypertextLink = import("./TXTextControlNamespace").HypertextLink;
    export type HypertextLinkCollection = import("./TXTextControlNamespace").HypertextLinkCollection;
    export type IfField = import("./TXTextControlNamespace").IfField;
    export type Image = import("./TXTextControlNamespace").Image;
    export type ImageCollection = import("./TXTextControlNamespace").ImageCollection;
    export type IncludeTextField = import("./TXTextControlNamespace").IncludeTextField;
    export type InlineStyleCollection = import("./TXTextControlNamespace").InlineStyleCollection;
    export type InputFormat = import("./TXTextControlNamespace").InputFormat;
    export type Line = import("./TXTextControlNamespace").Line;
    export type LineCollection = import("./TXTextControlNamespace").LineCollection;
    export type LoadSettings = import("./TXTextControlNamespace").LoadSettings;
    export type MergeField = import("./TXTextControlNamespace").MergeField;
    export type MisspelledWord = import("./TXTextControlNamespace").MisspelledWord;
    export type MisspelledWordCollection = import("./TXTextControlNamespace").MisspelledWordCollection;
    export type MisspelledWordInfo = import("./TXTextControlNamespace").MisspelledWordInfo;
    export type NextField = import("./TXTextControlNamespace").NextField;
    export type NextIfField = import("./TXTextControlNamespace").NextIfField;
    export type Page = import("./TXTextControlNamespace").Page;
    export type PageCollection = import("./TXTextControlNamespace").PageCollection;
    export type PageNumberField = import("./TXTextControlNamespace").PageNumberField;
    export type PageNumberFieldCollection = import("./TXTextControlNamespace").PageNumberFieldCollection;
    export type PaperSize = import("./TXTextControlNamespace").PaperSize;
    export type Paragraph = import("./TXTextControlNamespace").Paragraph;
    export type ParagraphCollection = import("./TXTextControlNamespace").ParagraphCollection;
    export type ParagraphStyle = import("./TXTextControlNamespace").ParagraphStyle;
    export type ParagraphStyleCollection = import("./TXTextControlNamespace").ParagraphStyleCollection;
    export type Point = import("./TXTextControlNamespace").Point;
    export type Rectangle = import("./TXTextControlNamespace").Rectangle;
    export type Ribbon = import("./TXTextControlNamespace").Ribbon;
    export type RibbonPermissionsTab = import("./TXTextControlNamespace").RibbonPermissionsTab;
    export type RulerBarViewGenerator = import("./TXTextControlNamespace").RulerBarViewGenerator;
    export type RulerBarViewGeneratorColors = import("./TXTextControlNamespace").RulerBarViewGeneratorColors;
    export type Section = import("./TXTextControlNamespace").Section;
    export type SectionCollection = import("./TXTextControlNamespace").SectionCollection;
    export type SelectionBounds = import("./TXTextControlNamespace").SelectionBounds;
    export type SelectionFormField = import("./TXTextControlNamespace").SelectionFormField;
    export type SelectionFormFieldInfo = import("./TXTextControlNamespace").SelectionFormFieldInfo;
    export type SideBarToggleButton = import("./TXTextControlNamespace").SideBarToggleButton;
    export type SignatureField = import("./TXTextControlNamespace").SignatureField;
    export type SignatureFieldCollection = import("./TXTextControlNamespace").SignatureFieldCollection;
    export type SignatureFieldInfo = import("./TXTextControlNamespace").SignatureFieldInfo;
    export type SignatureImage = import("./TXTextControlNamespace").SignatureImage;
    export type SignatureImageInfo = import("./TXTextControlNamespace").SignatureImageInfo;
    export type SignerData = import("./TXTextControlNamespace").SignerData;
    export type Size = import("./TXTextControlNamespace").Size;
    export type StatusBarViewGenerator = import("./TXTextControlNamespace").StatusBarViewGenerator;
    export type StatusBarViewGeneratorColors = import("./TXTextControlNamespace").StatusBarViewGeneratorColors;
    export type SubTextPart = import("./TXTextControlNamespace").SubTextPart;
    export type SubTextPartInfo = import("./TXTextControlNamespace").SubTextPartInfo;
    export type Table = import("./TXTextControlNamespace").Table;
    export type TableBaseCollection = import("./TXTextControlNamespace").TableBaseCollection;
    export type TableCell = import("./TXTextControlNamespace").TableCell;
    export type TableCellBorder = import("./TXTextControlNamespace").TableCellBorder;
    export type TableCellCollection = import("./TXTextControlNamespace").TableCellCollection;
    export type TableCellFormat = import("./TXTextControlNamespace").TableCellFormat;
    export type TableCollection = import("./TXTextControlNamespace").TableCollection;
    export type TableColumn = import("./TXTextControlNamespace").TableColumn;
    export type TableColumnCollection = import("./TXTextControlNamespace").TableColumnCollection;
    export type TableInfo = import("./TXTextControlNamespace").TableInfo;
    export type TableOfContents = import("./TXTextControlNamespace").TableOfContents;
    export type TableOfContentsCollection = import("./TXTextControlNamespace").TableOfContentsCollection;
    export type TableOfContentsCollectionAddParams = import("./TXTextControlNamespace").TableOfContentsCollectionAddParams;
    export type TableOfContentsInfo = import("./TXTextControlNamespace").TableOfContentsInfo;
    export type TableRow = import("./TXTextControlNamespace").TableRow;
    export type TableRowCollection = import("./TXTextControlNamespace").TableRowCollection;
    export type TextChar = import("./TXTextControlNamespace").TextChar;
    export type TextCharCollection = import("./TXTextControlNamespace").TextCharCollection;
    export type TextField = import("./TXTextControlNamespace").TextField;
    export type TextFieldCollection = import("./TXTextControlNamespace").TextFieldCollection;
    export type TextFieldCollectionBase<T extends import("./TXTextControlNamespace").TextField> = import("./TXTextControlNamespace").TextFieldCollectionBase<T>;
    export type TextFieldInfo = import("./TXTextControlNamespace").TextFieldInfo;
    export type TextFormField = import("./TXTextControlNamespace").TextFormField;
    export type TextFormFieldInfo = import("./TXTextControlNamespace").TextFormFieldInfo;
    export type TextFrame = import("./TXTextControlNamespace").TextFrame;
    export type TextFrameCollection = import("./TXTextControlNamespace").TextFrameCollection;
    export type TextPart = import("./TXTextControlNamespace").TextPart;
    export type TextPartCollection = import("./TXTextControlNamespace").TextPartCollection;
    export type TextViewGeneratorColors = import("./TXTextControlNamespace").TextViewGeneratorColors;
    export type TrackedChange = import("./TXTextControlNamespace").TrackedChange;
    export type TrackedChangeCollection = import("./TXTextControlNamespace").TrackedChangeCollection;
    export type TrackedChangeInfo = import("./TXTextControlNamespace").TrackedChangeInfo;
    export type UserDictionaryInfo = import("./TXTextControlNamespace").UserDictionaryInfo;

    // ── Enums ──────────────────────────────────────────────────────────────────
    export type ActivationState = import("./TXTextControlNamespace").ActivationState;
    export type AddResult = import("./TXTextControlNamespace").AddResult;
    export type AppendSettings = import("./TXTextControlNamespace").AppendSettings;
    export type ApplicationFieldFormat = import("./TXTextControlNamespace").ApplicationFieldFormat;
    export type AutoBaseline = import("./TXTextControlNamespace").AutoBaseline;
    export type AutoGenerationType = import("./TXTextControlNamespace").AutoGenerationType;
    export type BarcodeAlignment = import("./TXTextControlNamespace").BarcodeAlignment;
    export type BarcodeTextAlignment = import("./TXTextControlNamespace").BarcodeTextAlignment;
    export type BarcodeType = import("./TXTextControlNamespace").BarcodeType;
    export type BreakType = import("./TXTextControlNamespace").BreakType;
    export type CapitalizationSettings = import("./TXTextControlNamespace").CapitalizationSettings;
    export type Capitals = import("./TXTextControlNamespace").Capitals;
    export type ChangeKind = import("./TXTextControlNamespace").ChangeKind;
    export type ClipboardMode = import("./TXTextControlNamespace").ClipboardMode;
    export type ComponentRenderMode = import("./TXTextControlNamespace").ComponentRenderMode;
    export type ContextMenuLocation = import("./TXTextControlNamespace").ContextMenuLocation;
    export type ControlChars = import("./TXTextControlNamespace").ControlChars;
    export type DialogBoxKind = import("./TXTextControlNamespace").DialogBoxKind;
    export type Direction = import("./TXTextControlNamespace").Direction;
    export type DocumentAccessPermissions = import("./TXTextControlNamespace").DocumentAccessPermissions;
    export type EditMode = import("./TXTextControlNamespace").EditMode;
    export type FieldType = import("./TXTextControlNamespace").FieldType;
    export type FileType = import("./TXTextControlNamespace").FileType;
    export type FindOptions = import("./TXTextControlNamespace").FindOptions;
    export type FontUnderlineStyle = import("./TXTextControlNamespace").FontUnderlineStyle;
    export type FormulaReferenceStyle = import("./TXTextControlNamespace").FormulaReferenceStyle;
    export type Frame = import("./TXTextControlNamespace").Frame;
    export type FrameInsertionMode = import("./TXTextControlNamespace").FrameInsertionMode;
    export type FrameStyle = import("./TXTextControlNamespace").FrameStyle;
    export type HeaderFooterType = import("./TXTextControlNamespace").HeaderFooterType;
    export type HighlightMode = import("./TXTextControlNamespace").HighlightMode;
    export type HorizontalAlignment = import("./TXTextControlNamespace").HorizontalAlignment;
    export type HtmlDialogBoxKind = import("./TXTextControlNamespace").HtmlDialogBoxKind;
    export type ImageFormat = import("./TXTextControlNamespace").ImageFormat;
    export type ImageInsertionMode = import("./TXTextControlNamespace").ImageInsertionMode;
    export type InsertionMode = import("./TXTextControlNamespace").InsertionMode;
    export type Justification = import("./TXTextControlNamespace").Justification;
    export type ListFormatCharacter = import("./TXTextControlNamespace").ListFormatCharacter;
    export type ListType = import("./TXTextControlNamespace").ListType;
    export type MeasuringUnit = import("./TXTextControlNamespace").MeasuringUnit;
    export type MergeFieldTextFormat = import("./TXTextControlNamespace").MergeFieldTextFormat;
    export type MisspelledWordKind = import("./TXTextControlNamespace").MisspelledWordKind;
    export type NumberFormat = import("./TXTextControlNamespace").NumberFormat;
    export type PDFImportSettings = import("./TXTextControlNamespace").PDFImportSettings;
    export type PageContent = import("./TXTextControlNamespace").PageContent;
    export type PermanentControlChar = import("./TXTextControlNamespace").PermanentControlChar;
    export type RelationalOperator = import("./TXTextControlNamespace").RelationalOperator;
    export type RulerBarBorderStyle = import("./TXTextControlNamespace").RulerBarBorderStyle;
    export type RulerBarFormulaMode = import("./TXTextControlNamespace").RulerBarFormulaMode;
    export type RulerBarScaleUnit = import("./TXTextControlNamespace").RulerBarScaleUnit;
    export type SectionBreakKind = import("./TXTextControlNamespace").SectionBreakKind;
    export type SideBarType = import("./TXTextControlNamespace").SideBarType;
    export type SpecialZoomFactor = import("./TXTextControlNamespace").SpecialZoomFactor;
    export type StatusBarBorderStyle = import("./TXTextControlNamespace").StatusBarBorderStyle;
    export type StreamType = import("./TXTextControlNamespace").StreamType;
    export type TabLeader = import("./TXTextControlNamespace").TabLeader;
    export type TabType = import("./TXTextControlNamespace").TabType;
    export type TableAddPosition = import("./TXTextControlNamespace").TableAddPosition;
    export type TextFieldPosition = import("./TXTextControlNamespace").TextFieldPosition;
    export type TextFieldType = import("./TXTextControlNamespace").TextFieldType;
    export type TextFrameInsertionMode = import("./TXTextControlNamespace").TextFrameInsertionMode;
    export type TextType = import("./TXTextControlNamespace").TextType;
    export type VerticalAlignment = import("./TXTextControlNamespace").VerticalAlignment;
    export type ViewMode = import("./TXTextControlNamespace").ViewMode;
    export type ZOrder = import("./TXTextControlNamespace").ZOrder;
}

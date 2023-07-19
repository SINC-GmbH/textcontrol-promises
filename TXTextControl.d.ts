export namespace TXTextControl {
  export enum StreamType {
    HTMLFormat,
    RichTextFormat,
    PlainText,
    InternalUnicodeFormat,
    MSWord,
    AdobePDF,
    WordprocessingML,
    SpreadsheetML,
  }

  export enum PDFImportSettings {
    GenerateLines,
    GenerateParagraphs,
    GenerateTextFrames,
    GenerateXML,
    LoadEmbeddedFiles,
    LoadEmbeddedData,
    GenerateTextFramesFirstPageOnly,
  }

  export enum ApplicationFieldFormat {
    None,
    MSWord,
    HighEdit,
    MSWordTXFormFields,
  }

  export enum DocumentAccessPermissions {
    None,
    AllowAuthoring,
    AllowAuthoringFields,
    AllowContentAccessibility,
    AllowDocumentAssembly,
    AllowExtractContents,
    AllowGeneralEditing,
    AllowHighLevelPrinting,
    AllowLowLevelPrinting,
    AllowAll,
  }

  export enum MergeFieldTextFormat {
    None,
    Uppercase,
    Lowercase,
    FirstCapital,
    TitleCase,
  }

  export enum HorizontalAlignment {
    Left,
    Right,
    Center,
    Justify,
  }

  export enum EditMode {
    Edit,
    ReadAndSelect,
    ReadOnly,
    UsePassword,
  }

  export enum AddResult {
    Error,
    Successful,
    NoSelection,
    SelectionTooComplex,
    PositionInvalid,
    AlreadyExists,
    Overlapping,
    Combined,
  }

  export enum HighlightMode {
    Never,
    Activated,
    Always,
    Auto,
  }

  export interface LoadDocumentCallbackData {
    author: string;
    bytesRead: number;
    creationDate: number;
    creatorApplication: string;
    cssFileName: string;
    documentKeywords: string[];
    documentPartName: string;
    documentSubject: string;
    lastModificationDate: number;
    loadedFile: string;
    loadedStreamType: StreamType;
    //pageMargins: Object;
    //pageSize: Size
  }

  export interface LoadSettings {
    PDFImportSettings?: PDFImportSettings;
    addParagraph?: boolean;
    applicationFieldFormat?: ApplicationFieldFormat;
    applicationFieldTypeNames?: string[];
    documentAccessPermissions?: DocumentAccessPermissions;
    documentBasePath?: string;
    documentPartName?: string;
    imageSearchPath?: string;
    loadDocumentBackColor?: boolean;
    loadHypertextLinks?: boolean;
    loadImages?: boolean;
    loadSubTextParts?: boolean;
    masterPassword?: number;
    reportingMergeBlockFormat?: SaveSettings.ReportingMergeBlockFormat;
    userPassword?: string;
  }

  export namespace SaveSettings {
    enum ReportingMergeBlockFormat {
      Default,
      DocumentTargets,
      SubTextParts,
    }

    export enum CssSaveMode {
      None,
      CreateFile,
      OverwriteFile,
      Inline,
    }

    export enum OmittedContent {
      None,
      SubTextParts,
      TrackedChanges,
      EditableRegions,
      Sections,
      TextFields,
    }
  }

  export interface ErrorArgument {
    msg: string;
    handled: boolean;
  }

  export class MergeField {
    dateTimeFormat: string;
    name: string;
    numericFormat: string | null;
    preserveFormatting: boolean;
    text: string;
    textAfter: string;
    textBefore: string;
    textFormat: MergeFieldTextFormat;
  }

  export type LoadDocumentCallback = (result: LoadDocumentCallbackData) => void;
  export type ErrorCallback = (err: ErrorArgument) => void;

  export function load(
    streamType: StreamType,
    base64Data: string,
    callback?: LoadDocumentCallback,
    loadSettings?: LoadSettings,
    errorCallback?: ErrorCallback
  ): void;

  export interface SaveDocumentResult {
    data: string;
    streamType: StreamType;
    bytesWritten: number;
  }
  export interface SaveSettings {
    author: string;
    creationDate: number;
    creatorApplication: string;
    cssSaveMode: SaveSettings.CssSaveMode;
    documentAccessPermissions: DocumentAccessPermissions;
    documentKeywords: Array<string>;
    documentLevelJavaScriptActions: string;
    documentSubject: string;
    documentTitle: string;
    imageCompressionQuality: number;
    imageExportFilterIndex: number;
    imageMaxResolution: number;
    lastModificationDate: number;
    masterPassword: string;
    omittedContent: SaveSettings.OmittedContent;
    reportingMergeBlockFormat: SaveSettings.ReportingMergeBlockFormat;
    saveDocumentBackColor: boolean;
    userPassword: string;
  }

  export type SaveDocumentResultCallback = (args: SaveDocumentResult) => void;

  export function save(
    streamType: StreamType,
    callback: SaveDocumentResultCallback,
    saveSettings?: SaveSettings,
    errorCallback?: ErrorCallback
  ): void;

  export interface SubTextPartEventArgs {
    id: number;
    start: number;
    length: number;
    name: string;
    // eslint-disable-next-line id-blacklist
    number: number;
    nestedLevel: number;
  }

  export interface TextFieldEventArgs {
    textField: {
      bounds: Rectangle;
      containsInputPosition: boolean;
      deleteable: boolean;
      doubledInputPosition: boolean;
      formattingBounds: Rectangle;
      editable: boolean;
      id: number;
      isSpellCheckingEnabled: boolean;
      length: number;
      name: string;
      showActivated: boolean;
      start: number;
      text: string;
      type: string;
    };
  }

  export interface Rectangle {
    location: Point;
    size: Size;
  }
  export interface Point {
    x: number;
    y: number;
  }
  export interface Size {
    width: number;
    height: number;
  }

  export interface ContextMenuEventArgs {
    items: ContextMenuItem[];
    location: number;
    cancel: boolean;
  }

  export interface ContextMenuItem {
    isChecked?: boolean;
    isEnabled?: boolean;
    text: string;
    imageUrl?: string;
    items?: ContextMenuItem[];
    dropDownIsScrollable?: boolean;
    clickHandler?: ContextMenuItemClickHandler;
  }

  export type ContextMenuItemClickHandler = (
    args: ContextMenuItemClickEventArgs
  ) => void;

  export interface ContextMenuItemClickEventArgs {
    item: ContextMenuItem;
    cancel: boolean;
  }

  export interface EditableRegionEventArgs {
    id: number;
    length: number;
    start: nmber;
    userName: string;
  }

  export interface TextFrameEventArgs {
    textFrame: FrameInfo;
  }

  export interface FrameInfo {
    id: number;
    location: Point;
    name: string;
    textPosition: number;
  }

  export interface EventMap {
    changed: EventCallback;
    textControlChanged: EventCallback;
    subTextPartEntered: SubTextPartCallback;
    subTextPartLeft: SubTextPartCallback;
    textFieldEntered: TextFieldCallback;
    textFieldLeft: TextFieldLeftCallback;
    contextMenuOpening: ContextMenuEventCallback;
    editableRegionCreated: EditableRegionCallback;
    editableRegionDeleted: EditableRegionCallback;
    editableRegionEntered: EditableRegionCallback;
    editableRegionLeft: EditableRegionCallback;
    textFrameActivated: TextFrameCallback;
    textFrameCreated: TextFrameCallback;
    textFrameDeactivated: TextFrameCallback;
    textFrameDeleted: TextFrameCallback;
    textFrameDeselected: TextFrameCallback;
    textFrameSelected: TextFrameCallback;
    textControlLoaded: TextControlLoadedCallback;
    [key: string]: any;
  }

  export type EventCallback = () => void;
  export type SubTextPartCallback = (args: SubTextPartEventArgs) => void;
  export type TextFieldCallback = (args: TextFieldEventArgs) => void;
  export type TextFieldLeftCallback = EventCallback;
  export type ContextMenuEventCallback = (args: ContextMenuEventArgs) => void;
  export type EditableRegionCallback = (editableRegion: {
    editableRegion: EditableRegionEventArgs;
  }) => void;
  export type TextFrameCallback = (args: TextFrameEventArgs) => void;
  export type TextControlLoadedCallback = () => void;

  export function addEventListener<T extends keyof EventMap>(
    eventName: T,
    callback: EventMap[T]
  ): void;

  export function removeEventListener<T extends keyof EventMap>(
    eventName: T,
    callback: EventMap[T]
  ): void;

  export function addMergeField(mergeField: MergeField): void;

  export type RequestBooleanCallback = (result: boolean) => void;
  export type RequestTableCallback = (table: Table) => void;
  export type RequestTableCellCallback = (cell: TableCell) => void;
  export type RequestNumberCallback = (result: number) => void;
  export type RequestObjectCallback = (obj: object) => void;

  export interface Collection {
    elementAt: (
      index: number,
      callback: RequestObjectCallback,
      errorCallback?: ErrorCallback
    ) => void;
    forEach: <T>(
      callback: ForEachCallback<T>,
      errorCallback?: ErrorCallback
    ) => void;
    getCount: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export interface TableCell {
    getStart: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getLength: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
    setText: (
      text: string,
      callback: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export interface Table {
    cells: TableCellCollection;
    columns: TableColumnCollection;
    mergeCells: (
      callback?: RequestBooleanCallback,
      errorCallback?: ErrorCallback
    ) => void;
    selectCells: (
      startRow: number,
      startColumn: number,
      stopRow: number,
      stopColumn: number,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export interface TableCellCollection extends Collection {
    getItem: (
      callback: RequestTableCellCallback,
      errorCallback: ErrorCallback,
      row: number,
      column: number
    ) => void;
  }

  export interface TableColumnCollection extends Collection {
    //TODO: update function declaration
  }

  export interface TableBaseCollection extends Collection {
    getItem: (
      callback: RequestTableCallback,
      errorCallback?: ErrorCallback,
      id?: number
    ) => void;
    removeAtInputPosition: (
      callback?: RequestBooleanCallback,
      errorCallback?: ErrorCallback
    ) => void;
    removeById: (
      id: number,
      callback?: RequestBooleanCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export interface TableCollection extends TableBaseCollection {
    add: (
      rows: number,
      columns: number,
      id?: number,
      callback?: RequestBooleanCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export let tables: TableCollection;

  export type EmptyRequestCallback = () => void;

  export interface Selection {
    setStart(
      start: number,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ): void;
    setLength(
      length: number,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ): void;
    paragraphFormat: ParagraphFormat;
    getStart: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getLength: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export interface ParagraphFormat {
    setAlignment(
      alignment: HorizontalAlignment,
      callback: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ): void;
  }

  export let selection: Selection;

  export type AddSubTextPartCallback = (
    response: SubTextPartCallbackData,
    addResult: SubTextPartCollection.AddResult
  ) => void;

  export type RequestSubTextPartCallback = (subTextPart: SubTextPart) => void;

  export namespace SubTextPartCollection {
    enum AddResult {
      Error,
      Successful,
      NoSelection,
      SelectionTooComplex,
      PositionInvalid,
      AlreadyExists,
      Overlapping,
      Combined,
    }
  }

  export interface SubTextPartCallbackData {
    subTextPart: SubTextPart;
  }

  export interface SubTextPart {
    getID: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getData: (
      callback: RequestStringCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getText: (
      callback: RequestStringCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export interface SubTextPartCollection extends Collection {
    add: (
      name: string,
      id: number,
      start: number,
      length: number,
      callback?: AddSubTextPartCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getItem: (
      callback: RequestSubTextPartCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export let subTextParts: SubTextPartCollection;

  export function setEditMode(
    editMode: EditMode,
    callback?: EmptyRequestCallback,
    errorCallback?: ErrorCallback
  ): void;

  export let editableRegions: EditableRegionCollection;

  export type AddEditableRegionCallback = (
    response: EditableRegionCallbackData,
    addResult: AddResult
  ) => void;

  export type RequestHighlightModeCallback = (result: HighlightMode) => void;
  export type SaveDocumentCallback = (result: SaveDocumentResult) => void;
  export type RequestEditableRegionsCallback = (
    result: Array<EditableRegion>
  ) => void;

  export interface EditableRegionCallbackData {
    editableRegion: EditableRegion;
  }

  export interface EditableRegionCollection extends Collection {
    forEach: (
      callback: ForEachCallback<TXTextControl.EditableRegion>,
      errorCallback?: ErrorCallback
    ) => void;
    add: (
      username: string,
      id: number,
      start: number,
      length: number,
      callback?: AddEditableRegionCallback,
      errorCallback?: ErrorCallback
    ) => void;
    remove: (
      editableRegion: EditableRegion,
      selectedPart?: boolean,
      callback?: RequestBooleanCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getItems: (
      callback: RequestEditableRegionsCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export interface EditableRegion {
    getHighlightColor: (
      callback: RequestStringCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getHighlightMode: (
      callback: RequestHighlightModeCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getID: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getLength: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getStart: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getText: (
      callback: RequestStringCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getUserName: (
      callback: RequestStringCallback,
      errorCallback?: ErrorCallback
    ) => void;
    save: (
      streamType: StreamType,
      callback: SaveDocumentCallback,
      saveSettings?: SaveSettings,
      errorCallback?: ErrorCallback
    ) => void;
    scrollTo: (
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ) => void;
    setHighlightColor: (
      value: string,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ) => void;
    setHighlightMode: (
      value: HighlightMode,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ) => void;
    setID: (
      value: number,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ) => void;
    setUserName: (
      value: string,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export let applicationFields: ApplicationFieldCollection;
  export let formFields: FormFieldCollection;

  export type RequestApplicationFieldCallback = (
    field: ApplicationField
  ) => void;

  export type RequestStringCallback = (result: string) => void;
  export type RequestStringsCallback = (result: Array<string>) => void;

  export type ForEachCallback<T> = (
    item: T,
    index: number,
    itemCount: number
  ) => void;

  export type RequestCheckFormFieldCallback = (
    checkFormField: CheckFormField
  ) => void;
  export type RequestDateFormFieldCallback = (
    dateFormField: DateFormField
  ) => void;
  export type RequestSelectionFormFieldCallback = (
    selectionFormField: SelectionFormField
  ) => void;
  export type RequestTextFormFieldCallback = (
    textFormField: TextFormField
  ) => void;
  export type RequestFormFieldCallback = (formField: FormField) => void;

  export interface FormFieldCollection extends Collection {
    forEach: (
      callback: ForEachCallback<TXTextControl.FormField>,
      errorCallback?: ErrorCallback
    ) => void;
    addCheckFormField: (
      isChecked: boolean,
      callback?: RequestCheckFormFieldCallback,
      errorCallback?: ErrorCallback
    ) => void;
    addDateFormField: (
      emptyWidth: number,
      callback?: RequestDateFormFieldCallback,
      errorCallback?: ErrorCallback
    ) => void;
    addSelectionFormField: (
      emptyWidth: number,
      callback?: RequestSelectionFormFieldCallback,
      errorCallback?: ErrorCallback
    ) => void;
    addTextFormField: (
      emptyWidth: number,
      callback?: RequestTextFormFieldCallback,
      errorCallback?: ErrorCallback
    ) => void;
    getItem: (
      callback: RequestFormFieldCallback,
      errorCallback?: ErrorCallback,
      id: number
    ) => void;
    remove: (
      formField: FormField,
      callback: RequestBooleanCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export interface TextFieldCollectionBase extends Collection {
    getCanAdd: (errorCallback?: ErrorCallback) => void;
  }

  export interface ApplicationFieldCollection extends TextFieldCollectionBase {
    forEach: (
      callback: ForEachCallback<TXTextControl.ApplicationField>,
      errorCallback?: ErrorCallback
    ) => void;
    getItem(
      callback: RequestApplicationFieldCallback,
      errorCallback?: ErrorCallback
    ): void;
    remove(
      applicationField: ApplicationField,
      keepText: boolean,
      callback?: RequestBooleanCallback,
      errorCallback?: ErrorCallback
    );
  }

  export interface ApplicationField {
    getName(callback: RequestStringCallback, errorCallback?: ErrorCallback);
    setName(
      name: string,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    );
    getTypeName(callback: RequestStringCallback, errorCallback?: ErrorCallback);
    getParameters(
      callback: RequestStringsCallback,
      errorCallback?: ErrorCallback
    );
    setParameters(
      parameters: string[],
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    );
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback);
    setText(
      text: string,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    );
    getStart: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export interface FormField extends TextField {}
  export interface CheckFormField extends FormField {}
  export interface DateFormField extends FormField {}
  export interface SelectionFormField extends FormField {}
  export interface TextFormField extends FormField {}

  export let textFields: TextFieldCollection;

  export type RequestTextFieldCallback = (field: TextField) => void;

  export interface TextFieldCollection extends Collection {
    getItem(
      callback: RequestTextFieldCallback,
      errorCallback?: ErrorCallback,
      id?: number
    ): void;
  }

  export interface TextField {
    getName(callback: RequestStringCallback, errorCallback?: ErrorCallback);
    setName(
      name: string,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    );
    getText(callback: RequestStringCallback, errorCallback?: ErrorCallback);
    setText(
      text: string,
      callback?: EmptyRequestCallback,
      errorCallback?: ErrorCallback
    );
    getStart: (
      callback: RequestNumberCallback,
      errorCallback?: ErrorCallback
    ) => void;
  }

  export function removeFromDom(): void;
  export function resetContents(
    callback?: EmptyRequestCallback,
    errorCallback?: ErrorCallback
  ): void;

  export function atobUTF8(inputString: string, keepBOM?: boolean): string;
  export function btoaUTF8(inputString: string, addBOM?: boolean): string;

  export function setInputPositionByLocation(
    location: Point,
    callback?: EmptyRequestCallback,
    errorCallback?: ErrorCallback
  );
}

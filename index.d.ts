declare module '@sinc-gmbh/textcontrol-promises/index' {
  export { ApplicationField } from "@sinc-gmbh/textcontrol-promises/src/ApplicationField";
  export { ApplicationFieldCollection } from "@sinc-gmbh/textcontrol-promises/src/ApplicationFieldCollection";
  export { Collection } from "@sinc-gmbh/textcontrol-promises/src/Collection";
  export { EditableRegion } from "@sinc-gmbh/textcontrol-promises/src/EditableRegion";
  export { FormField } from "@sinc-gmbh/textcontrol-promises/src/FormField";
  export { FormFieldCollection } from "@sinc-gmbh/textcontrol-promises/src/FormFieldCollection";
  export { MergeField } from "@sinc-gmbh/textcontrol-promises/src/MergeField";
  export { ParagraphFormat } from "@sinc-gmbh/textcontrol-promises/src/ParagraphFormat";
  export { Selection } from "@sinc-gmbh/textcontrol-promises/src/Selection";
  export { SubTextPart } from "@sinc-gmbh/textcontrol-promises/src/SubTextPart";
  export { SubTextPartCollection } from "@sinc-gmbh/textcontrol-promises/src/SubTextPartCollection";
  export { Table } from "@sinc-gmbh/textcontrol-promises/src/Table";
  export { TableCell } from "@sinc-gmbh/textcontrol-promises/src/TableCell";
  export { TableCollection } from "@sinc-gmbh/textcontrol-promises/src/TableCollection";
  export { TextControlContext } from "@sinc-gmbh/textcontrol-promises/src/TextControlContext";

}
declare module '@sinc-gmbh/textcontrol-promises/src/ApplicationField' {
  export class ApplicationField {
      constructor(txApplicationField: any);
      get txApplicationField(): any;
      get name(): string | undefined;
      get typeName(): string | undefined;
      get text(): string | undefined;
      get parameters(): string[] | undefined;
      get start(): number | undefined;
      setName(name: string): Promise<void>;
      setParameters(parameters: Array<string>): Promise<void>;
      setText(text: string): Promise<void>;
      getName(): Promise<string>;
      getTypeName(): Promise<string>;
      getParameters(): Promise<Array<string>>;
      getText(): Promise<string>;
      getStart(): Promise<number>;
      #private;
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/ApplicationFieldCollection' {
  export class ApplicationFieldCollection extends Collection<ApplicationField> {
      constructor(txApplicationFieldCollection: any);
      getItem(): Promise<ApplicationField>;
      remove(applicationField: ApplicationField, keepText: boolean): Promise<boolean>;
      #private;
  }
  import { ApplicationField } from "@sinc-gmbh/textcontrol-promises/src/ApplicationField";
  import { Collection } from "@sinc-gmbh/textcontrol-promises/src/Collection";

}
declare module '@sinc-gmbh/textcontrol-promises/src/Collection' {
  export class Collection<T> {
      constructor(txCollection: any, wrapItem: (txItem: T) => T);
      protected _txCollection: any;
      public forEach(forEachCallback: (item: T, index: number, itemCount: number) => void): Promise<void>;
      getCount(): Promise<number>;
      elementAt(index: number): Promise<T>;
      [Symbol.asyncIterator](): AsyncGenerator<Awaited<T>, void, unknown>;
      #private;
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/EditableRegion' {
  export class EditableRegion {
      constructor(txEditableRegion: any);
      get txEditableRegion(): any;
      get name(): string | undefined;
      get start(): number | undefined;
      get length(): number | undefined;
      get id(): number | undefined;
      get highlightColor(): string | undefined;
      getUserName(): Promise<string>;
      getLength(): Promise<number>;
      getStart(): Promise<number>;
      getID(): Promise<number>;
      getHighlightColor(): Promise<string>;
      setHighlightColor(value: string): Promise<void>;
      #private;
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/EditableRegionCollection' {
  export class EditableRegionCollection extends Collection<EditableRegion> {
      constructor(txEditableRegionCollection: any);
      remove(editableRegion: EditableRegion, selectedPart?: boolean | undefined): Promise<boolean>;
      add(username: string, id: number, start: number, length: number): Promise<{
          response;
          addResult;
      }>;
      #private;
  }
  import { EditableRegion } from "@sinc-gmbh/textcontrol-promises/src/EditableRegion";
  import { Collection } from "@sinc-gmbh/textcontrol-promises/src/Collection";

}
declare module '@sinc-gmbh/textcontrol-promises/src/FormField' {
  export class FormField {
      constructor(txFormField: any);
      get txFormField(): any;
      get start(): number | undefined;
      getStart(): Promise<number>;
      #private;
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/FormFieldCollection' {
  export class FormFieldCollection extends Collection<FormField> {
      constructor(txFormFieldCollection: any);
      getItem(id?: number | undefined): Promise<FormField>;
      remove(formField: FormField): Promise<boolean>;
      #private;
  }
  import { FormField } from "@sinc-gmbh/textcontrol-promises/src/FormField";
  import { Collection } from "@sinc-gmbh/textcontrol-promises/src/Collection";

}
declare module '@sinc-gmbh/textcontrol-promises/src/helper/CallbackHelper' {
  export class CallbackHelper {
      static tryGet(type: keyof typeof CallbackType | any, resolve: Function, reject: Function): any;
  }
  import { CallbackType } from "@sinc-gmbh/textcontrol-promises/src/helper/CallbackType";

}
declare module '@sinc-gmbh/textcontrol-promises/src/helper/CallbackType' {
  export class CallbackType {
      static ErrorCallback: "ErrorCallback";
      static EmptyRequestCallback: "EmptyRequestCallback";
      static RequestNumberCallback: "RequestNumberCallback";
      static RequestBooleanCallback: "RequestBooleanCallback";
      static RequestTableCallback: "RequestTableCallback";
      static LoadDocumentCallback: "LoadDocumentCallback";
      static SaveDocumentResultCallback: "SaveDocumentResultCallback";
      static RequestTableCellCallback: "RequestTableCellCallback";
      static RequestStringCallback: "RequestStringCallback";
      static AddSubTextPartCallback: "AddSubTextPartCallback";
      static RequestSubTextPartCallback: "RequestSubTextPartCallback";
      static RequestApplicationFieldCallback: "RequestApplicationFieldCallback";
      static RequestObjectCallback: "RequestObjectCallback";
      static RequestStringsCallback: "RequestStringsCallback";
      static RequestFormFieldCallback: "RequestFormFieldCallback";
      static AddEditableRegionCallback: "AddEditableRegionCallback";
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/helper/module' {
  export { CallbackType } from "@sinc-gmbh/textcontrol-promises/src/helper/CallbackType";
  export { CallbackHelper } from "@sinc-gmbh/textcontrol-promises/src/helper/CallbackHelper";
  export { RequestHelper } from "@sinc-gmbh/textcontrol-promises/src/helper/RequestHelper";

}
declare module '@sinc-gmbh/textcontrol-promises/src/helper/RequestHelper' {
  export class RequestHelper {
      static Promise(request: Function, ...args: any[]): Promise<any>;
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/MergeField' {
  export class MergeField {
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/ParagraphFormat' {
  export class ParagraphFormat {
      constructor(txParagraphFormat: any);
      get alignment(): any;
      setAlignment(alignment: any): Promise<void>;
      #private;
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/Selection' {
  export class Selection {
      constructor(txSelection: any);
      get start(): number | undefined;
      get length(): number | undefined;
      get paragraphFormat(): ParagraphFormat;
      setStart(start: number): Promise<void>;
      setLength(length: number): Promise<void>;
      getStart(): Promise<number>;
      getLength(): Promise<number>;
      #private;
  }
  import { ParagraphFormat } from "@sinc-gmbh/textcontrol-promises/src/ParagraphFormat";

}
declare module '@sinc-gmbh/textcontrol-promises/src/SubTextPart' {
  export class SubTextPart {
      constructor(txSubTextPart: any);
      get data(): string | undefined;
      get id(): number | undefined;
      get text(): string | undefined;
      getData(): Promise<string>;
      getText(): Promise<string>;
      getID(): Promise<number>;
      #private;
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/SubTextPartCollection' {
  export class SubTextPartCollection {
      constructor(txSubTextPartCollection: any);
      add(name: string, id: number, start: number, length: number): Promise<{
          response;
          addResult;
      }>;
      getItem(): Promise<SubTextPart>;
      #private;
  }
  import { SubTextPart } from "@sinc-gmbh/textcontrol-promises/src/SubTextPart";

}
declare module '@sinc-gmbh/textcontrol-promises/src/Table' {
  export class Table {
      constructor(txTable: any);
      get cells(): TableCellCollection;
      mergeCells(): Promise<boolean>;
      selectCells(startRow: number, startColumn: number, stopRow: number, stopColumn: number): Promise<void>;
      #private;
  }
  import { TableCellCollection } from "@sinc-gmbh/textcontrol-promises/src/TableCellCollection";

}
declare module '@sinc-gmbh/textcontrol-promises/src/TableCell' {
  export class TableCell {
      constructor(txTableCell: any);
      get start(): number | undefined;
      get length(): number | undefined;
      get text(): string | undefined;
      setText(text: string): Promise<void>;
      getText(): Promise<string>;
      getStart(): Promise<number>;
      getLength(): Promise<number>;
      #private;
  }

}
declare module '@sinc-gmbh/textcontrol-promises/src/TableCellCollection' {
  export class TableCellCollection {
      constructor(txTableCellCollection: any);
      getItem(row: number, column: number): Promise<TableCell>;
      #private;
  }
  import { TableCell } from "@sinc-gmbh/textcontrol-promises/src/TableCell";

}
declare module '@sinc-gmbh/textcontrol-promises/src/TableCollection' {
  export class TableCollection {
      constructor(txTableCollection: any);
      add(rows: number, columns: number, id?: number | undefined): Promise<boolean>;
      getItem(id: number): Promise<Table>;
      #private;
  }
  import { Table } from "@sinc-gmbh/textcontrol-promises/src/Table";

}
declare module '@sinc-gmbh/textcontrol-promises/src/TextControlContext' {
  export class TextControlContext {
      get selection(): Selection;
      get tables(): TableCollection;
      get subTextParts(): SubTextPartCollection;
      get applicationFields(): ApplicationFieldCollection;
      get formFields(): FormFieldCollection;
      get editableRegions(): EditableRegionCollection;
      load(streamType: any, base64Data: string, loadSettings?: any | undefined): Promise<any>;
      save(streamType: any, saveSettings?: any | undefined): Promise<any>;
  }
  import { Selection } from "@sinc-gmbh/textcontrol-promises/src/Selection";
  import { TableCollection } from "@sinc-gmbh/textcontrol-promises/src/TableCollection";
  import { SubTextPartCollection } from "@sinc-gmbh/textcontrol-promises/src/SubTextPartCollection";
  import { ApplicationFieldCollection } from "@sinc-gmbh/textcontrol-promises/src/ApplicationFieldCollection";
  import { FormFieldCollection } from "@sinc-gmbh/textcontrol-promises/src/FormFieldCollection";
  import { EditableRegionCollection } from "@sinc-gmbh/textcontrol-promises/src/EditableRegionCollection";

}
declare module '@sinc-gmbh/textcontrol-promises' {
  import main = require('@sinc-gmbh/textcontrol-promises/index');
  export = main;
}
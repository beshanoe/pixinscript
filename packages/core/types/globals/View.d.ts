declare class View {
  static viewById(id: string): View;

  readonly canGoBackward: boolean;
  readonly canGoForward: boolean;
  readonly fullId: string;
  historyIndex: number;
  id: string;
  readonly image: Image;
  readonly initialProcessing: any; //ProcessContainer;
  readonly isMainView: boolean;
  readonly isNull: boolean;
  readonly isPreview: boolean;
  readonly isView: boolean;
  readonly isVirtual: boolean;
  readonly processing: any; //ProcessContainer;
  properties: Array<any>;
  stf: Array<any>;
  readonly uniqueId: string;
  readonly window: ImageWindow;

  constructor();
  constructor(view: View);
  constructor(viewId: string);

  beginProcess(undoFlags?: number): void;
  cancelProcess(): void;
  computeOrFetchProperty(id: string): Object | null;
  computeProperty(id: string): Object | null;
  deleteProperty(id: string): boolean;
  endProcess(): void;
  exportProperties(fileFormatInstance: FileFormatInstance): number;
  hasProperty(id: string): boolean;
  importProperties(fileFormatInstance: FileFormatInstance): string;
  propertyAttributes(id: string): number | null;
  propertySize(id: string): number;
  propertyType(id: string): number | null;
  propertyValue(id: string): Object | null;
  setPropertyAttributes(id: string, attributes: number): boolean;
  setPropertyValue(
    id: string,
    value: Object,
    type?: number,
    attributes?: number
  ): boolean;
}

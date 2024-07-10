declare class FileFormat {
  readonly canEditPreferences: boolean;
  readonly canRead: boolean;
  readonly canReadIncrementally: boolean;
  readonly canStore16Bit: boolean;
  readonly canStore32Bit: boolean;
  readonly canStore64Bit: boolean;
  readonly canStore8Bit: boolean;
  readonly canStoreAlphaChannels: boolean;
  readonly canStoreColorFilterArrays: boolean;
  readonly canStoreComplex: boolean;
  readonly canStoreDComplex: boolean;
  readonly canStoreDisplayFunctions: boolean;
  readonly canStoreDouble: boolean;
  readonly canStoreFloat: boolean;
  readonly canStoreGrayscale: boolean;
  readonly canStoreICCProfiles: boolean;
  readonly canStoreImageProperties: boolean;
  readonly canStoreKeywords: boolean;
  readonly canStoreProperties: boolean;
  readonly canStoreRGBColor: boolean;
  readonly canStoreRGBWS: boolean;
  readonly canStoreResolution: boolean;
  readonly canStoreThumbnails: boolean;
  readonly canWrite: boolean;
  readonly canWriteIncrementally: boolean;
  readonly description: string;
  readonly fileExtensions: any[];
  readonly icon: Bitmap;
  readonly implementation: string;
  readonly isDeprecated: boolean;
  readonly mimeTypes: any[];
  readonly name: string;
  readonly smallIcon: Bitmap;
  readonly supportsCompression: boolean;
  readonly supportsMultipleImages: boolean;
  readonly supportsViewProperties: boolean;
  readonly usesFormatSpecificData: boolean;
  readonly version: number;
  static readonly formats: any[];

  constructor(nameExtOrMime: string, toRead?: boolean, toWrite?: boolean);
  constructor(fmt: FileFormat);

  disposeFormatSpecificData(data: any): void;
  editPreferences(): void;
  queryFormatStatus(): string;
  validateFormatSpecificData(data: any): boolean;
}

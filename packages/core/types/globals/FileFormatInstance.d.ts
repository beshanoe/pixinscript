declare class FileFormatInstance {
  readonly canReadIncrementally: boolean;
  readonly canWriteIncrementally: boolean;
  colorFilterArray: any[];
  displayFunction: any[];
  readonly filePath: string;
  readonly format: FileFormat;
  formatSpecificData: object;
  iccProfile: ByteArray;
  readonly imageFormatInfo: string;
  readonly imageProperties: any[];
  readonly isOpen: boolean;
  keywords: any[];
  readonly properties: any[];
  rgbws: RGBColorSystem;
  selectedImageIndex: number;
  thumbnail: Image;
  readonly wasInexactRead: boolean;
  readonly wasLossyWrite: boolean;

  constructor(format: FileFormat);

  close(): boolean;
  create(filePath: string, hints?: string, numberOfImages?: number): boolean;
  createImage(d: ImageDescription): boolean;
  open(filePath: string, hints?: string): any[];
  read(startRow: number, rowCount: number, channel?: number): Matrix;
  readImage(image: Image): boolean;
  readImageProperty(id: string): object | null;
  readProperty(id: string): object | null;
  setImageId(id: string): boolean;
  setOptions(d: ImageDescription): boolean;
  write(buffer: Matrix, startRow: number, channel?: number): boolean;
  writeImage(image: Image): boolean;
  writeImageProperty(id: string, value: object, type?: number): boolean;
  writeProperty(id: string, value: object, type?: number): boolean;
}

declare class File {
  static readonly currentWorkingDirectory: string;
  static readonly homeDirectory: string;
  static readonly rootDirectory: string;
  static readonly systemCacheDirectory: string;
  static readonly systemTempDirectory: string;

  readonly canRead: boolean;
  readonly canWrite: boolean;
  readonly isEOF: boolean;
  readonly isOpen: boolean;
  readonly mode: number;
  readonly path: string;
  position: number;
  size: number;

  constructor(path?: string, mode?: number);

  close(): void;
  create(path: string): void;
  createForWriting(path: string): void;
  flush(): void;
  open(path: string, mode?: number): void;
  openForReadWrite(path: string): void;
  openForReading(path: string): void;
  openOrCreate(path: string): void;
  outText(text: string, dataType?: number): void;
  outTextLn(text: string, dataType?: number): void;
  read(data_type: string, count?: number): any;
  read(data_type: string, length: number): any;
  rewind(): void;
  seek(pos: number, mode?: number): number;
  seekEnd(): number;
  write(obj: any, dataType: number): void;
  write(obj: any[]): void;
  write(obj: TypedArray): void;
  write(obj: ByteArray): void;
  write(obj: Vector): void;
  write(obj: Matrix): void;

  static appendToName(filePath: string, postFix: string): string;
  static changeExtension(filePath: string, newExt: string): string;
  static changeSuffix(filePath: string, newExt: string): string;
  static copyFile(
    targetPath: string,
    sourcePath: string,
    progress?: Function,
    progressThis?: any
  ): void;
  static copyLink(targetPath: string, sourcePath: string): void;
  static copyTimesAndPermissions(targetPath: string, sourcePath: string): void;
  static createDirectory(
    dirPath: string,
    createIntermediateDirs?: boolean
  ): void;
  static createFile(path: string): File;
  static createFileForWriting(path: string): File;
  static directoryExists(dirPath: string): boolean;
  static exists(filePath: string): boolean;
  static extractCompleteSuffix(filePath: string): string;
  static extractDirectory(path: string): string;
  static extractDrive(path: string): string;
  static extractExtension(filePath: string): string;
  static extractName(path: string): string;
  static extractNameAndExtension(filePath: string): string;
  static extractNameAndSuffix(filePath: string): string;
  static extractSuffix(filePath: string): string;
  static fileURI(path: string): string;
  static findCompleteSuffix(filePath: string): number;
  static findDrive(path: string): number;
  static findExtension(filePath: string): number;
  static findName(path: string): number;
  static findSuffix(filePath: string): number;
  static fullPath(path: string): string;
  static getAvailableSpace(directory: string): number;
  static isReadOnly(filePath: string): boolean;
  static move(filePath: string, newPath: string): void;
  static moveFile(
    targetPath: string,
    sourcePath: string,
    progress?: Function,
    progressThis?: any
  ): void;
  static openFile(path: string): File;
  static openFileForReading(path: string): File;
  static openOrCreateFile(path: string): File;
  static prependToName(filePath: string, preFix: string): string;
  static readFile(filePath: string): ByteArray;
  static readLines(filePath: string, options?: number): any[];
  static readTextFile(filePath: string): string;
  static remove(filePath: string): void;
  static removeDirectory(dirPath: string): void;
  static sameDevice(path1: string, path2: string): boolean;
  static sameFile(path1: string, path2: string): boolean;
  static setPermissions(filePath: string, permissions: number): void;
  static setReadOnly(filePath: string, readOnly?: boolean): void;
  static uniqueFileName(
    directory?: string,
    n?: number,
    prefix?: string,
    postfix?: string
  ): string;
  static unixPathToWindows(path: string): string;
  static windowsPathToUnix(path: string): string;
  static writeFile(filePath: string, data: ByteArray): void;
  static writeTextFile(filePath: string, text: string): void;
}

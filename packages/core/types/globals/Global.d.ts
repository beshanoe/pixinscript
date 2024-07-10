declare class Global {
  static readonly Infinity: number;
  static readonly NaN: number;
  static readonly console: Console;
  static readonly coreAppDirPath: string;
  static readonly coreBaseDirPath: string;
  static readonly coreBinDirPath: string;
  static readonly coreColorDirPath: string;
  static readonly coreDirPath: string;
  static readonly coreDocDirPath: string;
  static readonly coreEtcDirPath: string;
  static readonly coreFilePath: string;
  static readonly coreId: string;
  static readonly coreIncludeDirPath: string;
  static readonly coreLanguage: string;
  static readonly coreLibDirPath: string;
  static readonly coreLibraryDirPath: string;
  static readonly corePlatform: string;
  static readonly coreRscDirPath: string;
  static readonly coreSrcDirPath: string;
  static readonly coreVersionBeta: number;
  static readonly coreVersionBuild: number;
  static readonly coreVersionCodename: number;
  static readonly coreVersionLE: boolean;
  static readonly coreVersionMajor: number;
  static readonly coreVersionMinor: number;
  static readonly coreVersionRelease: number;
  static readonly coreVersionRevision: number;
  static jsAbortable: boolean;
  static jsArguments: Array<any>;
  static jsAutoGC: boolean;
  static jsScriptInformation: string;
  static jsScriptResult: Object;
  static jsStrictMode: boolean;
  static jsVersion: number;
  static readonly pclId: string;
  static readonly pclVersionBeta: boolean;
  static readonly pclVersionBuild: number;
  static readonly pclVersionMajor: number;
  static readonly pclVersionMinor: number;
  static readonly pclVersionRelease: number;
  static readonly undefined;
}
declare function cerr(text: string): void;
declare function cflush(): void;
declare function cout(text: string): void;
declare function cpuId(info: number, ecx?: number): [any, any, any, any];
declare function decodeURI(encodedURI: string): string;
declare function decodeURIComponent(encodedURI: string): string;
declare function encodeURI(URI: string): string;
declare function encodeURIComponent(uriComp: string): string;
declare function eval(s: string, obj?: object): object;
declare function format(fmt: string, ...values: any[]): string;
declare function gc(hardGC?: boolean): void;
declare function gcBytes(): number;
declare function getEnvironmentVariable(varName: string): string;
declare function isFinite(n: number): boolean;
declare function isNaN(value: any): boolean;
declare function loadResource(filePath: string, rootPath?: string): boolean;
declare function matchesWildSpecification(
  what: string,
  wildPattern: string
): boolean;
declare function msleep(milliseconds: number): void;
declare function parseFloat(s: string): number;
declare function parseInt(s: string, radix?: number): number;
declare function physicalMemoryStatus(): object;
declare function processEvents(
  excludeUserInputEvents?: boolean,
  iterations?: number
): void;
declare function replaceEnvironmentVariables(s: string): string;
declare function searchDirectory(dirPath: string, recursive?: boolean): any[];
declare function sleep(seconds: number): void;
declare function systemOffsetFromUTC(dateOrString?: Date | string): number;
declare function unloadResource(filePath: string, rootPath?: string): boolean;

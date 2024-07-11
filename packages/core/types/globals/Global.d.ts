const Infinity: number;
const NaN: number;
const console: Console;
const coreAppDirPath: string;
const coreBaseDirPath: string;
const coreBinDirPath: string;
const coreColorDirPath: string;
const coreDirPath: string;
const coreDocDirPath: string;
const coreEtcDirPath: string;
const coreFilePath: string;
const coreId: string;
const coreIncludeDirPath: string;
const coreLanguage: string;
const coreLibDirPath: string;
const coreLibraryDirPath: string;
const corePlatform: string;
const coreRscDirPath: string;
const coreSrcDirPath: string;
const coreVersionBeta: number;
const coreVersionBuild: number;
const coreVersionCodename: number;
const coreVersionLE: boolean;
const coreVersionMajor: number;
const coreVersionMinor: number;
const coreVersionRelease: number;
const coreVersionRevision: number;
let jsAbortable: boolean;
let jsArguments: Array<any>;
let jsAutoGC: boolean;
let jsScriptInformation: string;
let jsScriptResult: Object;
let jsStrictMode: boolean;
let jsVersion: number;
const pclId: string;
const pclVersionBeta: boolean;
const pclVersionBuild: number;
const pclVersionMajor: number;
const pclVersionMinor: number;
const pclVersionRelease: number;
const undefined;

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

declare class String {
  readonly length: number;

  constructor(value?: any);

  charAt(index: number): string;
  charCodeAt(index: number): number;
  concat(s2: string, ...sN: string[]): string;
  contains(searchValue: string, fromIndex?: number): boolean;
  endsWith(searchValue: string, length?: number): boolean;
  indexOf(searchValue: string, fromIndex?: number): number;
  lastIndexOf(searchValue: string, fromIndex?: number): number;
  localeCompare(compareString: string): number;
  match(exp: RegExp): Array<any>;
  quote(): string;
  repeat(n: number): string;
  replace(
    searchValue: RegExp | string,
    replaceValue: string | Function,
    flags?: string
  ): string;
  search(exp: RegExp): number;
  slice(begin: number, end?: number): string;
  split(separator?: string, limit?: number): Array<string>;
  startsWith(searchValue: string, fromIndex?: number): boolean;
  substr(start: number, length?: number): string;
  substring(startIndex: number, endIndex?: number): string;
  toBoolean(): boolean;
  toDouble(): number;
  toFloat(): number;
  toInt(base?: number): number;
  toInt64(base?: number): [number, number];
  toLocaleLowerCase(): string;
  toLocaleUpperCase(): string;
  toLowerCase(): string;
  toNumber(): number;
  toSource(): string;
  toString(): string;
  toUInt(base?: number): number;
  toUInt64(base?: number): [number, number];
  toUpperCase(): string;
  trim(): string;
  trimLeft(): string;
  trimRight(): string;
  tryToBoolean(): boolean | null;
  tryToDouble(): number | null;
  tryToFloat(): number | null;
  tryToInt(base?: number): number | null;
  tryToInt64(base?: number): [number, number] | null;
  tryToNumber(): number | null;
  tryToUInt(base?: number): number | null;
  tryToUInt64(base?: number): [number, number] | null;
  unquote(): string;
  valueOf(): string;

  static fromCharCode(c1: number, ...cN: number[]): string;
}

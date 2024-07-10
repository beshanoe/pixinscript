declare class Array<T = any> {
  constructor();
  constructor(element_0: any, ...elements: any[]);
  constructor(length: number);

  [n: number]: T;
  readonly index: number;
  readonly input: string;
  length: number;

  concat(...items: T[]): Array<T>;
  every(callback: (item: T) => boolean, thisObject?: any): boolean;
  filter(callback: (item: T) => boolean, thisObject?: any): Array<T>;
  forEach(callback: (item: T) => any, thisObject?: any): void;
  indexOf(searchItem: any, fromIndex?: number): number;
  join(separator?: string): string;
  lastIndexOf(searchItem: any, fromIndex?: number): number;
  map<P>(callback: (item: T) => P, thisObject?: any): Array<P>;
  pop(): any;
  propertyIsEnumerable(propertyName: string): boolean;
  push(...items: any[]): number;
  reduce(callback: any, initialValue?: any): any;
  reduceRight(callback: any, initialValue?: any): any;
  reverse(): void;
  shift(): any;
  slice(start: number, end?: number): Array<T>;
  some(callback: (item: T) => boolean, thisObject?: any): boolean;
  sort(compare?: any): void;
  splice(start: number, deleteCount: number, ...items: any[]): Array<T>;
  toLocaleString(): string;
  toSource(): string;
  toString(): string;
  unshift(...items: any[]): number;
  valueOf(): Array<T>;

  static isArray(obj: any): boolean;
}

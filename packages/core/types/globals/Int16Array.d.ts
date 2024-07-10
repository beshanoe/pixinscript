declare class Int16Array extends ArrayBufferView {
  constructor(length: number);
  constructor(array: TypedArray);
  constructor(array: Array<any>);
  constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);

  readonly length: number;

  set(array: TypedArray, offset?: number): void;
  set(array: Array<any>, offset?: number): void;
  subarray(begin: number, end?: number): Int16Array;

  static readonly BYTES_PER_ELEMENT: number;
}

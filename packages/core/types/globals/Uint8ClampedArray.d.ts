declare class Uint8ClampedArray extends ArrayBufferView {
  readonly length: number;

  constructor(length: number);
  constructor(array: TypedArray);
  constructor(array: Array);
  constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);

  set(array: TypedArray, offset?: number): void;
  set(array: Array, offset?: number): void;

  subarray(begin: number, end?: number): Uint8ClampedArray;

  static readonly BYTES_PER_ELEMENT: number;
}

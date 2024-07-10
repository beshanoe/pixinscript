declare class Uint16Array extends ArrayBufferView {
  constructor(length: number);
  constructor(array: Uint16Array);
  constructor(array: number[]);
  constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);

  readonly length: number;

  set(array: Uint16Array, offset?: number): void;
  set(array: number[], offset?: number): void;

  subarray(begin: number, end?: number): Uint16Array;

  static readonly BYTES_PER_ELEMENT: number;
}

declare class ArrayBuffer {
  readonly byteLength: number;
  readonly length: number;

  constructor(length: number);

  slice(begin: number, end?: number): ArrayBuffer;
}

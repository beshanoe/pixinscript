declare class DataView extends ArrayBufferView {
  constructor(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number);

  getFloat32(byteOffset: number, littleEndian?: boolean): number;
  getFloat64(byteOffset: number, littleEndian?: boolean): number;

  getInt16(byteOffset: number, littleEndian?: boolean): number;
  getInt32(byteOffset: number, littleEndian?: boolean): number;
  getInt8(byteOffset: number): number;

  getUint16(byteOffset: number, littleEndian?: boolean): number;
  getUint32(byteOffset: number, littleEndian?: boolean): number;
  getUint8(byteOffset: number): number;

  setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;
  setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;

  setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;
  setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;
  setInt8(byteOffset: number, value: number): void;

  setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;
  setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;
  setUint8(byteOffset: number, value: number): void;
}

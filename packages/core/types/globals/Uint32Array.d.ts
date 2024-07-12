declare class Uint32Array {
    static readonly BYTES_PER_ELEMENT: number;
    readonly length: number;

    constructor(length: number);
    constructor(array: TypedArray);
    constructor(array: Array<any>);
    constructor(buffer: ArrayBuffer, byteOffset?: number, length?: number);

    set(array: TypedArray, offset?: number): void;
    set(array: Array<any>, offset?: number): void;
    subarray(begin: number, end?: number): Uint32Array;
}
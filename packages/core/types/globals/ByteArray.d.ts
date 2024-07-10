declare class ByteArray {
    readonly available: number;
    readonly capacity: number;
    readonly isEmpty: boolean;
    readonly length: number;
    readonly lowerBound: number;
    readonly upperBound: number;

    constructor();
    constructor(length: number, value?: number);
    constructor(a: ByteArray, startIndex?: number, count?: number);
    constructor(a: TypedArray, startIndex?: number, endIndex?: number);
    constructor(s: string);

    add(value: number, count?: number): void;
    add(s: string): void;
    add(a: ByteArray): void;

    assign(value: number, length?: number): void;
    assign(s: string): void;
    assign(a: ByteArray): void;

    at(index: number): number;
    at(index: number, value: number): void;

    binarySearch(value: number, startIndex?: number, endIndex?: number): number;

    clear(): void;

    fill(value: number): void;

    grow(index: number, count?: number): void;

    hash(seed?: number, startIndex?: number, count?: number): number;
    hash32(seed?: number, startIndex?: number, count?: number): number;
    hash64(seedLSW?: number, seedMSW?: number, startIndex?: number, count?: number): [number, number];

    insert(index: number, value: number, count?: number): void;
    insert(index: number, s: string): void;
    insert(index: number, a: ByteArray): void;

    linearSearch(value: number, startIndex?: number, endIndex?: number): number;

    remove(index: number, count?: number): void;
    remove(): void;

    replace(startIndex: number, endIndex: number, value: number, count?: number): void;
    replace(startIndex: number, endIndex: number, a: ByteArray): void;
    replace(startIndex: number, endIndex: number, s: string): void;

    reserve(count: number): void;

    reverse(): void;

    secureFill(value?: number): void;

    sort(): void;

    squeeze(): void;

    swap(a: ByteArray): void;

    toBase64(startIndex?: number, count?: number): string;
    toFloat32Array(startIndex?: number, count?: number): Float32Array;
    toFloat64Array(startIndex?: number, count?: number): Float64Array;
    toHex(startIndex?: number, count?: number): string;
    toInt16Array(startIndex?: number, count?: number): Int16Array;
    toInt32Array(startIndex?: number, count?: number): Int32Array;
    toInt8Array(startIndex?: number, count?: number): Int8Array;
    toString(startIndex?: number, count?: number): string;
    toURLEncoded(startIndex?: number, count?: number): string;
    toUint16Array(startIndex?: number, count?: number): Uint16Array;
    toUint32Array(startIndex?: number, count?: number): Uint32Array;
    toUint8Array(startIndex?: number, count?: number): Uint8Array;
    toUint8ClampedArray(startIndex?: number, count?: number): Uint8ClampedArray;

    utf8ToString(startIndex?: number, count?: number): string;

    static fromBase64(base64: string): ByteArray;
    static fromByteValues(...values: number[]): ByteArray;
    static fromHex(hex: string): ByteArray;
    static fromURLEncoded(url: string): ByteArray;
    static stringToLocal8Bit(str: string, startIndex?: number, count?: number): ByteArray;
    static stringToMBS(str: string, startIndex?: number, count?: number): ByteArray;
    static stringToUTF8(str: string, startIndex?: number, count?: number): ByteArray;
}

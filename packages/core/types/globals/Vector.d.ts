declare class Vector {
    readonly isEmpty: boolean;
    readonly length: number;
    readonly lowerBound: number;
    readonly upperBound: number;

    constructor();
    constructor(length: number);
    constructor(value: number, length: number);
    constructor(v: Vector, startIndex?: number, endIndex?: number);
    constructor(a: Array<any>, startIndex?: number, endIndex?: number);
    constructor(a: TypedArray, startIndex?: number, endIndex?: number);

    BWMV(center?: number, sigma?: number, k?: number, reducedLength?: boolean): number;
    MAD(center?: number): number;
    PBMV(center?: number, beta?: number): number;
    Qn(): number;
    Sn(): number;
    abs(): Vector;
    add(s: number): void;
    add(v: Vector): void;
    assign(value: number): void;
    assign(value: number, length: number): void;
    assign(v: Vector, startIndex?: number, endIndex?: number): void;
    assign(a: Array<any>, startIndex?: number, endIndex?: number): void;
    assign(a: TypedArray, startIndex?: number, endIndex?: number): void;
    at(index: number): number;
    at(index: number, value: number): void;
    avgDev(center?: number): number;
    bendMidvariance(center?: number, beta?: number): number;
    binarySearch(value: number, startIndex?: number, endIndex?: number): number;
    biweightMidvariance(center?: number, sigma?: number, k?: number, reducedLength?: boolean): number;
    cross(v: Vector): Vector;
    crossProduct(v: Vector): Vector;
    div(s: number): void;
    div(v: Vector): void;
    dot(v: Vector): number;
    dotProduct(v: Vector): number;
    isEqualTo(v: Vector): boolean;
    isLessThan(v: Vector): boolean;
    l1norm(): number;
    l2norm(): number;
    linearSearch(value: number, startIndex?: number, endIndex?: number): number;
    maxComponent(): number;
    mean(): number;
    median(): number;
    minComponent(): number;
    modulus(): number;
    mul(s: number): void;
    mul(v: Vector): void;
    norm(p?: number): number;
    orderStatistic(k: number): number;
    pow(s: number): void;
    reverse(): void;
    setAbs(): void;
    setRandom(): void;
    setSqr(): void;
    setSqrt(): void;
    setUnit(): void;
    sort(): void;
    sqr(): Vector;
    sqrt(): Vector;
    stableAvgDev(center?: number): number;
    stableMean(): number;
    stableModulus(): number;
    stableSum(): number;
    stableSumOfSquares(): number;
    stdDev(): number;
    sub(s: number): void;
    sub(v: Vector): void;
    sum(): number;
    sumOfSquares(): number;
    swap(v: Vector): void;
    toArray(startIndex?: number, endIndex?: number): Array<any>;
    toFloat32Array(startIndex?: number, endIndex?: number): Float32Array;
    toFloat64Array(startIndex?: number, endIndex?: number): Float64Array;
    toSpherical(): Array<any>;
    toSpherical2Pi(): Array<any>;
    trimmedMean(l?: number, h?: number): number;
    trimmedMeanOfSquares(l?: number, h?: number): number;
    twoSidedAvgDev(center?: number): Array<any>;
    twoSidedBWMV(center?: number, sigma?: Array<number> | number, k?: number, reducedLength?: boolean): Array<any>;
    twoSidedBiweightMidvariance(center?: number, sigma?: Array<number> | number, k?: number, reducedLength?: boolean): Array<any>;
    twoSidedMAD(center?: number): Array<any>;
    unit(): Vector;
    variance(): number;

    static fromSpherical(longitude: number, latitude: number): Vector;
    static fromSpherical(slon: number, clon: number, slat: number, clat: number): Vector;
}

declare class Matrix {
    public readonly cols: number;
    public readonly columns: number;
    public readonly isEmpty: boolean;
    public readonly numberOfElements: number;
    public readonly rows: number;

    constructor();
    constructor(rows: number, cols: number);
    constructor(value: number, rows: number, cols: number);
    constructor(a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number);
    constructor(A: Matrix, startRow?: number, startCol?: number, rows?: number, cols?: number);
    constructor(a: any[], rows: number, cols: number);
    constructor(a: any[], startIndex: number, rows: number, cols: number);
    constructor(a: TypedArray, rows: number, cols: number);
    constructor(a: TypedArray, startIndex: number, rows: number, cols: number);

    public BWMV(center?: number, sigma?: number, k?: number, reducedLength?: boolean): number;
    public MAD(center?: number): number;
    public PBMV(center?: number, beta?: number): number;
    public Qn(): number;
    public Sn(): number;
    public abs(): Matrix;
    public add(s: number): void;
    public add(A: Matrix): Matrix;
    public addElementWise(A: Matrix): void;
    public apply(p: Point): Point;
    public apply(x: number, y: number): Point;
    public assign(value: number): void;
    public assign(value: number, rows: number, cols: number): void;
    public assign(a00: number, a01: number, a02: number, a10: number, a11: number, a12: number, a20: number, a21: number, a22: number): void;
    public assign(A: Matrix, startRow?: number, startCol?: number, rows?: number, cols?: number): void;
    public assign(a: any[]): void;
    public assign(a: any[], rows: number, cols: number): void;
    public assign(a: any[], startIndex: number, rows: number, cols: number): void;
    public assign(a: TypedArray, rows: number, cols: number): void;
    public assign(a: TypedArray, startIndex: number, rows: number, cols: number): void;
    public at(row: number, col: number): number;
    public at(row: number, col: number, value: number): void;
    public avgDev(center?: number): number;
    public bendMidvariance(center?: number, beta?: number): number;
    public binarySearch(value: number): any[] | null;
    public biweightMidvariance(center?: number, sigma?: number, k?: number, reducedLength?: boolean): number;
    public colVector(col: number): Vector;
    public div(s: number): void;
    public divElementWise(A: Matrix): void;
    public flip(): void;
    public flipped(): Matrix;
    public inverse(): Matrix;
    public invert(): void;
    public invertElementWise(): void;
    public isEqualTo(A: Matrix): boolean;
    public isLessThan(A: Matrix): boolean;
    public linearSearch(value: number): any[] | null;
    public maxElement(): number;
    public mean(): number;
    public median(): number;
    public minElement(): number;
    public modulus(): number;
    public mul(s: number): void;
    public mul(A: Matrix): Matrix;
    public mulElementWise(A: Matrix): void;
    public pow(s: number): void;
    public powElementWise(A: Matrix): void;
    public rescale(v0?: number, v1?: number): void;
    public rowVector(row: number): Vector;
    public sameElements(A: Matrix): boolean;
    public setAbs(): void;
    public setRandom(): void;
    public setSqr(): void;
    public setSqrt(): void;
    public sort(): void;
    public sqr(): Matrix;
    public sqrt(): Matrix;
    public stableAvgDev(center?: number): number;
    public stableMean(): number;
    public stableModulus(): number;
    public stableSum(): number;
    public stableSumOfSquares(): number;
    public stdDev(): number;
    public sub(s: number): void;
    public sub(A: Matrix): Matrix;
    public subElementWise(A: Matrix): void;
    public sum(): number;
    public sumOfSquares(): number;
    public swap(A: Matrix): void;
    public toArray(startRow?: number, startCol?: number, rows?: number, cols?: number): any[];
    public toFloat32Array(startRow?: number, startCol?: number, rows?: number, cols?: number): Float32Array;
    public toFloat64Array(startRow?: number, startCol?: number, rows?: number, cols?: number): Float64Array;
    public toImage(): Image;
    public transpose(): Matrix;
    public trimmedMean(l?: number, h?: number): number;
    public trimmedMeanOfSquares(l?: number, h?: number): number;
    public truncate(v0?: number, v1?: number): void;
    public twoSidedAvgDev(center?: number): any[];
    public twoSidedBWMV(center?: number, sigma?: any[] | number, k?: number, reducedLength?: boolean): any[];
    public twoSidedBiweightMidvariance(center?: number, sigma?: any[] | number, k?: number, reducedLength?: boolean): any[];
    public twoSidedMAD(center?: number): any[];
    public variance(): number;

    public static fromImage(img: Image, rect?: Rect, channel?: number): Matrix;
    public static gaussianFilter(sigma: number, epsilon?: number, rho?: number, theta?: number): Matrix;
    public static gaussianFilterBySize(size: number, epsilon?: number, rho?: number, theta?: number): Matrix;
    public static linearFilter(size: number, v0?: number, v1?: number): Matrix;
    public static moffatFilter(sigma: number, beta?: number, epsilon?: number, rho?: number, theta?: number): Matrix;
    public static moffatFilterBySize(size: number, beta?: number, epsilon?: number, rho?: number, theta?: number): Matrix;
    public static unitMatrix(n?: number): Matrix;
    public static variableShapeFilter(sigma: number, shape?: number, epsilon?: number, rho?: number, theta?: number): Matrix;
    public static variableShapeFilterBySize(size: number, shape?: number, epsilon?: number, rho?: number, theta?: number): Matrix;
}

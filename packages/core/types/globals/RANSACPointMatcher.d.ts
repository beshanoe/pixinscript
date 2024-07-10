declare class RANSACPointMatcher {
    readonly H: Matrix;
    readonly M1: Array;
    readonly M2: Array;
    readonly bestIteration:number;
    readonly index: Array;
    readonly inliersFraction: Number;
    readonly numberOfIterations:number;
    readonly overlapping: Number;
    readonly peakErrorX: Number;
    readonly peakErrorY: Number;
    readonly quality: Number;
    readonly regularity: Number;
    readonly rmsError: Number;
    readonly rmsErrorDeviation: Number;

    constructor();

    match(
        P1: Array, 
        P2: Array, 
        tolerance?: Number, 
        transformation?:number, 
        maxIterations?:number, 
        klen?: Number, 
        kovl?: Number, 
        kreg?: Number, 
        krms?: Number
    ): Boolean;
}

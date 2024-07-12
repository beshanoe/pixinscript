//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class CometAlignment extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    drizzleWriteCometAlignedImage: boolean;
    drizzleWriteStarAlignedImage: boolean;
    drzSaveCometAligned: boolean;
    drzSaveStarsAligned: boolean;
    enableLinearFit: boolean;
    fileThreadOverload: number;
    fitPSF: boolean;
    generateCometPathMap: boolean;
    inputHints: string;
    linearClampingThreshold: number;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    normalize: boolean;
    onError: number;
    operandImageFilePath: string;
    operandLinearFit: boolean;
    operandLinearFitHigh: number;
    operandLinearFitLow: number;
    operandNormalize: boolean;
    operandSubtractAligned: boolean;
    outputDir: string;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputPostfix: string;
    outputPrefix: string;
    overwrite: boolean;
    overwriteExistingFiles: boolean;
    pixelInterpolation: number;
    postfix: string;
    prefix: string;
    reference: number;
    referenceIndex: number;
    rejectHigh: number;
    rejectLow: number;
    subtractFile: string;
    subtractMode: boolean;
    targetFrames: Array<any>;
    useFileThreads: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(CometAlignment?: CometAlignment);


    //-------------------------
    //--------Functions--------
    //-------------------------


    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: CometAlignment;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Auto;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
    CatmullRomSplineFilter;
    CubicBSplineFilter;
    Lanczos3;
    Lanczos4;
    Lanczos5;
    MitchellNetravaliFilter;
    NearestNeighbor;
    OnError_Abort;
    OnError_AskUser;
    OnError_Continue;
}

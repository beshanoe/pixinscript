//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ImageCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoPedestalLimit: number;
    calibrateBias: boolean;
    calibrateDark: boolean;
    calibrateFlat: boolean;
    cfaPattern: number;
    darkCFADetectionMode: number;
    darkOptimizationLow: number;
    darkOptimizationThreshold: number;
    darkOptimizationWindow: number;
    enableCFA: boolean;
    evaluateNoise: boolean;
    evaluateSignal: boolean;
    fileThreadOverload: number;
    flatScaleClippingFactor: number;
    hotPixelFilterRadius: number;
    inputHints: string;
    masterBiasEnabled: boolean;
    masterBiasPath: string;
    masterDarkEnabled: boolean;
    masterDarkPath: string;
    masterFlatEnabled: boolean;
    masterFlatPath: string;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    maxStars: number;
    minStructureSize: number;
    noGUIMessages: boolean;
    noiseEvaluationAlgorithm: number;
    noiseLayers: number;
    noiseReductionFilterRadius: number;
    onError: number;
    optimizeDarks: boolean;
    outputData: Array<any>;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputPedestal: number;
    outputPedestalMode: number;
    outputPostfix: string;
    outputPrefix: string;
    outputSampleFormat: number;
    overscanEnabled: boolean;
    overscanImageX0: number;
    overscanImageX1: number;
    overscanImageY0: number;
    overscanImageY1: number;
    overscanRegions: Array<any>;
    overwriteExistingFiles: boolean;
    pedestal: number;
    pedestalKeyword: string;
    pedestalMode: number;
    psfGrowth: number;
    psfType: number;
    saturationRelative: boolean;
    saturationThreshold: number;
    separateCFAFlatScalingFactors: boolean;
    structureLayers: number;
    targetFrames: Array<any>;
    useFileThreads: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ImageCalibration?: ImageCalibration);


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
    static prototype: ImageCalibration;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Abort;
    AskUser;
    Auto;
    BGGR;
    BGRG;
    Continue;
    CustomKeyword;
    DetectCFA;
    ForceCFA;
    GBGR;
    GBRG;
    GRBG;
    GRGB;
    IgnoreCFA;
    Keyword;
    Literal;
    NoiseEvaluation_KSigma;
    NoiseEvaluation_MRS;
    NoiseEvaluation_NStar;
    OutputPedestal_Auto;
    OutputPedestal_Literal;
    PSFType_Auto;
    PSFType_Gaussian;
    PSFType_Moffat15;
    PSFType_Moffat4;
    PSFType_Moffat6;
    PSFType_Moffat8;
    PSFType_MoffatA;
    RGBG;
    RGGB;
    f32;
    f64;
    i16;
    i32;
}

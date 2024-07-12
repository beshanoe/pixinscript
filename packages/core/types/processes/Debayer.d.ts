//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Debayer extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    BayerPattern: number;
    DebayerMethod: number;
    bayerPattern: number;
    cfaPattern: number;
    cfaSourceFilePath: string;
    debayerMethod: number;
    evaluateNoise: boolean;
    evaluateSignal: boolean;
    fbddNoiseReduction: number;
    fileThreadOverload: number;
    hotPixelFilterRadius: number;
    inputHints: string;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    maxStars: number;
    memoryLoadControl: boolean;
    memoryLoadLimit: number;
    minStructureSize: number;
    noGUIMessages: boolean;
    noiseAlgorithmB: string;
    noiseAlgorithmG: string;
    noiseAlgorithmR: string;
    noiseEstimateB: number;
    noiseEstimateG: number;
    noiseEstimateR: number;
    noiseEvaluationAlgorithm: number;
    noiseFractionB: number;
    noiseFractionG: number;
    noiseFractionR: number;
    noiseLayers: number;
    noiseReductionFilterRadius: number;
    noiseScaleHighB: number;
    noiseScaleHighG: number;
    noiseScaleHighR: number;
    noiseScaleLowB: number;
    noiseScaleLowG: number;
    noiseScaleLowR: number;
    onError: number;
    outputChannelImageB: string;
    outputChannelImageG: string;
    outputChannelImageR: string;
    outputDirectory: string;
    outputExtension: string;
    outputFileData: Array<any>;
    outputHints: string;
    outputImage: string;
    outputPostfix: string;
    outputPrefix: string;
    outputRGBImages: boolean;
    outputSeparateChannels: boolean;
    overwriteExistingFiles: boolean;
    psfCountB: number;
    psfCountG: number;
    psfCountR: number;
    psfGrowth: number;
    psfMStarEstimateB: number;
    psfMStarEstimateG: number;
    psfMStarEstimateR: number;
    psfNStarEstimateB: number;
    psfNStarEstimateG: number;
    psfNStarEstimateR: number;
    psfTotalFluxEstimateB: number;
    psfTotalFluxEstimateG: number;
    psfTotalFluxEstimateR: number;
    psfTotalMeanFluxEstimateB: number;
    psfTotalMeanFluxEstimateG: number;
    psfTotalMeanFluxEstimateR: number;
    psfTotalMeanPowerFluxEstimateB: number;
    psfTotalMeanPowerFluxEstimateG: number;
    psfTotalMeanPowerFluxEstimateR: number;
    psfTotalPowerFluxEstimateB: number;
    psfTotalPowerFluxEstimateG: number;
    psfTotalPowerFluxEstimateR: number;
    psfType: number;
    saturationRelative: boolean;
    saturationThreshold: number;
    showImages: boolean;
    structureLayers: number;
    targetItems: Array<any>;
    useFileThreads: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Debayer?: Debayer);


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
    static prototype: Debayer;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Auto;
    BGGR;
    BGRG;
    Bilinear;
    GBGR;
    GBRG;
    GRBG;
    GRGB;
    NoiseEvaluation_KSigma;
    NoiseEvaluation_MRS;
    NoiseEvaluation_NStar;
    OnError_Abort;
    OnError_AskUser;
    OnError_Continue;
    PSFType_Auto;
    PSFType_Gaussian;
    PSFType_Moffat15;
    PSFType_Moffat4;
    PSFType_Moffat6;
    PSFType_Moffat8;
    PSFType_MoffatA;
    RGBG;
    RGGB;
    SuperPixel;
    VNG;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ImageIntegration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    adaptiveGridSize: number;
    adaptiveNoScale: boolean;
    autoMemoryLimit: number;
    autoMemorySize: boolean;
    averageSNRIncrementB: number;
    averageSNRIncrementG: number;
    averageSNRIncrementRK: number;
    bufferSizeMB: number;
    ccdGain: number;
    ccdReadNoise: number;
    ccdScaleNoise: number;
    clipHigh: boolean;
    clipLow: boolean;
    closePreviousImages: boolean;
    combination: number;
    csvWeights: string;
    esdAlpha: number;
    esdLowRelaxation: number;
    esdOutliersFraction: number;
    evaluateNoise: boolean;
    evaluateSNR: boolean;
    fileThreadOverload: number;
    finalLocationEstimateB: number;
    finalLocationEstimateG: number;
    finalLocationEstimateRK: number;
    finalNoiseAlgorithmB: string;
    finalNoiseAlgorithmG: string;
    finalNoiseAlgorithmRK: string;
    finalNoiseEstimateB: number;
    finalNoiseEstimateG: number;
    finalNoiseEstimateRK: number;
    finalNoiseScaleEstimateHighB: number;
    finalNoiseScaleEstimateHighG: number;
    finalNoiseScaleEstimateHighRK: number;
    finalNoiseScaleEstimateLowB: number;
    finalNoiseScaleEstimateLowG: number;
    finalNoiseScaleEstimateLowRK: number;
    finalPSFCountB: number;
    finalPSFCountG: number;
    finalPSFCountRK: number;
    finalPSFMStarEstimateB: number;
    finalPSFMStarEstimateG: number;
    finalPSFMStarEstimateRK: number;
    finalPSFNStarEstimateB: number;
    finalPSFNStarEstimateG: number;
    finalPSFNStarEstimateRK: number;
    finalPSFTotalFluxEstimateB: number;
    finalPSFTotalFluxEstimateG: number;
    finalPSFTotalFluxEstimateRK: number;
    finalPSFTotalMeanFluxEstimateB: number;
    finalPSFTotalMeanFluxEstimateG: number;
    finalPSFTotalMeanFluxEstimateRK: number;
    finalPSFTotalMeanPowerFluxEstimateB: number;
    finalPSFTotalMeanPowerFluxEstimateG: number;
    finalPSFTotalMeanPowerFluxEstimateRK: number;
    finalPSFTotalPowerFluxEstimateB: number;
    finalPSFTotalPowerFluxEstimateG: number;
    finalPSFTotalPowerFluxEstimateRK: number;
    finalScaleEstimateB: number;
    finalScaleEstimateG: number;
    finalScaleEstimateRK: number;
    generate64BitResult: boolean;
    generateDrizzleData: boolean;
    generateIntegratedImage: boolean;
    generateRejectionMaps: boolean;
    highRejectionMapImageId: string;
    ignoreNoiseKeywords: boolean;
    imageData: Array<any>;
    images: Array<any>;
    inputHints: string;
    integrationImageId: string;
    largeScaleClipHigh: boolean;
    largeScaleClipHighGrowth: number;
    largeScaleClipHighProtectedLayers: number;
    largeScaleClipLow: boolean;
    largeScaleClipLowGrowth: number;
    largeScaleClipLowProtectedLayers: number;
    linearFitHigh: number;
    linearFitLow: number;
    lowRejectionMapImageId: string;
    mapRangeRejection: boolean;
    maxBufferThreads: number;
    medianNoiseReductionB: number;
    medianNoiseReductionG: number;
    medianNoiseReductionRK: number;
    minMaxHigh: number;
    minMaxLow: number;
    minWeight: number;
    mrsMinDataFraction: number;
    noGUIMessages: boolean;
    noiseEvaluationAlgorithm: number;
    normalization: number;
    numberOfChannels: number;
    numberOfPixels: number;
    outputRangeHigh: number;
    outputRangeLow: number;
    pcClipHigh: number;
    pcClipLow: number;
    psfStructureLayers: number;
    psfType: number;
    rangeClipHigh: boolean;
    rangeClipLow: boolean;
    rangeHigh: number;
    rangeLow: number;
    rcrLimit: number;
    referenceNoiseReductionB: number;
    referenceNoiseReductionG: number;
    referenceNoiseReductionRK: number;
    referenceSNRIncrementB: number;
    referenceSNRIncrementG: number;
    referenceSNRIncrementRK: number;
    rejection: number;
    rejectionNormalization: number;
    reportRangeRejection: boolean;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    showImages: boolean;
    sigmaHigh: number;
    sigmaLow: number;
    slopeMapImageId: string;
    stackSizeMB: number;
    subtractPedestals: boolean;
    totalPixels: number;
    totalRejectedHighB: number;
    totalRejectedHighG: number;
    totalRejectedHighRK: number;
    totalRejectedLowB: number;
    totalRejectedLowG: number;
    totalRejectedLowRK: number;
    truncateOnOutOfRange: boolean;
    useBufferThreads: boolean;
    useCache: boolean;
    useFileThreads: boolean;
    useROI: boolean;
    weightKeyword: string;
    weightMode: number;
    weightScale: number;
    winsorizationCutoff: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ImageIntegration?: ImageIntegration);


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
    static prototype: ImageIntegration;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AdaptiveNormalization;
    AdaptiveRejectionNormalization;
    Additive;
    AdditiveWithScaling;
    Average;
    AverageWeight;
    AveragedSigmaClip;
    CCDClip;
    DontCare;
    EqualizeFluxes;
    ExposureTime;
    KeywordWeight;
    LinearFit;
    LocalNormalization;
    LocalRejectionNormalization;
    Maximum;
    Median;
    MedianWeight;
    MinMax;
    Minimum;
    Multiplicative;
    MultiplicativeWithScaling;
    NoNormalization;
    NoRejection;
    NoRejectionNormalization;
    NoiseEvaluation_KSigma;
    NoiseEvaluation_MRS;
    NoiseEvaluation_NStar;
    PSFSNR;
    PSFScaleSNR;
    PSFSignalWeight;
    PSFType_Auto;
    PSFType_Gaussian;
    PSFType_Moffat15;
    PSFType_Moffat4;
    PSFType_Moffat6;
    PSFType_Moffat8;
    PSFType_MoffatA;
    PercentileClip;
    Rejection_ESD;
    Rejection_RCR;
    SNREstimate;
    Scale;
    SigmaClip;
    SignalWeight;
    WeightScale_AvgDev;
    WeightScale_BWMV;
    WeightScale_IKSS;
    WeightScale_MAD;
    WeightScale_PBMV;
    WeightScale_Qn;
    WeightScale_Sn;
    WinsorizedSigmaClip;
}

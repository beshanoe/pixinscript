//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class LocalNormalization extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoMemoryLimit: number;
    backgroundSamplingDelta: number;
    fileThreadOverload: number;
    generateInvalidData: boolean;
    generateNormalizationData: boolean;
    generateNormalizedImages: number;
    globalLocationNormalization: boolean;
    graphOutputDirectory: string;
    graphSize: number;
    graphTextSize: number;
    graphTitleSize: number;
    graphTransparent: boolean;
    highClippingLevel: number;
    hotPixelFilterRadius: number;
    inputHints: string;
    localScaleCorrections: boolean;
    lowClippingLevel: number;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    modelScalingFactor: number;
    noGUIMessages: boolean;
    noScale: boolean;
    noiseReductionFilterRadius: number;
    onError: number;
    outputData: Array<any>;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputPostfix: string;
    outputPrefix: string;
    overwriteExistingFiles: boolean;
    plotNormalizationFunctions: number;
    psfAllowClusteredSources: boolean;
    psfGrowth: number;
    psfHotPixelFilterRadius: number;
    psfMaxStars: number;
    psfMinSNR: number;
    psfMinStructureSize: number;
    psfNoiseLayers: number;
    psfNoiseReductionFilterRadius: number;
    psfRejectionLimit: number;
    psfStructureLayers: number;
    psfType: number;
    referenceIsView: boolean;
    referencePathOrViewId: string;
    referenceRejection: boolean;
    referenceRejectionThreshold: number;
    rejection: boolean;
    rejectionLimit: number;
    saturationRelative: boolean;
    saturationThreshold: number;
    scale: number;
    scaleEvaluationMethod: number;
    showBackgroundModels: boolean;
    showLocalScaleModels: boolean;
    showRejectionMaps: boolean;
    showStructureMaps: boolean;
    targetItems: Array<any>;
    targetRejectionThreshold: number;
    truncate: boolean;
    useFileThreads: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(LocalNormalization?: LocalNormalization);


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
    static prototype: LocalNormalization;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    GenerateNormalizedImages_Always;
    GenerateNormalizedImages_GlobalExecutionOnly;
    GenerateNormalizedImages_Never;
    GenerateNormalizedImages_ViewExecutionOnly;
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
    PlotNormalizationFunctions_DontPlot;
    PlotNormalizationFunctions_Line3D;
    PlotNormalizationFunctions_Map3D;
    PlotNormalizationFunctions_Palette3D;
    ScaleEvaluationMethod_MultiscaleAnalysis;
    ScaleEvaluationMethod_PSFSignal;
}

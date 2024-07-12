//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SpectrophotometricColorCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    applyCalibration: boolean;
    autoLimitMagnitude: boolean;
    backgroundHigh: number;
    backgroundLow: number;
    backgroundROIX0: number;
    backgroundROIX1: number;
    backgroundROIY0: number;
    backgroundROIY1: number;
    backgroundReferenceViewId: string;
    backgroundUseROI: boolean;
    blueFilterBandwidth: number;
    blueFilterName: string;
    blueFilterTrCurve: string;
    blueFilterWavelength: number;
    broadbandIntegrationStepSize: number;
    catalogId: string;
    deviceQECurve: string;
    deviceQECurveName: string;
    generateGraphs: boolean;
    generateStarMaps: boolean;
    generateTextFiles: boolean;
    greenFilterBandwidth: number;
    greenFilterName: string;
    greenFilterTrCurve: string;
    greenFilterWavelength: number;
    limitMagnitude: number;
    narrowbandIntegrationSteps: number;
    narrowbandMode: boolean;
    narrowbandOptimizeStars: boolean;
    neutralizeBackground: boolean;
    outputDirectory: string;
    psfAllowClusteredSources: boolean;
    psfChannelSearchTolerance: number;
    psfGrowth: number;
    psfHotPixelFilterRadius: number;
    psfMaxStars: number;
    psfMinSNR: number;
    psfMinStructureSize: number;
    psfNoiseLayers: number;
    psfNoiseReductionFilterRadius: number;
    psfSearchTolerance: number;
    psfStructureLayers: number;
    psfType: number;
    redFilterBandwidth: number;
    redFilterName: string;
    redFilterTrCurve: string;
    redFilterWavelength: number;
    saturationRelative: boolean;
    saturationShrinkFactor: number;
    saturationThreshold: number;
    targetSourceCount: number;
    whiteReferenceName: string;
    whiteReferenceSpectrum: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SpectrophotometricColorCalibration?: SpectrophotometricColorCalibration);


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
    static prototype: SpectrophotometricColorCalibration;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    PSFType_Auto;
    PSFType_Gaussian;
    PSFType_Moffat15;
    PSFType_Moffat4;
    PSFType_Moffat6;
    PSFType_Moffat8;
    PSFType_MoffatA;
}

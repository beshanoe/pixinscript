//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PhotometricColorCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    applyCalibration: boolean;
    autoCatalog: boolean;
    autoLimitMagnitude: boolean;
    backgroundHigh: number;
    backgroundLow: number;
    backgroundROIX0: number;
    backgroundROIX1: number;
    backgroundROIY0: number;
    backgroundROIY1: number;
    backgroundReferenceViewId: string;
    backgroundUseROI: boolean;
    catalogId: string;
    generateGraphs: boolean;
    generateStarMaps: boolean;
    generateTextFiles: boolean;
    limitMagnitude: number;
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
    saturationRelative: boolean;
    saturationShrinkFactor: number;
    saturationThreshold: number;
    serverURL: string;
    targetSourceCount: number;
    whiteReferenceId: string;
    whiteReferenceJB_JV: number;
    whiteReferenceName: string;
    whiteReferenceSr_JV: number;
    zeroPointJB_JV: number;
    zeroPointSr_JV: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(PhotometricColorCalibration?: PhotometricColorCalibration);


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
    static prototype: PhotometricColorCalibration;
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

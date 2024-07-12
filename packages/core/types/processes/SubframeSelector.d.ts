//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SubframeSelector extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    allowClusteredSources: boolean;
    approvalExpression: string;
    auxGraphProperty: number;
    brightThreshold: number;
    cameraGain: number;
    cameraResolution: number;
    dataUnit: number;
    fileCache: boolean;
    fileThreadOverload: number;
    graphProperty: number;
    hotPixelFilterRadius: number;
    inputHints: string;
    maxDistortion: number;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    maxPSFFits: number;
    measurements: Array<any>;
    minStructureSize: number;
    noiseLayers: number;
    noiseReductionFilterRadius: number;
    nonInteractive: boolean;
    onError: number;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputKeyword: string;
    outputPostfix: string;
    outputPrefix: string;
    overwriteExistingFiles: boolean;
    peakResponse: number;
    pedestal: number;
    pedestalKeyword: string;
    pedestalMode: number;
    psfFit: number;
    psfFitCircular: boolean;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    routine: number;
    scaleUnit: number;
    sensitivity: number;
    siteLocalMidnight: number;
    sortProperty: number;
    structureLayers: number;
    subframeScale: number;
    subframes: Array<any>;
    trimmingFactor: number;
    upperLimit: number;
    useFileThreads: boolean;
    weightingExpression: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SubframeSelector?: SubframeSelector);


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
    static prototype: SubframeSelector;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Abort;
    Altitude;
    ArcSeconds;
    AskUser;
    Azimuth;
    Bits10;
    Bits12;
    Bits14;
    Bits16;
    Bits8;
    Continue;
    DataNumber;
    Eccentricity;
    EccentricityMeanDev;
    Electron;
    FWHM;
    FWHMMeanDev;
    Gaussian;
    Index;
    Lorentzian;
    MStar;
    MeasureSubframes;
    Median;
    MedianMeanDev;
    Moffat10;
    Moffat15;
    Moffat25;
    Moffat4;
    Moffat6;
    Moffat8;
    NStar;
    Noise;
    NoiseRatio;
    Normalized;
    OutputSubframes;
    PSFCount;
    PSFFlux;
    PSFFluxPower;
    PSFSNR;
    PSFScale;
    PSFScaleSNR;
    PSFSignalWeight;
    PSFTotalMeanFlux;
    PSFTotalMeanPowerFlux;
    Pedestal_CustomKeyword;
    Pedestal_Keyword;
    Pedestal_Literal;
    Pixel;
    SNR;
    StarDetectionPreview;
    StarResidual;
    StarResidualMeanDev;
    Stars;
    Weight;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ATrousWaveletTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    curveBreakPoint: number;
    deringing: boolean;
    deringingBright: number;
    deringingDark: number;
    highRange: number;
    largeScaleFunction: number;
    layers: Array<any>;
    linear: boolean;
    lowRange: number;
    noiseThreshold: number;
    noiseThresholding: boolean;
    noiseThresholdingAmount: number;
    outputDeringingMaps: boolean;
    previewLayer: number;
    previewMode: number;
    scaleDelta: number;
    scalingFunctionColFilter: Array<any>;
    scalingFunctionData: Array<any>;
    scalingFunctionName: string;
    scalingFunctionNoiseSigma: Array<any>;
    scalingFunctionRowFilter: Array<any>;
    softThresholding: boolean;
    toChrominance: boolean;
    toLuminance: boolean;
    useMultiresolutionSupport: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ATrousWaveletTransform?: ATrousWaveletTransform);


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
    static prototype: ATrousWaveletTransform;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AllPixelChanges;
    DecreasingPixels;
    Disabled;
    Hyperbolic;
    IncreasingPixels;
    Ln;
    Log10;
    NoFunction;
}

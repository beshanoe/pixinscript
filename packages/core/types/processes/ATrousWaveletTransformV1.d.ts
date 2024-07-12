//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ATrousWaveletTransformV1 extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    curveBreakPoint: number;
    highRange: number;
    largeScaleFunction: number;
    layers: Array<any>;
    linear: boolean;
    lowRange: number;
    noiseThreshold: number;
    noiseThresholdingAmount: number;
    previewLayer: number;
    previewMode: number;
    scaleDelta: number;
    scalingFunctionData: Array<any>;
    scalingFunctionKernelSize: number;
    scalingFunctionName: string;
    scalingFunctionNoiseLayers: number;
    scalingFunctionNoiseSigma: Array<any>;
    toChrominance: boolean;
    toLuminance: boolean;
    version: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ATrousWaveletTransformV1?: ATrousWaveletTransformV1);


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
    static prototype: ATrousWaveletTransformV1;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AllPixelChanges;
    DecreasingPixels;
    DirectionalMultiway;
    Disabled;
    Hyperbolic;
    IncreasingPixels;
    Ln;
    Log10;
    Morphological;
    NoFunction;
    Recursive;
    SignificantStructures;
}

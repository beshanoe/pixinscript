//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ACDNR extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amountC: number;
    amountL: number;
    applyToChrominance: boolean;
    applyToLightness: boolean;
    applyToLuminance: boolean;
    brightSidesOverdriveC: number;
    brightSidesOverdriveL: number;
    brightSidesThresholdC: number;
    brightSidesThresholdL: number;
    darkSidesOverdriveC: number;
    darkSidesOverdriveL: number;
    darkSidesThresholdC: number;
    darkSidesThresholdL: number;
    iterationsC: number;
    iterationsL: number;
    maskHighlightsClipping: number;
    maskMTF: number;
    maskRemovedWaveletLayers: number;
    maskShadowsClipping: number;
    minStructSizeC: number;
    minStructSizeL: number;
    prefilterMethodC: number;
    prefilterMethodL: number;
    previewMask: boolean;
    protectBrightSidesC: boolean;
    protectBrightSidesL: boolean;
    protectDarkSidesC: boolean;
    protectDarkSidesL: boolean;
    protectionMethodC: number;
    protectionMethodL: number;
    shapeC: number;
    shapeL: number;
    sigmaC: number;
    sigmaL: number;
    starProtectionC: boolean;
    starProtectionL: boolean;
    starThresholdC: number;
    starThresholdL: number;
    useMaskC: boolean;
    useMaskL: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ACDNR?: ACDNR);


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
    static prototype: ACDNR;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Median3x3;
    Median5x5;
    Multiscale;
    None;
    Recursive;
    UnweightedAverage3x3;
    WeightedAverage3x3;
    WeightedAverage5x5;
}

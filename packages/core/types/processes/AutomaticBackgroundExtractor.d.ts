//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class AutomaticBackgroundExtractor extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    abeDownsample: number;
    boxSeparation: number;
    boxSize: number;
    compareFactor: number;
    compareModel: boolean;
    correctedImageId: string;
    correctedImageSampleFormat: number;
    deviation: number;
    discardModel: boolean;
    justTrySamples: boolean;
    maxBackground: number;
    minBackground: number;
    minBoxFraction: number;
    modelImageSampleFormat: number;
    normalize: boolean;
    polyDegree: number;
    replaceTarget: boolean;
    targetCorrection: number;
    tolerance: number;
    unbalance: number;
    useBrightnessLimits: boolean;
    useLuminanceLimits: boolean;
    verboseCoefficients: boolean;
    writeSampleBoxes: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AutomaticBackgroundExtractor?: AutomaticBackgroundExtractor);


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
    static prototype: AutomaticBackgroundExtractor;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Divide;
    None;
    SameAsTarget;
    Subtract;
    f32;
    f64;
    i16;
    i32;
    i8;
}

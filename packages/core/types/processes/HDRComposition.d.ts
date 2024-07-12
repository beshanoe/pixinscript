//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class HDRComposition extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoExposures: boolean;
    closePreviousImages: boolean;
    fittingRectX0: number;
    fittingRectX1: number;
    fittingRectY0: number;
    fittingRectY1: number;
    generate64BitResult: boolean;
    images: Array<any>;
    inputHints: string;
    maskBinarizingThreshold: number;
    maskGrowth: number;
    maskSmoothness: number;
    outputMasks: boolean;
    rejectBlack: boolean;
    replaceLargeScales: number;
    useFittingRegion: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(HDRComposition?: HDRComposition);


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
    static prototype: HDRComposition;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

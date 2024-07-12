//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ColorCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    backgroundHigh: number;
    backgroundLow: number;
    backgroundROIX0: number;
    backgroundROIX1: number;
    backgroundROIY0: number;
    backgroundROIY1: number;
    backgroundReferenceViewId: string;
    backgroundUseROI: boolean;
    manualBlueFactor: number;
    manualGreenFactor: number;
    manualRedFactor: number;
    manualWhiteBalance: boolean;
    noiseLayers: number;
    outputBackgroundReferenceMask: boolean;
    outputWhiteReferenceMask: boolean;
    structureDetection: boolean;
    structureLayers: number;
    whiteHigh: number;
    whiteLow: number;
    whiteROIX0: number;
    whiteROIX1: number;
    whiteROIY0: number;
    whiteROIY1: number;
    whiteReferenceViewId: string;
    whiteUseROI: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ColorCalibration?: ColorCalibration);


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
    static prototype: ColorCalibration;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

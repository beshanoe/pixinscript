//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class MaskedStretch extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    backgroundHigh: number;
    backgroundLow: number;
    backgroundReferenceViewId: string;
    clippingFraction: number;
    maskType: number;
    numberOfIterations: number;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    targetBackground: number;
    useROI: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(MaskedStretch?: MaskedStretch);


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
    static prototype: MaskedStretch;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    MaskType_Intensity;
    MaskType_Value;
}

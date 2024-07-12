//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class AdaptiveStretch extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    maxCurvePoints: number;
    noiseThreshold: number;
    protection: number;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    useProtection: boolean;
    useROI: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AdaptiveStretch?: AdaptiveStretch);


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
    static prototype: AdaptiveStretch;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class BackgroundNeutralization extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    backgroundHigh: number;
    backgroundLow: number;
    backgroundReferenceViewId: string;
    mode: number;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    targetBackground: number;
    useROI: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(BackgroundNeutralization?: BackgroundNeutralization);


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
    static prototype: BackgroundNeutralization;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Rescale;
    RescaleAsNeeded;
    TargetBackground;
    Truncate;
}

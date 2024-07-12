//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SCNR extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    colorToRemove: number;
    preserveLightness: boolean;
    preserveLuminance: boolean;
    protectionMethod: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SCNR?: SCNR);


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
    static prototype: SCNR;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AdditiveMask;
    AverageNeutral;
    Blue;
    Green;
    MaximumMask;
    MaximumNeutral;
    MinimumNeutral;
    Red;
}

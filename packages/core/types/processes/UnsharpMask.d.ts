//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class UnsharpMask extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    deringing: boolean;
    deringingBright: number;
    deringingDark: number;
    linear: boolean;
    outputDeringingMaps: boolean;
    rangeHigh: number;
    rangeLow: number;
    sigma: number;
    useLuminance: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(UnsharpMask?: UnsharpMask);


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
    static prototype: UnsharpMask;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

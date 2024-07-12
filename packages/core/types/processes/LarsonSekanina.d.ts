//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class LarsonSekanina extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    angleIncrement: number;
    centerX: number;
    centerY: number;
    deringing: number;
    disableExtension: boolean;
    highPass: boolean;
    interpolation: number;
    radiusIncrement: number;
    rangeHigh: number;
    rangeLow: number;
    threshold: number;
    useLuminance: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(LarsonSekanina?: LarsonSekanina);


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
    static prototype: LarsonSekanina;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Bicubic;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
}

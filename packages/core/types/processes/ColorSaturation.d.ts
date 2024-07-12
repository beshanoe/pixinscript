//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ColorSaturation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    HS: Array<any>;
    HSt: number;
    hueShift: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ColorSaturation?: ColorSaturation);


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
    static prototype: ColorSaturation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AkimaSubsplines;
    CubicSpline;
    Linear;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Crop extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alpha: number;
    blue: number;
    bottomMargin: number;
    forceResolution: boolean;
    green: number;
    leftMargin: number;
    metric: boolean;
    mode: number;
    noGUIMessages: boolean;
    red: number;
    rightMargin: number;
    topMargin: number;
    xResolution: number;
    yResolution: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Crop?: Crop);


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
    static prototype: Crop;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AbsoluteCentimeters;
    AbsoluteInches;
    AbsolutePixels;
    RelativeMargins;
}

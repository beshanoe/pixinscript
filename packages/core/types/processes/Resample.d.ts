//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Resample extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    absoluteMode: number;
    clampingThreshold: number;
    forceResolution: boolean;
    gammaCorrection: boolean;
    interpolation: number;
    metric: boolean;
    mode: number;
    noGUIMessages: boolean;
    smoothness: number;
    xResolution: number;
    xSize: number;
    yResolution: number;
    ySize: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Resample?: Resample);


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
    static prototype: Resample;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AbsoluteCentimeters;
    AbsoluteInches;
    AbsolutePixels;
    Auto;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
    CatmullRomSplineFilter;
    CubicBSplineFilter;
    ForceArea;
    ForceHeight;
    ForceWidth;
    ForceWidthAndHeight;
    Lanczos3;
    Lanczos4;
    MitchellNetravaliFilter;
    NearestNeighbor;
    RelativeDimensions;
}

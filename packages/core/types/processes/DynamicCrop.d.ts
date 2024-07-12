//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DynamicCrop extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alpha: number;
    angle: number;
    blue: number;
    centerX: number;
    centerY: number;
    clampingThreshold: number;
    forceResolution: boolean;
    gammaCorrection: boolean;
    green: number;
    height: number;
    interpolation: number;
    metric: boolean;
    noGUIMessages: boolean;
    optimizeFast: boolean;
    outHeight: number;
    outWidth: number;
    red: number;
    refHeight: number;
    refWidth: number;
    scaleX: number;
    scaleY: number;
    smoothness: number;
    width: number;
    xResolution: number;
    yResolution: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DynamicCrop?: DynamicCrop);


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
    static prototype: DynamicCrop;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Auto;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
    CatmullRomSplineFilter;
    CubicBSplineFilter;
    Lanczos3;
    Lanczos4;
    MitchellNetravaliFilter;
    NearestNeighbor;
}

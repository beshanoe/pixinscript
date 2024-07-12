//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Rotation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alpha: number;
    angle: number;
    blue: number;
    clampingThreshold: number;
    gammaCorrection: boolean;
    green: number;
    interpolation: number;
    noGUIMessages: boolean;
    optimizeFast: boolean;
    red: number;
    smoothness: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Rotation?: Rotation);


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
    static prototype: Rotation;
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

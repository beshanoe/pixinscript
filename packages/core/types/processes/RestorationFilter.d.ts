//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RestorationFilter extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    K: number;
    algorithm: number;
    amount: number;
    deringing: boolean;
    deringingBright: number;
    deringingDark: number;
    gamma: number;
    linear: boolean;
    outputDeringingMaps: boolean;
    psfAspectRatio: number;
    psfGaussianAspectRatio: number;
    psfGaussianRotationAngle: number;
    psfGaussianShape: number;
    psfGaussianSigma: number;
    psfMode: number;
    psfMotionLength: number;
    psfMotionRotationAngle: number;
    psfRotationAngle: number;
    psfShape: number;
    psfSigma: number;
    psfViewId: string;
    rangeHigh: number;
    rangeLow: number;
    toLuminance: boolean;
    useLuminance: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(RestorationFilter?: RestorationFilter);


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
    static prototype: RestorationFilter;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    ConstrainedLeastSquares;
    External;
    MotionBlur;
    Parametric;
    Wiener;
}

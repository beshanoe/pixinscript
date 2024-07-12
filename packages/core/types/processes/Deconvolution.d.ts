//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Deconvolution extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    algorithm: number;
    convergence: number;
    deringing: boolean;
    deringingBright: number;
    deringingDark: number;
    deringingSupport: boolean;
    deringingSupportAmount: number;
    deringingSupportViewId: string;
    iterations: Array<any>;
    noiseModel: number;
    numberOfIterations: number;
    numberOfWaveletLayers: number;
    psfAspectRatio: number;
    psfFFTSizeLimit: number;
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
    scalingFunction: number;
    toLuminance: boolean;
    useLuminance: boolean;
    useRegularization: boolean;
    waveletLayers: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Deconvolution?: Deconvolution);


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
    static prototype: Deconvolution;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    B3Spline5x5;
    External;
    Gaussian;
    LinearInterpolation3x3;
    MotionBlur;
    Parametric;
    Poisson;
    RichardsonLucy;
    SmallScale3x3;
    VanCittert;
}

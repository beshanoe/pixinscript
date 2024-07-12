//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DynamicPSF extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    astrometry: boolean;
    astrometryPrecision: number;
    autoAperture: boolean;
    autoPSF: boolean;
    autoVariableShapePSF: boolean;
    badStarColor: number;
    badStarFillColor: number;
    betaMax: number;
    betaMin: number;
    circularPSF: boolean;
    gaussianPSF: boolean;
    lorentzianPSF: boolean;
    moffat10PSF: boolean;
    moffat15PSF: boolean;
    moffat25PSF: boolean;
    moffat4PSF: boolean;
    moffat6PSF: boolean;
    moffat8PSF: boolean;
    moffatPSF: boolean;
    psf: Array<any>;
    regenerate: boolean;
    scaleKeyword: string;
    scaleMode: number;
    scaleValue: number;
    searchRadius: number;
    selectedStarColor: number;
    selectedStarFillColor: number;
    signedAngles: boolean;
    starColor: number;
    stars: Array<any>;
    threshold: number;
    variableShapePSF: boolean;
    views: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DynamicPSF?: DynamicPSF);


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
    static prototype: DynamicPSF;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Function_Gaussian;
    Function_Lorentzian;
    Function_Moffat;
    Function_Moffat10;
    Function_Moffat15;
    Function_Moffat25;
    Function_Moffat4;
    Function_Moffat6;
    Function_Moffat8;
    Function_VariableShape;
    PSF_BadParameters;
    PSF_FittedOk;
    PSF_InaccurateSolution;
    PSF_NoConvergence;
    PSF_NoSolution;
    PSF_NotFitted;
    PSF_UnknownError;
    Scale_CustomKeyword;
    Scale_LiteralValue;
    Scale_Pixels;
    Scale_StandardMetadata;
    Star_CrossingEdges;
    Star_DetectedOk;
    Star_NoConvergence;
    Star_NoSignificantData;
    Star_NotDetected;
    Star_OutsideImage;
    Star_UnknownError;
}

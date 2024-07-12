//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class AutoHistogram extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    clip: boolean;
    clipHighB: number;
    clipHighG: number;
    clipHighR: number;
    clipLowB: number;
    clipLowG: number;
    clipLowR: number;
    clipTogether: boolean;
    isGammaEnabled: boolean;
    isGlobalGamma: boolean;
    isGlobalHistogramClip: boolean;
    isHistogramClipEnabled: boolean;
    medianB: number;
    medianG: number;
    medianR: number;
    stretch: boolean;
    stretchMethod: number;
    stretchTogether: boolean;
    targetMedianB: number;
    targetMedianG: number;
    targetMedianR: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AutoHistogram?: AutoHistogram);


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
    static prototype: AutoHistogram;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Gamma;
    Logarithm;
    MTF;
}

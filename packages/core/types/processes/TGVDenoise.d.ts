//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class TGVDenoise extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    convergenceEnabledC: boolean;
    convergenceEnabledL: boolean;
    convergenceLimitC: number;
    convergenceLimitL: number;
    edgeProtectionC: number;
    edgeProtectionL: number;
    filterEnabledC: boolean;
    filterEnabledL: boolean;
    maxIterationsC: number;
    maxIterationsL: number;
    rgbkMode: boolean;
    smoothnessC: number;
    smoothnessL: number;
    strengthC: number;
    strengthL: number;
    supportEnabled: boolean;
    supportHighlightsClip: number;
    supportMidtonesBalance: number;
    supportPreview: boolean;
    supportRemovedWaveletLayers: number;
    supportShadowsClip: number;
    supportViewId: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(TGVDenoise?: TGVDenoise);


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
    static prototype: TGVDenoise;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

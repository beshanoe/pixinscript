//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class MultiscaleMedianTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    highRange: number;
    layers: Array<any>;
    linear: boolean;
    linearMask: boolean;
    linearMaskAmpFactor: number;
    linearMaskInverted: boolean;
    linearMaskPreview: boolean;
    linearMaskSmoothness: number;
    lowRange: number;
    medianWaveletThreshold: number;
    previewLayer: number;
    previewMode: number;
    scaleDelta: number;
    toChrominance: boolean;
    toLuminance: boolean;
    transform: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(MultiscaleMedianTransform?: MultiscaleMedianTransform);


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
    static prototype: MultiscaleMedianTransform;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AllPixelChanges;
    DecreasingPixels;
    Disabled;
    IncreasingPixels;
    MedianWaveletTransform;
    MultiscaleMedianTransform;
}

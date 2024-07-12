//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class HDRMultiscaleTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    deringing: boolean;
    invertedIterations: boolean;
    largeScaleDeringing: number;
    lightnessMask: boolean;
    luminanceMask: boolean;
    medianTransform: boolean;
    midtonesBalance: number;
    midtonesBalanceMode: number;
    numberOfIterations: number;
    numberOfLayers: number;
    outputDeringingMaps: boolean;
    overdrive: number;
    preserveHue: boolean;
    scalingFunctionColFilter: Array<any>;
    scalingFunctionData: Array<any>;
    scalingFunctionName: string;
    scalingFunctionRowFilter: Array<any>;
    smallScaleDeringing: number;
    toIntensity: boolean;
    toLightness: boolean;
    toLuminanceOnly: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(HDRMultiscaleTransform?: HDRMultiscaleTransform);


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
    static prototype: HDRMultiscaleTransform;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Automatic;
    Manual;
    NoMidtonesBalance;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DrizzleIntegration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    cfaPattern: string;
    closePreviousImages: boolean;
    dropShrink: number;
    enableAdaptiveNormalization: boolean;
    enableCFA: boolean;
    enableImageWeighting: boolean;
    enableLocalDistortion: boolean;
    enableLocalNormalization: boolean;
    enableRejection: boolean;
    enableSurfaceSplines: boolean;
    imageData: Array<any>;
    inputData: Array<any>;
    inputDirectory: string;
    inputHints: string;
    integratedPixels: number;
    integrationImageId: string;
    kernelFunction: number;
    kernelGridSize: number;
    noGUIMessages: boolean;
    numberOfChannels: number;
    onError: number;
    originX: number;
    originY: number;
    outputPixels: number;
    outputRangeHigh: number;
    outputRangeLow: number;
    roiX0: number;
    roiX1: number;
    roiY0: number;
    roiY1: number;
    scale: number;
    totalData: number;
    totalRejectedHighB: number;
    totalRejectedHighG: number;
    totalRejectedHighRK: number;
    totalRejectedLowB: number;
    totalRejectedLowG: number;
    totalRejectedLowRK: number;
    truncateOnOutOfRange: boolean;
    useROI: boolean;
    weightImageId: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DrizzleIntegration?: DrizzleIntegration);


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
    static prototype: DrizzleIntegration;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Abort;
    AskUser;
    Continue;
    Kernel_Circular;
    Kernel_Gaussian;
    Kernel_Square;
    Kernel_Variable10;
    Kernel_Variable15;
    Kernel_Variable30;
    Kernel_Variable40;
    Kernel_Variable50;
    Kernel_Variable60;
}

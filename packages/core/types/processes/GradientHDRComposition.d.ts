//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class GradientHDRComposition extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    bKeepLog: boolean;
    bNegativeBias: boolean;
    dLogBias: number;
    generateMask: boolean;
    targetFrames: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(GradientHDRComposition?: GradientHDRComposition);


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
    static prototype: GradientHDRComposition;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

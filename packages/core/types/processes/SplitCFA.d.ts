//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SplitCFA extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    outputDir: string;
    outputSubDirCFA: boolean;
    outputTree: boolean;
    outputViewId0: string;
    outputViewId1: string;
    outputViewId2: string;
    outputViewId3: string;
    overwrite: boolean;
    postfix: string;
    prefix: string;
    targetFrames: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SplitCFA?: SplitCFA);


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
    static prototype: SplitCFA;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

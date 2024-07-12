//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class CosmeticCorrection extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    cfa: boolean;
    coldAutoCheck: boolean;
    coldAutoValue: number;
    coldDarkCheck: boolean;
    coldDarkLevel: number;
    defects: Array<any>;
    hotAutoCheck: boolean;
    hotAutoValue: number;
    hotDarkCheck: boolean;
    hotDarkLevel: number;
    masterDarkPath: string;
    outputDir: string;
    outputExtension: string;
    overwrite: boolean;
    postfix: string;
    prefix: string;
    targetFrames: Array<any>;
    transferFn: number;
    useAutoDetect: boolean;
    useDefectList: boolean;
    useMasterDark: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(CosmeticCorrection?: CosmeticCorrection);


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
    static prototype: CosmeticCorrection;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

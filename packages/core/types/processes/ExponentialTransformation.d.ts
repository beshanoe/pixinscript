//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ExponentialTransformation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    functionType: number;
    luminanceMask: boolean;
    order: number;
    sigma: number;
    useLightnessMask: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ExponentialTransformation?: ExponentialTransformation);


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
    static prototype: ExponentialTransformation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    PIP;
    SMI;
}

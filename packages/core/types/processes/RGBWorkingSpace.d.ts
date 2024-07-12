//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RGBWorkingSpace extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    applyGlobalRGBWS: boolean;
    channels: Array<any>;
    gamma: number;
    sRGBGamma: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(RGBWorkingSpace?: RGBWorkingSpace);


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
    static prototype: RGBWorkingSpace;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

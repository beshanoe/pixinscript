//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class LRGBCombination extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    channels: Array<any>;
    clipHighlights: boolean;
    inheritAstrometricSolution: boolean;
    layersProtected: number;
    layersRemoved: number;
    mL: number;
    mc: number;
    noiseReduction: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(LRGBCombination?: LRGBCombination);


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
    static prototype: LRGBCombination;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

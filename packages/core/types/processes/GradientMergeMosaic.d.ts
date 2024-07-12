//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class GradientMergeMosaic extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    blackPoint: number;
    generateMask: boolean;
    nFeatherRadius: number;
    nShrinkCount: number;
    targetFrames: Array<any>;
    type: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(GradientMergeMosaic?: GradientMergeMosaic);


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
    static prototype: GradientMergeMosaic;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Average;
    Overlay;
}

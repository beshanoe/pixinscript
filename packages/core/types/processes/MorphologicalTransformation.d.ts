//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class MorphologicalTransformation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    highThreshold: number;
    interlacingDistance: number;
    lowThreshold: number;
    numberOfIterations: number;
    operator: number;
    selectionPoint: number;
    structureName: string;
    structureSize: number;
    structureWayTable: Array<any>;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(MorphologicalTransformation?: MorphologicalTransformation);


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
    static prototype: MorphologicalTransformation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Closing;
    Dilation;
    Erosion;
    Median;
    Midpoint;
    Opening;
    Selection;
}

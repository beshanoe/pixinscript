//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DefectMap extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isCFA: boolean;
    mapId: string;
    operation: number;
    structure: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DefectMap?: DefectMap);


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
    static prototype: DefectMap;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Circular;
    Gaussian;
    Horizontal;
    Maximum;
    Mean;
    Median;
    Minimum;
    Square;
    Vertical;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Divide extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    customNormalization: number;
    flatId: string;
    highlightsAmount: number;
    highlightsContinuity: number;
    highlightsLimit: number;
    linearization: number;
    method: number;
    normalization: number;
    shadowsAmount: number;
    shadowsContinuity: number;
    shadowsLimit: number;
    statisticalDownLimit: number;
    statisticalUpLimit: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Divide?: Divide);


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
    static prototype: Divide;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Custom;
    FixedValueZone;
    ImageLinearization;
    Maximum;
    Mean;
    Median;
    Minimum;
    PlainDivision;
    StatisticalValueZone;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class IntegerResample extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    downsamplingMode: number;
    forceResolution: boolean;
    gammaCorrection: boolean;
    metric: boolean;
    noGUIMessages: boolean;
    subsampleMode: number;
    xResolution: number;
    yResolution: number;
    zoomFactor: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(IntegerResample?: IntegerResample);


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
    static prototype: IntegerResample;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Average;
    Maximum;
    Median;
    Minimum;
}

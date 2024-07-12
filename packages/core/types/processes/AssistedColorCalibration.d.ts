//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class AssistedColorCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    BlueCorrectionFactor: number;
    GreenCorrectionFactor: number;
    HistogramHighlights: number;
    HistogramMidtones: number;
    HistogramShadows: number;
    SaturationBoost: number;
    backgroundRef: string;
    redCorrectionFactor: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(AssistedColorCalibration?: AssistedColorCalibration);


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
    static prototype: AssistedColorCalibration;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

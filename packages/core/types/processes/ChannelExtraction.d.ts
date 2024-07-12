//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ChannelExtraction extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    channels: Array<any>;
    colorSpace: number;
    inheritAstrometricSolution: boolean;
    sampleFormat: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ChannelExtraction?: ChannelExtraction);


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
    static prototype: ChannelExtraction;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    CIELab;
    CIELch;
    CIEXYZ;
    HSI;
    HSV;
    RGB;
    SameAsSource;
    f32;
    f64;
    i16;
    i32;
    i8;
}

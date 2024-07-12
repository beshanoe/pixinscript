//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class NewImage extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    colorSpace: number;
    height: number;
    id: string;
    numberOfChannels: number;
    sampleFormat: number;
    v0: number;
    v1: number;
    v2: number;
    va: number;
    width: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(NewImage?: NewImage);


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
    static prototype: NewImage;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Grayscale;
    RGB;
    f32;
    f64;
    i16;
    i32;
    i8;
}

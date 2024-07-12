//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Convolution extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aspectRatio: number;
    filterSource: string;
    mode: number;
    rescaleHighPass: boolean;
    rotationAngle: number;
    shape: number;
    sigma: number;
    viewId: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Convolution?: Convolution);


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
    static prototype: Convolution;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Image;
    Library;
    Parametric;
}

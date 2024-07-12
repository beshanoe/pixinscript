//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ScreenTransferFunction extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    STF: Array<any>;
    interaction: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ScreenTransferFunction?: ScreenTransferFunction);


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
    static prototype: ScreenTransferFunction;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Grayscale;
    SeparateChannels;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class InverseFourierTransform extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    idOfFirstComponent: string;
    idOfSecondComponent: string;
    onOutOfRangeResult: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(InverseFourierTransform?: InverseFourierTransform);


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
    static prototype: InverseFourierTransform;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    DontCare;
    Rescale;
    Truncate;
}

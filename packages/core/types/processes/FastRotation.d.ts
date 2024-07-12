//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FastRotation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    mode: number;
    noGUIMessages: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(FastRotation?: FastRotation);


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
    static prototype: FastRotation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    HorizontalMirror;
    Rotate180;
    Rotate90CCW;
    Rotate90CW;
    VerticalMirror;
}

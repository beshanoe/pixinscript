//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class CurvesTransformation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    A: Array<any>;
    At: number;
    B: Array<any>;
    Bt: number;
    G: Array<any>;
    Gt: number;
    H: Array<any>;
    Ht: number;
    K: Array<any>;
    Kt: number;
    L: Array<any>;
    Lt: number;
    R: Array<any>;
    Rt: number;
    S: Array<any>;
    St: number;
    a: Array<any>;
    at: number;
    b: Array<any>;
    bt: number;
    c: Array<any>;
    ct: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(CurvesTransformation?: CurvesTransformation);


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
    static prototype: CurvesTransformation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AkimaSubsplines;
    CubicSpline;
    Linear;
}

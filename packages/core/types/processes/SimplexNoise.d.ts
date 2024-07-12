//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class SimplexNoise extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    offsetX: number;
    offsetY: number;
    operator: number;
    scale: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(SimplexNoise?: SimplexNoise);


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
    static prototype: SimplexNoise;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Add;
    And;
    Copy;
    Dif;
    Div;
    Mul;
    Nand;
    Nor;
    Or;
    Pow;
    Screen;
    Sub;
    Xnor;
    Xor;
}

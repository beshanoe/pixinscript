//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class RangeSelection extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    fuzziness: number;
    highRange: number;
    invert: boolean;
    lowRange: number;
    screening: boolean;
    smoothness: number;
    toLightness: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(RangeSelection?: RangeSelection);


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
    static prototype: RangeSelection;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ChannelCombination extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    channels: Array<any>;
    colorSpace: number;
    inheritAstrometricSolution: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ChannelCombination?: ChannelCombination);


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
    static prototype: ChannelCombination;
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
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ICCProfileTransformation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    renderingIntent: number;
    targetProfile: string;
    toDefaultProfile: boolean;
    useBlackPointCompensation: boolean;
    useFloatingPointTransformation: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ICCProfileTransformation?: ICCProfileTransformation);


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
    static prototype: ICCProfileTransformation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AbsoluteColorimetric;
    Perceptual;
    RelativeColorimetric;
    Saturation;
}

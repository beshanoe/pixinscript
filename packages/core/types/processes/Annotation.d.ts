//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Annotation extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    annotationColor: number;
    annotationFont: string;
    annotationFontBold: boolean;
    annotationFontItalic: boolean;
    annotationFontShadow: boolean;
    annotationFontSize: number;
    annotationFontUnderline: boolean;
    annotationLeaderPositionX: number;
    annotationLeaderPositionY: number;
    annotationOpacity: number;
    annotationPositionX: number;
    annotationPositionY: number;
    annotationShowLeader: boolean;
    annotationText: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Annotation?: Annotation);


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
    static prototype: Annotation;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

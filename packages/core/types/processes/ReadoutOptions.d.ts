//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ReadoutOptions extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    broadcast: boolean;
    coordinateItems: number;
    coordinatePrecision: number;
    data: number;
    integerRange: number;
    mode: number;
    precision: number;
    previewCenter: boolean;
    previewSize: number;
    previewZoomFactor: number;
    probeSize: number;
    real: boolean;
    showAlpha: boolean;
    showEclipticCoordinates: boolean;
    showEquatorialCoordinates: boolean;
    showGalacticCoordinates: boolean;
    showMask: boolean;
    showPreview: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ReadoutOptions?: ReadoutOptions);


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
    static prototype: ReadoutOptions;
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
    RGBK;
    RGBL;
    RGBY;
    maximum;
    mean;
    median;
    minimum;
}

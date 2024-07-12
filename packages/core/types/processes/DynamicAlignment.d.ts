//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DynamicAlignment extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    badSampleColor: number;
    badSampleFillColor: number;
    data: Array<any>;
    points: Array<any>;
    registeredImageId: string;
    registeredImageSampleFormat: number;
    removedLayers: number;
    sampleColor: number;
    searchFeatures: boolean;
    selectedSampleColor: number;
    selectedSampleFillColor: number;
    sourceImageHeight: number;
    sourceImageId: string;
    sourceImageWidth: number;
    sourceSearchRadius: number;
    targetImageHeight: number;
    targetImageWidth: number;
    targetSearchRadius: number;
    threshold: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DynamicAlignment?: DynamicAlignment);


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
    static prototype: DynamicAlignment;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    SameAsTarget;
    f32;
    f64;
    i16;
    i32;
    i8;
}

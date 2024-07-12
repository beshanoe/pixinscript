//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class DynamicBackgroundExtraction extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    axisColor: number;
    badSampleColor: number;
    badSampleFillColor: number;
    correctedImageId: string;
    correctedImageSampleFormat: number;
    data: Array<any>;
    defaultSampleRadius: number;
    derivativeOrder: number;
    discardModel: boolean;
    downsample: number;
    ignoreWeights: boolean;
    imageHeight: number;
    imageWidth: number;
    minSampleFraction: number;
    minWeight: number;
    modelHeight: number;
    modelId: string;
    modelSampleFormat: number;
    modelWidth: number;
    normalize: boolean;
    numberOfChannels: number;
    replaceTarget: boolean;
    sampleColor: number;
    samples: Array<any>;
    samplesPerRow: number;
    selectedSampleColor: number;
    selectedSampleFillColor: number;
    shadowsRelaxation: number;
    smoothing: number;
    symmetryCenterX: number;
    symmetryCenterY: number;
    targetCorrection: number;
    tolerance: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(DynamicBackgroundExtraction?: DynamicBackgroundExtraction);


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
    static prototype: DynamicBackgroundExtraction;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Divide;
    None;
    SameAsTarget;
    Subtract;
    f32;
    f64;
    i16;
    i32;
    i8;
}

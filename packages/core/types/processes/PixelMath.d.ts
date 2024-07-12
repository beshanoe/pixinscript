//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class PixelMath extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    cacheGeneratedImages: boolean;
    clearImageCacheAndExit: boolean;
    createNewImage: boolean;
    expression: string;
    expression0: string;
    expression1: string;
    expression2: string;
    expression3: string;
    generateOutput: boolean;
    newImageAlpha: boolean;
    newImageColorSpace: number;
    newImageHeight: number;
    newImageId: string;
    newImageSampleFormat: number;
    newImageWidth: number;
    optimization: boolean;
    outputData: Array<any>;
    rescale: boolean;
    rescaleLower: number;
    rescaleUpper: number;
    showNewImage: boolean;
    singleThreaded: boolean;
    symbols: string;
    truncate: boolean;
    truncateLower: number;
    truncateUpper: number;
    use64BitWorkingImage: boolean;
    useSingleExpression: boolean;
    variables: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(PixelMath?: PixelMath);


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
    static prototype: PixelMath;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Gray;
    RGB;
    SameAsTarget;
    f32;
    f64;
    i16;
    i32;
    i8;
}

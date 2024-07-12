//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class StarAlignment extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    allowClusteredSources: boolean;
    brightThreshold: number;
    clampingThreshold: number;
    descriptorsPerStar: number;
    distortionCorrection: boolean;
    distortionMapPostfix: string;
    distortionMatcherExpansion: number;
    distortionMaxIterations: number;
    distortionModel: string;
    fileThreadOverload: number;
    fitPSF: number;
    frameAdaptation: boolean;
    generateDistortionMaps: boolean;
    generateDrizzleData: boolean;
    generateMasks: boolean;
    hotPixelFilterRadius: number;
    inheritAstrometricSolution: boolean;
    inputHints: string;
    intersection: number;
    invert: boolean;
    linearClampingThreshold: number;
    localMaximaDetectionLimit: number;
    maskPostfix: string;
    matcherTolerance: number;
    maxFileReadThreads: number;
    maxFileWriteThreads: number;
    maxStarDistortion: number;
    maxStars: number;
    memoryLoadControl: boolean;
    memoryLoadLimit: number;
    minStructureSize: number;
    mode: number;
    noiseLayers: number;
    noiseReductionFilterRadius: number;
    onError: number;
    outputData: Array<any>;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputPostfix: string;
    outputPrefix: string;
    outputSampleFormat: number;
    overwriteExistingFiles: boolean;
    peakResponse: number;
    pixelInterpolation: number;
    polygonSides: number;
    propagateAstrometricSolutions: boolean;
    psfTolerance: number;
    randomizeMosaic: boolean;
    ransacMaxIterations: number;
    ransacMaximizeInliers: number;
    ransacMaximizeOverlapping: number;
    ransacMaximizeRegularity: number;
    ransacMinimizeError: number;
    referenceImage: string;
    referenceIsFile: boolean;
    restrictToPreviews: boolean;
    scaleTolerance: number;
    sensitivity: number;
    splineOrder: number;
    splineSmoothness: number;
    structureLayers: number;
    targets: Array<any>;
    trianglesPerStar: number;
    undistortedReference: boolean;
    upperLimit: number;
    useBrightnessRelations: boolean;
    useFileThreads: boolean;
    useScaleDifferences: boolean;
    useTriangles: boolean;
    writeKeywords: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(StarAlignment?: StarAlignment);


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
    static prototype: StarAlignment;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Abort;
    Always;
    AskUser;
    Auto;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
    CatmullRomSplineFilter;
    Continue;
    CubicBSplineFilter;
    DrawMatchedStars;
    DrawPutativeStarMatches;
    DrawStars;
    FitPSF_Always;
    FitPSF_DistortionOnly;
    FitPSF_Never;
    Lanczos3;
    Lanczos4;
    Lanczos5;
    MitchellNetravaliFilter;
    MosaicOnly;
    NearestNeighbor;
    NoIntersection;
    OutputMatrix;
    RegisterMatch;
    RegisterUnion;
    RegisterUnionSeparate;
    SameAsTarget;
    StructureMap;
    Structures;
    f32;
    f64;
    i16;
    i32;
    i8;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FastIntegration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    brightThreshold: number;
    clampingThreshold: number;
    descriptorsPerStar: number;
    fullAlignmentEnabled: boolean;
    generateDrizzleData: boolean;
    generateImages: boolean;
    generateLogFiles: boolean;
    generateRejectionMaps: boolean;
    hotPixelFilterRadius: number;
    inputHints: string;
    integrationBatchSize: number;
    integrationPrefetchSize: number;
    linearClampingThreshold: number;
    localMaximaDetectionLimit: number;
    matcherTolerance: number;
    maxStarSearchIterations: number;
    maxStars: number;
    medianErrorTolerance: number;
    minStructureSize: number;
    minimumSearchSize: number;
    mode: number;
    noGUIMessages: boolean;
    noiseLayers: number;
    noiseReductionFilterRadius: number;
    outputData: Array<any>;
    outputDirectory: string;
    outputExtension: string;
    outputHints: string;
    outputPostfix: string;
    outputPrefix: string;
    overwriteExistingFiles: boolean;
    parallelReadings: number;
    parallelWritings: number;
    peakResponse: number;
    pixelInterpolation: number;
    polygonSides: number;
    processorsUsed: number;
    psfTolerance: number;
    ransacMaxIterations: number;
    ransacMaximizeInliers: number;
    ransacMaximizeOverlapping: number;
    ransacMaximizeRegularity: number;
    ransacMinimizeError: number;
    ransacTolerance: number;
    referenceImage: string;
    rejectionAlgorithm: number;
    rejectionEnabled: boolean;
    rejectionFluxRatio: number;
    scaleTolerance: number;
    sensitivity: number;
    sigmaHigh: number;
    sigmaLow: number;
    starSearchIterationExpansion: number;
    structureLayers: number;
    targetReferenceStarsCount: number;
    targets: Array<any>;
    trianglesPerStar: number;
    upperLimit: number;
    useBrightnessRelations: boolean;
    useScaleDifferences: boolean;
    useTriangles: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(FastIntegration?: FastIntegration);


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
    static prototype: FastIntegration;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Auto;
    BicubicBSpline;
    BicubicSpline;
    Bilinear;
    CatmullRomSplineFilter;
    CubicBSplineFilter;
    DrawStars;
    Fast;
    Lanczos3;
    Lanczos4;
    Lanczos5;
    MitchellNetravaliFilter;
    NearestNeighbor;
    ReferenceStars;
    SigmaClipping;
    StructureMap;
    Structures;
    WinsorizedSigmaClipping;
}

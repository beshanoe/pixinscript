//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class StarMask extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aggregateStructures: boolean;
    binarizeStructures: boolean;
    growthCompensation: number;
    highlightsClipping: number;
    invert: boolean;
    largeScaleGrowth: number;
    limit: number;
    midtonesBalance: number;
    mode: number;
    noiseThreshold: number;
    shadowsClipping: number;
    smallScaleGrowth: number;
    smoothness: number;
    structureContours: boolean;
    truncation: number;
    waveletLayers: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(StarMask?: StarMask);


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
    static prototype: StarMask;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    StarMask;
    StarMaskOverlay;
    StructureMap;
    StructureMapOverlay;
}

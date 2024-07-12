//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FindingChart extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoChartMaxMagnitude: boolean;
    autoChartResolution: boolean;
    chartMaxMagnitude: number;
    chartResolution: number;
    chartSize: number;
    closeOutputWindow: boolean;
    constellationBorderColor: number;
    constellationLineColor: number;
    constellationTextColor: number;
    drawConstellationBorders: boolean;
    drawConstellationLines: boolean;
    drawConstellationNames: boolean;
    drawGrid: boolean;
    drawMessierObjects: boolean;
    drawNGCObjects: boolean;
    drawStarNames: boolean;
    drawStars: boolean;
    generateBitmapFile: boolean;
    gridColor: number;
    gridTextColor: number;
    imageRegionBorderColor: number;
    imageRegionColor: number;
    messierTextColor: number;
    ngcTextColor: number;
    outputDirectory: string;
    outputSuffix: string;
    starTextColor: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(FindingChart?: FindingChart);


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
    static prototype: FindingChart;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class GREYCstoration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amplitude: number;
    angularIntegrationStep: number;
    anisotropy: number;
    contourPreservation: number;
    coupledChannels: boolean;
    fastApproximation: boolean;
    geometryRegularity: number;
    interpolation: number;
    noiseScale: number;
    numberOfIterations: number;
    precision: number;
    spatialIntegrationStep: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(GREYCstoration?: GREYCstoration);


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
    static prototype: GREYCstoration;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Bilinear;
    Nearest;
    RungeKutta;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class B3Estimator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    backgroundHigh1: number;
    backgroundHigh2: number;
    backgroundLow1: number;
    backgroundLow2: number;
    backgroundROIX01: number;
    backgroundROIX02: number;
    backgroundROIX11: number;
    backgroundROIX12: number;
    backgroundROIY01: number;
    backgroundROIY02: number;
    backgroundROIY11: number;
    backgroundROIY12: number;
    backgroundReferenceViewId1: string;
    backgroundReferenceViewId2: string;
    backgroundUseROI1: boolean;
    backgroundUseROI2: boolean;
    inputCenter1: number;
    inputCenter2: number;
    inputViewId1: string;
    inputViewId2: string;
    intensityUnits: number;
    outOfRangeMask: boolean;
    outOfRangeMaskViewId: string;
    outputBackgroundReferenceMask1: boolean;
    outputBackgroundReferenceMask2: boolean;
    outputCenter: number;
    substractBackground1: boolean;
    substractBackground2: boolean;
    syntheticImage: boolean;
    syntheticImageViewId: string;
    thermalMap: boolean;
    thermalMapViewId: string;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(B3Estimator?: B3Estimator);


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
    static prototype: B3Estimator;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    IntensityUnits_EnergyFrequency;
    IntensityUnits_EnergyWavelength;
    IntensityUnits_PhotonsFrequency;
    IntensityUnits_PhotonsWavelength;
}

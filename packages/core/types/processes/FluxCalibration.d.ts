//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class FluxCalibration extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    aperture: number;
    apertureKeyword: string;
    apertureMode: number;
    atmosphericExtinction: number;
    atmosphericExtinctionKeyword: string;
    atmosphericExtinctionMode: number;
    centralObstruction: number;
    centralObstructionKeyword: string;
    centralObstructionMode: number;
    exposureTime: number;
    exposureTimeKeyword: string;
    exposureTimeMode: number;
    filterWidth: number;
    filterWidthKeyword: string;
    filterWidthMode: number;
    quantumEfficiency: number;
    quantumEfficiencyKeyword: string;
    quantumEfficiencyMode: number;
    sensorGain: number;
    sensorGainKeyword: string;
    sensorGainMode: number;
    transmissivity: number;
    transmissivityKeyword: string;
    transmissivityMode: number;
    wavelength: number;
    wavelengthKeyword: string;
    wavelengthMode: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(FluxCalibration?: FluxCalibration);


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
    static prototype: FluxCalibration;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    CustomKeyword;
    Literal;
    StandardKeyword;
}

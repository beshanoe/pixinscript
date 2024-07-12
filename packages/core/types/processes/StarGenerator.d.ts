//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class StarGenerator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    centerDec: number;
    centerRA: number;
    epoch: number;
    focalLength: number;
    limitMagnitude: number;
    nonlinear: boolean;
    outputFilePath: string;
    outputMode: number;
    pixelSize: number;
    projectionSystem: number;
    sensorHeight: number;
    sensorWidth: number;
    starDatabasePath: string;
    starFWHM: number;
    targetMinimumValue: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(StarGenerator?: StarGenerator);


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
    static prototype: StarGenerator;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Conformal;
    Gnomonic;
    Output_CSVFile;
    Output_Image;
}

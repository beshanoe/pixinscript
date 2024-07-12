//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class EphemerisGenerator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    B_V: number;
    B_V_defined: boolean;
    D: number;
    D_defined: boolean;
    G: number;
    H: number;
    KBOsFilePath: string;
    M: number;
    O: number;
    T: number;
    a: number;
    asteroidsFilePath: string;
    databaseFilePath: string;
    databaseFormatName: string;
    denseOutputToleranceFactor: number;
    e: number;
    endTimeJD: number;
    ephemerisMaxExpansionLength: number;
    ephemerisMaxTruncationError: number;
    ephemerisToleranceFactor: number;
    epochJD: number;
    excludeCoreAsteroids: boolean;
    figureEffects: boolean;
    fundamentalFilePath: string;
    i: number;
    objectId: string;
    objectName: string;
    objects: string;
    outputLogFile: boolean;
    outputXEPHFile: boolean;
    outputXEPHFilePath: string;
    overwriteExistingFiles: boolean;
    q: number;
    relativisticPerturbations: boolean;
    separateEarthMoonPerturbers: boolean;
    startTimeJD: number;
    useAsteroidPerturbers: boolean;
    useKBOPerturbers: boolean;
    useRegularExpressions: boolean;
    velocityExpansions: boolean;
    vx: number;
    vy: number;
    vz: number;
    w: number;
    workingMode: number;
    x: number;
    y: number;
    z: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(EphemerisGenerator?: EphemerisGenerator);


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
    static prototype: EphemerisGenerator;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    WorkingMode_DatabaseObjects;
    WorkingMode_OrbitalElements;
    WorkingMode_StateVectors;
}

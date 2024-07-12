//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class IndigoMount extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    AlignmentMethod: number;
    Command: number;
    PierSide: number;
    SlewRate: number;
    alignmentConfig: number;
    alignmentModelFile: string;
    apparentTargetDec: number;
    apparentTargetRA: number;
    currentDec: number;
    currentLST: number;
    currentRA: number;
    deviceName: string;
    enableAlignmentCorrection: boolean;
    geographicLatitude: number;
    syncCelestialDec: number;
    syncCelestialRA: number;
    syncLST: number;
    syncTelescopeDec: number;
    syncTelescopeRA: number;
    targetDec: number;
    targetRA: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(IndigoMount?: IndigoMount);


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
    static prototype: IndigoMount;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AlignmentMethod_AnalyticalModel;
    AlignmentMethod_None;
    AlignmentMethod_ServerModel;
    Command_FitPointingModel;
    Command_GoTo;
    Command_MoveEastStart;
    Command_MoveEastStop;
    Command_MoveNorthStart;
    Command_MoveNorthStop;
    Command_MoveSouthStart;
    Command_MoveSouthStop;
    Command_MoveWestStart;
    Command_MoveWestStop;
    Command_Park;
    Command_ParkDefault;
    Command_Sync;
    Command_TestSync;
    Command_Unpark;
    PierSide_East;
    PierSide_None;
    PierSide_West;
    SlewRate_Centering;
    SlewRate_Find;
    SlewRate_Guide;
    SlewRate_Max;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class IndigoCCDFrame extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    alignmentModelFile: string;
    applyPlateSolver: boolean;
    autoStretch: boolean;
    binningX: number;
    binningY: number;
    centerTarget: boolean;
    clientDownloadDirectory: string;
    clientFileNameTemplate: string;
    clientFrames: Array<any>;
    clientOutputFormatHints: string;
    deviceName: string;
    enableAlignmentCorrection: boolean;
    exposureCount: number;
    exposureDelay: number;
    exposureTime: number;
    externalFilterWheelDeviceName: string;
    filterSlot: number;
    frameType: number;
    linkedAutoStretch: boolean;
    newImageIdTemplate: string;
    objectName: string;
    openClientImages: boolean;
    overwriteClientImages: boolean;
    requireSelectedTelescope: boolean;
    reuseImageWindow: boolean;
    saveClientImages: boolean;
    serverFileNameTemplate: string;
    serverFrames: Array<any>;
    serverURL: string;
    serverUploadDirectory: string;
    solverAlignmentDevice: number;
    solverAutoCatalog: boolean;
    solverAutoLimitMagnitude: boolean;
    solverCatalogName: string;
    solverDistortionCorrection: boolean;
    solverLimitMagnitude: number;
    solverNoiseLayers: number;
    solverProjection: number;
    solverSplineSmoothing: number;
    solverStarSensitivity: number;
    telescopeAperture: number;
    telescopeDeviceName: string;
    telescopeSelection: number;
    uploadMode: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(IndigoCCDFrame?: IndigoCCDFrame);


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
    static prototype: IndigoCCDFrame;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AlignmentDevice_PolygonMatching;
    AlignmentDevice_TriangleSimilarity;
    FrameType_Bias;
    FrameType_Dark;
    FrameType_Flat;
    FrameType_Light;
    Projection_Gnomonic;
    Projection_HammerAitoff;
    Projection_Mercator;
    Projection_Orthographic;
    Projection_PlateCarree;
    Projection_Stereographic;
    Projection_ZenithalEqualArea;
    TelescopeSelection_ActiveOrMountController;
    TelescopeSelection_ActiveTelescope;
    TelescopeSelection_DeviceName;
    TelescopeSelection_MountController;
    TelescopeSelection_NoTelescope;
    UploadMode_Client;
    UploadMode_Server;
    UploadMode_ServerAndClient;
}

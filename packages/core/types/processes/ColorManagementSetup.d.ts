//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ColorManagementSetup extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    defaultEmbedProfilesInGrayscaleImages: boolean;
    defaultEmbedProfilesInRGBImages: boolean;
    defaultGamutCheckEnabled: boolean;
    defaultGrayscaleProfile: string;
    defaultProofingEnabled: boolean;
    defaultRGBProfile: string;
    defaultRenderingIntent: number;
    detectMonitorProfile: boolean;
    enabled: boolean;
    gamutWarningColor: number;
    onMissingProfile: number;
    onProfileMismatch: number;
    proofingIntent: number;
    proofingProfile: string;
    updateMonitorProfile: string;
    useLowResolutionCLUTs: boolean;
    useProofingBPC: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(ColorManagementSetup?: ColorManagementSetup);


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
    static prototype: ColorManagementSetup;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    AbsoluteColorimetric;
    AskUser;
    AssignDefault;
    ConvertToDefault;
    DisableCM;
    DiscardEmbedded;
    KeepEmbedded;
    LeaveUntagged;
    Perceptual;
    RelativeColorimetric;
    Saturation;
}

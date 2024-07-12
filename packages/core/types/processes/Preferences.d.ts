//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class Preferences extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    Application_asteroidEphemeridesFile: string;
    Application_autoSaveSettingsPeriod: number;
    Application_autoUIScaling: boolean;
    Application_cipITRSDataFile: string;
    Application_compressSettingsBlocks: boolean;
    Application_deltaATDataFile: string;
    Application_deltaTDataFile: string;
    Application_fontResolution: number;
    Application_fundamentalEphemeridesFile: string;
    Application_highResFont: string;
    Application_highResMonoFont: string;
    Application_kboEphemeridesFile: string;
    Application_lowResFont: string;
    Application_lowResMonoFont: string;
    Application_messageBoxOkCancelButtonOrder: number;
    Application_messageBoxYesNoButtonOrder: number;
    Application_minifySettingsXML: boolean;
    Application_nutationModelFile: string;
    Application_resourceFile01: string;
    Application_resourceFile02: string;
    Application_resourceFile03: string;
    Application_resourceFile04: string;
    Application_resourceFile05: string;
    Application_resourceFile06: string;
    Application_resourceFile07: string;
    Application_resourceFile08: string;
    Application_resourceFile09: string;
    Application_resourceFile10: string;
    Application_shortTermAsteroidEphemeridesFile: string;
    Application_shortTermFundamentalEphemeridesFile: string;
    Application_shortTermKBOEphemeridesFile: string;
    Application_shortTermNutationModelFile: string;
    Application_styleSheetFile: string;
    Application_uiScalingFactor: number;
    Identifiers_brokenLinkText: string;
    Identifiers_clonePostfix: string;
    Identifiers_imageContainerIconPrefix: string;
    Identifiers_imagePrefix: string;
    Identifiers_newImageCaption: string;
    Identifiers_noPreviewSelectedText: string;
    Identifiers_noPreviewsAvailableText: string;
    Identifiers_noViewSelectedText: string;
    Identifiers_noViewsAvailableText: string;
    Identifiers_previewPrefix: string;
    Identifiers_processIconPrefix: string;
    Identifiers_workspacePrefix: string;
    ImageWindow_backupFiles: boolean;
    ImageWindow_createPreviewsFromCoreProperties: boolean;
    ImageWindow_cursorTolerance: number;
    ImageWindow_default24BitScreenLUT: boolean;
    ImageWindow_defaultEmbedProperties: boolean;
    ImageWindow_defaultEmbedThumbnails: boolean;
    ImageWindow_defaultFileExtension: string;
    ImageWindow_defaultHorizontalResolution: number;
    ImageWindow_defaultMaskMode: number;
    ImageWindow_defaultMasksShown: boolean;
    ImageWindow_defaultMetricResolution: boolean;
    ImageWindow_defaultTransparencyColor: number;
    ImageWindow_defaultTransparencyMode: number;
    ImageWindow_defaultVerticalResolution: number;
    ImageWindow_downloadsDirectory: string;
    ImageWindow_fastScreenRenditionThreshold: number;
    ImageWindow_fastScreenRenditions: boolean;
    ImageWindow_fileFormatWarnings: boolean;
    ImageWindow_followDownloadLocations: boolean;
    ImageWindow_highDPIRenditions: boolean;
    ImageWindow_loadAstrometricSolutions: boolean;
    ImageWindow_loadInitialProcessingFromCoreProperties: boolean;
    ImageWindow_nativeFileDialogs: boolean;
    ImageWindow_pinchSensitivity: number;
    ImageWindow_proxyURL: string;
    ImageWindow_rememberFileOpenType: boolean;
    ImageWindow_rememberFileSaveType: boolean;
    ImageWindow_showActiveSTFIndicators: boolean;
    ImageWindow_showCaptionCurrentChannels: boolean;
    ImageWindow_showCaptionFullPaths: boolean;
    ImageWindow_showCaptionIdentifiers: boolean;
    ImageWindow_showCaptionZoomRatios: boolean;
    ImageWindow_strictFileSaveMode: boolean;
    ImageWindow_swapCompression: boolean;
    ImageWindow_swapDirectories: Array<any>;
    ImageWindow_touchEvents: boolean;
    ImageWindow_transparencyBrush: number;
    ImageWindow_transparencyBrushBackgroundColor: number;
    ImageWindow_transparencyBrushForegroundColor: number;
    ImageWindow_useFileNamesAsImageIdentifiers: boolean;
    ImageWindow_verboseNetworkOperations: boolean;
    ImageWindow_wheelDirection: number;
    ImageWindow_wheelStepAngle: number;
    ImageWindow_zoomAtCursor: boolean;
    MainWindow_acceptDroppedFiles: boolean;
    MainWindow_animateCombo: boolean;
    MainWindow_animateMenu: boolean;
    MainWindow_animateToolBox: boolean;
    MainWindow_animateToolTip: boolean;
    MainWindow_animateWindows: boolean;
    MainWindow_capitalizedMenuBars: boolean;
    MainWindow_checkForUpdatesAtStartup: boolean;
    MainWindow_confirmProgramTermination: boolean;
    MainWindow_desktopSettingsAware: boolean;
    MainWindow_doubleClickLaunchesOpenDialog: boolean;
    MainWindow_dropShadowBlurRadius: number;
    MainWindow_dropShadowChildWindows: boolean;
    MainWindow_dropShadowColor: number;
    MainWindow_dropShadowIcons: boolean;
    MainWindow_expandFavoritesAtStartup: boolean;
    MainWindow_expandMostUsedAtStartup: boolean;
    MainWindow_expandRecentlyUsedAtStartup: boolean;
    MainWindow_explodeIcons: boolean;
    MainWindow_fadeAutoHideWindows: boolean;
    MainWindow_fadeMenu: boolean;
    MainWindow_fadeToolTip: boolean;
    MainWindow_fadeWindows: boolean;
    MainWindow_fadeWorkspaces: boolean;
    MainWindow_fullScreenAtStartup: boolean;
    MainWindow_highQualityWallpapers: boolean;
    MainWindow_hoverableAutoHideWindows: boolean;
    MainWindow_iconGridSpacing: number;
    MainWindow_implodeIcons: boolean;
    MainWindow_maxRecentFiles: number;
    MainWindow_maxUsageListLength: number;
    MainWindow_maximizeAtStartup: boolean;
    MainWindow_nativeMenuBar: boolean;
    MainWindow_openResourcesOnNewWebBrowserWindows: boolean;
    MainWindow_openURLsWithInternalBrowser: boolean;
    MainWindow_privateWebBrowsingMode: boolean;
    MainWindow_showFavorites: boolean;
    MainWindow_showMostUsed: boolean;
    MainWindow_showRecentlyUsed: boolean;
    MainWindow_showSplashAtStartup: boolean;
    MainWindow_translucentAutoHideWindows: boolean;
    MainWindow_translucentChildWindows: boolean;
    MainWindow_translucentWindows: boolean;
    MainWindow_useWallpapers: boolean;
    MainWindow_wallpaperFile01: string;
    MainWindow_wallpaperFile02: string;
    MainWindow_wallpaperFile03: string;
    MainWindow_wallpaperFile04: string;
    MainWindow_wallpaperFile05: string;
    MainWindow_wallpaperFile06: string;
    MainWindow_wallpaperFile07: string;
    MainWindow_wallpaperFile08: string;
    MainWindow_wallpaperFile09: string;
    MainWindow_wallpaperFile10: string;
    MainWindow_windowButtonsOnTheLeft: boolean;
    Process_alertOnProcessCompleted: boolean;
    Process_autoSavePSMPeriod: number;
    Process_backupFiles: boolean;
    Process_consoleDelay: number;
    Process_enableCUDAAcceleration: boolean;
    Process_enableExecutionStatistics: boolean;
    Process_enableLaunchStatistics: boolean;
    Process_enableParallelCoreColorManagement: boolean;
    Process_enableParallelCoreRendering: boolean;
    Process_enableParallelModuleProcessing: boolean;
    Process_enableParallelProcessing: boolean;
    Process_enableThreadCPUAffinity: boolean;
    Process_generateScriptComments: boolean;
    Process_initCUDARuntimeAtStartup: boolean;
    Process_maxConsoleLines: number;
    Process_maxFileReadThreads: number;
    Process_maxFileWriteThreads: number;
    Process_maxModuleThreadPriority: number;
    Process_maxProcessors: number;
    Security_allowInsecureRepositories: boolean;
    Security_allowUnsignedRepositories: boolean;
    Security_allowUnsignedScriptExecution: boolean;
    Security_enableLocalSigningIdentity: boolean;
    Security_reportScriptSignatures: boolean;
    Security_warnOnUnsignedCodeExecution: boolean;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(Preferences?: Preferences);


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
    static prototype: Preferences;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class IndigoDeviceController extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    abort: boolean;
    devices: Array<any>;
    getCommandParameters: string;
    getCommandResult: string;
    newProperties: Array<any>;
    properties: Array<any>;
    serverCommand: string;
    serverConnect: boolean;
    serverHostName: string;
    serverPort: number;
    verbosity: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(IndigoDeviceController?: IndigoDeviceController);


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
    static prototype: IndigoDeviceController;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

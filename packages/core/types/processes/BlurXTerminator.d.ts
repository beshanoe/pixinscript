//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class BlurXTerminator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    adjust_halos: number;
    ai_file: string;
    auto_nonstellar_psf: boolean;
    correct_first: boolean;
    correct_only: boolean;
    lum_only: boolean;
    nonstellar_psf_diameter: number;
    nonstellar_then_stellar: boolean;
    sharpen_nonstellar: number;
    sharpen_stars: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(BlurXTerminator?: BlurXTerminator);


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
    static prototype: BlurXTerminator;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

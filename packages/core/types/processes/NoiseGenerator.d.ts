//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class NoiseGenerator extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    amount: number;
    distribution: number;
    impulsionalNoiseProbability: number;
    preserveBrightness: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(NoiseGenerator?: NoiseGenerator);


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
    static prototype: NoiseGenerator;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
    Impulsional;
    None;
    Normal;
    Poisson;
    PreserveMean;
    PreserveMedian;
    Uniform;
}

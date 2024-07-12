//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class NumericEdit extends Control {


    //-------------------------
    //-------Properties--------
    //-------------------------
    autoEditWidth: boolean;
    edit: Edit;
    fixed: boolean;
    label: Label;
    lowerBound: number;
    precision: number;
    real: boolean;
    sciTriggerExp: number;
    scientific: boolean;
    sign: boolean;
    sizer: Sizer;
    upperBound: number;
    value: number;


    //-------------------------
    //------Constructors-------
    //-------------------------
    constructor(parent?: Control);


    //-------------------------
    //--------Functions--------
    //-------------------------
    public enableFixedPrecision(fixed: boolean): void;

    public enableFixedSign(sign: boolean): void;

    public enableScientificNotation(enable: boolean): void;

    public enableValidatingRegExp(enable: boolean): void;

    public setPrecision(digits: number): void;

    public setRange(lowerBound: number, upperBound: number): void;

    public setReal(real: boolean): void;

    public setScientificNotationTriggerExponent(exp10: number): void;

    public setValue(value: number): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------
    public onValueUpdated: (value: number) => void;


    //-------------------------
    //----static Properties----
    //-------------------------


    //-------------------------
    //--------constants--------
    //-------------------------
}

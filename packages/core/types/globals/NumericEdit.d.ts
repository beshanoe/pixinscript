declare class NumericEdit extends Control {
    constructor(parent?: Control);

    autoEditWidth: boolean;
    edit: Edit;
    readonly fixed: boolean;
    label: Label;
    readonly lowerBound: number;
    readonly precision: number;
    readonly real: boolean;
    readonly sciTriggerExp: number;
    readonly scientific: boolean;
    readonly sign: boolean;
    sizer: Sizer;
    readonly upperBound: number;
    readonly value: number;

    onValueUpdated(value: number): void;

    enableFixedPrecision(fixed: boolean): void;
    enableFixedSign(sign: boolean): void;
    enableScientificNotation(enable: boolean): void;
    enableValidatingRegExp(enable: boolean): void;
    setPrecision(digits: number): void;
    setRange(lowerBound: number, upperBound: number): void;
    setReal(real: boolean): void;
    setScientificNotationTriggerExponent(exp10: number): void;
    setValue(value: number): void;
}

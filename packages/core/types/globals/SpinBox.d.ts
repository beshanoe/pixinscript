declare class SpinBox extends Control {
    alignment: number;
    autoAdjustWidth: boolean;
    editable: boolean;
    maxValue: number;
    minValue: number;
    minimumValueText: string;
    normalizedValue: number;
    prefix: string;
    stepSize: number;
    suffix: string;
    value: number;
    wrapping: boolean;

    constructor(parent?: Control);

    onRangeUpdated(minValue: number, maxValue: number): void;
    onValueUpdated(value: number): void;

    setRange(minValue: number, maxValue: number): void;
}

declare class CheckBox extends Control {
    checked: boolean;
    state: number;
    text: string;
    tristate: boolean;
    onCheck(checked: boolean): void;
    onClick(checked: boolean): void;
    onPress(): void;
    onRelease(): void;
    constructor(parent?: Control);
}

declare const CheckState_Checked: number;
declare const CheckState_ThirdState: number;
declare const CheckState_Unchecked: number;

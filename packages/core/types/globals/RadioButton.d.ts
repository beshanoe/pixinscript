declare class RadioButton extends Control {
    checked: boolean;
    state: number;
    text: string;

    constructor(parent?: Control);

    onCheck(checked: boolean): void;
    onClick(checked: boolean): void;
    onPress(): void;
    onRelease(): void;
}

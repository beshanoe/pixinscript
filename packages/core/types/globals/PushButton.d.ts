declare class PushButton extends Control {
    defaultButton: boolean;
    icon: Bitmap | string;
    iconHeight: number;
    iconWidth: number;
    pushed: boolean;
    state: number;
    text: string;

    constructor(parent?: Control);

    onClick(checked: boolean): void;
    onPress(): void;
    onRelease(): void;
}

declare class ToolButton extends Control {
    constructor(parent?: Control);

    checkable: boolean;
    checked: boolean;
    icon: Bitmap | string;
    iconHeight: number;
    iconWidth: number;
    pushed: boolean;
    state: number;
    text: string;

    default: () => boolean;
    onCheck: (checked: boolean) => void;
    onClick: (checked: boolean) => void;
    onPress: () => void;
    onRelease: () => void;
}

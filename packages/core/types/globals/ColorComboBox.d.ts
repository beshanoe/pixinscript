declare class ColorComboBox extends ComboBox {
    constructor(parent?: Control);

    customRGBA: number;

    onColorSelected: (rgba: number) => void;
    onCurrentColorChanged: (rgba: number) => void;

    colorForIndex(index:number): number;
    currentColor(): number;
    setCurrentColor(rgba: number): void;
}

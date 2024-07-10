declare class TextBox extends Frame {
    constructor(parent?: Control);

    // Properties
    caretPosition: number;
    readonly hasSelection: boolean;
    readOnly: boolean;
    readonly selectedText: string;
    selectionEnd: number;
    selectionStart: number;
    text: string;

    // Event handlers
    onCaretPositionUpdated(): void;
    onSelectionUpdated(): void;
    onTextUpdated(): void;

    // Methods
    clear(): void;
    end(): void;
    home(): void;
    insert(text: string): void;
    selectAll(): void;
    unselect(): void;
}

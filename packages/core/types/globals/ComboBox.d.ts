declare class ComboBox extends Control {
    autoCompletion: boolean;
    currentItem: number;
    editEnabled: boolean;
    editText: string;
    iconHeight: number;
    iconWidth: number;
    maxVisibleItemCount: number;
    minItemCharWidth: number;
    readonly numberOfItems: number;
    popupToolTip: string;

    constructor(parent?: Control);

    onEditTextUpdated: (text: string) => void;
    onItemHighlighted: (itemIndex: number) => void;
    onItemSelected: (itemIndex: number) => void;

    addItem(text: string, icon?: Bitmap | string): void;
    clear(): void;
    clearEditText(): void;
    clearItemIcon(index: number): void;
    clearItemText(index: number): void;
    findItem(text: string, fromIdx?: number, exactMatch?: boolean, caseSensitive?: boolean): number;
    hideList(): void;
    insertItem(index: number, text: string, icon?: Bitmap | string): void;
    itemIcon(index: number): Bitmap;
    itemText(index: number): string;
    removeItem(index: number): void;
    setItemIcon(index: number, icon: Bitmap | string): void;
    setItemText(index: number, text: string): void;
    showList(): void;
}

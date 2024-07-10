declare class Edit extends Frame {
  caretPosition: number;
  readonly hasSelection: boolean;
  readonly isValid: boolean;
  maxLength: number;
  modified: boolean;
  passwordMode: boolean;
  readOnly: boolean;
  rightAlignment: boolean;
  readonly selectedText: string;
  selectionEnd: number;
  selectionStart: number;
  text: string;
  utf8: ByteArray;
  validatingRegExp: string;

  constructor(parent?: Control);

  onCaretPositionUpdated(oldPos: number, newPos: number): void;
  onEditCompleted(): void;
  onReturnPressed(): void;
  onSelectionUpdated(start: number, end: number): void;
  onTextUpdated(text: string): void;

  clear(): void;
  end(): void;
  home(): void;
  selectAll(): void;
  unselect(): void;
}

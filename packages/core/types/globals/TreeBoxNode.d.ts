declare class TreeBoxNode {
  checkable: boolean;
  checked: boolean;
  enabled: boolean;
  expanded: boolean;
  readonly numberOfChildren: number;
  readonly parent: TreeBoxNode | null;
  readonly parentTree: TreeBox;
  selectable: boolean;
  selected: boolean;

  constructor();
  constructor(parent: TreeBox, idx?: number);
  constructor(parent: TreeBoxNode, idx?: number);

  add(node: TreeBoxNode): void;
  alignment(col: number): number;
  backgroundColor(col: number): number;
  child(index: number): TreeBoxNode;
  clearIcon(col: number): void;
  font(col: number): Font;
  icon(col: number): Bitmap | string;
  insert(index: number, node: TreeBoxNode): void;
  remove(index: number): void;
  setAlignment(col: number, align: number): void;
  setBackgroundColor(col: number, rgba: number): void;
  setFont(col: number, font: Font): void;
  setIcon(col: number, icon: Bitmap | string): void;
  setText(col: number, txt: string): void;
  setTextColor(col: number, rgba: number): void;
  setToolTip(col: number, tip: string): void;
  text(col: number): string;
  textColor(col: number): number;
  toolTip(col: number): string;
}

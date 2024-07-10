declare class GroupBox extends Control {
  checked: boolean;
  title: string;
  titleCheckBox: boolean;

  onCheck(checked: boolean): void;

  constructor(parent?: Control);
}

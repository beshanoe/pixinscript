declare class MessageBox {
  caption: string;
  defaultButton: number;
  escapeButton: number;
  firstButton: number;
  icon: number;
  readonly result: number;
  secondButton: number;
  text: string;
  thirdButton: number;

  constructor(
    text?: string,
    caption?: string,
    icon?: number,
    button1?: number,
    button2?: number,
    button3?: number,
    defaultButton?: number,
    escapeButton?: number
  );

  execute(): number;
}

declare class GradientBrush extends Brush {
  readonly spreadMode: number;
  readonly stops: any[];

  static readonly GradientSpread_Pad: number;
  static readonly GradientSpread_Reflect: number;
  static readonly GradientSpread_Repeat: number;
}

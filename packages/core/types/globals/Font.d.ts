declare class Font {
  readonly ascent: number;
  bold: boolean;
  readonly descent: number;
  family: string;
  fixedPitch: boolean;
  readonly height: number;
  readonly isExactMatch: boolean;
  italic: boolean;
  kerning: boolean;
  readonly lineSpacing: number;
  readonly maxWidth: number;
  overline: boolean;
  pixelSize: number;
  pointSize: number;
  stretchFactor: number;
  strikeOut: boolean;
  underline: boolean;
  unscaledPointSize: number;
  weight: number;

  constructor();
  constructor(stdFamily: number, size?: number, unit?: string);
  constructor(family: string, size?: number, unit?: string);
  constructor(font: Font);

  assign(font: Font): void;
  assign(stdFamily: number, size?: number, unit?: string): void;
  assign(family: string, size?: number, unit?: string): void;
  boundingRect(s: string): Rect;
  isCharDefined(ch: number): boolean;
  tightBoundingRect(s: string): Rect;
  width(s: string): number;

  static families(writingSystem?: number): Array<string>;
  static isFixedPitchFont(family: string): boolean;
  static isScalableFont(family: string): boolean;
}

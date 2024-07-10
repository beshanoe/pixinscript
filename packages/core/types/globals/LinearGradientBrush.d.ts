declare class LinearGradientBrush extends GradientBrush {
  readonly end: Point;
  readonly start: Point;
  readonly x1: number;
  readonly x2: number;
  readonly y1: number;
  readonly y2: number;

  constructor(start: Point, end: Point, stops?: Array<any>, spread?: number);
}

declare class GridInterpolation {
  readonly delta: number;
  readonly isValid: boolean;
  readonly referenceRect: Rect;

  constructor();
  constructor(r: Rect, S: SurfaceSpline, delta?: number, verbose?: boolean);
  constructor(
    r: Rect,
    S: ShepardInterpolation,
    delta?: number,
    verbose?: boolean
  );
  constructor(G: GridInterpolation);

  assign(G: GridInterpolation): void;
  clear(): void;
  evaluate(x: number, y: number): number;
  evaluate(p: Point): number;
  evaluate(points: Array<Point>): Array<number>;
  initialize(
    r: Rect,
    S: SurfaceSpline,
    delta?: number,
    verbose?: boolean
  ): void;
  initialize(
    r: Rect,
    S: ShepardInterpolation,
    delta?: number,
    verbose?: boolean
  ): void;
}

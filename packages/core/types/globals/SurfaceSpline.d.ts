declare class SurfaceSpline {
  readonly isValid: boolean;
  readonly length: number;
  order: number;
  rbfType: number;
  shapeParameter: number;
  smoothing: number;
  usePolynomial: boolean;

  constructor();
  constructor(S: SurfaceSpline);

  assign(S: SurfaceSpline): void;
  clear(): void;
  evaluate(x: number, y: number): number;
  evaluate(p: Point): number;
  evaluate(points: Array<any>): Vector;
  initialize(x: Vector, y: Vector, z: Vector, w?: Vector): void;
}

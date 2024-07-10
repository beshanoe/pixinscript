declare class LinearFunction {
  adev: number;
  b: number;
  intercept: number;
  readonly isValid: boolean;
  m: number;
  slope: number;

  constructor();
  constructor(S: LinearFunction);
  constructor(x1: number, y1: number, x2: number, y2: number);
  constructor(x: Array<number> | TypedArray, y: Array<number> | TypedArray);

  evaluate(x: number): void;
  fit(x: Array<number> | TypedArray, y: Array<number> | TypedArray): void;
}

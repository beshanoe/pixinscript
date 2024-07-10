declare class Pen {
  brush: Brush;
  cap: number;
  color: number;
  readonly isEmpty: boolean;
  readonly isSolid: boolean;
  join: number;
  style: number;
  width: number;

  constructor(
    color?: number,
    width?: number,
    style?: number,
    cap?: number,
    join?: number
  );
  constructor(p: Pen);

  assign(p: Pen): void;
}

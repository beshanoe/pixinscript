declare class Cursor {
  readonly bitmap: Bitmap;
  readonly hotSpot: Point;
  readonly hotX: number;
  readonly hotY: number;

  constructor(shape?: number);
  constructor(bitmapOrString: Bitmap | string, hotSpot?: Point);
  constructor(bitmapOrString: Bitmap | string, hotX: number, hotY: number);
  constructor(cursor: Cursor);

  assign(csr: Cursor): void;
}

declare class Bitmap {
  readonly bounds: Rect;
  readonly height: number;
  physicalPixelRatio: number;
  pixelFormat: number;
  readonly width: number;

  constructor();
  constructor(width: number, height: number, format?: number);
  constructor(filePath: string);
  constructor(data: ByteArray, format?: string);
  constructor(bmp: Bitmap, r: Rect);
  constructor(bmp: Bitmap, x0: number, y0: number, x1: number, y1: number);
  constructor(bmp: Bitmap);

  and(v: number): void;
  and(bmp: Bitmap): void;
  and(r: Rect, v: number): void;
  and(p: Point, bmp: Bitmap, r?: Rect): void;
  and(x0: number, y0: number, x1: number, y1: number, v: number): void;
  and(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

  assign(bmp: Bitmap): void;
  clear(): void;
  copy(bmp: Bitmap): void;
  copy(p: Point, bmp: Bitmap, r?: Rect): void;
  copy(x: number, y: number, bmp: Bitmap, x0?: number, y0?: number, x1?: number, y1?: number): void;
  fill(v: number): void;
  fill(r: Rect, v: number): void;
  fill(x0: number, y0: number, x1: number, y1: number, v: number): void;
  invert(): void;
  invert(r: Rect): void;
  invert(x0: number, y0: number, x1: number, y1: number): void;
  invertRect(): void;
  invertRect(r: Rect): void;
  invertRect(x0: number, y0: number, x1: number, y1: number): void;

  isEmpty(): boolean;
  load(filePath: string): void;
  load(data: ByteArray, format?: string): void;

  mirrored(): Bitmap;
  mirroredHorizontally(): Bitmap;
  mirroredVertically(): Bitmap;

  or(v: number): void;
  or(bmp: Bitmap): void;
  or(r: Rect, v: number): void;
  or(p: Point, bmp: Bitmap, r?: Rect): void;
  or(x0: number, y0: number, x1: number, y1: number, v: number): void;
  or(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

  pixel(p: Point): number;
  pixel(x: number, y: number): number;

  replaceColor(replaceThis: number, replaceWith: number): void;
  replaceColor(r: Rect, replaceThis: number, replaceWith: number): void;
  replaceColor(x0: number, y0: number, x1: number, y1: number, replaceThis: number, replaceWith: number): void;

  rotated(angleRadians: number, interpolation?: number): Bitmap;
  save(filePath: string, quality?: number): void;
  scaled(scale: number): Bitmap;
  scaled(sx: number, sy: number, interpolation?: number): Bitmap;
  scaledTo(size: number): Bitmap;
  scaledTo(width: number, height: number, interpolation?: number): Bitmap;

  setAlpha(alpha: number): void;
  setAlpha(r: Rect, alpha: number): void;
  setAlpha(x0: number, y0: number, x1: number, y1: number, alpha: number): void;
  setAlpha(alpha: Bitmap, invert?: boolean): void;

  setPixel(p: Point, v: number): void;
  setPixel(x: number, y: number, v: number): void;

  setTransparency(t: number): void;
  setTransparency(r: Rect, t: number): void;
  setTransparency(x0: number, y0: number, x1: number, y1: number, t: number): void;

  subimage(r: Rect): Bitmap;
  subimage(x0: number, y0: number, x1: number, y1: number): Bitmap;

  xor(v: number): void;
  xor(bmp: Bitmap): void;
  xor(r: Rect, v: number): void;
  xor(p: Point, bmp: Bitmap, r?: Rect): void;
  xor(x0: number, y0: number, x1: number, y1: number, v: number): void;
  xor(x: number, y: number, bmp: Bitmap, x0: number, y0: number, x1: number, y1: number): void;

  xorRect(v: number): void;
  xorRect(r: Rect, v: number): void;
  xorRect(x0: number, y0: number, x1: number, y1: number, v: number): void;

  static fromSVG(data: ByteArray, width: number, height: number, pixelRatio?: number, flags?: number): Bitmap;
  static fromSVGFile(filePath: string, width: number, height: number, pixelRatio?: number, flags?: number): Bitmap;
}

declare const BitmapFormat_ARGB32: number;
declare const BitmapFormat_Invalid: number;
declare const BitmapFormat_RGB32: number;
declare const BitmapInterpolation_Bilinear: number;
declare const BitmapInterpolation_NearestNeighbor: number;
declare const SVGRenderOption_Fast: number;
declare const SVGRenderOption_HighQuality: number;
declare const SVGRenderOption_IgnoreAspectRatio: number;
declare const SVGRenderOption_PreserveAspectRatio: number;

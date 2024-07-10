declare class Histogram {
  readonly entropy: Number;
  readonly isEmpty: Boolean;
  readonly lastLevel: number;
  readonly normalizedPeakLevel: Number;
  readonly peakCount: number;
  readonly peakLevel: number;
  resolution: number;
  readonly totalCount: number;

  constructor();
  constructor(resolution: number);
  constructor(h: Histogram);
  constructor(img: Image);

  assign(h: Histogram): void;
  clipHigh(count: number): number;
  clipLow(count: number): number;
  count(level: number): number;
  generate(img: Image): void;
  histogramLevel(normalizedLevel: Number): number;
  normalizedClipHigh(count: number): Number;
  normalizedClipLow(count: number): Number;
  normalizedLevel(histogramLevel: number): Number;
  resample(h: Histogram): void;
  toArray(): Array<any>;
}

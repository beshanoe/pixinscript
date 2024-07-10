declare class ImageStatistics {
  readonly averageDeviation: number;
  readonly avgDev: number;
  avgDevEnabled: boolean;
  readonly bendMidvariance: number;
  readonly biweightMidvariance: number;
  readonly bwmv: number;
  bwmvEnabled: boolean;
  readonly count: number;
  extremesEnabled: boolean;
  highRejectionEnabled: boolean;
  lowRejectionEnabled: boolean;
  readonly mad: number;
  madEnabled: boolean;
  readonly maximum: number;
  readonly maximumPosition: Point;
  readonly mean: number;
  meanEnabled: boolean;
  readonly median: number;
  readonly medianDeviation: number;
  medianEnabled: boolean;
  readonly minimum: number;
  readonly minimumPosition: Point;
  readonly pbmv: number;
  pbmvEnabled: boolean;
  readonly qn: number;
  qnEnabled: boolean;
  rejectionHigh: number;
  rejectionLow: number;
  readonly sn: number;
  snEnabled: boolean;
  readonly standardDeviation: number;
  readonly stdDev: number;
  readonly sumOfSquares: number;
  sumOfSquaresEnabled: boolean;
  readonly variance: number;
  varianceEnabled: boolean;

  constructor();
  constructor(s: ImageStatistics);
  constructor(img: Image);

  assign(s: ImageStatistics): void;
  generate(img: Image): void;
}

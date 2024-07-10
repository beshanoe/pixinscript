declare class ImageDescription {
  readonly aperture: number;
  bitsPerSample: number;
  readonly cfaType: string;
  readonly colorSpace: number;
  complexSample: boolean;
  embedColorFilterArray: boolean;
  embedDisplayFunction: boolean;
  embedICCProfile: boolean;
  embedPreviewRects: boolean;
  embedProcessingHistory: boolean;
  embedProperties: boolean;
  embedRGBWS: boolean;
  embedThumbnail: boolean;
  readonly exposure: number;
  readonly focalLength: number;
  readonly height: number;
  readonly id: string;
  ieeefpSampleFormat: boolean;
  readonly isoSpeed: number;
  readonly lowerRange: number;
  metricResolution: boolean;
  readonly numberOfChannels: number;
  signedIntegers: boolean;
  readonly supported: boolean;
  readonly upperRange: number;
  readonly width: number;
  xResolution: number;
  yResolution: number;

  constructor();
  constructor(d: ImageDescription);

  assign(r: ImageDescription): void;
}

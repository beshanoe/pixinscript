declare class Image {
  readonly bitsPerSample: number;
  readonly bounds: Rect;
  colorSpace: number;
  firstSelectedChannel: number;
  readonly hasAlphaChannels: boolean;
  readonly height: number;
  highRangeClippingEnabled: boolean;
  interpolation: number;
  interpolationClamping: number;
  interpolationQuality: number;
  interpolationSmoothness: number;
  interpolationXRadius: number;
  interpolationYRadius: number;
  readonly isColor: boolean;
  readonly isComplex: boolean;
  readonly isEmpty: boolean;
  readonly isGrayscale: boolean;
  readonly isInteger: boolean;
  readonly isReal: boolean;
  readonly isStatusCompleted: boolean;
  readonly isStatusInitialized: boolean;
  lastSelectedChannel: number;
  lowRangeClippingEnabled: boolean;
  readonly numberOfAlphaChannels: number;
  readonly numberOfAlphaSamples: number;
  readonly numberOfChannels: number;
  readonly numberOfNominalChannels: number;
  readonly numberOfNominalSamples: number;
  readonly numberOfPixels: number;
  readonly numberOfSamples: number;
  readonly numberOfSelectedChannels: number;
  readonly numberOfSelectedPixels: number;
  readonly numberOfSelectedSamples: number;
  rangeClipHigh: number;
  rangeClipLow: number;
  rangeClippingEnabled: boolean;
  readonly sampleType: number;
  selectedChannel: number;
  selectedPoint: Point;
  selectedRect: Rect;
  selectionPoint: number;
  readonly statusCount: number;
  statusEnabled: boolean;
  statusInfo: string;
  statusInitializationEnabled: boolean;
  readonly statusTotal: number;
  readonly width: number;

  constructor();
  constructor(src: Image);
  constructor(
    width: number,
    height: number,
    numberOfChannels?: number,
    colorSpace?: number,
    bitsPerSample?: number,
    sampleType?: number
  );
  constructor(
    array: TypedArray,
    width: number,
    height: number,
    numberOfChannels?: number,
    colorSpace?: number
  );

  BWMV(
    center?: number,
    sigma?: number,
    k?: number,
    reducedLength?: boolean,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number;
  FFT(centered?: boolean): void;
  MAD(
    center?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number;
  PBMV(
    center?: number,
    beta?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number;
  Qn(rect?: Rect, firstChannel?: number, lastChannel?: number): number;
  Sn(rect?: Rect, firstChannel?: number, lastChannel?: number): number;
  aTrousWaveletTransform(
    kernel: Array | Matrix,
    numberOfLayers: number,
    scalingSequence?: number,
    layerState?: Array
  ): Array;
  aTrousWaveletTransform(
    rowVector: Array | Vector,
    colVector: Array | Vector,
    numberOfLayers: number,
    scalingSequence?: number,
    layerState?: Array
  ): Array;
  advanceStatus(count: number): void;
  allocate(
    width: number,
    height: number,
    numberOfChannels?: number,
    colorSpace?: number
  ): void;
  apply(
    scalar: number | Complex,
    op?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  apply(
    image: Image,
    op?: number,
    pos?: Point,
    channel?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  assign(
    image: Image,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  assignStatus(img: Image): void;
  avgDev(
    center?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number;
  bendMidvariance(
    center?: number,
    beta?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number;
  binarize(
    v?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  biweightMidvariance(
    center?: number,
    sigma?: number,
    k?: number,
    reducedLength?: boolean,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number;
  blend(bmp: Bitmap, rect?: Rect | Point, pos?: Rect): void;
  canPopSelections(): boolean;
  completeStatus(): void;
  convolve(
    kernel: Array | Matrix,
    highPassMode?: number,
    thr0?: number,
    thr1?: number,
    interlacing?: number
  ): void;
  convolveFFT(kernel: Array | Matrix | Image): void;
  convolveSeparable(
    rowVector: Array | Vector,
    colVector: Array | Vector,
    highPassMode?: number,
    interlacing?: number
  ): void;
  count(rect?: Rect, firstChannel?: number, lastChannel?: number): number;
  createAlphaChannels(n: number): void;
  crop(fillValues?: number | Array): void;
  cropBy(
    left: number,
    top: number,
    right: number,
    bottom: number,
    fillValues?: number | Array
  ): void;
  cropTo(r: Rect, fillValues?: number | Array): void;
  deleteAlphaChannel(c: number): void;
  deleteAlphaChannels(): void;
  fastFourierTransform(centered?: boolean): void;
  fill(
    v?: number | Complex,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  forEachMutablePixel(
    f: Function,
    thisObj?: Object,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  forEachMutableSample(
    f: Function,
    thisObj?: Object,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  forEachPixel(
    f: Function,
    thisObj?: Object,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  forEachSample(
    f: Function,
    thisObj?: Object,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  free(): void;
  getIntensity(I: Image, rect?: Rect): void;
  getLightness(L: Image, rect?: Rect): void;
  getLuminance(Y: Image, rect?: Rect): void;
  getPixelValue(v: Vector): void;
  getSamples(
    samples: TypedArray | Array | Vector,
    rect?: Rect,
    channel?: number
  ): void;
  initPixelIterator(
    r?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  initSampleIterator(r?: Rect, channel?: number): void;
  initializeStatus(info: string, total: number): void;
  interpolate(x: number, y: number, channel: number): number;
  interpolate(p: Point, channel: number): number;
  inverseATrousWaveletTransform(layers: Array): void;
  inverseFFT(centered?: boolean): void;
  inverseFastFourierTransform(centered?: boolean): void;
  inverseMedianWaveletTransform(layers: Array): void;
  inverseMultiscaleLinearTransform(layers: Array): void;
  inverseMultiscaleMedianTransform(layers: Array): void;
  inverseMultiscaleTransform(layers: Array): void;
  inverseStarletTransform(layers: Array): void;
  invert(
    v?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  logPolarTransform(startAngleRadians?: number, endAngleRadians?: number): void;
  maximum(
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number | Complex;
  maximumPosition(
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): Point;
  mean(rect?: Rect, firstChannel?: number, lastChannel?: number): number;
  meanOfSquares(
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number;
  median(rect?: Rect, firstChannel?: number, lastChannel?: number): number;
  medianWaveletTransform(
    numberOfLayers: number,
    scalingSequence?: number,
    layerState?: Array,
    threshold?: number
  ): Array;
  minimum(
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number | Complex;
  minimumPosition(
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): Point;
  mirrorHorizontal(): void;
  mirrorVertical(): void;
  mmtBackgroundResidual(scale?: number): Float32Array;
  modulus(rect?: Rect, firstChannel?: number, lastChannel?: number): number;
  morphologicalTransformation(
    operator: number,
    structure: Array,
    thr0?: number,
    thr1?: number,
    interlacing?: number
  ): void;
  multiscaleLinearTransform(
    numberOfLayers: number,
    scalingSequence?: number,
    layerState?: Array
  ): Array;
  multiscaleMedianTransform(
    numberOfLayers: number,
    scalingSequence?: number,
    layerState?: Array
  ): Array;
  nextPixel(): boolean;
  nextSample(): boolean;
  noiseKSigma(
    j?: number,
    k?: number,
    eps?: number,
    n?: number
  ): [number, number];
  noiseMRS(
    numberOfLayers?: number,
    sigma?: number,
    k?: number
  ): [number, number];
  norm(rect?: Rect, firstChannel?: number, lastChannel?: number): number;
  normalize(
    v0?: number,
    v1?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  orderStatistic(
    k: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number;
  pixelValue(): Vector;
  polarTransform(startAngleRadians?: number, endAngleRadians?: number): void;
  popSelections(): void;
  previousPixel(): boolean;
  previousSample(): boolean;
  pushSelections(): void;
  readRawFile(path: string): void;
  render(
    zoomFactor?: number,
    enableTransparency?: boolean,
    fast?: boolean
  ): Bitmap;
  resample(scale: number): void;
  resample(sx: number, sy: number, mode?: number, absMode?: number): void;
  rescale(
    v0?: number,
    v1?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  resetChannelSelection(): void;
  resetRectSelection(): void;
  resetSelections(): void;
  rotate(
    angleRadians: number,
    cx?: number,
    cy?: number,
    fillValues?: number | Array
  ): void;
  rotate(
    angleRadians: number,
    center?: Point,
    fillValues?: number | Array
  ): void;
  rotate180(): void;
  rotate90ccw(): void;
  rotate90cw(): void;
  rotateUnclipped(angleRadians: number, fillValues?: number | Array): void;
  sample(p: Point, channel?: number): number | Complex;
  sample(x: number, y: number, channel?: number): number | Complex;
  sampleValue(): number | Complex;
  setAbs(rect?: Rect, firstChannel?: number, lastChannel?: number): void;
  setLightness(L: Image, p?: Point, rect?: Rect): void;
  setLuminance(Y: Image, p?: Point, rect?: Rect): void;
  setPixelValue(v: Vector): void;
  setSample(scalar: number | Complex, p: Point, channel?: number): void;
  setSample(
    scalar: number | Complex,
    x: number,
    y: number,
    channel?: number
  ): void;
  setSampleValue(scalar: number | Complex): void;
  setSamples(
    samples: TypedArray | Array | Vector,
    rect?: Rect,
    channel?: number
  ): void;
  shift(fillValues?: number | Array): void;
  shiftBy(dx: number, dy: number, fillValues?: number | Array): void;
  shiftTo(dx: number, dy: number, fillValues?: number | Array): void;
  shiftTo(p: Point, fillValues?: number | Array): void;
  skipPixels(dx: number, dy: number): boolean;
  skipSamples(dx: number, dy: number): boolean;
  starletTransform(
    kernel: Array | Matrix | Vector,
    numberOfLayers: number,
    scalingSequence?: number,
    layerState?: Array
  ): Array;
  stdDev(rect?: Rect, firstChannel?: number, lastChannel?: number): number;
  sumOfSquares(
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): number;
  swap(img: Image): void;
  toFloat32Array(rect?: Rect, channel?: number): Float32Array;
  toFloat64Array(rect?: Rect, channel?: number): Float64Array;
  toMatrix(rect?: Rect, channel?: number): Matrix;
  toUint16Array(rect?: Rect, channel?: number): Uint16Array;
  toUint32Array(rect?: Rect, channel?: number): Uint32Array;
  toUint8Array(rect?: Rect, channel?: number): Uint8Array;
  transfer(img: Image): void;
  translate(dx: number, dy: number, fillValues?: number | Array): void;
  truncate(
    v0?: number,
    v1?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): void;
  twoSidedAvgDev(
    center?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): Array;
  twoSidedBWMV(
    center?: number,
    sigma?: Array,
    k?: number,
    reducedLength?: boolean,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): Array;
  twoSidedBiweightMidvariance(
    center?: number,
    sigma?: Array,
    k?: number,
    reducedLength?: boolean,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): Array;
  twoSidedMAD(
    center?: number,
    rect?: Rect,
    firstChannel?: number,
    lastChannel?: number
  ): Array;
  variance(rect?: Rect, firstChannel?: number, lastChannel?: number): number;
  writeRawFile(path: string): void;

  static CPSM(fftA: Image, fftB: Image): Image;
  static PCM(fftA: Image, fftB: Image): Image;
  static crossPowerSpectrumMatrix(fftA: Image, fftB: Image): Image;
  static fileExtensionsForMimeType(mimeType: string): Array;
  static mimeTypesForFileExtension(pathOrExt: string): Array;
  static newComplexImage(bitsPerSample?: number): Image;
  static newFloatImage(bitsPerSample?: number): Image;
  static newUIntImage(bitsPerSample?: number): Image;
  static phaseCorrelationMatrix(fftA: Image, fftB: Image): Image;
}

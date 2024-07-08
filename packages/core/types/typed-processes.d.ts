type PrototypeProperty = any;

declare class ACDNR extends ProcessInstance {
  Median3x3: any;
  Median5x5: any;
  Multiscale: any;
  None: any;
  Recursive: any;
  UnweightedAverage3x3: any;
  WeightedAverage3x3: any;
  WeightedAverage5x5: any;

  applyToLightness: boolean;
  applyToChrominance: boolean;
  useMaskL: boolean;
  useMaskC: boolean;
  sigmaL: number;
  sigmaC: number;
  shapeL: number;
  shapeC: number;
  amountL: number;
  amountC: number;
  iterationsL: number;
  iterationsC: number;
  prefilterMethodL: PrototypeProperty;
  prefilterMethodC: PrototypeProperty;
  protectionMethodL: PrototypeProperty;
  protectionMethodC: PrototypeProperty;
  minStructSizeL: number;
  minStructSizeC: number;
  protectDarkSidesL: boolean;
  protectDarkSidesC: boolean;
  darkSidesThresholdL: number;
  darkSidesThresholdC: number;
  darkSidesOverdriveL: number;
  darkSidesOverdriveC: number;
  protectBrightSidesL: boolean;
  protectBrightSidesC: boolean;
  brightSidesThresholdL: number;
  brightSidesThresholdC: number;
  brightSidesOverdriveL: number;
  brightSidesOverdriveC: number;
  starProtectionL: boolean;
  starProtectionC: boolean;
  starThresholdL: number;
  starThresholdC: number;
  previewMask: boolean;
  maskRemovedWaveletLayers: number;
  maskShadowsClipping: number;
  maskHighlightsClipping: number;
  maskMTF: number;
}

declare class ATrousWaveletTransform extends ProcessInstance {
  AllPixelChanges: any;
  DecreasingPixels: any;
  Disabled: any;
  Hyperbolic: any;
  IncreasingPixels: any;
  Ln: any;
  Log10: any;
  NoFunction: any;

  layers: [
    // enabled, biasEnabled, bias, noiseReductionEnabled, noiseReductionThreshold, noiseReductionAmount, noiseReductionIterations
    [boolean, boolean, 0.0, boolean, 3.0, 1.0, 1],
    [boolean, boolean, 0.0, boolean, 3.0, 1.0, 1],
    [boolean, boolean, 0.0, boolean, 3.0, 1.0, 1],
    [boolean, boolean, 0.0, boolean, 3.0, 1.0, 1],
    [boolean, boolean, 0.0, boolean, 3.0, 1.0, 1]
  ];
  scaleDelta: number;
  scalingFunctionData: [0.25, 0.5, 0.25, 0.5, 1, 0.5, 0.25, 0.5, 0.25];
  scalingFunctionRowFilter: [0.5, 1, 0.5];
  scalingFunctionColFilter: [0.5, 1, 0.5];
  scalingFunctionNoiseSigma: [
    0.8003,
    0.2729,
    0.1198,
    0.0578,
    0.0287,
    0.0143,
    0.0072,
    0.0036,
    0.0019,
    0.001
  ];
  scalingFunctionName: string;
  largeScaleFunction: PrototypeProperty;
  curveBreakPoint: number;
  noiseThresholding: boolean;
  noiseThresholdingAmount: number;
  noiseThreshold: number;
  softThresholding: boolean;
  useMultiresolutionSupport: boolean;
  deringing: boolean;
  deringingDark: number;
  deringingBright: number;
  outputDeringingMaps: boolean;
  lowRange: number;
  highRange: number;
  previewMode: PrototypeProperty;
  previewLayer: number;
  toLuminance: boolean;
  toChrominance: boolean;
  linear: boolean;
}

declare class ATrousWaveletTransformV1 extends ProcessInstance {
  AllPixelChanges: any;
  DecreasingPixels: any;
  DirectionalMultiway: any;
  Disabled: any;
  Hyperbolic: any;
  IncreasingPixels: any;
  Ln: any;
  Log10: any;
  Morphological: any;
  NoFunction: any;
  Recursive: any;
  SignificantStructures: any;

  version: number;
  layers: // enabled, biasEnabled, structureDetectionThreshold, structureDetectionRange, bias, noiseReductionEnabled, noiseReductionFilter, noiseReductionAmount, noiseReductionIterations, noiseReductionKernelSize, noiseReductionProtectSignificant, deringingEnabled, deringingAmount, deringingThreshold
  [
    enabled: boolean,
    biasEnabled: boolean,
    structureDetectionThreshold: number,
    structureDetectionRange: number,
    bias: number,
    noiseReductionEnabled: boolean,
    noiseReductionFilter: PrototypeProperty,
    noiseReductionAmount: number,
    noiseReductionIterations: number,
    noiseReductionKernelSize: number,
    noiseReductionProtectSignificant: boolean,
    deringingEnabled: boolean,
    deringingAmount: number,
    deringingThreshold: number
  ][];
  scaleDelta: number;
  scalingFunctionData: [
    0.2928932,
    0.5,
    0.2928932,
    0.5,
    1,
    0.5,
    0.2928932,
    0.5,
    0.2928932
  ];
  scalingFunctionKernelSize: number;
  scalingFunctionNoiseSigma: [
    0.809,
    0.269,
    0.118,
    0.057,
    0.028,
    0.014,
    0.007,
    0.004,
    0.002
  ];
  scalingFunctionNoiseLayers: number;
  scalingFunctionName: string;
  largeScaleFunction: PrototypeProperty;
  curveBreakPoint: number;
  noiseThresholdingAmount: number;
  noiseThreshold: number;
  lowRange: number;
  highRange: number;
  previewMode: PrototypeProperty;
  previewLayer: number;
  toLuminance: boolean;
  toChrominance: boolean;
  linear: boolean;
}

declare class AdaptiveStretch extends ProcessInstance {
  noiseThreshold: number;
  protection: number;
  useProtection: boolean;
  maxCurvePoints: number;
  useROI: boolean;
  roiX0: number;
  roiY0: number;
  roiX1: number;
  roiY1: number;
}

declare class Annotation extends ProcessInstance {
  annotationText: string;
  annotationFont: string;
  annotationFontSize: number;
  annotationFontBold: boolean;
  annotationFontItalic: boolean;
  annotationFontUnderline: boolean;
  annotationFontShadow: boolean;
  annotationColor: number;
  annotationPositionX: number;
  annotationPositionY: number;
  annotationShowLeader: boolean;
  annotationLeaderPositionX: number;
  annotationLeaderPositionY: number;
  annotationOpacity: number;
}

declare class ArcsinhStretch extends ProcessInstance {
  stretch: number;
  blackPoint: number;
  protectHighlights: boolean;
  useRGBWS: boolean;
  previewClipped: boolean;
}

declare class AssignICCProfile extends ProcessInstance {
  AssignDefaultProfile: any;
  AssignNewProfile: any;
  LeaveUntagged: any;

  targetProfile: string;
  mode: PrototypeProperty;
}

declare class AssistedColorCalibration extends ProcessInstance {
  redCorrectionFactor: number;
  GreenCorrectionFactor: number;
  BlueCorrectionFactor: number;
  backgroundRef: string;
  HistogramShadows: number;
  HistogramHighlights: number;
  HistogramMidtones: number;
  SaturationBoost: number;
}

declare class AutoHistogram extends ProcessInstance {
  Gamma: any;
  Logarithm: any;
  MTF: any;

  clip: boolean;
  clipTogether: boolean;
  clipLowR: number;
  clipLowG: number;
  clipLowB: number;
  clipHighR: number;
  clipHighG: number;
  clipHighB: number;
  stretch: boolean;
  stretchTogether: boolean;
  stretchMethod: PrototypeProperty;
  targetMedianR: number;
  targetMedianG: number;
  targetMedianB: number;
}

declare class BackgroundNeutralization extends ProcessInstance {
  Rescale: any;
  RescaleAsNeeded: any;
  TargetBackground: any;
  Truncate: any;

  backgroundReferenceViewId: string;
  backgroundLow: number;
  backgroundHigh: number;
  useROI: boolean;
  roiX0: number;
  roiY0: number;
  roiX1: number;
  roiY1: number;
  mode: PrototypeProperty;
  targetBackground: number;
}

declare class Binarize extends ProcessInstance {
  thresholdRK: number;
  thresholdG: number;
  thresholdB: number;
  isGlobal: boolean;
}

declare class ChannelExtraction extends ProcessInstance {
  CIELab: any;
  CIELch: any;
  CIEXYZ: any;
  HSI: any;
  HSV: any;
  RGB: any;
  SameAsSource: any;

  colorSpace: PrototypeProperty;
  channels: // enabled, id
  [enabled: boolean, id: string][];
  sampleFormat: PrototypeProperty;
}

declare class ChannelCombination extends ProcessInstance {
  CIELab: any;
  CIELch: any;
  CIEXYZ: any;
  HSI: any;
  HSV: any;
  RGB: any;

  colorSpace: PrototypeProperty;
  channels: // enabled, id
  [enabled: boolean, id: string][];
}

declare class ChannelMatch extends ProcessInstance {
  channels: // enabled, dx, dy, k
  [enabled: boolean, dx: number, dy: number, k: number];
}

declare class CloneStamp extends ProcessInstance {
  cloner: []; // actionIndex, targetX, targetY];
  actions: [
    // sourceId, sourceWidth, sourceHeight, sourceX, sourceY, radius, softness, opacity
    sourceId: string,
    sourceWidth: number,
    sourceHeight: number,
    sourceX: number,
    sourceY: number,
    radius: number,
    softness: number,
    opacity: number
  ][];
  width: number;
  height: number;
  clonerColor: number;
  boundsColor: number;
}

declare class ColorCalibration extends ProcessInstance {
  whiteReferenceViewId: string;
  whiteLow: number;
  whiteHigh: number;
  whiteUseROI: boolean;
  whiteROIX0: number;
  whiteROIY0: number;
  whiteROIX1: number;
  whiteROIY1: number;
  structureDetection: boolean;
  structureLayers: number;
  noiseLayers: number;
  manualWhiteBalance: boolean;
  manualRedFactor: number;
  manualGreenFactor: number;
  manualBlueFactor: number;
  backgroundReferenceViewId: string;
  backgroundLow: number;
  backgroundHigh: number;
  backgroundUseROI: boolean;
  backgroundROIX0: number;
  backgroundROIY0: number;
  backgroundROIX1: number;
  backgroundROIY1: number;
  outputWhiteReferenceMask: boolean;
  outputBackgroundReferenceMask: boolean;
}

declare class ColorSaturation extends ProcessInstance {
  AkimaSubsplines: any;
  CubicSpline: any;
  Linear: any;

  HS: [x: number, y: number][];
  HSt: PrototypeProperty;
  hueShift: number;
}

declare class ConvertToGrayscale extends ProcessInstance {}

declare class ConvertToRGBColor extends ProcessInstance {}

declare class Convolution extends ProcessInstance {
  Gaussian: any;
  Image: any;
  Library: any;
  Parametric: any;

  mode: PrototypeProperty;
  sigma: number;
  shape: number;
  aspectRatio: number;
  rotationAngle: number;
  filterSource: string;
  rescaleHighPass: boolean;
  viewId: string;
}

declare class CreateAlphaChannels extends ProcessInstance {
  fromImage: boolean;
  sourceId: string;
  invertSource: boolean;
  closeSource: boolean;
  transparency: number;
  replace: boolean;
  count: number;
}

declare class Crop extends ProcessInstance {
  AbsoluteCentimeters: any;
  AbsoluteInches: any;
  AbsolutePixels: any;
  RelativeMargins: any;

  leftMargin: number;
  topMargin: number;
  rightMargin: number;
  bottomMargin: number;
  mode: PrototypeProperty;
  xResolution: number;
  yResolution: number;
  metric: boolean;
  forceResolution: boolean;
  red: number;
  green: number;
  blue: number;
  alpha: number;
  noGUIMessages: boolean;
}

declare class CurvesTransformation extends ProcessInstance {
  AkimaSubsplines: any;
  CubicSpline: any;
  Linear: any;

  R: [x: number, y: number][];
  Rt: PrototypeProperty;
  G: [x: number, y: number][];
  Gt: PrototypeProperty;
  B: [x: number, y: number][];
  Bt: PrototypeProperty;
  K: [x: number, y: number][];
  Kt: PrototypeProperty;
  A: [x: number, y: number][];
  At: PrototypeProperty;
  L: [x: number, y: number][];
  Lt: PrototypeProperty;
  a: [x: number, y: number][];
  at: PrototypeProperty;
  b: [x: number, y: number][];
  bt: PrototypeProperty;
  c: [x: number, y: number][];
  ct: PrototypeProperty;
  H: [x: number, y: number][];
  Ht: PrototypeProperty;
  S: [x: number, y: number][];
  St: PrototypeProperty;
}

declare class Deconvolution extends ProcessInstance {
  B3Spline5x5: any;
  External: any;
  Gaussian: any;
  LinearInterpolation3x3: any;
  MotionBlur: any;
  Parametric: any;
  Poisson: any;
  RichardsonLucy: any;
  SmallScale3x3: any;
  VanCittert: any;

  algorithm: PrototypeProperty;
  numberOfIterations: number;
  deringing: boolean;
  deringingDark: number;
  deringingBright: number;
  deringingSupport: boolean;
  deringingSupportAmount: number;
  deringingSupportViewId: string;
  toLuminance: boolean;
  psfMode: PrototypeProperty;
  psfSigma: number;
  psfShape: number;
  psfAspectRatio: number;
  psfRotationAngle: number;
  psfMotionLength: number;
  psfMotionRotationAngle: number;
  psfViewId: string;
  psfFFTSizeLimit: number;
  useRegularization: boolean;
  waveletLayers: [noiseThreshold: number, noiseReduction: number][];
  noiseModel: PrototypeProperty;
  numberOfWaveletLayers: number;
  scalingFunction: PrototypeProperty;
  convergence: number;
  rangeLow: number;
  rangeHigh: number;
  iterations: [count: number][];
}

declare class DigitalDevelopment extends ProcessInstance {
  Blue: any;
  Green: any;
  Luminance: any;
  Red: any;

  a: number;
  b: number;
  sigma: number;
  m0: PrototypeProperty;
  m1: PrototypeProperty;
  m2: PrototypeProperty;
}

declare class DynamicBackgroundExtraction extends ProcessInstance {
  Divide: any;
  None: any;
  SameAsTarget: any;
  Subtract: any;
  f32: any;
  f64: any;
  i16: any;
  i32: any;
  i8: any;

  data: [
    // x, y, z0, w0, z1, w1, z2, w2
    x: number,
    y: number,
    z0: number,
    w0: number,
    z1: number,
    w1: number,
    z2: number,
    w2: number
  ][];
  numberOfChannels: number;
  derivativeOrder: number;
  smoothing: number;
  ignoreWeights: boolean;
  modelId: string;
  modelWidth: number;
  modelHeight: number;
  downsample: number;
  modelSampleFormat: PrototypeProperty;
  targetCorrection: PrototypeProperty;
  normalize: boolean;
  discardModel: boolean;
  replaceTarget: boolean;
  correctedImageId: string;
  correctedImageSampleFormat: PrototypeProperty;
  samples: [
    // x, y, radius, symmetries, axialCount, isFixed, z0, w0, z1, w1, z2, w2
    x: number,
    y: number,
    radius: number,
    symmetries: number,
    axialCount: number,
    isFixed: number,
    z0: number,
    w0: number,
    z1: number,
    w1: number,
    z2: number,
    w2: number
  ][];
  imageWidth: number;
  imageHeight: number;
  symmetryCenterX: number;
  symmetryCenterY: number;
  tolerance: number;
  shadowsRelaxation: number;
  minSampleFraction: number;
  defaultSampleRadius: number;
  samplesPerRow: number;
  minWeight: number;
  sampleColor: number;
  selectedSampleColor: number;
  selectedSampleFillColor: number;
  badSampleColor: number;
  badSampleFillColor: number;
  axisColor: number;
}

declare class DynamicCrop extends ProcessInstance {
  Auto: any;
  BicubicBSpline: any;
  BicubicSpline: any;
  Bilinear: any;
  CatmullRomSplineFilter: any;
  CubicBSplineFilter: any;
  Lanczos3: any;
  Lanczos4: any;
  MitchellNetravaliFilter: any;
  NearestNeighbor: any;

  centerX: number;
  centerY: number;
  width: number;
  height: number;
  angle: number;
  scaleX: number;
  scaleY: number;
  optimizeFast: boolean;
  interpolation: PrototypeProperty;
  clampingThreshold: number;
  smoothness: number;
  xResolution: number;
  yResolution: number;
  metric: boolean;
  forceResolution: boolean;
  red: number;
  green: number;
  blue: number;
  alpha: number;
  noGUIMessages: boolean;
}

declare class ExponentialTransformation extends ProcessInstance {
  PIP: any;
  SMI: any;

  functionType: PrototypeProperty;
  order: number;
  sigma: number;
  useLightnessMask: boolean;
}

declare class FITSHeader extends ProcessInstance {
  keywords: [name: string, value: string, comment: string];
}

declare class FastRotation extends ProcessInstance {
  HorizontalMirror: any;
  Rotate180: any;
  Rotate90CCW: any;
  Rotate90CW: any;
  VerticalMirror: any;

  mode: PrototypeProperty;
  noGUIMessages: boolean;
}

declare class GREYCstoration extends ProcessInstance {
  Bilinear: any;
  Nearest: any;
  RungeKutta: any;

  amplitude: number;
  numberOfIterations: number;
  contourPreservation: number;
  anisotropy: number;
  noiseScale: number;
  geometryRegularity: number;
  fastApproximation: boolean;
  precision: number;
  spatialIntegrationStep: number;
  angularIntegrationStep: number;
  interpolation: PrototypeProperty;
  coupledChannels: boolean;
}

declare class HDRMultiscaleTransform extends ProcessInstance {
  Automatic: any;
  Manual: any;
  NoMidtonesBalance: any;

  numberOfLayers: number;
  numberOfIterations: number;
  invertedIterations: boolean;
  overdrive: number;
  medianTransform: boolean;
  scalingFunctionData: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  scalingFunctionRowFilter: [number, number, number, number, number];
  scalingFunctionColFilter: [number, number, number, number, number];
  scalingFunctionName: string;
  deringing: boolean;
  smallScaleDeringing: number;
  largeScaleDeringing: number;
  outputDeringingMaps: boolean;
  midtonesBalanceMode: PrototypeProperty;
  midtonesBalance: number;
  toLightness: boolean;
  preserveHue: boolean;
  luminanceMask: boolean;
}

declare class HistogramTransformation extends ProcessInstance {
  H: [
    // c0, m, c1, r0, r1,
    c0: number,
    m: number,
    c1: number,
    r0: number,
    r1: number
  ][];
}

declare class ICCProfileTransformation extends ProcessInstance {
  AbsoluteColorimetric: any;
  Perceptual: any;
  RelativeColorimetric: any;
  Saturation: any;

  targetProfile: string;
  toDefaultProfile: boolean;
  renderingIntent: PrototypeProperty;
  useBlackPointCompensation: boolean;
  useFloatingPointTransformation: boolean;
}

declare class ImageIdentifier extends ProcessInstance {
  id: string;
}

declare class IntegerResample extends ProcessInstance {
  Average: any;
  Maximum: any;
  Median: any;
  Minimum: any;

  zoomFactor: number;
  downsamplingMode: PrototypeProperty;
  xResolution: number;
  yResolution: number;
  metric: boolean;
  forceResolution: boolean;
  noGUIMessages: boolean;
}

declare class Invert extends ProcessInstance {}

declare class LarsonSekanina extends ProcessInstance {
  Bicubic: any;
  BicubicBSpline: any;
  BicubicSpline: any;
  Bilinear: any;

  interpolation: PrototypeProperty;
  radiusIncrement: number;
  angleIncrement: number;
  centerX: number;
  centerY: number;
  amount: number;
  threshold: number;
  deringing: number;
  rangeLow: number;
  rangeHigh: number;
  useLuminance: boolean;
  highPass: boolean;
  disableExtension: boolean;
}

declare class LocalHistogramEqualization extends ProcessInstance {
  Bit10: any;
  Bit12: any;
  Bit8: any;

  radius: number;
  histogramBins: PrototypeProperty;
  slopeLimit: number;
  amount: number;
  circularKernel: boolean;
}

declare class MaskedStretch extends ProcessInstance {
  MaskType_Intensity: any;
  MaskType_Value: any;

  targetBackground: number;
  numberOfIterations: number;
  clippingFraction: number;
  backgroundReferenceViewId: string;
  backgroundLow: number;
  backgroundHigh: number;
  useROI: boolean;
  roiX0: number;
  roiY0: number;
  roiX1: number;
  roiY1: number;
  maskType: PrototypeProperty;
}

declare class MorphologicalTransformation extends ProcessInstance {
  Closing: any;
  Dilation: any;
  Erosion: any;
  Median: any;
  Midpoint: any;
  Opening: any;
  Selection: any;

  operator: PrototypeProperty;
  interlacingDistance: number;
  lowThreshold: number;
  highThreshold: number;
  numberOfIterations: number;
  amount: number;
  selectionPoint: number;
  structureName: string;
  structureSize: number;
  structureWayTable: [
    // mask
    [number[]]
  ];
}

declare class MultiscaleLinearTransform extends ProcessInstance {
  AllPixelChanges: any;
  DecreasingPixels: any;
  Disabled: any;
  Hyperbolic: any;
  IncreasingPixels: any;
  Ln: any;
  Log10: any;
  NoFunction: any;
  StarletTransform: any;

  layers: // enabled, biasEnabled, bias, noiseReductionEnabled, noiseReductionThreshold, noiseReductionAmount, noiseReductionIterations
  [
    enabled: boolean,
    biasEnabled: boolean,
    bias: number,
    noiseReductionEnabled: boolean,
    noiseReductionThreshold: number,
    noiseReductionAmount: number,
    noiseReductionIterations: number
  ][];
  transform: any;
  scaleDelta: number;
  scalingFunctionData: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  scalingFunctionRowFilter: [number, number, number];
  scalingFunctionColFilter: [number, number, number];
  scalingFunctionNoiseSigma: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  scalingFunctionName: string;
  linearMask: boolean;
  linearMaskAmpFactor: number;
  linearMaskSmoothness: number;
  linearMaskInverted: boolean;
  linearMaskPreview: boolean;
  largeScaleFunction: any;
  curveBreakPoint: number;
  noiseThresholding: boolean;
  noiseThresholdingAmount: number;
  noiseThreshold: number;
  softThresholding: boolean;
  useMultiresolutionSupport: boolean;
  deringing: boolean;
  deringingDark: number;
  deringingBright: number;
  outputDeringingMaps: boolean;
  lowRange: number;
  highRange: number;
  previewMode: any;
  previewLayer: number;
  toLuminance: boolean;
  toChrominance: boolean;
  linear: boolean;
}

declare class MultiscaleMedianTransform extends ProcessInstance {
  AllPixelChanges: any;
  DecreasingPixels: any;
  Disabled: any;
  IncreasingPixels: any;
  MedianWaveletTransform: any;
  MultiscaleMedianTransform: any;

  layers: [
    // enabled, biasEnabled, bias, noiseReductionEnabled, noiseReductionThreshold, noiseReductionAmount, noiseReductionAdaptive,
    enabled: boolean,
    biasEnabled: boolean,
    bias: number,
    noiseReductionEnabled: boolean,
    noiseReductionThreshold: number,
    noiseReductionAmount: number,
    noiseReductionAdaptive: number
  ][];
  transform: PrototypeProperty;
  medianWaveletThreshold: number;
  scaleDelta: number;
  linearMask: boolean;
  linearMaskAmpFactor: number;
  linearMaskSmoothness: number;
  linearMaskInverted: boolean;
  linearMaskPreview: boolean;
  lowRange: number;
  highRange: number;
  previewMode: PrototypeProperty;
  previewLayer: number;
  toLuminance: boolean;
  toChrominance: boolean;
  linear: boolean;
}

declare class NoiseGenerator extends ProcessInstance {
  Impulsional: any;
  None: any;
  Normal: any;
  Poisson: any;
  PreserveMean: any;
  PreserveMedian: any;
  Uniform: any;

  amount: number;
  distribution: PrototypeProperty;
  impulsionalNoiseProbability: number;
  preserveBrightness: PrototypeProperty;
}

declare class PixelMath extends ProcessInstance {
  Gray: any;
  RGB: any;
  SameAsTarget: any;
  f32: any;
  f64: any;
  i16: any;
  i32: any;
  i8: any;

  expression: string;
  expression1: string;
  expression2: string;
  expression3: string;
  useSingleExpression: boolean;
  symbols: string;
  generateOutput: boolean;
  singleThreaded: boolean;
  optimization: boolean;
  use64BitWorkingImage: boolean;
  rescale: boolean;
  rescaleLower: number;
  rescaleUpper: number;
  truncate: boolean;
  truncateLower: number;
  truncateUpper: number;
  createNewImage: boolean;
  showNewImage: boolean;
  newImageId: string;
  newImageWidth: number;
  newImageHeight: number;
  newImageAlpha: boolean;
  newImageColorSpace: PrototypeProperty;
  newImageSampleFormat: PrototypeProperty;

  outputData: [
    // globalVariableId, globalVariableRK, globalVariableG, globalVariableB
    globalVariableId: any,
    globalVariableRK: any,
    globalVariableG: any,
    globalVariableB: any
  ][];
}

declare class RGBWorkingSpace extends ProcessInstance {
  channels: [
    // Y, x, y
    Y: number,
    x: number,
    y: number
  ][];
  gamma: number;
  sRGBGamma: boolean;
  applyGlobalRGBWS: boolean;
}

declare class Resample extends ProcessInstance {
  AbsoluteCentimeters: any;
  AbsoluteInches: any;
  AbsolutePixels: any;
  Auto: any;
  BicubicBSpline: any;
  BicubicSpline: any;
  Bilinear: any;
  CatmullRomSplineFilter: any;
  CubicBSplineFilter: any;
  ForceArea: any;
  ForceHeight: any;
  ForceWidth: any;
  ForceWidthAndHeight: any;
  Lanczos3: any;
  Lanczos4: any;
  MitchellNetravaliFilter: any;
  NearestNeighbor: any;
  RelativeDimensions: any;

  xSize: number;
  ySize: number;
  mode: PrototypeProperty;
  absoluteMode: PrototypeProperty;
  xResolution: number;
  yResolution: number;
  metric: boolean;
  forceResolution: boolean;
  interpolation: PrototypeProperty;
  clampingThreshold: number;
  smoothness: number;
  noGUIMessages: boolean;
}

declare class Rescale extends ProcessInstance {
  CIEL: any;
  CIEY: any;
  RGBK: any;
  RGBK_Individual: any;

  mode: PrototypeProperty;
}

declare class RestorationFilter extends ProcessInstance {
  ConstrainedLeastSquares: any;
  External: any;
  Gaussian: any;
  K: any;
  MotionBlur: any;
  Parametric: any;
  Wiener: any;

  gamma: number;
  algorithm: PrototypeProperty;
  psfMode: PrototypeProperty;
  psfSigma: number;
  psfShape: number;
  psfAspectRatio: number;
  psfRotationAngle: number;
  psfMotionLength: number;
  psfMotionRotationAngle: number;
  psfViewId: string;
  amount: number;
  deringing: boolean;
  deringingDark: number;
  deringingBright: number;
  outputDeringingMaps: boolean;
  toLuminance: boolean;
  linear: boolean;
  rangeLow: number;
  rangeHigh: number;
}

declare class Rotation extends ProcessInstance {
  Auto: any;
  BicubicBSpline: any;
  BicubicSpline: any;
  Bilinear: any;
  CatmullRomSplineFilter: any;
  CubicBSplineFilter: any;
  Lanczos3: any;
  Lanczos4: any;
  MitchellNetravaliFilter: any;
  NearestNeighbor: any;

  angle: number;
  optimizeFast: boolean;
  interpolation: PrototypeProperty;
  clampingThreshold: number;
  smoothness: number;
  red: number;
  green: number;
  blue: number;
  alpha: number;
  noGUIMessages: boolean;
}

declare class SCNR extends ProcessInstance {
  AdditiveMask: any;
  AverageNeutral: any;
  Blue: any;
  Green: any;
  MaximumMask: any;
  MaximumNeutral: any;
  MinimumNeutral: any;
  Red: any;

  amount: number;
  protectionMethod: PrototypeProperty;
  colorToRemove: PrototypeProperty;
  preserveLightness: boolean;
}

declare class SampleFormatConversion extends ProcessInstance {
  To16Bit: any;
  To32Bit: any;
  To8Bit: any;
  ToDouble: any;
  ToFloat: any;

  format: PrototypeProperty;
}

declare class SimplexNoise extends ProcessInstance {
  Add: any;
  And: any;
  Copy: any;
  Dif: any;
  Div: any;
  Mul: any;
  Nand: any;
  Nor: any;
  Or: any;
  Pow: any;
  Screen: any;
  Sub: any;
  Xnor: any;
  Xor: any;

  amount: number;
  scale: number;
  offsetX: number;
  offsetY: number;
  operator: PrototypeProperty;
}

declare class StarNet extends ProcessInstance {
  Stride_128: any;
  Stride_16: any;
  Stride_32: any;
  Stride_64: any;
  Stride_8: any;

  stride: PrototypeProperty;
  mask: boolean;
}

declare class TGVDenoise extends ProcessInstance {
  rgbkMode: boolean;
  filterEnabledL: boolean;
  filterEnabledC: boolean;
  strengthL: number;
  strengthC: number;
  edgeProtectionL: number;
  edgeProtectionC: number;
  smoothnessL: number;
  smoothnessC: number;
  maxIterationsL: number;
  maxIterationsC: number;
  convergenceEnabledL: boolean;
  convergenceEnabledC: boolean;
  convergenceLimitL: number;
  convergenceLimitC: number;
  supportEnabled: boolean;
  supportViewId: string;
  supportPreview: boolean;
  supportRemovedWaveletLayers: number;
  supportShadowsClip: number;
  supportHighlightsClip: number;
  supportMidtonesBalance: number;
}

declare class UnsharpMask extends ProcessInstance {
  sigma: number;
  amount: number;
  useLuminance: boolean;
  linear: boolean;
  deringing: boolean;
  deringingDark: number;
  deringingBright: number;
  outputDeringingMaps: boolean;
  rangeLow: number;
  rangeHigh: number;
}

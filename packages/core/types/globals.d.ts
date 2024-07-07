declare class Bitmap {
  constructor(...args: any[]);
  and: any;
  assign: any;
  bounds: any;
  clear: any;
  copy: any;
  fill: any;
  height: any;
  invert: any;
  invertRect: any;
  isEmpty: any;
  load: any;
  mirrored: any;
  mirroredHorizontally: any;
  mirroredVertically: any;
  or: any;
  physicalPixelRatio: any;
  pixel: any;
  pixelFormat: any;
  replaceColor: any;
  rotated: any;
  save: any;
  scaled(...args: any[]): Bitmap;
  scaledTo(...args: any[]): Bitmap;
  setAlpha: any;
  setPixel: any;
  setTransparency: any;
  subimage: any;
  width: any;
  xor: any;
  xorRect: any;
}
declare class Brush {
  constructor(...args: any[]);
  assign: any;
  color: any;
  isEmpty: any;
  isSolid: any;
  isStippled: any;
  stipple: any;
  style: any;
}
declare class ByteArray {
  constructor(...args: any[]);
  add: any;
  assign: any;
  at: any;
  available: any;
  binarySearch: any;
  capacity: any;
  clear: any;
  grow: any;
  hash: any;
  hash32: any;
  hash64: any;
  insert: any;
  isEmpty: any;
  length: any;
  linearSearch: any;
  lowerBound: any;
  remove: any;
  replace: any;
  reserve: any;
  reverse: any;
  sort: any;
  squeeze: any;
  swap: any;
  toBase64: any;
  toFloat32Array: any;
  toFloat64Array: any;
  toHex: any;
  toInt16Array: any;
  toInt32Array: any;
  toInt8Array: any;
  toString: any;
  toUint16Array: any;
  toUint32Array: any;
  toUint8Array: any;
  toUint8ClampedArray: any;
  upperBound: any;
  utf8ToString: any;
}
declare class Cipher {
  constructor(...args: any[]);
  algorithm: any;
  algorithmName: any;
  decrypt: any;
  encrypt: any;
  keyLength: any;
}
declare class Complex {
  constructor(...args: any[]);
  abs: any;
  add: any;
  arg: any;
  assign: any;
  conj: any;
  cos: any;
  cosh: any;
  div: any;
  exp: any;
  i: any;
  im: any;
  imag: any;
  ln: any;
  log: any;
  mag: any;
  mul: any;
  norm: any;
  pow: any;
  r: any;
  re: any;
  real: any;
  setConj: any;
  setCos: any;
  setCosh: any;
  setExp: any;
  setLn: any;
  setLog: any;
  setSin: any;
  setSinh: any;
  setSqrt: any;
  setTan: any;
  setTanh: any;
  sin: any;
  sinh: any;
  sqrt: any;
  sub: any;
  tan: any;
  tanh: any;
  toArray: any;
  toString: any;
}
declare class Compression {
  constructor(...args: any[]);
  algorithmName: any;
  byteShuffling: any;
  checksums: any;
  compress: any;
  compressionLevel: any;
  defaultCompressionLevel: any;
  itemSize: any;
  maxCompressionLevel: any;
  subblockSize: any;
  uncompress: any;
}
declare class ConicalGradientBrush {
  constructor(...args: any[]);
  angle: any;
  center: any;
}
declare class CoreApplication {
  constructor(...args: any[]);
}
declare class CryptographicHash {
  constructor(...args: any[]);
  algorithm: any;
  algorithmName: any;
  finalize: any;
  hash: any;
  hashLength: any;
  initialize: any;
  update: any;
}
declare class Cursor {
  constructor(...args: any[]);
  assign: any;
  bitmap: any;
  hotSpot: any;
  hotX: any;
  hotY: any;
}
declare class ElapsedTime {
  constructor(...args: any[]);
  reset: any;
  since: any;
  text: any;
  value: any;
}
declare class EphemerisFile {
  constructor(...args: any[]);
  authors: any;
  briefDescription: any;
  close: any;
  constantValue: any;
  constants: any;
  copyright: any;
  creationTime: any;
  creatorApplication: any;
  creatorOS: any;
  description: any;
  endTime: any;
  filePath: any;
  isConstantAvailable: any;
  isObjectAvailable: any;
  objectName: any;
  objects: any;
  open: any;
  organizationName: any;
  startTime: any;
  title: any;
}
declare class EphemerisHandle {
  constructor(...args: any[]);
  B_V: any;
  D: any;
  G: any;
  H: any;
  endTime: any;
  hasDerivative: any;
  objectId: any;
  objectName: any;
  originId: any;
  startTime: any;
  stateVector: any;
  stateVectors: any;
}
declare class ExternalProcess {
  constructor(...args: any[]);
  bytesAvailable: any;
  bytesToWrite: any;
  closeStandardError: any;
  closeStandardInput: any;
  closeStandardOutput: any;
  environment: any;
  error: any;
  exitCode: any;
  exitStatus: any;
  isRunning: any;
  isStarting: any;
  kill: any;
  onError: any;
  onFinished: any;
  onStandardErrorDataAvailable: any;
  onStandardOutputDataAvailable: any;
  onStarted: any;
  onStateChanged: any;
  outputData: any;
  pid: any;
  redirectStandardError: any;
  redirectStandardInput: any;
  redirectStandardOutput: any;
  standardError: any;
  standardInput: any;
  standardOutput: any;
  start: any;
  stderr: any;
  stdin: any;
  stdout: any;
  terminate: any;
  waitForDataAvailable: any;
  waitForDataWritten: any;
  waitForFinished: any;
  waitForStarted: any;
  workingDirectory: any;
}
declare class FITSKeyword {
  constructor(...args: any[]);
  assign: any;
  comment: any;
  isBoolean: any;
  isNull: any;
  isNumeric: any;
  isString: any;
  name: any;
  numericValue: any;
  strippedValue: any;
  toArray: any;
  toString: any;
  trim: any;
  value: any;
}
declare class File {
  constructor(...args: any[]);
  canRead: any;
  canWrite: any;
  close: any;
  create: any;
  createForWriting: any;
  flush: any;
  isEOF: any;
  isOpen: any;
  mode: any;
  open: any;
  openForReadWrite: any;
  openForReading: any;
  openOrCreate: any;
  outText: any;
  outTextLn: any;
  path: any;
  position: any;
  read: any;
  rewind: any;
  seek: any;
  seekEnd: any;
  size: any;
  write: any;
}
declare class FileDialog {
  constructor(...args: any[]);
  caption: any;
  execute: any;
  filters: any;
  initialPath: any;
  selectedFileExtension: any;
}
declare class FileDownload {
  constructor(...args: any[]);
  contentType: any;
}
declare class FileFind {
  constructor(...args: any[]);
  attributes: any;
  begin: any;
  created: any;
  end: any;
  groupId: any;
  isDirectory: any;
  isFile: any;
  isHidden: any;
  isSymbolicLink: any;
  isValid: any;
  lastAccessed: any;
  lastModified: any;
  name: any;
  next: any;
  numberOfLinks: any;
  searchPath: any;
  size: any;
  userId: any;
}
declare class FileFormat {
  constructor(...args: any[]);
  canEditPreferences: any;
  canRead: any;
  canReadIncrementally: any;
  canStore16Bit: any;
  canStore32Bit: any;
  canStore64Bit: any;
  canStore8Bit: any;
  canStoreAlphaChannels: any;
  canStoreColorFilterArrays: any;
  canStoreComplex: any;
  canStoreDComplex: any;
  canStoreDisplayFunctions: any;
  canStoreDouble: any;
  canStoreFloat: any;
  canStoreGrayscale: any;
  canStoreICCProfiles: any;
  canStoreImageProperties: any;
  canStoreKeywords: any;
  canStoreProperties: any;
  canStoreRGBColor: any;
  canStoreRGBWS: any;
  canStoreResolution: any;
  canStoreThumbnails: any;
  canWrite: any;
  canWriteIncrementally: any;
  description: any;
  disposeFormatSpecificData: any;
  editPreferences: any;
  fileExtensions: any;
  icon: any;
  implementation: any;
  isDeprecated: any;
  mimeTypes: any;
  name: any;
  queryFormatStatus: any;
  smallIcon: any;
  supportsCompression: any;
  supportsMultipleImages: any;
  supportsViewProperties: any;
  usesFormatSpecificData: any;
  validateFormatSpecificData: any;
  version: any;
}
declare class FileFormatInstance {
  constructor(...args: any[]);
  close: any;
  colorFilterArray: any;
  create: any;
  createImage: any;
  displayFunction: any;
  filePath: any;
  format: any;
  formatSpecificData: any;
  iccProfile: any;
  imageFormatInfo: any;
  imageProperties: any;
  isOpen: any;
  keywords: any;
  open: any;
  properties: any;
  read: any;
  readImage: any;
  readImageProperty: any;
  readProperty: any;
  rgbws: any;
  selectedImageIndex: any;
  setImageId: any;
  setOptions: any;
  thumbnail: any;
  wasInexactRead: any;
  wasLossyWrite: any;
  write: any;
  writeImage: any;
  writeImageProperty: any;
  writeProperty: any;
}
declare class FileInfo {
  constructor(...args: any[]);
  assign: any;
  attributes: any;
  clear: any;
  completeSuffix: any;
  directory: any;
  drive: any;
  exists: any;
  extension: any;
  groupId: any;
  isDirectory: any;
  isExecutable: any;
  isFile: any;
  isHidden: any;
  isReadable: any;
  isSymbolicLink: any;
  isWritable: any;
  lastAccessed: any;
  lastModified: any;
  name: any;
  nameAndExtension: any;
  nameAndSuffix: any;
  numberOfHardLinks: any;
  path: any;
  refresh: any;
  size: any;
  suffix: any;
  symbolicLinkTarget: any;
  timeCreated: any;
  userId: any;
}
declare class FileTransfer {
  constructor(...args: any[]);
  bytesTransferred: any;
  isDownload: any;
  isUpload: any;
  localFilePath: any;
  ok: any;
  perform: any;
  remoteURL: any;
  responseCode: any;
  totalSpeed: any;
  totalTime: any;
}
declare class FileUpload {
  constructor(...args: any[]);
}
declare class FileWatcher {
  constructor(...args: any[]);
  addPath: any;
  addPaths: any;
  clear: any;
  directories: any;
  files: any;
  onDirectoryChanged: any;
  onFileChanged: any;
  removePath: any;
  removePaths: any;
}
declare class Font {
  constructor(...args: any[]);
  ascent: any;
  assign: any;
  bold: any;
  boundingRect: any;
  descent: any;
  face: any;
  family: any;
  fixedPitch: any;
  height: any;
  isCharDefined: any;
  isExactMatch: any;
  italic: any;
  kerning: any;
  lineSpacing: any;
  maxWidth: any;
  overline: any;
  pixelSize: any;
  pointSize: any;
  stretchFactor: any;
  strikeOut: any;
  tightBoundingRect: any;
  underline: any;
  unscaledPointSize: any;
  weight: any;
  width: any;
}
declare class GetDirectoryDialog {
  constructor(...args: any[]);
  directory: any;
}
declare class GradientBrush {
  constructor(...args: any[]);
  spreadMode: any;
  stops: any;
}
declare class Graphics {
  constructor(...args: any[]);
  antialiasing: any;
  backgroundBrush: any;
  begin: any;
  brush: any;
  brushOrigin: any;
  clipRect: any;
  clipping: any;
  compositionOperator: any;
  drawArc: any;
  drawBitmap: any;
  drawBitmapRect: any;
  drawChord: any;
  drawCircle: any;
  drawEllipse: any;
  drawEllipticArc: any;
  drawEllipticChord: any;
  drawEllipticPie: any;
  drawLine: any;
  drawPie: any;
  drawPoint: any;
  drawPolygon: any;
  drawPolyline: any;
  drawRect: any;
  drawRoundedRect: any;
  drawScaledBitmap: any;
  drawScaledBitmapRect: any;
  drawText: any;
  drawTextRect: any;
  drawTiledBitmap: any;
  end: any;
  eraseChord: any;
  eraseCircle: any;
  eraseEllipse: any;
  eraseEllipticChord: any;
  eraseEllipticPie: any;
  erasePie: any;
  erasePolygon: any;
  eraseRect: any;
  eraseRoundedRect: any;
  fillChord: any;
  fillCircle: any;
  fillEllipse: any;
  fillEllipticChord: any;
  fillEllipticPie: any;
  fillPie: any;
  fillPolygon: any;
  fillRect: any;
  fillRoundedRect: any;
  font: any;
  isPainting: any;
  multiplyTransformation: any;
  opacity: any;
  pen: any;
  popState: any;
  pushState: any;
  resetTransformation: any;
  rotateTransformation: any;
  scaleTransformation: any;
  shearTransformation: any;
  smoothInterpolation: any;
  strokeChord: any;
  strokeCircle: any;
  strokeEllipse: any;
  strokeEllipticChord: any;
  strokeEllipticPie: any;
  strokePie: any;
  strokePolygon: any;
  strokeRect: any;
  strokeRoundedRect: any;
  textAntialiasing: any;
  textRect: any;
  transformationEnabled: any;
  transformationMatrix: any;
  transformed: any;
  translateTransformation: any;
  transparentBackground: any;
}
declare class GridInterpolation {
  constructor(...args: any[]);
  assign: any;
  clear: any;
  delta: any;
  evaluate: any;
  initialize: any;
  isValid: any;
  referenceRect: any;
}
declare class Histogram {
  constructor(...args: any[]);
  assign: any;
  clipHigh: any;
  clipLow: any;
  count: any;
  entropy: any;
  generate: any;
  histogramLevel: any;
  isEmpty: any;
  lastLevel: any;
  normalizedClipHigh: any;
  normalizedClipLow: any;
  normalizedLevel: any;
  normalizedPeakLevel: any;
  peakCount: any;
  peakLevel: any;
  resample: any;
  resolution: any;
  toArray: any;
  totalCount: any;
}
declare class Image {
  constructor(...args: any[]);
  ATW: any;
  BWMV: any;
  FFT: any;
  MAD: any;
  MLT: any;
  MMT: any;
  MWT: any;
  PBMV: any;
  Qn: any;
  Sn: any;
  aTrousWaveletTransform: any;
  advanceStatus: any;
  allocate: any;
  apply: any;
  assign: any;
  assignStatus: any;
  avgDev: any;
  bendMidvariance: any;
  binarize: any;
  bitsPerSample: any;
  biweightMidvariance: any;
  blend: any;
  bounds: any;
  canPopSelections: any;
  clonePixelData: any;
  colorSpace: any;
  completeStatus: any;
  convolve: any;
  convolveFFT: any;
  convolveSeparable: any;
  count: any;
  createAlphaChannels: any;
  crop: any;
  cropBy: any;
  cropTo: any;
  deleteAlphaChannel: any;
  deleteAlphaChannels: any;
  extractLuminance: any;
  fastFourierTransform: any;
  fill: any;
  firstSelectedChannel: any;
  forEachMutablePixel: any;
  forEachMutableSample: any;
  forEachPixel: any;
  forEachSample: any;
  free: any;
  getIntensity: any;
  getLightness: any;
  getLuminance: any;
  getPixelValue: any;
  getPixels: any;
  getSamples: any;
  hasAlphaChannels: any;
  height: any;
  highRangeClippingEnabled: any;
  initPixelIterator: any;
  initSampleIterator: any;
  initializeStatus: any;
  interpolate: any;
  interpolation: any;
  interpolationClamping: any;
  interpolationSmoothness: any;
  interpolationXRadius: any;
  interpolationYRadius: any;
  inverseATW: any;
  inverseATrousWaveletTransform: any;
  inverseFFT: any;
  inverseFastFourierTransform: any;
  inverseMLT: any;
  inverseMMT: any;
  inverseMWT: any;
  inverseMedianWaveletTransform: any;
  inverseMultiscaleLinearTransform: any;
  inverseMultiscaleMedianTransform: any;
  inverseMultiscaleTransform: any;
  inverseStarletTransform: any;
  invert: any;
  isColor: any;
  isComplex: any;
  isEmpty: any;
  isGrayscale: any;
  isInteger: any;
  isReal: any;
  isStatusCompleted: any;
  isStatusInitialized: any;
  lastSelectedChannel: any;
  logPolarTransform: any;
  lowRangeClippingEnabled: any;
  maximum: any;
  maximumPosition: any;
  mean: any;
  meanOfSquares: any;
  median: any;
  medianWaveletTransform: any;
  minimum: any;
  minimumPosition: any;
  mirrorHorizontal: any;
  mirrorVertical: any;
  modulus: any;
  morphologicalTransformation: any;
  multiscaleLinearTransform: any;
  multiscaleMedianTransform: any;
  nextPixel: any;
  nextSample: any;
  noiseKSigma: any;
  noiseMRS: any;
  norm: any;
  normalize: any;
  numberOfAlphaChannels: any;
  numberOfAlphaSamples: any;
  numberOfChannels: any;
  numberOfNominalChannels: any;
  numberOfNominalSamples: any;
  numberOfPixels: any;
  numberOfSamples: any;
  numberOfSelectedChannels: any;
  numberOfSelectedPixels: any;
  numberOfSelectedSamples: any;
  pixelValue: any;
  polarTransform: any;
  popSelections: any;
  previousPixel: any;
  previousSample: any;
  pushSelections: any;
  rangeClipHigh: any;
  rangeClipLow: any;
  rangeClippingEnabled: any;
  readRawFile: any;
  render(): Bitmap;
  resample: any;
  rescale: any;
  resetChannelSelection: any;
  resetRectSelection: any;
  resetSelections: any;
  rotate: any;
  rotate180: any;
  rotate90ccw: any;
  rotate90cw: any;
  sample: any;
  sampleType: any;
  sampleValue: any;
  selectedChannel: any;
  selectedPoint: any;
  selectedRect: any;
  selectionPoint: any;
  setAbs: any;
  setLightness: any;
  setLuminance: any;
  setPixelValue: any;
  setPixels: any;
  setSample: any;
  setSampleValue: any;
  setSamples: any;
  shift: any;
  shiftBy: any;
  shiftTo: any;
  skipPixels: any;
  skipSamples: any;
  starletTransform: any;
  statusCount: any;
  statusEnabled: any;
  statusInfo: any;
  statusInitializationEnabled: any;
  statusTotal: any;
  stdDev: any;
  sumOfSquares: any;
  swap: any;
  toFloat32Array: any;
  toFloat64Array: any;
  toMatrix: any;
  toUint16Array: any;
  toUint32Array: any;
  toUint8Array: any;
  transfer: any;
  translate: any;
  truncate: any;
  twoSidedAvgDev: any;
  twoSidedBWMV: any;
  twoSidedBiweightMidvariance: any;
  twoSidedMAD: any;
  variance: any;
  width: any;
  writeRawFile: any;

  static newFloatImage: any;
}
declare class ImageDescription {
  constructor(...args: any[]);
  aperture: any;
  assign: any;
  bitsPerSample: any;
  cfaType: any;
  colorSpace: any;
  complexSample: any;
  embedColorFilterArray: any;
  embedDisplayFunction: any;
  embedICCProfile: any;
  embedPreviewRects: any;
  embedProperties: any;
  embedRGBWS: any;
  embedThumbnail: any;
  exposure: any;
  focalLength: any;
  height: any;
  id: any;
  ieeefpSampleFormat: any;
  isoSpeed: any;
  lowerRange: any;
  metricResolution: any;
  numberOfChannels: any;
  signedIntegers: any;
  supported: any;
  upperRange: any;
  width: any;
  xResolution: any;
  yResolution: any;
}
declare class ImageStatistics {
  constructor(...args: any[]);
  assign: any;
  averageDeviation: any;
  avgDev: any;
  avgDevEnabled: any;
  bendMidvariance: any;
  biweightMidvariance: any;
  bwmv: any;
  bwmvEnabled: any;
  count: any;
  extremesEnabled: any;
  generate: any;
  highRejectionEnabled: any;
  lowRejectionEnabled: any;
  mad: any;
  madEnabled: any;
  maximum: any;
  maximumPosition: any;
  mean: any;
  meanEnabled: any;
  median: any;
  medianDeviation: any;
  medianEnabled: any;
  minimum: any;
  minimumPosition: any;
  pbmv: any;
  pbmvEnabled: any;
  qn: any;
  qnEnabled: any;
  rejectionHigh: any;
  rejectionLow: any;
  sn: any;
  snEnabled: any;
  standardDeviation: any;
  stdDev: any;
  sumOfSquares: any;
  sumOfSquaresEnabled: any;
  variance: any;
  varianceEnabled: any;
}
declare class ImageWindow {
  constructor(...args: any[]);
  aperture: any;
  applyColorTransformation: any;
  astrometricSolution: any;
  astrometricSolutionSummary: any;
  bitsPerSample: any;
  bringToFront: any;
  celestialToImage: any;
  cfaType: any;
  clearAstrometricSolution: any;
  close: any;
  commitPendingUpdates: any;
  copyAstrometricSolution: any;
  createPreview: any;
  currentView: any;
  deiconize: any;
  deletePreview: any;
  deletePreviews: any;
  exposure: any;
  filePath: any;
  fileURL: any;
  fitWindow: any;
  focalLength: any;
  forceClose: any;
  geometry: any;
  go: any;
  hasMaskReferences: any;
  hasPendingUpdates: any;
  height: any;
  hide: any;
  horizontalResolution: any;
  iconic: any;
  iconize: any;
  imageScalarToViewport: any;
  imageToCelestial: any;
  imageToViewport: any;
  isACopy: any;
  isClosed: any;
  isComplexSample: any;
  isFloatSample: any;
  isMaskCompatible: any;
  isMaskOf: any;
  isModified: any;
  isNew: any;
  isNull: any;
  isValidView: any;
  isWindow: any;
  isoSpeed: any;
  keywords: any;
  mainView: View;
  mask: any;
  maskEnabled: any;
  maskInverted: any;
  maskMode: any;
  maskVisible: any;
  metricResolution: any;
  modifyPreview: any;
  numberOfPreviews: any;
  position: any;
  previewById: any;
  previewRect: any;
  previews: any;
  purge: any;
  redo: any;
  redoAll: any;
  regenerate: any;
  regenerateAstrometricSolution: any;
  removeMask: any;
  removeMaskReferences: any;
  resolution: any;
  rgbWorkingSpace: any;
  save: any;
  saveAs: any;
  selectedPreview: any;
  sendToBack: any;
  setAstrometricSolution: any;
  setMask: any;
  setResolution: any;
  setSampleFormat: any;
  setViewport: any;
  show: any;
  transparencyColor: any;
  transparencyMode: any;
  transparencyVisible: any;
  undo: any;
  undoAll: any;
  updateAstrometryMetadata: any;
  updateImageRect: any;
  updateMaskReferences: any;
  updateViewport: any;
  updateViewportRect: any;
  verticalResolution: any;
  viewportHeight: any;
  viewportPosition: any;
  viewportScalarToImage: any;
  viewportToImage: any;
  viewportUpdateRect: any;
  viewportWidth: any;
  visible: any;
  visibleViewportRect: any;
  width: any;
  zoomFactor: any;
  zoomIn: any;
  zoomOut: any;
  zoomToFit: any;
  zoomToOptimalFit: any;
}

declare class LinearFunction {
  constructor(...args: any[]);
  adev: any;
  b: any;
  evaluate: any;
  fit: any;
  intercept: any;
  isValid: any;
  m: any;
  slope: any;
}
declare class LinearGradientBrush {
  constructor(...args: any[]);
  end: any;
  start: any;
  x1: any;
  x2: any;
  y1: any;
  y2: any;
}
declare class Matrix {
  constructor(...args: any[]);
  BWMV: any;
  MAD: any;
  PBMV: any;
  Qn: any;
  Sn: any;
  abs: any;
  add: any;
  addElementWise: any;
  assign: any;
  at: any;
  avgDev: any;
  bendMidvariance: any;
  binarySearch: any;
  biweightMidvariance: any;
  colVector: any;
  cols: any;
  columnVector: any;
  columns: any;
  div: any;
  divElementWise: any;
  flip: any;
  flipped: any;
  inverse: any;
  invert: any;
  invertElementWise: any;
  isEmpty: any;
  isEqualTo: any;
  isLessThan: any;
  linearSearch: any;
  maxElement: any;
  mean: any;
  median: any;
  minElement: any;
  modulus: any;
  mul: any;
  mulElementWise: any;
  numberOfElements: any;
  pow: any;
  powElementWise: any;
  rescale: any;
  rowVector: any;
  rows: any;
  sameElements: any;
  setAbs: any;
  setRandom: any;
  setSqr: any;
  setSqrt: any;
  sort: any;
  sqr: any;
  sqrt: any;
  stableAvgDev: any;
  stableMean: any;
  stableModulus: any;
  stableSum: any;
  stableSumOfSquares: any;
  stdDev: any;
  sub: any;
  subElementWise: any;
  sum: any;
  sumOfSquares: any;
  swap: any;
  toArray: any;
  toFloat32Array: any;
  toFloat64Array: any;
  toImage: any;
  transpose: any;
  trimmedMean: any;
  trimmedMeanOfSquares: any;
  truncate: any;
  twoSidedAvgDev: any;
  twoSidedBWMV: any;
  twoSidedBiweightMidvariance: any;
  twoSidedMAD: any;
  variance: any;

  static linearFilter: any;
  static gaussianFilterBySize: any;
  static fromImage: any;
}
declare class MessageBox {
  constructor(...args: any[]);
  caption: any;
  defaultButton: any;
  escapeButton: any;
  execute: any;
  firstButton: any;
  icon: any;
  result: any;
  secondButton: any;
  text: any;
  thirdButton: any;
}
declare class MessageListener {
  constructor(...args: any[]);
  onMessage: any;
}
declare class NetworkTransfer {
  constructor(...args: any[]);
  aborted: any;
  bytesTransferred: any;
  closeConnection: any;
  contentType: any;
  customHTTPHeaders: any;
  download: any;
  errorInformation: any;
  ok: any;
  onDownloadDataAvailable: any;
  onTransferProgress: any;
  onUploadDataRequested: any;
  post: any;
  proxyURL: any;
  responseCode: any;
  setConnectionTimeout: any;
  setCustomHTTPHeaders: any;
  setProxyURL: any;
  setSSL: any;
  setURL: any;
  smtp: any;
  totalSpeed: any;
  totalTime: any;
  upload: any;
  url: any;
}
declare class ObserverPosition {
  constructor(...args: any[]);
  cioBased: any;
  equatorialRadius: any;
  flattening: any;
  height: any;
  lambda: any;
  latitude: any;
  longitude: any;
  phi: any;
  regionalCenter: any;
}
declare class OpenFileDialog {
  constructor(...args: any[]);
  fileName: any;
  fileNames: any;
  loadImageFilters: any;
  multipleSelections: any;
}

// Parameters type collides with an internal TS type defined in lib.es5.d.ts
// That's why it was forked
declare class Parameters {
  static readonly isGlobalTarget: boolean;
  static readonly isViewTarget: boolean;
  static readonly targetView: View;

  static clear(): void;
  static get(id: string): string;
  static getBoolean(id: string): string;
  static getInteger(id: string): string;
  static getReal(id: string): string;
  static getString(id: string): string;
  static getUInt(id: string): string;
  static has(id: string): boolean;
  static remove(id: string): void;
  static set(id: string, value: any): void;
}

declare class PDF {
  constructor(...args: any[]);
  bottomMargin: any;
  creator: any;
  filePath: any;
  fullRect: any;
  isPainting: any;
  landscape: any;
  leftMargin: any;
  margins: any;
  maxMargins: any;
  minMargins: any;
  outputData: any;
  pageSize: any;
  paintRect: any;
  portrait: any;
  resolution: any;
  rightMargin: any;
  title: any;
  topMargin: any;
}
declare class Pen {
  constructor(...args: any[]);
  assign: any;
  brush: any;
  cap: any;
  color: any;
  isEmpty: any;
  isSolid: any;
  join: any;
  style: any;
  width: any;
}
declare class Point {
  constructor(...args: any[]);
  add: any;
  assign: any;
  distanceTo: any;
  div: any;
  dot: any;
  isEqualTo: any;
  isLessThan: any;
  moveBy: any;
  moveTo: any;
  movedBy: any;
  movedTo: any;
  mul: any;
  rotate: any;
  rotated: any;
  round: any;
  rounded: any;
  sub: any;
  symmetric: any;
  symmetrize: any;
  toArray: any;
  toString: any;
  toVector: any;
  transform: any;
  transformed: any;
  translate: any;
  translateBy: any;
  translated: any;
  translatedBy: any;
  truncate: any;
  truncated: any;
  x: any;
  y: any;
}
declare class PointGridInterpolation {
  constructor(...args: any[]);
  assign: any;
  clear: any;
  delta: any;
  evaluate: any;
  initialize: any;
  isValid: any;
  referenceRect: any;
}
declare class PointSurfaceSpline {
  constructor(...args: any[]);
  clear: any;
  evaluate: any;
  initialize: any;
  isRecursive: any;
  isValid: any;
}
declare class Position {
  constructor(...args: any[]);
  CIO: any;
  CIP: any;
  CIP_ITRS: any;
  EO: any;
  ERA: any;
  GAST: any;
  TDB: any;
  TT: any;
  Teph: any;
  UT1: any;
  apparent: any;
  apparentVisualMagnitude: any;
  astrometric: any;
  barycentricPositionOfEarth: any;
  barycentricPositionOfSun: any;
  barycentricVelocityOfEarth: any;
  canComputeApparentVisualMagnitude: any;
  cioBPNMatrix: any;
  epsA: any;
  equinoxBPNMatrix: any;
  geometric: any;
  heliocentricPositionOfEarth: any;
  initCIOBasedParameters: any;
  initEquinoxBasedParameters: any;
  intermediate: any;
  isTopocentric: any;
  nutationAngles: any;
  observer: any;
  polarMotionEnabled: any;
  proper: any;
  true: any;
  trueDistance: any;
}
declare class RGBColorSystem {
  constructor(...args: any[]);
  Y: any;
  assign: any;
  cieLabToCIELch: any;
  cieLabToCIEXYZ: any;
  cieLabToRGB: any;
  cieLchToCIELab: any;
  cieLchToRGB: any;
  cieXYZToCIELab: any;
  cieXYZToRGB: any;
  gamma: any;
  lightness: any;
  luminance: any;
  rgbToCIELab: any;
  rgbToCIELch: any;
  rgbToCIEXYZ: any;
  srgbGamma: any;
  x: any;
  y: any;

  static hue: any;
  static value: any;
  static hsvSaturation: any;
  static hsiSaturation: any;
}
declare class RadialGradientBrush {
  constructor(...args: any[]);
  center: any;
  focalPoint: any;
  radius: any;
}
declare class Rect {
  constructor(...args: any[]);
  add: any;
  area: any;
  assign: any;
  bottom: any;
  center: Point;
  clipCode: any;
  deflateBy: any;
  deflatedBy: any;
  diagonal: any;
  div: any;
  height: any;
  hypot: any;
  includes: any;
  inflateBy: any;
  inflatedBy: any;
  intersect: any;
  intersection: any;
  intersects: any;
  isEqualTo: any;
  isHorizontalLine: any;
  isLessThan: any;
  isLine: any;
  isNormal: any;
  isOrdered: any;
  isPoint: any;
  isPointOrLine: any;
  isRect: any;
  isVerticalLine: any;
  left: any;
  leftBottom: any;
  leftTop: any;
  manhattanDistance: any;
  moveBy: any;
  moveTo: any;
  movedBy: any;
  movedTo: any;
  mul: any;
  order: any;
  ordered: any;
  perimeter: any;
  resizeBy: any;
  resizeTo: any;
  resizedBy: any;
  resizedTo: any;
  right: any;
  rightBottom: any;
  rightTop: any;
  rotate: any;
  rotated: any;
  round: any;
  rounded: any;
  sub: any;
  symmetric: any;
  symmetrize: any;
  toArray: any;
  toString: any;
  top: any;
  transform: any;
  transformed: any;
  translate: any;
  translateBy: any;
  translated: any;
  translatedBy: any;
  union: any;
  unite: any;
  width: any;
  x0: any;
  x1: any;
  y0: any;
  y1: any;
}
declare class SVG {
  constructor(...args: any[]);
  description: any;
  filePath: any;
  height: any;
  isPainting: any;
  outputData: any;
  resolution: any;
  size: any;
  title: any;
  viewBox: any;
  width: any;
}
declare class SaveFileDialog {
  constructor(...args: any[]);
  fileName: any;
  loadImageFilters: any;
  overwritePrompt: any;
}
declare class ShepardInterpolation {
  constructor(...args: any[]);
  clear: any;
  evaluate: any;
  initialize: any;
  isValid: any;
  power: any;
  radius: any;
}
declare class StarPosition {
  constructor(...args: any[]);
  alpha: any;
  declination: any;
  delta: any;
  epoch: any;
  muAlpha: any;
  muDelta: any;
  parallax: any;
  properMotionDec: any;
  properMotionRA: any;
  radialVelocity: any;
  rightAscension: any;
}
declare class SurfaceSimplifier {
  constructor(...args: any[]);
  centroidInclusionEnabled: any;
  rejectFraction: any;
  rejectionEnabled: any;
  simplify: any;
  tolerance: any;
}
declare class SurfaceSpline {
  constructor(...args: any[]);
  assign: any;
  clear: any;
  evaluate: any;
  initialize: any;
  isValid: any;
  length: any;
  order: any;
  smoothing: any;
}
declare class Timer {
  constructor(...args: any[]);
  count: any;
  interval: any;
  isRunning: any;
  onTimeout: any;
  periodic: any;
  singleShot: any;
  start: any;
  stop: any;
}
declare class TreeBoxNode {
  constructor(...args: any[]);
  add: any;
  alignment: any;
  backgroundColor: any;
  checkable: any;
  checked: any;
  child: any;
  clearIcon: any;
  enabled: any;
  expanded: any;
  font: any;
  icon: any;
  insert: any;
  numberOfChildren: any;
  parent: any;
  parentTree: any;
  remove: any;
  selectable: any;
  selected: any;
  setAlignment: any;
  setBackgroundColor: any;
  setFont: any;
  setIcon: any;
  setText: any;
  setTextColor: any;
  setToolTip: any;
  text: any;
  textColor: any;
  toolTip: any;
}
declare class TypeDescription {
  constructor(...args: any[]);
  constants: any;
  constructors: any;
  eventHandlers: any;
  hasConstants: any;
  hasConstructors: any;
  hasEventHandlers: any;
  hasMethods: any;
  hasProperties: any;
  hasStaticMethods: any;
  hasStaticProperties: any;
  id: any;
  inheritedBy: any;
  inherits: any;
  inheritsFrom: any;
  isNull: any;
  methods: any;
  objectsInherited: any;
  objectsInheriting: any;
  properties: any;
  staticMethods: any;
  staticProperties: any;
}
declare class Vector {
  constructor(...args: any[]);
  BWMV: any;
  MAD: any;
  PBMV: any;
  Qn: any;
  Sn: any;
  abs: any;
  add: any;
  assign: any;
  at: any;
  avgDev: any;
  bendMidvariance: any;
  binarySearch: any;
  biweightMidvariance: any;
  cross: any;
  crossProduct: any;
  div: any;
  dot: any;
  dotProduct: any;
  isEmpty: any;
  isEqualTo: any;
  isLessThan: any;
  l1norm: any;
  l2norm: any;
  length: any;
  linearSearch: any;
  lowerBound: any;
  maxComponent: any;
  mean: any;
  median: any;
  minComponent: any;
  modulus: any;
  mul: any;
  norm: any;
  orderStatistic: any;
  pow: any;
  reverse: any;
  setAbs: any;
  setRandom: any;
  setSqr: any;
  setSqrt: any;
  setUnit: any;
  sort: any;
  sqr: any;
  sqrt: any;
  stableAvgDev: any;
  stableMean: any;
  stableModulus: any;
  stableSum: any;
  stableSumOfSquares: any;
  stdDev: any;
  sub: any;
  sum: any;
  sumOfSquares: any;
  swap: any;
  toArray: any;
  toFloat32Array: any;
  toFloat64Array: any;
  toSpherical: any;
  toSpherical2Pi: any;
  trimmedMean: any;
  trimmedMeanOfSquares: any;
  twoSidedAvgDev: any;
  twoSidedBWMV: any;
  twoSidedBiweightMidvariance: any;
  twoSidedMAD: any;
  unit: any;
  upperBound: any;
  variance: any;
}
declare class VectorGraphics {
  constructor(...args: any[]);
  antialiasing: any;
  backgroundBrush: any;
  begin: any;
  brush: any;
  brushOrigin: any;
  clipRect: any;
  clipping: any;
  compositionOperator: any;
  drawArc: any;
  drawBitmap: any;
  drawBitmapRect: any;
  drawChord: any;
  drawCircle: any;
  drawEllipse: any;
  drawEllipticArc: any;
  drawEllipticChord: any;
  drawEllipticPie: any;
  drawLine: any;
  drawPie: any;
  drawPoint: any;
  drawPolygon: any;
  drawPolyline: any;
  drawRect: any;
  drawRoundedRect: any;
  drawScaledBitmap: any;
  drawScaledBitmapRect: any;
  drawText: any;
  drawTextRect: any;
  drawTiledBitmap: any;
  end: any;
  eraseChord: any;
  eraseCircle: any;
  eraseEllipse: any;
  eraseEllipticChord: any;
  eraseEllipticPie: any;
  erasePie: any;
  erasePolygon: any;
  eraseRect: any;
  eraseRoundedRect: any;
  fillChord: any;
  fillCircle: any;
  fillEllipse: any;
  fillEllipticChord: any;
  fillEllipticPie: any;
  fillPie: any;
  fillPolygon: any;
  fillRect: any;
  fillRoundedRect: any;
  font: any;
  isPainting: any;
  multiplyTransformation: any;
  opacity: any;
  pen: any;
  popState: any;
  pushState: any;
  resetTransformation: any;
  rotateTransformation: any;
  scaleTransformation: any;
  shearTransformation: any;
  smoothInterpolation: any;
  strokeChord: any;
  strokeCircle: any;
  strokeEllipse: any;
  strokeEllipticChord: any;
  strokeEllipticPie: any;
  strokePie: any;
  strokePolygon: any;
  strokeRect: any;
  strokeRoundedRect: any;
  textAntialiasing: any;
  textRect: any;
  transformationEnabled: any;
  transformationMatrix: any;
  transformed: any;
  translateTransformation: any;
  transparentBackground: any;
}
declare class View {
  constructor(...args: any[]);
  beginProcess: any;
  canGoBackward: any;
  canGoForward: any;
  cancelProcess: any;
  computeOrFetchProperty: any;
  computeProperty: any;
  deleteProperty: any;
  endProcess: any;
  exportProperties: any;
  fullId: any;
  hasProperty: any;
  historyIndex: any;
  id: any;
  image: Image;
  importProperties: any;
  initialProcessing: any;
  isMainView: any;
  isNull: any;
  isPreview: any;
  isView: any;
  isVirtual: any;
  processing: any;
  properties: any;
  propertyAttributes: any;
  propertyType: any;
  propertyValue: any;
  setPropertyAttributes: any;
  setPropertyValue: any;
  stf: any;
  uniqueId: any;
  window: any;
}

declare const console: any;
declare let jsStrictMode: boolean;
declare const format: any;
declare function gc(arg?: any): any;
declare function processEvents(): any;

interface Math {
  EPSILON: number;
  MAX: number;

  range: any;
  pow10: any;
  roundTo: any;
  ln: any;
  frac: any;
  median: any;
}

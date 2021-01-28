export function structures(image: Image) {
  const imageCopy = new Image();
  imageCopy.assign(image);

  var P = new MultiscaleLinearTransform();
  P.layers = [
    // enabled, biasEnabled, bias, noiseReductionEnabled, noiseReductionThreshold, noiseReductionAmount, noiseReductionIterations
    [true, true, 0.0, false, 3.0, 1.0, 1],
    [true, true, 0.0, false, 3.0, 1.0, 1],
    [true, true, 0.0, false, 3.0, 1.0, 1],
    [false, true, 0.0, false, 3.0, 1.0, 1],
    [false, true, 0.0, false, 3.0, 1.0, 1],
  ];
  P.transform = MultiscaleLinearTransform.prototype.StarletTransform;
  P.scaleDelta = 0;
  P.scalingFunctionData = [0.25, 0.5, 0.25, 0.5, 1, 0.5, 0.25, 0.5, 0.25];
  P.scalingFunctionRowFilter = [0.5, 1, 0.5];
  P.scalingFunctionColFilter = [0.5, 1, 0.5];
  P.scalingFunctionNoiseSigma = [
    0.8003,
    0.2729,
    0.1198,
    0.0578,
    0.0287,
    0.0143,
    0.0072,
    0.0036,
    0.0019,
    0.001,
  ];
  P.scalingFunctionName = "Linear Interpolation (3)";
  P.linearMask = false;
  P.linearMaskAmpFactor = 100;
  P.linearMaskSmoothness = 1.0;
  P.linearMaskInverted = true;
  P.linearMaskPreview = false;
  P.largeScaleFunction = MultiscaleLinearTransform.prototype.NoFunction;
  P.curveBreakPoint = 0.75;
  P.noiseThresholding = false;
  P.noiseThresholdingAmount = 1.0;
  P.noiseThreshold = 3.0;
  P.softThresholding = true;
  P.useMultiresolutionSupport = false;
  P.deringing = false;
  P.deringingDark = 0.1;
  P.deringingBright = 0.0;
  P.outputDeringingMaps = false;
  P.lowRange = 0.0;
  P.highRange = 0.0;
  P.previewMode = MultiscaleLinearTransform.prototype.Disabled;
  P.previewLayer = 0;
  P.toLuminance = true;
  P.toChrominance = true;
  P.linear = false;

  P.executeOn(imageCopy);

  return imageCopy;
}

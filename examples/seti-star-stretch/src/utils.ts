import { StarStretchParameters } from "./Parameters";

export function applyPixelMath(view: View, amount: number) {
  // Instantiate the PixelMath process
  var P = new PixelMath();
  P.expression = "((3^" + amount + ")*$T)/((3^" + amount + " - 1)*$T + 1)";

  // Perform the pixel math transformation
  P.executeOn(view);
}

export function applyColorSaturation(view: View, satAmount: number) {
  // Instantiate the ColorSaturation process
  var P = new ColorSaturation();
  P.HS = StarStretchParameters.saturationLevel;
  P.HSt = ColorSaturation.prototype.AkimaSubsplines;
  P.hueShift = 0.0;

  // Perform the colorsaturation transformation
  P.executeOn(view);
}

export function applySCNR(view: View) {
  var P = new SCNR();
  P.amount = 1.0;
  P.protectionMethod = SCNR.prototype.AverageNeutral;
  P.colorToRemove = SCNR.prototype.Green;
  P.preserveLightness = true;

  P.executeOn(view);
}

export function applyStretchToMainImage(targetView: View) {
  if (targetView) {
    applyPixelMath(targetView, StarStretchParameters.amount);
    if (!isGrayscale(targetView)) {
      applyColorSaturation(targetView, StarStretchParameters.satAmount);
      if (StarStretchParameters.removeGreen) {
        applySCNR(targetView);
      }
    }
    console.show();
    console.noteln("Star Stretch Process Completed!");
  } else {
    Console.warningln("No target view is specified.");
  }
}

export function getPreviewImage(
  targetView: View,
  zoom = 0,
  previewWidth = 400
) {
  if (targetView) {
    let processingWindow = new ImageWindow(
      targetView.image.width,
      targetView.image.height,
      targetView.image.numberOfChannels,
      targetView.image.bitsPerSample,
      targetView.image.isReal,
      targetView.image.isColor
    );

    if (!processingWindow || processingWindow.isNull) {
      console.writeln("Failed to create processing window.");
      return;
    }

    processingWindow.hide();
    processingWindow.mainView.beginProcess();
    processingWindow.mainView.image.assign(targetView.image);
    processingWindow.mainView.endProcess();

    applyPixelMath(processingWindow.mainView, StarStretchParameters.amount);

    if (!isGrayscale(processingWindow.mainView)) {
      applyColorSaturation(
        processingWindow.mainView,
        StarStretchParameters.satAmount
      );
      if (StarStretchParameters.removeGreen) {
        applySCNR(processingWindow.mainView);
      }
    }

    let tempImage = createTemporaryImage(
      processingWindow.mainView.image,
      zoom,
      previewWidth
    );
    if (!tempImage) {
      console.writeln("Failed to create a temporary image for preview.");
    }

    processingWindow.forceClose();

    return tempImage;
  }
}

export function createTemporaryImage(
  selectedImage: Image,
  zoom = 0,
  previewWidth = 400
) {
  let window = new ImageWindow(
    selectedImage.width,
    selectedImage.height,
    selectedImage.numberOfChannels,
    selectedImage.bitsPerSample,
    selectedImage.isReal,
    selectedImage.isColor
  );

  window.mainView.beginProcess();
  window.mainView.image.assign(selectedImage);
  window.mainView.endProcess();

  var P = new IntegerResample();
  switch (zoom) {
    case 0:
      P.zoomFactor = -1;
      break;
    case 1:
      P.zoomFactor = -2;
      break;
    case 2:
      P.zoomFactor = -4;
      break;
    case 3:
      P.zoomFactor = -8;
      break;
    case 4:
      const widthScale = Math.floor(selectedImage.width / previewWidth);
      P.zoomFactor = -Math.max(widthScale, 1);
      break;
    default:
      P.zoomFactor = -2;
      break;
  }

  P.executeOn(window.mainView);

  let resizedImage = new Image(window.mainView.image);

  if (!(resizedImage.width > 0 && resizedImage.height > 0)) {
    console.error("Resized image has invalid dimensions.");
  }

  window.forceClose();

  return resizedImage;
}

// Function to check if the view is grayscale
export function isGrayscale(view: View) {
  return !view.image.isColor;
}

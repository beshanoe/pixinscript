/******************************************************************************
 * Star Stretch Script
 * Version: 2.3
 * Author: Franklin Marek
 * Website: www.setiastro.com
 *
 * This script performs a stretch of a linear star image, boosts color, and removes any green cast.
 *
 * This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/
 *
 * You are free to:
 * 1. Share — copy and redistribute the material in any medium or format
 * 2. Adapt — remix, transform, and build upon the material
 *
 * Under the following terms:
 * 1. Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
 * 2. NonCommercial — You may not use the material for commercial purposes.
 *
 * @license CC BY-NC 4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
 *
 * COPYRIGHT © 2024 Franklin Marek. ALL RIGHTS RESERVED.
 ******************************************************************************/

import * as React from "react";
import {
  TextAlign_VertCenter,
  StdCursor_OpenHand,
  TextAlign_Left,
  StdCursor_ClosedHand,
} from "@pixinscript/core";
import { render, useDialog } from "@pixinscript/react";
import {
  UICheckBox,
  UIComboBox,
  UIControl,
  UIHorizontalSizer,
  UILabel,
  UINumericControl,
  UIPushButton,
  UIScrollBox,
  UIStretch,
  UITextBox,
  UIToolButton,
  UIVerticalSizer,
  UIViewList,
  useCombinedRefs,
} from "@pixinscript/ui";

const VERSION = "v2.3";

const ZoomFactors = [
  { text: "1:1" },
  { text: "1:2" },
  { text: "1:4" },
  { text: "1:8" },
  { text: "Fit to Preview" },
];

// define a global variable containing the script's parameters
const StarStretchParameters = {
  amount: 5,
  targetView: new View() as View | null, // Default target view
  satAmount: 1, // Default saturation amount
  removeGreen: false, // Default SCNR option
  saturationLevel: [
    [0.0, 0.4],
    [0.5, 0.7],
    [1.0, 0.4],
  ] as Array<[number, number]>,

  // stores the current parameters values into the script instance
  save: function () {
    Parameters.set("amount", StarStretchParameters.amount);
    Parameters.set("satAmount", StarStretchParameters.satAmount);
    Parameters.set("removeGreen", StarStretchParameters.removeGreen);
  },

  // loads the script instance parameters
  load: function () {
    if (Parameters.has("amount"))
      StarStretchParameters.amount = Parameters.getReal("amount");
    if (Parameters.has("satAmount"))
      StarStretchParameters.satAmount = Parameters.getReal("satAmount");
    if (Parameters.has("removeGreen"))
      StarStretchParameters.removeGreen = Parameters.getBoolean("removeGreen");
  },

  // Update saturation level matrix based on satAmount
  updateSaturationLevel: function () {
    var satAmount = StarStretchParameters.satAmount;
    StarStretchParameters.saturationLevel = [
      [0.0, satAmount * 0.4],
      [0.5, satAmount * 0.7],
      [1.0, satAmount * 0.4],
    ];
  },
};

function applyPixelMath(view: View, amount: number) {
  // Instantiate the PixelMath process
  var P = new PixelMath();
  P.expression = "((3^" + amount + ")*$T)/((3^" + amount + " - 1)*$T + 1)";

  // Perform the pixel math transformation
  P.executeOn(view);
}

function applyColorSaturation(view: View, satAmount: number) {
  // Instantiate the ColorSaturation process
  var P = new ColorSaturation();
  P.HS = StarStretchParameters.saturationLevel;
  P.HSt = ColorSaturation.prototype.AkimaSubsplines;
  P.hueShift = 0.0;

  // Perform the colorsaturation transformation
  P.executeOn(view);
}

function applySCNR(view: View) {
  var P = new SCNR();
  P.amount = 1.0;
  P.protectionMethod = SCNR.prototype.AverageNeutral;
  P.colorToRemove = SCNR.prototype.Green;
  P.preserveLightness = true;

  P.executeOn(view);
}

function applyStretchToMainImage(targetView: View) {
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

function getPreviewImage(targetView: View, zoom = 0, previewWidth = 400) {
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

function createTemporaryImage(
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
function isGrayscale(view: View) {
  return !view.image.isColor;
}

const ScrollControl = React.forwardRef<
  ScrollBox,
  {
    image?: Image;
    minWidth: number;
    minHeight: number;
  }
>(({ image, minWidth, minHeight }, outerRef) => {
  const inner = React.useRef<ScrollBox>(null);

  const ref = useCombinedRefs(outerRef, inner);

  const initScrollBars = React.useCallback(() => {
    if (!ref.current) {
      return;
    }

    const ctrl = ref.current;

    if (!image || image.width <= 0 || image.height <= 0) {
      ctrl.setHorizontalScrollRange(0, 0);
      ctrl.setVerticalScrollRange(0, 0);
    } else {
      ctrl.setHorizontalScrollRange(
        0,
        Math.max(0, image.width - ctrl.viewport.width)
      );
      ctrl.setVerticalScrollRange(
        0,
        Math.max(0, image.height - ctrl.viewport.height)
      );
    }
    ctrl.viewport.update();
  }, [image]);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const ctrl = ref.current;

    ctrl.autoScroll = true;
    ctrl.tracking = true;

    let dragging = false;
    let dragOrigin = new Point(0);

    ctrl.viewport.cursor = new Cursor(StdCursor_OpenHand);

    ctrl.viewport.onResize = function () {
      initScrollBars();
    };

    ctrl.viewport.onMousePress = function (x: number, y: number) {
      ctrl.viewport.cursor = new Cursor(StdCursor_ClosedHand);
      dragOrigin.x = x;
      dragOrigin.y = y;
      dragging = true;
    };

    ctrl.viewport.onMouseMove = function (x: number, y: number) {
      if (dragging) {
        ctrl.scrollPosition = new Point(ctrl.scrollPosition).translatedBy(
          dragOrigin.x - x,
          dragOrigin.y - y
        );
        dragOrigin.x = x;
        dragOrigin.y = y;
      }
    };

    ctrl.viewport.onMouseRelease = function () {
      ctrl.viewport.cursor = new Cursor(StdCursor_OpenHand);
      dragging = false;
    };

    ctrl.viewport.onPaint = function (
      x0: number,
      y0: number,
      x1: number,
      y1: number
    ) {
      var g = new Graphics(ctrl.viewport);
      if (!image) {
        g.fillRect(x0, y0, x1, y1, new Brush(0xff000000));
      } else {
        image.selectedRect = new Rect(x0, y0, x1, y1).translated(
          ctrl.scrollPosition
        );
        g.drawBitmap(x0, y0, image.render());
        image.resetRectSelection();
      }
      g.end();
      gc();
    };

    initScrollBars();
  }, [image]);

  return (
    <UIScrollBox
      ref={ref}
      autoScroll={true}
      tracking={true}
      minWidth={minWidth}
      minHeight={minHeight}
      onHorizontalScrollPosUpdated={() => {
        ref.current?.viewport.update();
      }}
      onVerticalScrollPosUpdated={() => {
        ref.current?.viewport.update();
      }}
    />
  );
});

export function StarStretchDialog() {
  const dialog = useDialog();
  const scrollControlRef = React.useRef<ScrollBox>(null);

  const [targetView, setTargetView] = React.useState<View | null>(new View());
  const [previewImage, setPreviewImage] = React.useState<Image>();
  const [stretchAmount, setStretchAmount] = React.useState(
    StarStretchParameters.amount
  );
  const [saturationAmount, setSaturationAmount] = React.useState(
    StarStretchParameters.satAmount
  );
  const [removeGreen, setRemoveGreen] = React.useState(
    StarStretchParameters.removeGreen
  );
  const [zoomFactor, setZoomFactor] = React.useState(2);

  React.useEffect(() => {
    // Find the active window
    let activeWindow = ImageWindow.activeWindow;
    if (!activeWindow.isNull) {
      StarStretchParameters.targetView = activeWindow.mainView;
    } else {
      StarStretchParameters.targetView = null;
    }

    setTargetView(StarStretchParameters.targetView);

    refreshPreview();

    dialog.onShow = () => {
      refreshPreview();
    };
  }, []);

  function refreshPreview() {
    if (!targetView) {
      return;
    }
    const previewImage = getPreviewImage(
      targetView,
      zoomFactor,
      scrollControlRef.current?.width
    );
    if (previewImage) {
      setPreviewImage(previewImage);
    }
  }

  function onExecute() {
    if (!targetView) {
      return;
    }
    applyStretchToMainImage(targetView);
    dialog.ok();
  }

  return (
    <UIHorizontalSizer margin={16} spacing={16}>
      <UIVerticalSizer spacing={16}>
        <UITextBox
          text="<b>Star Stretch VERSION: Linear to Non-Linear Stretch of Color Star Image</b><br><br>Please select your <b>combined </b>stars only image to stretch<br>Default value is a stretch of StarStretchParameters.amount<br>Default color boost value is StarStretchParameters.satAmount<br><br>Written by Franklin Marek. Copyright 2024"
          readOnly={true}
          backgroundColor={0xf7f7c625}
          minHeight={140}
          maxHeight={140}
        />
        <UIViewList
          currentView={targetView}
          onViewSelected={(view) => {
            setTargetView(view);
            StarStretchParameters.targetView = view;
          }}
        />
        <UINumericControl
          label={{
            text: "Stretch Amount:",
            width: 120,
          }}
          lowerBound={0}
          upperBound={8}
          precision={2}
          sliderRange={[0, 100]}
          value={stretchAmount}
          onValueUpdated={(value) => {
            setStretchAmount(value);
            StarStretchParameters.amount = value;
          }}
          toolTip="<p>Adjust above 5 with caution.</p>"
        />
        <UINumericControl
          label={{
            text: "Color Boost Amount:",
            width: 120,
          }}
          lowerBound={0}
          upperBound={2}
          precision={2}
          sliderRange={[0, 200]}
          value={saturationAmount}
          onValueUpdated={(value) => {
            setSaturationAmount(value);
            StarStretchParameters.satAmount = value;
            StarStretchParameters.updateSaturationLevel();
          }}
          toolTip="<p>Adjust the color saturation amount.</p>"
        />
        <UICheckBox
          text="Remove Green via SCNR (Optional)"
          checked={removeGreen}
          onCheck={(checked) => {
            setRemoveGreen(checked);
            StarStretchParameters.removeGreen = checked;
          }}
          toolTip="<p>Enable or disable green cast removal using SCNR.</p>"
        />
        <UIHorizontalSizer margin={8} spacing={12}>
          <UIToolButton
            icon=":/process-interface/new-instance.png"
            scaledMinWidth={24}
            scaledMinHeight={24}
            scaledMaxWidth={24}
            scaledMaxHeight={24}
            iconWidth={24}
            iconHeight={24}
            toolTip="New Instance"
            onMousePress={() => {
              StarStretchParameters.save();
              dialog.newInstance();
            }}
          />
          <UIHorizontalSizer spacing={8}>
            <UILabel
              text="Zoom: "
              textAlignment={TextAlign_Left | TextAlign_VertCenter}
            />
            <UIComboBox
              currentItem={zoomFactor}
              items={ZoomFactors}
              onItemSelected={(index) => {
                setZoomFactor(index);
              }}
            />
          </UIHorizontalSizer>
          <UIPushButton
            text="Refresh Preview"
            onClick={() => refreshPreview()}
          />
          <UIStretch />
          <UIPushButton text="Execute" width={40} onClick={onExecute} />
        </UIHorizontalSizer>
        <UIStretch />
      </UIVerticalSizer>
      <ScrollControl
        ref={scrollControlRef}
        image={previewImage}
        minWidth={400}
        minHeight={300}
      />
    </UIHorizontalSizer>
  );
}

// Modify the main execution logic
function main() {
  // hide the console, we don't need it
  Console.show();

  // script should not run in global mode
  if (Parameters.isGlobalTarget) {
    Console.criticalln("Star Stretch could not run in global context.");
    return;
  }

  // perform the script on the target view when dragged and dropped
  if (Parameters.isViewTarget) {
    // load parameters
    StarStretchParameters.load();

    // Apply the stretch immediately to the target view
    let targetView = Parameters.targetView;
    if (targetView && !targetView.isNull) {
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
      Console.warningln("No valid target view specified.");
    }
    return;
  }

  render(<StarStretchDialog />, {
    debug: false,
    dialog: {
      windowTitle: `Sandbox Script`,
      userResizable: true,
      scaledMinWidth: 450,
    },
  });
}

main();

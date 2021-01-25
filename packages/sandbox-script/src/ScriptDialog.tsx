import {
  FrameStyle_Box,
  TextAlign_Center,
  TextAlign_VertCenter,
} from "@pixinsight/core";
import { useDialog } from "@pixinsight/react";
import {
  UIComboBox,
  UIDialog,
  UIEdit,
  UIGroupBox,
  UIHorizontalSizer,
  UILabel,
  UIPushButton,
  UISlider,
  UISpinBox,
  UIStretch,
  UIVerticalSizer,
  UIViewList,
} from "@pixinsight/ui";
import React, { useState } from "react";
import { version } from "../package.json";
import { ImagePreview } from "./ImagePreview";

export const SCRIPT_NAME = "Star De-emphasizer";
const SCRIPT_DESCRIPTION = `<b> ${SCRIPT_NAME}  v${version}</b> &mdash; This script uses the method suggested by Adam Block to de-emphasize stars.`;

export function ScriptDialog() {
  const [starlessView, setStarlessView] = useState<View | null>(null);
  const [targetView, setTargetView] = useState<View | null>(null);
  const [resultImage, setResultImage] = useState<Image>();

  function onProcessClick() {
    const image = new Image();
    targetView?.image.getLuminance(image);

    /*
     * Start time: 2021-01-24T21:11:27.254Z UTC
     * Execution time: 60.141 ms
     */
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

    P.executeOn(image);
    setResultImage(image);
  }

  return (
    <UIVerticalSizer margin={5} spacing={5}>
      <UILabel
        text={SCRIPT_DESCRIPTION}
        frameStyle={FrameStyle_Box}
        wordWrapping={true}
        useRichText={true}
        stretchFactor={0}
      />

      <UIHorizontalSizer>
        <UILabel
          text="Starless view: "
          textAlignment={TextAlign_VertCenter}
          minWidth={80}
        />
        <UIViewList
          onViewSelected={(view: View) => setStarlessView(view)}
          stretchFactor={1}
        />
      </UIHorizontalSizer>

      <UIHorizontalSizer>
        <UILabel
          text="Target view: "
          textAlignment={TextAlign_VertCenter}
          minWidth={80}
        />
        <UIViewList
          onViewSelected={(view: View) => setTargetView(view)}
          stretchFactor={1}
        />
      </UIHorizontalSizer>

      <ImagePreview image={targetView?.image} />
      <UIPushButton text="Process" onClick={onProcessClick} />
      <ImagePreview image={resultImage} />

      <UIGroupBox title="Structures" spacing={5} margin={5}>
        <UIHorizontalSizer>
          <UILabel text="Min size: " textAlignment={TextAlign_Center} />
          <UISpinBox />
          <UIStretch />
        </UIHorizontalSizer>
        <UIHorizontalSizer>
          <UILabel text="Max size: " textAlignment={TextAlign_Center} />
          <UISpinBox />
          <UIStretch />
        </UIHorizontalSizer>
      </UIGroupBox>

      <UIGroupBox title="Binarization" spacing={5} margin={5}>
        <UIHorizontalSizer spacing={5}>
          <UILabel text="Threshold: " textAlignment={TextAlign_Center} />
          <UIEdit maxWidth={50} />
          <UISlider stretchFactor={1} />
        </UIHorizontalSizer>
      </UIGroupBox>

      <UIGroupBox title="Dilation" spacing={5} margin={5}>
        <UIHorizontalSizer spacing={5}>
          <UILabel text="Size: " textAlignment={TextAlign_Center} />
          <UIComboBox items={[{ text: "3" }, { text: "5" }, { text: "7" }]} />
          <UIStretch />
        </UIHorizontalSizer>
      </UIGroupBox>

      <UIGroupBox title="Convolution" spacing={5} margin={5}>
        <UIHorizontalSizer spacing={5}>
          <UILabel text="StdDev: " textAlignment={TextAlign_Center} />
          <UIEdit maxWidth={50} />
          <UISlider stretchFactor={1} />
        </UIHorizontalSizer>
      </UIGroupBox>

      <UIStretch />
    </UIVerticalSizer>
  );
}

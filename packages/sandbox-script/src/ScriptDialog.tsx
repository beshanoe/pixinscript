import {
  FrameStyle_Box,
  HorizontalSizer,
  TextAlign_Center,
  TextAlign_VertCenter,
  UndoFlag_NoSwapFile,
} from "@pixinscript/core";
import { useDialog } from "@pixinscript/react";
import {
  UIComboBox,
  UIControl,
  UIEdit,
  UIGroupBox,
  UIHorizontalSizer,
  UILabel,
  UIPushButton,
  UISlider,
  UISpinBox,
  UIStretch,
  UIToolButton,
  UIVerticalSizer,
  UIViewList,
} from "@pixinscript/ui";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { version } from "../package.json";
import { ImagePreview } from "./ImagePreview";
import { ImagePreviewSelect } from "./ImagePreviewSelect";
import { NumericControl } from "./NumericControl";
import { binarize } from "./process/binarize";
import { convolute } from "./process/convolute";
import { dilation } from "./process/dilation";
import { assignThroughMask, substract } from "./process/pixelMath";
import { structures } from "./process/structures";

export const SCRIPT_NAME = "Star De-emphasizer";
const SCRIPT_DESCRIPTION = `<b> ${SCRIPT_NAME}  v${version}</b> &mdash; This script uses the method suggested by Adam Block to de-emphasize stars.<br><br>Copyright (c) 2021 Maxim Valenko @AstroSwell`;

export const defaultParameters = {
  structuresMinLayer: 1,
  structuresMaxLayer: 3,
  binarizeThreshold: 0.2,
  dilationSize: 5,
  convolutionSize: 9,
};

type Parameters = typeof defaultParameters;

export function ScriptDialog({
  parameters: storedParameters,
  onParameterChange,
}: {
  parameters?: Partial<Parameters>;
  onParameterChange?: <K extends keyof Parameters>(
    name: K,
    value: Parameters[K]
  ) => void;
}) {
  const dialog = useDialog();

  const [starlessView, setStarlessView] = useState<View | null>(null);
  const [targetView, setTargetView] = useState<View | null>(null);
  const [rect, setRect] = useState<Rect>(new Rect());

  const [previewImage, setPreviewImage] = useState<Image>();
  const [previewStarlessImage, setPreviewStarlessImage] = useState<Image>();

  const [previewLumImage, setPreviewLumImage] = useState<Image>();
  const [previewStructImage, setPreviewStructImage] = useState<Image>();
  const [previewBinImage, setPreviewBinImage] = useState<Image>();
  const [previewDilatedImage, setPreviewDilatedImage] = useState<Image>();
  const [previewConvolutedImage, setPreviewConvolutedImage] = useState<Image>();
  const [previewHolesImage, setPreviewHolesImage] = useState<Image>();
  const [previewFinalImage, setPreviewFinalImage] = useState<Image>();
  const [showOriginal, setShowOriginal] = useState(false);

  const [parameters, setParameters] = useState({
    ...defaultParameters,
    ...storedParameters,
  });

  const targetImage = useMemo(() => targetView?.image, [targetView]);
  const starlessImage = useMemo(() => starlessView?.image, [starlessView]);

  useEffect(() => {
    if (targetImage) {
      const previewImage = new Image();
      previewImage.assign(targetImage);
      previewImage.cropTo(rect);
      setPreviewImage(previewImage);
    }

    if (starlessImage) {
      const previewStarlessImage = new Image();
      previewStarlessImage.assign(starlessImage);
      previewStarlessImage.cropTo(rect);
      setPreviewStarlessImage(previewStarlessImage);
    }

    setPreviewFinalImage(undefined);
  }, [rect, targetImage, starlessImage]);

  function updateStructuresSettings(updatedParameters: Partial<Parameters>) {
    if (updatedParameters.structuresMinLayer) {
      if (
        updatedParameters.structuresMinLayer > parameters.structuresMaxLayer
      ) {
        updatedParameters.structuresMaxLayer =
          updatedParameters.structuresMinLayer;
      }
    }
    const newParameters = { ...parameters, ...updatedParameters };
    setParameters(newParameters);
    onParameterChange?.("structuresMinLayer", newParameters.structuresMinLayer);
    onParameterChange?.("structuresMaxLayer", newParameters.structuresMaxLayer);
  }

  function process(image: Image, starlessImage: Image) {
    const lumImage = new Image();

    console.log("Get Luminance...");
    image.getLuminance(lumImage);

    console.log("MultiscaleLinearTransform...");
    const structuresImage = structures(lumImage, {
      minLayer: parameters.structuresMinLayer,
      maxLayer: parameters.structuresMaxLayer,
    });

    console.log("Binarize...");
    const binarizedImage = binarize(structuresImage, {
      threshold: parameters.binarizeThreshold,
    });

    console.log("MorphologicalTransformation Dilation...");
    const dilatedImage = dilation(binarizedImage, parameters.dilationSize);

    console.log("Convolution...");
    const convolutedImage = convolute(dilatedImage, parameters.convolutionSize);

    console.log("Calculate holes mask...");
    const holesImage = substract(convolutedImage, lumImage);

    console.log("Render result image...");
    const finalImage = assignThroughMask(image, starlessImage, holesImage);

    return {
      lumImage,
      structuresImage,
      binarizedImage,
      dilatedImage,
      convolutedImage,
      holesImage,
      finalImage,
    };
  }

  function onProcessPreviewClick() {
    if (!previewImage || !previewStarlessImage) {
      return;
    }

    const {
      lumImage,
      structuresImage,
      binarizedImage,
      dilatedImage,
      convolutedImage,
      holesImage,
      finalImage,
    } = process(previewImage, previewStarlessImage);

    try {
      setPreviewLumImage(lumImage);
      setPreviewStructImage(structuresImage);
      setPreviewBinImage(binarizedImage);
      setPreviewDilatedImage(dilatedImage);
      setPreviewConvolutedImage(convolutedImage);
      setPreviewHolesImage(holesImage);
      setPreviewFinalImage(finalImage);
    } catch (error) {
      console.error(error);
    }
  }

  function onApplyClick() {
    if (!targetImage || !starlessImage) {
      return;
    }

    try {
      const { finalImage } = process(targetImage, starlessImage);

      targetView?.beginProcess();
      targetView?.image.apply(finalImage);
      targetView?.endProcess();

      const msg = new MessageBox(
        "Stars are successfully de-empasized",
        "Success"
      );
      msg.execute();
    } catch (error) {
      console.error(error);
    }
  }

  function onResetClick() {
    setParameters(defaultParameters);
  }

  function onNewInstancePress() {
    dialog.newInstance();
  }

  return (
    <UIVerticalSizer>
      <UIHorizontalSizer stretchFactor={50}>
        <UIControl minWidth={300}>
          <UIVerticalSizer margin={5} spacing={5}>
            <UILabel
              text={SCRIPT_DESCRIPTION}
              frameStyle={FrameStyle_Box}
              minHeight={50}
              wordWrapping={true}
              useRichText={true}
              stretchFactor={0}
            />

            <UIHorizontalSizer>
              <UILabel
                text="Target view: "
                textAlignment={TextAlign_VertCenter}
                minWidth={80}
              />
              <UIViewList
                onViewSelected={(view: View) => {
                  setTargetView(view.isNull ? null : view);
                }}
                stretchFactor={1}
              />
            </UIHorizontalSizer>

            <UIHorizontalSizer>
              <UILabel
                text="Starless view: "
                textAlignment={TextAlign_VertCenter}
                minWidth={80}
              />
              <UIViewList
                onViewSelected={(view: View) =>
                  setStarlessView(view.isNull ? null : view)
                }
                enabled={Boolean(targetView && !targetView.isNull)}
                stretchFactor={1}
              />
            </UIHorizontalSizer>

            <UIGroupBox title="Structures" spacing={5} margin={5}>
              <UIHorizontalSizer>
                <UILabel
                  minWidth={60}
                  text="Min layer:"
                  textAlignment={TextAlign_VertCenter}
                />
                <UISpinBox
                  minWidth={70}
                  minValue={1}
                  maxValue={10}
                  value={parameters.structuresMinLayer}
                  onValueUpdated={(structuresMinLayer) =>
                    updateStructuresSettings({
                      structuresMinLayer,
                    })
                  }
                />
                <UIStretch />
              </UIHorizontalSizer>
              <UIHorizontalSizer>
                <UILabel
                  minWidth={60}
                  text="Max layer:"
                  textAlignment={TextAlign_VertCenter}
                />
                <UISpinBox
                  minWidth={70}
                  maxValue={10}
                  value={parameters.structuresMaxLayer}
                  minValue={parameters.structuresMinLayer}
                  onValueUpdated={(structuresMaxLayer) =>
                    updateStructuresSettings({
                      structuresMaxLayer,
                    })
                  }
                />
                <UIStretch />
              </UIHorizontalSizer>
            </UIGroupBox>

            <UIGroupBox title="Binarization" spacing={5} margin={5}>
              <UIHorizontalSizer spacing={5}>
                <UILabel text="Threshold: " textAlignment={TextAlign_Center} />
                <NumericControl
                  value={parameters.binarizeThreshold}
                  onValueUpdated={(binarizeThreshold) => {
                    setParameters({ ...parameters, binarizeThreshold });
                    onParameterChange?.("binarizeThreshold", binarizeThreshold);
                  }}
                  minValue={0}
                  maxValue={1}
                  stepSize={0.01}
                  tickInterval={0.01}
                />
              </UIHorizontalSizer>
            </UIGroupBox>

            <UIGroupBox title="Dilation" spacing={5} margin={5}>
              <UIHorizontalSizer spacing={5}>
                <UILabel text="Size: " textAlignment={TextAlign_Center} />
                <UISpinBox
                  minValue={3}
                  maxValue={11}
                  stepSize={2}
                  value={parameters.dilationSize}
                  onValueUpdated={(dilationSize) => {
                    setParameters({ ...parameters, dilationSize });
                    onParameterChange?.("dilationSize", dilationSize);
                  }}
                />
                <UIStretch />
              </UIHorizontalSizer>
            </UIGroupBox>

            <UIGroupBox title="Convolution" spacing={5} margin={5}>
              <UIHorizontalSizer spacing={5}>
                <UILabel text="Size: " textAlignment={TextAlign_Center} />
                <UISpinBox
                  minValue={3}
                  maxValue={61}
                  stepSize={2}
                  value={parameters.convolutionSize}
                  onValueUpdated={(convolutionSize) => {
                    setParameters({ ...parameters, convolutionSize });
                    onParameterChange?.("convolutionSize", convolutionSize);
                  }}
                />
                <UIStretch />
              </UIHorizontalSizer>
            </UIGroupBox>

            <UIPushButton
              text="Process Preview"
              onClick={onProcessPreviewClick}
              enabled={Boolean(targetImage && starlessImage)}
            />

            <UIStretch />
          </UIVerticalSizer>
        </UIControl>

        <UIVerticalSizer stretchFactor={1} margin={5} spacing={5}>
          <ImagePreviewSelect
            image={targetImage}
            onRect={(rect) => setRect(rect)}
          />
        </UIVerticalSizer>

        <UIVerticalSizer margin={5} spacing={5}>
          <ImagePreview image={previewImage} />
          <ImagePreview
            image={showOriginal ? previewImage : previewFinalImage}
            title="Result"
            toolTip="Press the mouse to compare with original"
            onMousePress={() => setShowOriginal(true)}
            onMouseRelease={() => setShowOriginal(false)}
          />
        </UIVerticalSizer>
      </UIHorizontalSizer>

      <UIControl>
        <UIHorizontalSizer margin={5} spacing={5}>
          <ImagePreview image={previewLumImage} title="Luminance" />
          <ImagePreview image={previewStructImage} title="Structure" />
          <ImagePreview image={previewBinImage} title="Binarized" />
          <ImagePreview image={previewDilatedImage} title="Dilated" />
          <ImagePreview image={previewConvolutedImage} title="Convoluted" />
          <ImagePreview image={previewHolesImage} title="Holes mask" />
        </UIHorizontalSizer>
      </UIControl>

      <UIHorizontalSizer spacing={5} margin={5}>
        <UIToolButton
          icon=":/process-interface/new-instance.png"
          onMousePress={onNewInstancePress}
        />
        <UIStretch />
        <UIPushButton
          onClick={onResetClick}
          icon=":/icons/reload.png"
          text="Reset"
        />
        <UIPushButton
          onClick={onApplyClick}
          icon=":/icons/ok.png"
          text="Apply"
        />
      </UIHorizontalSizer>
    </UIVerticalSizer>
  );
}

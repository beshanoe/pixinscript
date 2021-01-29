import {
  FrameStyle_Box,
  HorizontalSizer,
  TextAlign_Center,
  TextAlign_VertCenter,
  UndoFlag_NoSwapFile,
} from "@pixinsight/core";
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
  UIVerticalSizer,
  UIViewList,
} from "@pixinsight/ui";
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

export function ScriptDialog() {
  const [starlessView, setStarlessView] = useState<View | null>(null);
  const [targetView, setTargetView] = useState<View | null>(null);
  const [resultImage, setResultImage] = useState<Image>();
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

  const [structuresSettings, setStructuresSettings] = useState({
    minLayer: 1,
    maxLayer: 3,
  });
  const [binarizeSettings, setBinarizeSettings] = useState({
    threshold: 0.2,
  });
  const [dilationSettings, setDilationSettings] = useState({
    size: 5,
  });
  const [convolutionSettings, setConvolutionSettings] = useState({
    size: 9,
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

  function updateStructuresSettings(
    settings: Partial<typeof structuresSettings>
  ) {
    if (settings.minLayer) {
      if (settings.minLayer > structuresSettings.maxLayer) {
        settings.maxLayer = settings.minLayer;
      }
    }
    setStructuresSettings({ ...structuresSettings, ...settings });
  }

  function onProcessPreviewClick() {
    if (!previewImage || !previewStarlessImage) {
      return;
    }

    try {
      const lumImage = new Image();
      console.log("Get Luminance...");
      previewImage.getLuminance(lumImage);
      console.log("MultiscaleLinearTransform...");
      const structImage = structures(lumImage, structuresSettings);
      console.log("Binarize...");
      const binImage = binarize(structImage, binarizeSettings);
      console.log("MorphologicalTransformation Delation...");
      const dilatedImage = dilation(binImage, dilationSettings.size);
      console.log("Convolution...");
      const convolutedImage = convolute(dilatedImage, convolutionSettings.size);
      console.log("Calculate holes mask...");
      const holesImage = substract(convolutedImage, lumImage);
      console.log("Render result image...");
      const finalImage = assignThroughMask(
        previewImage,
        previewStarlessImage,
        holesImage
      );

      setPreviewLumImage(lumImage);
      setPreviewStructImage(structImage);
      setPreviewBinImage(binImage);
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
      const lumImage = new Image();
      console.log("Get Luminance...");
      targetImage.getLuminance(lumImage);
      console.log("MultiscaleLinearTransform...");
      const structImage = structures(lumImage, structuresSettings);
      console.log("Binarize...");
      const binImage = binarize(structImage, binarizeSettings);
      console.log("MorphologicalTransformation Delation...");
      const dilatedImage = dilation(binImage, dilationSettings.size);
      console.log("Convolution...");
      const convolutedImage = convolute(dilatedImage, convolutionSettings.size);
      console.log("Calculate holes mask...");
      const holesImage = substract(convolutedImage, lumImage);
      console.log("Render result image...");
      const finalImage = assignThroughMask(
        targetImage,
        starlessImage,
        holesImage
      );

      targetView?.beginProcess();
      targetView?.image.apply(finalImage);
      targetView?.endProcess();
    } catch (error) {
      console.error(error);
    }
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
                  value={structuresSettings.minLayer}
                  onValueUpdated={(minLayer: number) =>
                    updateStructuresSettings({
                      minLayer,
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
                  value={structuresSettings.maxLayer}
                  minValue={structuresSettings.minLayer}
                  onValueUpdated={(maxLayer: number) =>
                    updateStructuresSettings({
                      maxLayer,
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
                  value={binarizeSettings.threshold}
                  onValueUpdated={(threshold: number) => {
                    setBinarizeSettings({ threshold });
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
                  value={dilationSettings.size}
                  onValueUpdated={(size: number) => {
                    setDilationSettings({ size });
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
                  value={convolutionSettings.size}
                  onValueUpdated={(size: number) => {
                    setConvolutionSettings({ size });
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
        <UIStretch />
        <UIPushButton
          onClick={onApplyClick}
          icon=":/icons/ok.png"
          text="Apply"
        />
      </UIHorizontalSizer>
    </UIVerticalSizer>
  );
}

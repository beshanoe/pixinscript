import {
  FrameStyle_Box,
  TextAlign_Center,
  TextAlign_VertCenter,
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
import { binarize } from "./process/binarize";
import { convolute } from "./process/convolute";
import { dilation } from "./process/dilation";
import { assignThroughMask, substract } from "./process/pixelMath";
import { structures } from "./process/structures";

export const SCRIPT_NAME = "Star De-emphasizer";
const SCRIPT_DESCRIPTION = `<b> ${SCRIPT_NAME}  v${version}</b> &mdash; This script uses the method suggested by Adam Block to de-emphasize stars.`;

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

  function onProcessClick() {
    if (!previewImage || !previewStarlessImage) {
      return;
    }

    try {
      const lumImage = new Image();
      previewImage.getLuminance(lumImage);
      const structImage = structures(lumImage);
      const binImage = binarize(structImage);
      const dilatedImage = dilation(binImage);
      const convolutedImage = convolute(dilatedImage);
      const holesImage = substract(convolutedImage, lumImage);
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
                <UILabel text="Min size: " textAlignment={TextAlign_Center} />
                <UISpinBox maxValue={10} />
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
                <UIComboBox
                  items={[{ text: "3" }, { text: "5" }, { text: "7" }]}
                />
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

            <UIPushButton text="Process Preview" onClick={onProcessClick} />

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
            onMousePress={() => setShowOriginal(true)}
            onMouseRelease={() => setShowOriginal(false)}
          />
        </UIVerticalSizer>
      </UIHorizontalSizer>

      <UIControl minHeight={100}>
        <UIHorizontalSizer margin={5} spacing={5}>
          <ImagePreview image={previewLumImage} />
          <ImagePreview image={previewStructImage} />
          <ImagePreview image={previewBinImage} />
          <ImagePreview image={previewDilatedImage} />
          <ImagePreview image={previewConvolutedImage} />
          <ImagePreview image={previewHolesImage} />
        </UIHorizontalSizer>
      </UIControl>
    </UIVerticalSizer>
  );
}

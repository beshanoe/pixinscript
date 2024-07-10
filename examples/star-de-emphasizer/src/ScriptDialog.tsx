import { FrameStyle_Box, TextAlign_VertCenter } from "@pixinscript/core";
import { useDialog } from "@pixinscript/react";
import {
  UIControl,
  UIGroupBox,
  UIHorizontalSizer,
  UILabel,
  UIPushButton,
  UISpinBox,
  UIStretch,
  UIToolButton,
  UIVerticalSizer,
  UIViewList,
} from "@pixinscript/ui";
import React, { useEffect, useMemo, useState } from "react";
import { version } from "../package.json";
import { ImagePreview, ReadoutData } from "./ImagePreview";
import { ImagePreviewSelect } from "./ImagePreviewSelect";
import { NumericControl } from "./NumericControl";
import { binarize } from "./process/binarize";
import { convolute } from "./process/convolute";
import { MorphologicalOperator, morphology } from "./process/morphology";
import { assignThroughMask, subtract } from "./process/pixelMath";
import { structures } from "./process/structures";

export const SCRIPT_NAME = "Star De-emphasizer";
export const SCRIPT_VERSION = version;
const SCRIPT_DESCRIPTION = `<b> ${SCRIPT_NAME}  v${version}</b> &mdash; Thisasdasd script uses the method suggested by Adam Block to de-emphasize stars.<br><br>Copyright (c) 2021 Maxim Valenko @AstroSwell`;

export const defaultParameters = {
  targetViewId: "",
  starlessViewId: "",
  structuresViewId: "",
  structuresMinLayer: 1,
  structuresMaxLayer: 3,
  binarizeThreshold: 0.2,
  closingEnabled: false,
  closingSize: 7,
  closingDilationSize: 9,
  dilationSize: 5,
  convolutionSize: 9,
};

type Parameters = typeof defaultParameters;

type Step =
  | "original"
  | "starless"
  | "luminance"
  | "structures"
  | "binarized"
  | "closed"
  | "dilated"
  | "convoluted"
  | "halos"
  | "result";

const stepMap: Record<Step, Step> = {
  original: "starless",
  starless: "original",
  luminance: "original",
  structures: "luminance",
  binarized: "structures",
  closed: "binarized",
  dilated: "binarized",
  convoluted: "dilated",
  halos: "convoluted",
  result: "original",
};

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
  const [parameters, setParameters] = useState({
    ...defaultParameters,
    ...storedParameters,
  });

  const dialog = useDialog();

  const [targetView, setTargetView] = useState(new View());
  const [starlessView, setStarlessView] = useState(new View());
  const [structuresView, setStructuresView] = useState(new View());
  const [rect, setRect] = useState<Rect>(new Rect());

  const [previewImages, setPreviewImages] = useState(
    {} as { [key in Step]?: Image }
  );

  const [currentStep, setCurrentStep] = useState<Step>("original");
  const [previousStep, setPreviousStep] = useState<Step>("original");

  const [isControlsEnabled, setIsControlsEnabled] = useState(true);
  const [isClosingEnabled, setIsClosingEnabled] = useState(
    parameters.closingEnabled
  );

  const targetImage = useMemo(() => targetView?.image, [targetView]);
  const starlessImage = useMemo(() => starlessView?.image, [starlessView]);
  const structuresMapImage = useMemo(
    () => structuresView?.image,
    [structuresView]
  );
  const currentImage = useMemo(
    () => previewImages[currentStep],
    [currentStep, previewImages]
  );

  useEffect(() => {
    setTargetView((View as any).viewById(parameters.targetViewId)); // TODO remove any after updating typings
    setStarlessView((View as any).viewById(parameters.starlessViewId));
    setStructuresView((View as any).viewById(parameters.structuresViewId));
  }, []);

  useEffect(() => {
    let original = previewImages.original;
    let starless = previewImages.starless;
    if (targetImage) {
      const previewImage = new Image();
      previewImage.assign(targetImage);
      previewImage.cropTo(rect);
      original = previewImage;
      setPreviewImages({
        original,
        starless: starless,
        structures: previewImages.structures,
      });
      setCurrentStep("original");
    } else {
      setPreviewImages({
        starless: previewImages.starless,
        structures: previewImages.structures,
      });
    }

    if (starlessImage) {
      const previewStarlessImage = new Image();
      previewStarlessImage.assign(starlessImage);
      previewStarlessImage.cropTo(rect);
      setPreviewImages({
        original,
        starless: previewStarlessImage,
        structures: previewImages.structures,
      });
      starless = previewStarlessImage;
    } else {
      setPreviewImages({
        original,
        structures: previewImages.structures,
      });
    }

    if (structuresMapImage) {
      const previewStructuresImage = new Image();
      previewStructuresImage.assign(structuresMapImage);
      previewStructuresImage.cropTo(rect);
      setPreviewImages({
        original,
        starless: starless,
        structures: previewStructuresImage,
      });
    } else {
      setPreviewImages({
        original,
        starless: starless,
      });
    }
  }, [rect, targetImage, starlessImage, structuresMapImage]);

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

  function process(
    image: Image,
    starlessImage: Image,
    structuresMapImage?: Image
  ) {
    const lumImage = new Image();

    console.log("Get Luminance...");
    image.getLuminance(lumImage);

    console.log("MultiscaleLinearTransform...");
    const structuresImage =
      structuresMapImage && structuresView && !structuresView.isNull
        ? structuresMapImage
        : structures(lumImage, {
            minLayer: parameters.structuresMinLayer,
            maxLayer: parameters.structuresMaxLayer,
          });

    console.log("Binarize...");
    const binarizedImage = binarize(structuresImage, {
      threshold: parameters.binarizeThreshold,
    });

    let closedImage: Image | undefined;
    let binarizedMinusClosed: Image | undefined;

    if (isClosingEnabled) {
      console.log("Closing...");
      closedImage = morphology(
        MorphologicalOperator.DilationFilter,
        morphology(
          MorphologicalOperator.ErosionFilter,
          binarizedImage,
          parameters.closingSize
        ),
        parameters.closingDilationSize
      );

      binarizedMinusClosed = subtract(binarizedImage, closedImage);
    }

    console.log("MorphologicalTransformation Dilation...");
    const dilatedImage = morphology(
      MorphologicalOperator.DilationFilter,
      binarizedMinusClosed ?? binarizedImage,
      parameters.dilationSize
    );

    console.log("Convolution...");
    const convolutedImage = convolute(dilatedImage, parameters.convolutionSize);

    console.log("Calculate halos mask...");
    const halosImage = subtract(convolutedImage, lumImage);

    console.log("Render result image...");
    const finalImage = assignThroughMask(image, starlessImage, halosImage);

    return {
      lumImage,
      structuresImage,
      binarizedImage,
      closedImage,
      dilatedImage,
      convolutedImage,
      halosImage,
      finalImage,
    };
  }

  function onProcessPreviewClick() {
    if (!previewImages.original || !previewImages.starless) {
      console.error(previewImages.starless);
      return;
    }

    setIsControlsEnabled(false);

    try {
      const {
        lumImage,
        structuresImage,
        binarizedImage,
        closedImage,
        dilatedImage,
        convolutedImage,
        halosImage,
        finalImage,
      } = process(
        previewImages.original,
        previewImages.starless,
        previewImages.structures
      );

      setPreviewImages({
        ...previewImages,
        luminance: lumImage,
        structures: structuresImage,
        binarized: binarizedImage,
        closed: closedImage,
        dilated: dilatedImage,
        convoluted: convolutedImage,
        halos: halosImage,
        result: finalImage,
      });
      if (currentStep === "original" || currentStep === "starless") {
        setCurrentStep("result");
      }
    } catch (error) {
      console.error(error);
    }

    setIsControlsEnabled(true);
  }

  function onApplyClick() {
    if (!targetImage || !starlessImage) {
      return;
    }

    setIsControlsEnabled(false);

    try {
      const { finalImage } = process(
        targetImage,
        starlessImage,
        structuresMapImage
      );

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

    setIsControlsEnabled(true);
  }

  function onResetClick() {
    setParameters(defaultParameters);
  }

  function updateParameter<K extends keyof Parameters>(
    name: K,
    value: Parameters[K]
  ) {
    setParameters({ ...parameters, [name]: value });
    onParameterChange?.(name, value);
  }

  function onNewInstancePress() {
    dialog.newInstance();
  }

  function onMainViewMousePress(
    _x: number,
    _y: number,
    button: number,
    _state: any,
    _mods: any,
    readoutData: ReadoutData
  ) {
    console.log(button, readoutData)
    if (button === 1 && currentStep === "structures") {
      updateParameter(
        "binarizeThreshold",
        Math.floor(readoutData[3] * 100) / 100
      );
    } else if (button === 2) {
      const newStep = stepMap[currentStep];
      setPreviousStep(currentStep);
      setCurrentStep(newStep);
    }
  }

  function onMainViewMouseRelease(_x: number, _y: number, button: number) {
    if (button === 2) {
      setCurrentStep(previousStep);
    }
  }

  function saveAsView(image?: Image) {
    if (!image) {
      return;
    }
    const iw = new ImageWindow(
      image.width,
      image.width,
      image.numberOfChannels
    );
    iw.mainView.beginProcess();
    iw.mainView.image.assign(image);
    iw.mainView.endProcess();
    iw.show();
  }

  return (
    <UIVerticalSizer>
      <UIHorizontalSizer>
        <UIVerticalSizer margin={5} spacing={5}>
          <UILabel
            text={SCRIPT_DESCRIPTION}
            frameStyle={FrameStyle_Box}
            minHeight={70}
            maxHeight={70}
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
              currentView={targetView}
              onViewSelected={(view: View) => {
                setTargetView(view);
                updateParameter("targetViewId", view.id);
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
              currentView={starlessView}
              onViewSelected={(view: View) => {
                setStarlessView(view);
                updateParameter("starlessViewId", view.id);
              }}
              enabled={Boolean(targetView && !targetView.isNull)}
              stretchFactor={1}
            />
          </UIHorizontalSizer>

          <UIGroupBox title="Structures" spacing={5} margin={5}>
            <UIHorizontalSizer>
              <UILabel
                text="View: "
                textAlignment={TextAlign_VertCenter}
                minWidth={80}
              />
              <UIViewList
                currentView={structuresView}
                onViewSelected={(view: View) => {
                  setStructuresView(view);
                  updateParameter("structuresViewId", view.id);
                }}
                enabled={Boolean(targetView && !targetView.isNull)}
                stretchFactor={1}
              />
            </UIHorizontalSizer>

            <UIHorizontalSizer>
              <UILabel
                minWidth={60}
                text="Min layer:"
                textAlignment={TextAlign_VertCenter}
              />
              <UISpinBox
                autoAdjustWidth={false}
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
                autoAdjustWidth={false}
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
              <UILabel
                text="Threshold: "
                textAlignment={TextAlign_VertCenter}
              />
              <NumericControl
                value={parameters.binarizeThreshold}
                onValueUpdated={(binarizeThreshold) => {
                  updateParameter("binarizeThreshold", binarizeThreshold);
                }}
                minValue={0}
                maxValue={1}
                stepSize={0.01}
                tickInterval={0.01}
              />
            </UIHorizontalSizer>
          </UIGroupBox>

          <UIGroupBox
            title="Closing"
            spacing={5}
            margin={5}
            titleCheckBox={true}
            checked={isClosingEnabled}
            onCheck={(checked) => {
              setIsClosingEnabled(checked);
              updateParameter("closingEnabled", checked);
            }}
          >
            <UIHorizontalSizer spacing={5}>
              <UILabel
                text="Size: "
                textAlignment={TextAlign_VertCenter}
                minWidth={70}
              />
              <UISpinBox
                minValue={3}
                maxValue={11}
                stepSize={2}
                value={parameters.closingSize}
                onValueUpdated={(closingSize) => {
                  updateParameter("closingSize", closingSize);
                }}
              />
              <UIStretch />
            </UIHorizontalSizer>

            <UIHorizontalSizer spacing={5}>
              <UILabel
                text="Dilation size: "
                textAlignment={TextAlign_VertCenter}
                minWidth={70}
              />
              <UISpinBox
                minValue={3}
                maxValue={25}
                stepSize={2}
                value={parameters.closingDilationSize}
                onValueUpdated={(closingDilationSize) => {
                  updateParameter("closingDilationSize", closingDilationSize);
                }}
              />
              <UIStretch />
            </UIHorizontalSizer>
          </UIGroupBox>

          <UIGroupBox title="Dilation" spacing={5} margin={5}>
            <UIHorizontalSizer spacing={5}>
              <UILabel text="Size: " textAlignment={TextAlign_VertCenter} />
              <UISpinBox
                minValue={3}
                maxValue={25}
                stepSize={2}
                value={parameters.dilationSize}
                onValueUpdated={(dilationSize) => {
                  updateParameter("dilationSize", dilationSize);
                }}
              />
              <UIStretch />
            </UIHorizontalSizer>
          </UIGroupBox>

          <UIGroupBox title="Convolution" spacing={5} margin={5}>
            <UIHorizontalSizer spacing={5}>
              <UILabel text="Size: " textAlignment={TextAlign_VertCenter} />
              <UISpinBox
                minValue={3}
                maxValue={61}
                stepSize={2}
                value={parameters.convolutionSize}
                onValueUpdated={(convolutionSize) => {
                  updateParameter("convolutionSize", convolutionSize);
                }}
              />
              <UIStretch />
            </UIHorizontalSizer>
          </UIGroupBox>

          <UIGroupBox title="Select preview area" spacing={5} margin={5}>
            <ImagePreviewSelect
              image={targetImage}
              minWidth={300}
              minHeight={200}
              onRect={(rect) => setRect(rect)}
            />
          </UIGroupBox>

          <UIPushButton
            text="Process Preview"
            onClick={onProcessPreviewClick}
            enabled={Boolean(targetImage && starlessImage) && isControlsEnabled}
          />

          <UIStretch />
        </UIVerticalSizer>

        <UIVerticalSizer margin={5} spacing={5} stretchFactor={100}>
          <UIControl>
            <UIHorizontalSizer spacing={5}>
              <ImagePreview
                image={previewImages.original}
                title="Original"
                active={currentStep === "original"}
                onMousePress={() =>
                  previewImages.original && setCurrentStep("original")
                }
                onMouseDoubleClick={() => saveAsView(previewImages.original)}
              />
              <ImagePreview
                image={previewImages.starless}
                title="Starless"
                active={currentStep === "starless"}
                onMousePress={() =>
                  previewImages.starless && setCurrentStep("starless")
                }
                onMouseDoubleClick={() => saveAsView(previewImages.starless)}
              />
              <ImagePreview
                image={previewImages.luminance}
                title="Luminance"
                active={currentStep === "luminance"}
                onMousePress={() =>
                  previewImages.luminance && setCurrentStep("luminance")
                }
                onMouseDoubleClick={() => saveAsView(previewImages.luminance)}
              />
              <ImagePreview
                image={previewImages.structures}
                title="Structure"
                active={currentStep === "structures"}
                onMousePress={() =>
                  previewImages.structures && setCurrentStep("structures")
                }
                onMouseDoubleClick={() => saveAsView(previewImages.structures)}
              />
              <ImagePreview
                image={previewImages.binarized}
                title="Binarized"
                active={currentStep === "binarized"}
                onMousePress={() =>
                  previewImages.binarized && setCurrentStep("binarized")
                }
                onMouseDoubleClick={() => saveAsView(previewImages.binarized)}
              />
              {isClosingEnabled && (
                <ImagePreview
                  image={previewImages.closed}
                  title="Closing"
                  active={currentStep === "closed"}
                  onMousePress={() =>
                    previewImages.closed && setCurrentStep("closed")
                  }
                  onMouseDoubleClick={() => saveAsView(previewImages.closed)}
                />
              )}
              <ImagePreview
                image={previewImages.dilated}
                title="Dilated"
                active={currentStep === "dilated"}
                onMousePress={() =>
                  previewImages.dilated && setCurrentStep("dilated")
                }
                onMouseDoubleClick={() => saveAsView(previewImages.dilated)}
              />
              <ImagePreview
                image={previewImages.convoluted}
                title="Convoluted"
                active={currentStep === "convoluted"}
                onMousePress={() =>
                  previewImages.convoluted && setCurrentStep("convoluted")
                }
                onMouseDoubleClick={() => saveAsView(previewImages.convoluted)}
              />
              <ImagePreview
                image={previewImages.halos}
                title="Halos mask"
                active={currentStep === "halos"}
                onMousePress={() =>
                  previewImages.halos && setCurrentStep("halos")
                }
                onMouseDoubleClick={() => saveAsView(previewImages.halos)}
              />
              <ImagePreview
                image={previewImages.result}
                title="Result"
                active={currentStep === "result"}
                onMousePress={() =>
                  previewImages.result && setCurrentStep("result")
                }
                onMouseDoubleClick={() => saveAsView(previewImages.result)}
              />
            </UIHorizontalSizer>
          </UIControl>

          <ImagePreview
            stretchFactor={1}
            image={currentImage}
            toolTip="Press the right mouse button to compare with the previous step"
            showReadout={true}
            onMousePress={onMainViewMousePress}
            onMouseRelease={onMainViewMouseRelease}
          />
        </UIVerticalSizer>
      </UIHorizontalSizer>

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
          enabled={isControlsEnabled}
        />
        <UIPushButton
          onClick={onApplyClick}
          icon=":/icons/ok.png"
          text="Apply"
          enabled={isControlsEnabled}
        />
      </UIHorizontalSizer>
    </UIVerticalSizer>
  );
}

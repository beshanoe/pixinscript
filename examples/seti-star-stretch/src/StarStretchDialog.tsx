import { TextAlign_Left, TextAlign_VertCenter } from "@pixinscript/core";
import { useDialog } from "@pixinscript/react";
import {
  UICheckBox,
  UIComboBox,
  UIHorizontalSizer,
  UILabel,
  UINumericControl,
  UIPushButton,
  UIStretch,
  UITextBox,
  UIToolButton,
  UIVerticalSizer,
  UIViewList,
} from "@pixinscript/ui";
import React from "react";
import { StarStretchParameters } from "./Parameters";
import { ScrollControl } from "./ScrollControl";
import { applyStretchToMainImage, getPreviewImage } from "./utils";

const ZoomFactors = [
  { text: "1:1" },
  { text: "1:2" },
  { text: "1:4" },
  { text: "1:8" },
  { text: "Fit to Preview" },
];

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

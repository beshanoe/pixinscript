import {
  FrameStyle_Box,
  TextAlign_Center,
  TextAlign_Left,
  TextAlign_VertCenter,
} from "@pixinsight/core";
import {
  UIComboBox,
  UIEdit,
  UIGroupBox,
  UIHorizontalSizer,
  UILabel,
  UISlider,
  UISpinBox,
  UIStretch,
  UIVerticalSizer,
  UIViewList,
} from "@pixinsight/ui";
import React, { useState } from "react";
import { version } from "../package.json";

export const SCRIPT_NAME = "Star De-emphasizer";
const SCRIPT_DESCRIPTION = `<b> ${SCRIPT_NAME}  v${version}</b> &mdash; This script uses the method suggested by Adam Block to de-emphasize stars.`;

export function ScriptDialog() {
  const [starlessView, setStarlessView] = useState<View | null>(null);
  const [targetView, setTargetView] = useState<View | null>(null);

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

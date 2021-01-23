import { FrameStyle_Box, TextAlign_Center } from "@pixinsight/core";
import {
  ComboBox,
  Edit,
  GroupBox,
  HorizontalSizer,
  Label,
  Slider,
  SpinBox,
  Stretch,
  VerticalSizer,
  ViewList,
} from "@pixinsight/ui";
import React from "react";
import { version } from "../package.json";

export const SCRIPT_NAME = "Star De-emphasizer";
const SCRIPT_DESCRIPTION = `<b> ${SCRIPT_NAME}  v${version}</b> &mdash; This script uses the method suggested by Adam Block to de-emphasize stars.`;

export function ScriptDialog() {
  // const [counter, setCounter] = useState(0);
  // const [showLast, setShowLast] = useState(false);
  // const [selectedView, setSelectedView] = useState<View | null>(null);

  // const [sfac, setSfac] = useState(0);

  // const viewListRef = useRef<ViewList>(null);

  return (
    <VerticalSizer margin={5} spacing={5}>
      <Label
        text={SCRIPT_DESCRIPTION}
        frameStyle={FrameStyle_Box}
        wordWrapping={true}
        useRichText={true}
        stretchFactor={0}
      />

      <HorizontalSizer>
        <Label text="Starless view: " textAlignment={TextAlign_Center} />
        <ViewList
          // onViewSelected={(view: View) => setSelectedView(view)}
          // ref={viewListRef}
          stretchFactor={1}
        />
      </HorizontalSizer>

      <GroupBox title="Structures" spacing={5} margin={5}>
        <HorizontalSizer>
          <Label text="Min size: " textAlignment={TextAlign_Center} />
          <SpinBox />
          <Stretch />
        </HorizontalSizer>
        <HorizontalSizer>
          <Label text="Max size: " textAlignment={TextAlign_Center} />
          <SpinBox />
          <Stretch />
        </HorizontalSizer>
      </GroupBox>

      <GroupBox title="Binarization" spacing={5} margin={5}>
        <HorizontalSizer spacing={5}>
          <Label text="Threshold: " textAlignment={TextAlign_Center} />
          <Edit maxWidth={50} />
          <Slider stretchFactor={1} />
        </HorizontalSizer>
      </GroupBox>

      <GroupBox title="Dilation" spacing={5} margin={5}>
        <HorizontalSizer spacing={5}>
          <Label text="Size: " textAlignment={TextAlign_Center} />
          <ComboBox />
          <Stretch />
        </HorizontalSizer>
      </GroupBox>

      <GroupBox title="Convolution" spacing={5} margin={5}>
        <HorizontalSizer spacing={5}>
          <Label text="StdDev: " textAlignment={TextAlign_Center} />
          <Edit maxWidth={50} />
          <Slider stretchFactor={1} />
        </HorizontalSizer>
      </GroupBox>

      <Stretch />

      {/* <Slider
        minValue={0}
        maxValue={100}
        value={sfac}
        onValueUpdated={(value: number) => setSfac(value)}
      />
      <PushButton text="Update sfac" onClick={() => setSfac(100)} />
      <HorizontalSizer spacing={10} margin={5}>
        <Label
          text={`Hello ${counter}!`}
          alignment={Align_Center}
          frameStyle={FrameStyle_Raised}
          stretchFactor={sfac}
        />
        <PushButton
          text="+"
          onClick={() => {
            console.log("+");
            setCounter(counter + 1);
          }}
        ></PushButton>
        <PushButton
          text="-"
          onClick={() => {
            console.log("-");
            setCounter(counter - 1);
          }}
        ></PushButton>
      </HorizontalSizer>

      <HorizontalSizer>
        <Label text="Starless view: " />
        <ViewList
          onViewSelected={(view: View) => setSelectedView(view)}
          ref={viewListRef}
          stretchFactor={1}
        />
        <PushButton
          text="Refresh"
          onClick={() => viewListRef?.current?.getPreviews()}
        />
      </HorizontalSizer>
      {selectedView && <Label text={`Selected view: ${selectedView.id}`} />}

      {showLast && (
        <PushButton height={50} width={50}>
          <Label text="In Frame" alignment={Align_Center} />
        </PushButton>
      )}

      <PushButton
        text="timeout log"
        onClick={() => {
          setTimeout(() => {
            console.writeln("LszOGG!");
            setShowLast(!showLast);
          }, 1000);
        }}
      ></PushButton>
      <Stretch />
      <Label text="After spacing" frameStyle={FrameStyle_Box} /> */}
    </VerticalSizer>
  );
}

import {
  Align_Center,
  FrameStyle_Box,
  FrameStyle_Raised
} from "@pixinsight/core";
import {
  HorizontalSizer,
  Label,
  PushButton,
  Slider,

  Stretch,
  VerticalSizer,
  ViewList
} from "@pixinsight/ui";
import "core-js/modules/es.map";
import * as React from "react";

export function ScriptDialog() {
  const [counter, setCounter] = React.useState(0);
  const [showLast, setShowLast] = React.useState(false);
  const [selectedView, setSelectedView] = React.useState<View | null>(null);

  const [sfac, setSfac] = React.useState(0);

  const viewListRef = React.useRef<ViewList>(null);

  return (
    <VerticalSizer>
      <Slider
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
          stretchFactor={20}
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
        />
        <PushButton
          text="Refresh"
          onClick={() => viewListRef?.current?.getPreviews()}
        />
      </HorizontalSizer>
      {selectedView && <Label text={`Selected view: ${selectedView.id}`} />}

      <PushButton
        text="timeout log"
        onClick={() => {
          setTimeout(() => {
            console.writeln("LszOGG!");
            setShowLast(!showLast);
          }, 1000);
        }}
      ></PushButton>
      {showLast && (
        <PushButton height={50} width={50}>
          <Label text="In Frame" alignment={Align_Center} />
        </PushButton>
      )}
      <Stretch />
      <Label text="After spacing" frameStyle={FrameStyle_Box} />
    </VerticalSizer>
  );
}

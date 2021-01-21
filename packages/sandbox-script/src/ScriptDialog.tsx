import {
  HorizontalSizer,
  Label,
  PushButton,
  Spacing,
  Stretch,
  VerticalSizer,
  ViewList,
} from "@pixinsight/ui";
import "core-js/modules/es.map";
import * as React from "react";
import { Align_Center, FrameStyle_Box } from "@pixinsight/core";

export function ScriptDialog() {
  const [counter, setCounter] = React.useState(0);
  const [showLast, setShowLast] = React.useState(false);
  const [selectedView, setSelectedView] = React.useState<View>(null);

  return (
    <VerticalSizer>
      <HorizontalSizer spacing={10}>
        <Label text={`Hello ${counter}!`} alignment={Align_Center} />
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
        <ViewList onViewSelected={(view) => setSelectedView(view)} />
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
      {showLast && <Spacing size={50} />}
      <Label text="After spacing" frameStyle={FrameStyle_Box} />
      <Stretch stretchFactor={100} />
    </VerticalSizer>
  );
}

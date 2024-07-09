import React from "react";
import { render, useDialog } from "@pixinscript/react";
import { UILabel, UIPushButton, UIVerticalSizer } from "@pixinscript/ui";

function ScriptDialog() {
  const dialog = useDialog();
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <UIVerticalSizer margin={8} spacing={8}>
      {isVisible && <UILabel text="Hello World!" />}
      <UIPushButton
        text={isVisible ? "Hide message" : "Show message"}
        onClick={() => setIsVisible(!isVisible)}
      />
      <UIPushButton text="Close window" onClick={() => dialog.ok()} />
    </UIVerticalSizer>
  );
}

render(<ScriptDialog />, {
  dialog: {
    windowTitle: "Hello World Script",
    minWidth: 400,
    maxHeight: 300,
    userResizable: false
  },
});

import React, { useState } from "react";
import { render, useDialog } from "@pixinscript/react";
import {
  UIHorizontalSizer,
  UILabel,
  UIPushButton,
  UIVerticalSizer,
} from "@pixinscript/ui";

function ScriptDialog() {
  const dialog = useDialog();
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <UIVerticalSizer margin={8} spacing={8}>
      {isVisible && <UILabel text="Hello World!" />}
      <UILabel text={`Count: ${count}`} />
      <UIPushButton
        text={isVisible ? "Hide message" : "Show message"}
        onClick={() => setIsVisible(!isVisible)}
      />
      <UIHorizontalSizer spacing={8}>
        <UIPushButton text="+" onClick={() => setCount(count + 1)} />
        <UIPushButton text="-" onClick={() => setCount(count - 1)} />
      </UIHorizontalSizer>
      <UIPushButton text="Close window" onClick={() => dialog.ok()} />
    </UIVerticalSizer>
  );
}

render(<ScriptDialog />, {
  dialog: {
    windowTitle: "Hello World Script",
    minWidth: 400,
    maxHeight: 300,
    userResizable: false,
  },
});

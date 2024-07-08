import "@pixinsight/core/polyfill";
import { render } from "@pixinsight/react";
import * as React from "react";
import { ScriptDialog, SCRIPT_NAME, defaultParameters } from "./ScriptDialog";
import { StarStretchDialogComponent } from "./StarStretchDialogComponent";

// const parameters: Record<string, any> = {};

// Object.entries(defaultParameters).forEach(([key, value]) => {
//   if (!Parameters.has(key)) {
//     Parameters.set(key, value);
//   }
//   const stored = Parameters.get(key);
//   let parsed: number | string | boolean = stored;
//   if (typeof value === "number") {
//     parsed = parseFloat(stored);
//   } else if (typeof value === "boolean") {
//     parsed = JSON.parse(stored);
//   }
//   parameters[key] = parsed;
// });

// render(
//   <ScriptDialog
//     parameters={parameters}
//     onParameterChange={(name, value) => {
//       Parameters.set(name, value.toString());
//     }}
//   />,
//   {
//     debug: false,
//     dialog: {
//       windowTitle: `${SCRIPT_NAME} Script`,
//       userResizable: false,
//     },
//   }
// );

// console.log(StarStretchDialogComponent);

render(
  <StarStretchDialogComponent
  // parameters={parameters}
  // onParameterChange={(name, value) => {
  //   Parameters.set(name, value.toString());
  // }}
  />,
  {
    debug: false,
    dialog: {
      windowTitle: `Sandbox Script`,
      userResizable: true,
      scaledMinWidth: 450,
    },
  }
);

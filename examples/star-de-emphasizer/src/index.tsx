import { render } from "@pixinscript/react";
import * as React from "react";
import { ScriptDialog, SCRIPT_NAME, defaultParameters } from "./ScriptDialog";

const parameters: Record<string, any> = {};

Object.entries(defaultParameters).forEach(([key, value]) => {
  if (!Parameters.has(key)) {
    Parameters.set(key, value);
  }
  const stored = Parameters.get(key);
  let parsed: number | string | boolean = stored;
  if (typeof value === "number") {
    parsed = parseFloat(stored);
  } else if (typeof value === "boolean") {
    parsed = JSON.parse(stored);
  }
  parameters[key] = parsed;
});

console.clear();

render(
  <ScriptDialog
    parameters={parameters}
    onParameterChange={(name, value) => {
      Parameters.set(name, value.toString());
    }}
  />,
  {
    debug: false,
    dialog: {
      windowTitle: `${SCRIPT_NAME} Script`,
      userResizable: true,
    },
  }
);

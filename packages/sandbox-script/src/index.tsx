import { parameterStorage } from "@pixinsight/core";
import { render } from "@pixinsight/react";
import * as React from "react";
import { ScriptDialog, SCRIPT_NAME, defaultParameters } from "./ScriptDialog";

const parameters: Record<string, any> = {};

Object.entries(defaultParameters).forEach(([key, value]) => {
  if (!parameterStorage.has(key)) {
    parameterStorage.set(key, value);
  }
  const stored = parameterStorage.get(key);
  let parsed: number | string | boolean = stored;
  if (typeof value === "number") {
    parsed = parseFloat(stored);
  } else if (typeof value === "boolean") {
    parsed = JSON.parse(stored);
  }
  parameters[key] = parsed;
});

render(
  <ScriptDialog
    parameters={parameters}
    onParameterChange={(name, value) => {
      parameterStorage.set(name, value.toString());
    }}
  />,
  {
    debug: false,
    dialog: {
      windowTitle: `${SCRIPT_NAME} Script`,
      userResizable: false,
    },
  }
);

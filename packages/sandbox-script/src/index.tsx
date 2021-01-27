import { render } from "@pixinsight/react";
import "core-js/modules/es.map";
import * as React from "react";
import { ScriptDialog, SCRIPT_NAME } from "./ScriptDialog";

render(<ScriptDialog />, {
  debug: false,
  dialog: { windowTitle: `${SCRIPT_NAME} Script`, minWidth: 400 },
});

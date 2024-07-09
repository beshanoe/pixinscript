/******************************************************************************
 * Star Stretch Script
 * Version: 2.3
 * Author: Franklin Marek
 * Website: www.setiastro.com
 *
 * This script performs a stretch of a linear star image, boosts color, and removes any green cast.
 *
 * This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/
 *
 * You are free to:
 * 1. Share — copy and redistribute the material in any medium or format
 * 2. Adapt — remix, transform, and build upon the material
 *
 * Under the following terms:
 * 1. Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
 * 2. NonCommercial — You may not use the material for commercial purposes.
 *
 * @license CC BY-NC 4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
 *
 * COPYRIGHT © 2024 Franklin Marek. ALL RIGHTS RESERVED.
 ******************************************************************************/

import { render } from "@pixinscript/react";
import * as React from "react";
import { StarStretchParameters } from "./Parameters";
import { StarStretchDialog } from "./StarStretchDialog";
import {
  applyColorSaturation,
  applyPixelMath,
  applySCNR,
  isGrayscale,
} from "./utils";

const VERSION = "v2.3";

// Modify the main execution logic
function main() {
  // hide the console, we don't need it
  Console.show();

  // script should not run in global mode
  if (Parameters.isGlobalTarget) {
    Console.criticalln("Star Stretch could not run in global context.");
    return;
  }

  // perform the script on the target view when dragged and dropped
  if (Parameters.isViewTarget) {
    // load parameters
    StarStretchParameters.load();

    // Apply the stretch immediately to the target view
    let targetView = Parameters.targetView;
    if (targetView && !targetView.isNull) {
      applyPixelMath(targetView, StarStretchParameters.amount);

      if (!isGrayscale(targetView)) {
        applyColorSaturation(targetView, StarStretchParameters.satAmount);
        if (StarStretchParameters.removeGreen) {
          applySCNR(targetView);
        }
      }

      console.show();
      console.noteln("Star Stretch Process Completed!");
    } else {
      Console.warningln("No valid target view specified.");
    }
    return;
  }

  render(<StarStretchDialog />, {
    debug: false,
    dialog: {
      windowTitle: `Star Stretch ${VERSION}`,
      userResizable: true,
      scaledMinWidth: 450,
    },
  });
}

main();

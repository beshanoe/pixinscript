import * as webpack from "webpack";
import { ConcatSource } from "webpack-sources";
import fs from "fs";

export class PixinsightWebpackPlugin {
  constructor() {}

  apply(compiler: webpack.Compiler) {
    const packageJson = JSON.parse(
      fs.readFileSync("./package.json", { encoding: "utf-8" })
    );

    if (!packageJson.pixinsight) {
      throw new Error("pixinsight field not found in package.json");
    }

    const { name, pixinsight: { script } = { script } } = packageJson;

    compiler.hooks.thisCompilation.tap(
      "FileListPlugin",
      (compilation: webpack.Compilation) => {
        compilation.hooks.processAssets.tapPromise(
          {
            name: "FileListPlugin",
            stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER,
          },
          () => {
            const asset = compilation.assets["script.js"];
            if (asset) {
              const bundleSource = asset.source();

              const newSource = [
                `#feature-id ${script["feature-id"] || name}`,
                `#feature-info ${script["feature-info"] || name}`,
                bundleSource,
              ].join("\n");

              compilation.assets["script.js"] = new ConcatSource(
                newSource
              ) as any;
            }
            return Promise.resolve();
          }
        );
      }
    );
  }
}

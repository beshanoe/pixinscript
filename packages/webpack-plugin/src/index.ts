import * as webpack from "webpack";
import { ConcatSource } from "webpack-sources";

export class PixinsightWebpackPlugin {
  constructor(private options: { featureId: string; featureInfo: string }) {}

  apply(compiler: webpack.Compiler) {
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
                `#feature-id ${this.options.featureId}`,
                `#feature-info ${this.options.featureInfo}`,
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

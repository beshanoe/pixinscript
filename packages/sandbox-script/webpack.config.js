//@ts-check

const path = require("path");
const prettier = require("prettier");
const webpack = require("webpack");
const { ConcatSource } = require("webpack-sources");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  devtool: false,
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.m?jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: "8",
                  },
                  useBuiltIns: "entry",
                  corejs: "3",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // new (class {
    //   apply(/** @type webpack.Compiler */ compiler) {
    //     compiler.hooks.compilation.tap("PrettyEmit", (
    //       /** @type webpack.Compilation */ compilation
    //     ) => {
    //       compilation.hooks.processAssets.tap(
    //         {
    //           name: "PrettyEmit",
    //           stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
    //         },
    //         (assets) => {
    //           for (const [fileName, asset] of Object.entries(assets)) {
    //             if (fileName === "bundle.js") {
    //               const prettified = prettier.format(
    //                 asset.source().toString("utf-8"),
    //                 {
    //                   parser: "babel",
    //                 }
    //               );
    //             //   assets["bundle.js"] = new ConcatSource(prettified);
    //             }
    //           }
    //         }
    //       );
    //     });
    //   }
    // })(),
  ],
};

//@ts-check

import * as path from "path";
import * as webpack from "webpack";
import { PixinsightWebpackPlugin } from "@pixinsight/webpack-plugin";
import * as ZipWebpackPlugin from "zip-webpack-plugin";

const workingDir = process.cwd();

export const makeConfig = ({
  featureId,
  featureInfo,
  zip,
}: {
  featureId: string;
  featureInfo: string;
  zip?: {
    filename: string;
    path: string;
  };
}): webpack.Configuration => ({
  entry: ["@pixinsight/core/polyfill", path.resolve(workingDir, "src/index")],

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
        exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
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
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "script.js",
    path: path.resolve(workingDir, "dist"),
  },
  plugins: [
    new PixinsightWebpackPlugin({
      featureId,
      featureInfo,
    }),
    zip &&
      new ZipWebpackPlugin({
        filename: zip.filename,
        path: zip.path,
      }),
  ].filter(Boolean),
});

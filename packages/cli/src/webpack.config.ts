//@ts-check

import * as path from "path";
import * as webpack from "webpack";
import { PixinsightWebpackPlugin } from "@pixinsight/webpack-plugin";

const workingDir = process.cwd();

export const config: webpack.Configuration = {
  entry: path.resolve(workingDir, "src/index"),
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
    filename: "script.js",
    path: path.resolve(workingDir, "dist"),
  },
  plugins: [new PixinsightWebpackPlugin()],
};

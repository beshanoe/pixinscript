//@ts-check

const path = require("path");
const { PixinsightWebpackPlugin } = require('@pixinsight/webpack-plugin')

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
    filename: "script.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new PixinsightWebpackPlugin()
  ],
};

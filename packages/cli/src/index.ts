import * as webpack from "webpack";
import { makeConfig } from "./webpack.config";

export type Options = {
  featureId: string;
  featureInfo: string;
};

export async function build({ featureId, featureInfo }: Options) {
  console.log("Building script");

  await webpack(
    makeConfig({
      featureId,
      featureInfo,
    }),
    (err, stats) => {
      if (err || stats.hasErrors()) {
        console.error(err);
      }

      console.log(stats.toString());
    }
  );
}

export async function dev({ featureId, featureInfo }: Options) {
  console.log("Starting watch mode");

  await webpack(
    makeConfig({
      featureId,
      featureInfo,
    })
  ).watch({}, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error(err);
    }

    console.log(stats.toString());
  });
}

import * as webpack from "webpack";
import { config } from "./webpack.config";

export async function build() {
  console.log("building!!");

  await webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error(err);
    }

    console.log(stats.toString());
  });
}

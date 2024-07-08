#!/usr/bin/env node
import { cosmiconfig } from "cosmiconfig";
import * as yup from "yup";
import { Command } from "commander";
import { build, dev } from "./index";

const explorer = cosmiconfig("pixinscript");
const program = new Command();

const configSchema = yup.object().shape({
  script: yup
    .object()
    .shape({
      featureId: yup.string().required(),
      featureInfo: yup.string().required(),
    })
    .required(),
});

async function loadConfig() {
  try {
    const result = await explorer.search();
    try {
      configSchema.validateSync(result.config);
    } catch (error) {
      throw new Error("Config error: " + error.message);
    }

    return result.config;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

async function main() {
  const config = await loadConfig();

  program
    .name("pixinscript-cli")
    .description("Pixinsight Script Builder")
    .version(require("../package.json").version);

  program
    .command("build")
    .description("Build the script")
    .action(() => {
      build(config.script);
    });

  program
    .command("dev")
    .description("Run the watch-mode")
    .action(() => {
      dev(config.script);
    });

  program.parse(process.argv);
}

main();

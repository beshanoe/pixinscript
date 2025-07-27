import webpack = require("webpack");
import * as path from "path";
import * as fs from "fs";
import * as archiver from "archiver";
import { makeConfig } from "./webpack.config";

export type Options = {
  featureId: string;
  featureInfo: string;
};

export type BuildOptions = {
  createZip?: boolean;
};

export type ZipOptions = {
  filename: string;
  path: string;
};

export async function build(
  { featureId, featureInfo }: Options,
  { createZip = false }: BuildOptions = {}
) {
  console.log("Building script");

  const zipConfig = createZip ? { filename: "script.zip", path: "" } : undefined;

  return new Promise<void>((resolve, reject) => {
    webpack(
      makeConfig({
        featureId,
        featureInfo,
        zip: zipConfig,
      }),
      (err, stats) => {
        if (err || stats?.hasErrors()) {
          console.error(stats.toString());
          reject(new Error('Compilation failed with errors'));
          return;
        }

        console.log(stats?.toString());
        resolve();
      }
    );
  });
}

export async function dev({ featureId, featureInfo }: Options) {
  console.log("Starting watch mode");

  webpack(
    makeConfig({
      featureId,
      featureInfo,
      // Never create ZIP in dev mode
      zip: undefined,
    })
  ).watch({}, (err, stats) => {
    if (err || stats?.hasErrors()) {
      console.error(err);
    }

    console.log(stats?.toString());
  });
}

export async function zip(
  _options: Options,
  { filename, path: zipPath }: ZipOptions
) {
  console.log(`Creating ZIP archive: ${filename}`);

  const workingDir = process.cwd();
  const distPath = path.resolve(workingDir, "dist");

  // Check if dist folder exists
  if (!fs.existsSync(distPath)) {
    console.error("Error: dist folder not found. Run 'pixinscript build' first.");
    process.exit(1);
  }

  // Check if script.js exists
  const scriptPath = path.resolve(distPath, "script.js");
  if (!fs.existsSync(scriptPath)) {
    console.error("Error: script.js not found in dist folder. Run 'pixinscript build' first.");
    process.exit(1);
  }

  const zipFilePath = path.resolve(distPath, filename);
  
  return new Promise<void>((resolve, reject) => {
    // Create file stream
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    output.on('close', () => {
      console.log(`ZIP archive created: ${zipFilePath} (${archive.pointer()} bytes)`);
      resolve();
    });

    archive.on('error', (err) => {
      console.error("Error creating ZIP:", err);
      reject(err);
    });

    // Pipe archive data to the file
    archive.pipe(output);

    // Read all files in dist directory
    const files = fs.readdirSync(distPath);
    files.forEach((file) => {
      const filePath = path.resolve(distPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile() && file !== filename) { // Don't include the zip file itself
        const fileInZip = path.posix.join(zipPath, file);
        archive.file(filePath, { name: fileInZip });
      }
    });

    // Finalize the archive
    archive.finalize();
  });
}

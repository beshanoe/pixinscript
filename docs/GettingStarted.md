# Getting Started with PixInScript

Welcome to the PixInScript Getting Started guide! This document will walk you through the steps to set up your environment, build your first script, and integrate it with PixInsight.

## Prerequisites

To get started with PixInScript, ensure you have the following:

- **Node.js**: Version 20 or higher. You can download it from the [official Node.js website](https://nodejs.org/) or use a version manager like [FNM](https://github.com/Schniz/fnm) to manage multiple versions of Node.js.

## Setting Up PixInScript

### 1. Clone the PixInScript Repository

The PixInScript project is still in its early stages, so it's recommended to work directly in the monorepo. This allows you to enhance TypeScript definitions and contribute to the project.

```bash
git clone https://github.com/beshanoe/pixinscript.git
cd pixinscript
```

### 2. Install Dependencies

Inside the PixInScript folder, run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Build the Project

The PixInScript repository is a monorepo managed by TurboRepo. You can build all packages inside the repository with:

```bash
npm run build
```

Alternatively, to start the development environment for all examples in the repository, use:

```bash
npm run dev
```

This command will build all scripts in the `examples` folder and watch for changes to recompile them on the fly.

### 4. Build Specific Scripts

Building all scripts simultaneously might not be necessary. To build and start the development environment for a specific script, such as "hello world", use:

```bash
npm run dev -- --filter hello-world
```

### 5. Integrate with PixInsight

Once the script is compiled, its `script.js` file will appear inside the `dist` folder. To make PixInsight recognize it:

1. Open PixInsight.
2. Go to the `Script` menu.
3. Click `Feature Script`.
4. Click `Add` and point to the `dist` folder.
5. PixInsight should detect the new script. Click `Done`.

The name of the script is defined in the `package.json` file under the `pixinscript` section. You can change it as needed.

### 6. Update the Script

After the initial setup, you don't need to repeat the feature script steps. Each time the script rebuilds, simply restart PixInsight to load the latest version.

## Working with Examples

If you prefer not to clone the entire monorepo, you can download specific examples. For instance, to work with the "hello world" example:

1. Navigate to the `examples` folder.
2. Download the "hello world" example.
3. Inside the example folder, run:

    ```bash
    npm install
    ```

4. To build and start the development environment:

    ```bash
    npm run build
    npm run dev
    ```

## Contributing

PixInScript welcomes contributions! If you find missing TypeScript definitions or have enhancements, feel free to open a pull request in the PixInScript repository.

## Conclusion

By following these steps, you should be able to set up PixInScript, build your scripts, and integrate them with PixInsight. Enjoy the modern development experience with JavaScript and TypeScript, and feel free to share your feedback and contributions with the community.

Happy scripting!

# PixInScript

PixInScript is a new tool designed to modernize the development of PixInsight scripts. By leveraging modern JavaScript and TypeScript, along with tools like React, PixInScript enhances code readability, type checking, and modularity. This tool aims to streamline the scripting process in PixInsight, making it more efficient and accessible for developers.

## Features

- **Modern JavaScript and TypeScript**: Write scripts in modern JavaScript or TypeScript with full type support and compile-time checking.
- **React UIs**: Build UIs using React, bringing the power of declarative UI development to PixInsight scripts.
- **Type Checking**: TypeScript’s type checking helps catch errors during development, boosting productivity and minimizing runtime errors.
- **Modular Code**: ES modules allow for splitting code into separate files and importing them predictably, making complex scripts more manageable.
- **Development Environment**: Use your preferred editor, like Visual Studio Code, to write and debug scripts. PixInScript CLI compiles the code into JavaScript that PixInsight understands.
- **Reusable Components**: Create and share reusable components and functions via Node Package Manager, increasing reusability across scripts.
- **Community Contributions**: The project is open for contributions, especially in enhancing type definitions and migrating UI components to React.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A working installation of PixInsight.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/beshanoe/pixinscript.git
    cd pixinscript
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Hello World Script Example

Here is an example of a simple "Hello World" script using PixInScript:

```javascript
import React from "react";
import { render, useDialog } from "@pixinscript/react";
import { UILabel, UIPushButton, UIVerticalSizer } from "@pixinscript/ui";

function ScriptDialog() {
  const dialog = useDialog();
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <UIVerticalSizer margin={8} spacing={8}>
      {isVisible && <UILabel text="Hello World!" />}
      <UIPushButton
        text={isVisible ? "Hide message" : "Show message"}
        onClick={() => setIsVisible(!isVisible)}
      />
      <UIPushButton text="Close window" onClick={() => dialog.ok()} />
    </UIVerticalSizer>
  );
}

render(<ScriptDialog />, {
  dialog: {
    windowTitle: "Hello World Script",
    minWidth: 400,
    maxHeight: 300,
    userResizable: false
  },
});
```

### Running the Script

1. Compile the script using the PixInScript CLI:
    ```sh
    npm run build
    ```

2. Load the compiled script into PixInsight.

## Current State and Future Plans

The PixInScript library is still evolving. Here are some ongoing efforts and future plans:

- **Type Definitions**: Full migration of available objects and processes into TypeScript declarations is ongoing. Community contributions are welcome to enhance type definitions.
- **UI Components**: Rewriting PixInsight primitive UI components into React components is in progress.
- **Documentation**: Currently, the project lacks comprehensive documentation or guides. Contributions in this area are highly appreciated.

## Contributing

We encourage you to try PixInScript, provide feedback, and contribute to its development. Your support and input are invaluable in making this tool robust and comprehensive for the PixInsight community.

Check out the PixInScript examples. As an exercise, we've ported Seti Astro's amazing Star Stretch script to React and TypeScript.

[PixInScript Examples](https://github.com/beshanoe/pixinscript/tree/master/examples)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please open an issue on the [GitHub repository](https://github.com/beshanoe/pixinscript).

Happy scripting!
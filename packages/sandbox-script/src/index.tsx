//@ts-nocheck
import "core-js/modules/es.map";
import * as React from "react";
import { render } from "../../react/src/renderer";

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <vsizer>
      <hsizer>
        Hello {counter}!
        <button
          text="+"
          onClick={() => {
            console.log("+");
            setCounter(counter + 1);
          }}
        ></button>
        <button
          text="-"
          onClick={() => {
            console.log("-");
            setCounter(counter - 1);
          }}
        ></button>
      </hsizer>

      <button
        text="timeout log"
        onClick={() => {
          setTimeout(() => {
            console.writeln("LOGG!");
          }, 1000);
        }}
      ></button>
    </vsizer>
  );
}

render(<App />);

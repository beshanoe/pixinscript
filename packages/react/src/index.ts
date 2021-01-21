export * from "./renderer";

declare global {
  function setTimeout(cb: () => void, timeMs: number);
}

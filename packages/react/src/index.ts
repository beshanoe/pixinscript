export * from "./renderer";
export * from "./DialogContext";
declare global {
  function setTimeout(cb: () => void, timeMs: number): number;
  function clearTimeout(timerId: number): void;
}

declare class Dialog extends Control {
  result: number;
  userResizable: Boolean;

  constructor(parent?: Control);

  onExecute(): void;
  onReturn(retVal: number): void;

  cancel(): void;
  done(retCode: number): void;
  execute(): number;
  newInstance(): void;
  ok(): void;
  open(): void;

  static browseScriptDocumentation(
    scriptName: string,
    title?: string,
    width?: number,
    height?: number
  ): Boolean;
  static openBrowser(
    uri: string,
    title?: string,
    width?: number,
    height?: number
  ): void;
}

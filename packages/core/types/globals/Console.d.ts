interface Console {
  abortEnabled: boolean;
  readonly abortRequested: boolean;
  readonly isAborted: boolean;
  readonly isError: boolean;
  readonly isSuspended: boolean;
  readonly isWaiting: boolean;

  abort(dontAsk?: boolean): void;
  beginLog(filePath?: string): void;
  clear(): void;
  critical(...values: any[]): number;
  criticalln(...values: any[]): number;
  endLog(): Uint8Array;
  flush(): void;
  hide(animate?: boolean): void;
  logText(): Uint8Array;
  note(...values: any[]): number;
  noteln(...values: any[]): number;
  readChar(): number;
  readString(): string;
  resetStatus(): void;
  show(animate?: boolean): void;
  warning(...values: any[]): number;
  warningln(...values: any[]): number;
  write(...values: any[]): number;
  writeln(...values: any[]): number;
}

declare var Console: Console;
declare var console: Console;

declare class ExternalProcess {
  readonly bytesAvailable: number;
  readonly bytesToWrite: number;
  environment: any[];
  readonly error: number;
  readonly exitCode: number;
  readonly exitStatus: number;
  readonly isRunning: boolean;
  readonly isStarting: boolean;
  readonly outputData: any;
  readonly pid: number;
  readonly standardError: any;
  standardInput: any[] | string;
  readonly standardOutput: any;
  readonly stderr: any;
  stdin: any[] | string;
  readonly stdout: any;
  workingDirectory: string;

  constructor(program?: string, arguments?: any[]);

  closeStandardError(): void;
  closeStandardInput(): void;
  closeStandardOutput(): void;
  kill(): void;
  redirectStandardError(fileName: string, append?: boolean): void;
  redirectStandardInput(fileName: string): void;
  redirectStandardOutput(fileName: string, append?: boolean): void;
  redirectStandardOutput(process: ExternalProcess): void;
  start(program: string, args?: any[]): void;
  terminate(): void;
  waitForDataAvailable(ms?: number): boolean;
  waitForDataWritten(ms?: number): boolean;
  waitForFinished(ms?: number): boolean;
  waitForStarted(ms?: number): boolean;
  onError(errorCode: number): void;
  onFinished(exitCode: number, exitStatus: number): void;
  onStandardErrorDataAvailable(): void;
  onStandardOutputDataAvailable(): void;
  onStarted(): void;
  onStateChanged(newState: number): void;

  static execute(program: string, args?: any[]): number;
  static startDetached(
    program: string,
    args?: any[],
    workingDirectory?: string
  ): number;
  static startDetached(program: string, workingDirectory?: string): number;
}

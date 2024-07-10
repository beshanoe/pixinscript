declare class FileWatcher {
  readonly directories: any[];
  readonly files: any[];

  constructor();
  constructor(paths: any[]);

  addPath(path: string): void;
  addPaths(paths: any[]): void;
  clear(): void;
  removePath(path: string): void;
  removePaths(paths: any[]): void;

  onDirectoryChanged(dirPath: string): void;
  onFileChanged(filePath: string): void;
}

declare class FileFind {
  readonly attributes: number;
  readonly created: Date;
  readonly groupId: Number;
  readonly isDirectory: Boolean;
  readonly isFile: Boolean;
  readonly isHidden: Boolean;
  readonly isSymbolicLink: Boolean;
  readonly isValid: Boolean;
  readonly lastAccessed: Date;
  readonly lastModified: Date;
  readonly name: String;
  readonly numberOfLinks: Number;
  readonly searchPath: String;
  readonly size: Number;
  readonly userId: Number;

  constructor();
  constructor(filePath: String);

  begin(path: String): Boolean;
  end(): void;
  next(): Boolean;
}

declare class FileInfo {
  readonly attributes: number;
  readonly completeSuffix: String;
  readonly directory: String;
  readonly drive: String;
  readonly exists: Boolean;
  readonly extension: String;
  readonly groupId: Number;
  readonly isDirectory: Boolean;
  readonly isExecutable: Boolean;
  readonly isFile: Boolean;
  readonly isHidden: Boolean;
  readonly isReadable: Boolean;
  readonly isSymbolicLink: Boolean;
  readonly isWritable: Boolean;
  readonly lastAccessed: Date;
  readonly lastModified: Date;
  readonly name: String;
  readonly nameAndExtension: String;
  readonly nameAndSuffix: String;
  readonly numberOfHardLinks: number;
  readonly path: String;
  readonly size: Number;
  readonly suffix: String;
  readonly symbolicLinkTarget: String;
  readonly timeCreated: Date;
  readonly userId: Number;

  constructor();
  constructor(filePath: String);
  constructor(info: FileInfo);

  assign(info: FileInfo): void;
  clear(): void;
  refresh(filePath?: String): void;
}

declare class Settings {
  static readonly lastReadOK: boolean;

  static canReadGlobal(key: string): boolean;
  static canWriteGlobal(key: string): boolean;
  static read(key: string, dataType: number): any;
  static readGlobal(key: string, dataType: number): any;
  static remove(key: string): boolean;
  static removeGlobal(key: string): boolean;
  static write(key: string, dataType: number, x: any): void;
  static writeGlobal(key: string, dataType: number, x: any): void;
}

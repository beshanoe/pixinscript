declare class Parameters {
  static readonly isGlobalTarget: boolean;
  static readonly isViewTarget: boolean;
  static readonly targetView: View;

  static clear(): void;
  static get(id: string): string;
  static getBoolean(id: string): boolean;
  static getInteger(id: string, radix?: number): number;
  static getReal(id: string): number;
  static getString(id: string): string;
  static getUInt(id: string, radix?: number): number;
  static has(id: string): boolean;
  static remove(id: string): void;
  static set(id: string, value: any): void;
}

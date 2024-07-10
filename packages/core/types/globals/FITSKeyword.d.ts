declare class FITSKeyword {
  comment: string;
  readonly isBoolean: boolean;
  readonly isNull: boolean;
  readonly isNumeric: boolean;
  readonly isString: boolean;
  name: string;
  readonly numericValue: number;
  readonly strippedValue: string;
  value: string;

  constructor();
  constructor(name: string, value: string, comment?: string);
  constructor(k: FITSKeyword);

  assign(k: FITSKeyword): void;
  assign(name: string, value: string, comment?: string): void;
  toArray(): Array<any>;
  toString(): string;
  trim(): void;
}

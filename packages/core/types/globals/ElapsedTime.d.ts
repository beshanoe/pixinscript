declare class ElapsedTime {
  // Properties
  readonly text: string;
  readonly value: number;

  // Constructors
  constructor();
  constructor(t: ElapsedTime);

  // Methods
  reset(): void;
  since(t: ElapsedTime): number;

  // Static Methods
  static timeStamp(): [number, number];
  static toString(seconds: number, width?: number, precision?: number): string;
}

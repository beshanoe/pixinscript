declare class Date {
  constructor();
  constructor(msSinceUNIXEpoch: number);
  constructor(dateString: string);
  constructor(
    year: number,
    month: number,
    day: number,
    hour?: number,
    minute?: number,
    second?: number,
    millisecond?: number
  );

  getDate(): number;
  getDay(): number;
  getFullYear(): number;
  getHours(): number;
  getMilliseconds(): number;
  getMinutes(): number;
  getMonth(): number;
  getSeconds(): number;
  getTime(): number;
  getTimezoneOffset(): number;
  getUTCDate(): number;
  getUTCDay(): number;
  getUTCFullYear(): number;
  getUTCHours(): number;
  getUTCMilliseconds(): number;
  getUTCMinutes(): number;
  getUTCMonth(): number;
  getUTCSeconds(): number;
  propertyIsEnumerable(propertyName: string): boolean;
  setDate(day: number): void;
  setFullYear(year: number, month?: number, day?: number): void;
  setHours(
    hour: number,
    minute?: number,
    second?: number,
    millisecond?: number
  ): void;
  setMilliseconds(millisecond: number): void;
  setMinutes(minute: number, second?: number, millisecond?: number): void;
  setMonth(month: number, day?: number): void;
  setSeconds(second: number, millisecond?: number): void;
  setTime(time: number): void;
  setUTCDate(day: number): void;
  setUTCFullYear(year: number, month?: number, day?: number): void;
  setUTCHours(
    hour: number,
    minute?: number,
    second?: number,
    millisecond?: number
  ): void;
  setUTCMilliseconds(millisecond: number): void;
  setUTCMinutes(minute: number, second?: number, millisecond?: number): void;
  setUTCMonth(month: number, day?: number): void;
  setUTCSeconds(second: number, millisecond?: number): void;
  toDateString(): string;
  toISOString(): string;
  toJSON(): string;
  toLocaleDateString(): string;
  toLocaleFormat(format: string): string;
  toLocaleString(): string;
  toLocaleTimeString(): string;
  toSource(): string;
  toString(): string;
  toTimeString(): string;
  toUTCString(): string;
  valueOf(): number;

  static UTC(
    year: number,
    month: number,
    day: number,
    hour?: number,
    minute?: number,
    second?: number,
    millisecond?: number
  ): number;
  static now(): number;
  static parse(dateString: string): number;
}

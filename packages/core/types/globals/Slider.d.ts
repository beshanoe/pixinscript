declare class Slider extends Control {
  maxValue: number;
  minValue: number;
  normalizedValue: number;
  pageSize: number;
  stepSize: number;
  tickInterval: number;
  tickStyle: number;
  tracking: boolean;
  value: number;

  constructor(parent?: Control, vertical?: boolean);

  onRangeUpdated(minValue: number, maxValue: number): void;
  onValueUpdated(value: number): void;

  setRange(minValue: number, maxValue: number): void;
}

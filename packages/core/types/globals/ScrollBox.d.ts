declare class ScrollBox extends Frame {
  autoScroll: boolean;
  horizontalAutoScroll: boolean;
  horizontalScrollBarVisible: boolean;
  horizontalScrollPosition: number;
  horizontalTracking: boolean;
  lineHeight: number;
  lineWidth: number;
  maxHorizontalScrollPosition: number;
  maxVerticalScrollPosition: number;
  minHorizontalScrollPosition: number;
  minVerticalScrollPosition: number;
  pageHeight: number;
  pageWidth: number;
  scrollBarsVisible: boolean;
  scrollPosition: Point;
  tracking: boolean;
  verticalAutoScroll: boolean;
  verticalScrollBarVisible: boolean;
  verticalScrollPosition: number;
  verticalTracking: boolean;
  readonly viewport: Control;

  constructor(parent?: Control);

  hideScrollBars(hide?: boolean): void;
  hideScrollBars(hideHorz: boolean, hideVert: boolean): void;
  setHorizontalScrollRange(min: number, max: number): void;
  setScrollPosition(x: number, y: number): void;
  setScrollPosition(pos: Point): void;
  setVerticalScrollRange(min: number, max: number): void;
  showScrollBars(show?: boolean): void;
  showScrollBars(showHorz: boolean, showVert: boolean): void;
  
  onHorizontalScrollPosUpdated(newPos: number): void;
  onHorizontalScrollRangeUpdated(minPos: number, maxPos: number): void;
  onVerticalScrollPosUpdated(newPos: number): void;
  onVerticalScrollRangeUpdated(minPos: number, maxPos: number): void;
}

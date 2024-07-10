declare class TabBox extends Control {
  constructor(parent?: Control);

  readonly currentPageControl: Control;
  currentPageIndex: number;
  leftControl: Control;
  readonly numberOfPages: number;
  rightControl: Control;
  tabPosition: number;

  onPageSelected(pageIndex: number): void;

  addPage(page: Control, label: string, icon?: Bitmap | string): void;
  clearControls(clearLeft?: boolean, clearRight?: boolean): void;
  clearPageIcon(index: number): void;
  disablePage(index: number, disable?: boolean): void;
  enablePage(index: number, enable?: boolean): void;
  insertPage(
    index: number,
    page: Control,
    label: string,
    icon?: Bitmap | string
  ): void;
  isPageEnabled(index: number): boolean;
  pageControlByIndex(index: number): Control;
  pageIcon(index: number): Bitmap;
  pageLabel(index: number): string;
  pageToolTip(index: number): string;
  removePage(index: number): void;
  setPageIcon(index: number, icon: Bitmap | string): void;
  setPageLabel(index: number, label: string): void;
  setPageToolTip(index: number, tip: string): void;
}

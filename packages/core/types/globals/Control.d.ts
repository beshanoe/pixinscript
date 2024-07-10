declare class Control {
  alternateCanvasColor: number;
  readonly availableScreenRect: Rect;
  backgroundColor: number;
  readonly boundsRect: Rect;
  buttonColor: number;
  buttonTextColor: number;
  canUpdate: Boolean;
  canvasColor: number;
  childToFocus: Control;
  readonly childrenRect: Rect;
  clientRect: Rect;
  cursor: Cursor;
  readonly dialog: Dialog;
  readonly displayPixelRatio: Number;
  enabled: Boolean;
  focusStyle: number;
  readonly focusedChild: Control;
  font: Font;
  foregroundColor: number;
  readonly frameRect: Rect;
  hasFocus: Boolean;
  height: number;
  highlightColor: number;
  highlightedTextColor: number;
  readonly isActiveWindow: Boolean;
  readonly isDialog: Boolean;
  readonly isFixedHeight: Boolean;
  readonly isFixedWidth: Boolean;
  readonly isMaximized: Boolean;
  readonly isMinimized: Boolean;
  readonly isModal: Boolean;
  readonly isUnderMouse: Boolean;
  readonly isWindow: Boolean;
  maxHeight: number;
  maxWidth: number;
  minHeight: number;
  minWidth: number;
  mouseTracking: Boolean;
  nextSiblingToFocus: Control;
  objectId: String;
  parent: Control;
  position: Point;
  readonly resourcePixelRatio: Number;
  scaledMaxHeight: number;
  scaledMaxWidth: number;
  scaledMinHeight: number;
  scaledMinWidth: number;
  readonly screenRect: Rect;
  sizer: Sizer;
  readonly smartMinHeight: number;
  readonly smartMinWidth: number;
  styleSheet: String;
  textColor: number;
  toolTip: String;
  visible: Boolean;
  readonly visibleRect: Rect;
  width: number;
  readonly window: Control;
  windowOpacity: Number;
  windowTitle: String;
  onChildCreate(child: Control): void;
  onChildDestroy(child: Control): void;
  onClose(): Boolean;
  onDestroy(): void;
  onEnter(): Boolean | void;
  onGetFocus(): Boolean | void;
  onHide(): void;
  onKeyPress(keyCode: number, modifiers: number): Boolean | void;
  onKeyRelease(keyCode: number, modifiers: number): Boolean | void;
  onLeave(): Boolean | void;
  onLoseFocus(): Boolean | void;
  onMouseDoubleClick(
    x: number,
    y: number,
    buttonState: number,
    modifiers: number
  ): Boolean | void;
  onMouseMove(
    x: number,
    y: number,
    buttonState: number,
    modifiers: number
  ): Boolean | void;
  onMousePress(
    x: number,
    y: number,
    button: number,
    buttonState: number,
    modifiers: number
  ): Boolean | void;
  onMouseRelease(
    x: number,
    y: number,
    button: number,
    buttonState: number,
    modifiers: number
  ): Boolean | void;
  onMouseWheel(
    x: number,
    y: number,
    delta: Number,
    buttonState: number,
    modifiers: number
  ): Boolean | void;
  onMove(
    xNew: number,
    yNew: number,
    xOld: number,
    yOld: number
  ): Boolean | void;
  onPaint(x0: number, y0: number, x1: number, y1: number): Boolean | void;
  onResize(
    wNew: number,
    hNew: number,
    wOld: number,
    hOld: number
  ): Boolean | void;
  onShow(): void;
  constructor(parent?: Control);
  activateWindow(): void;
  adjustToContents(): void;
  bringToFront(): void;
  childByPos(pos: Point): Control;
  childByPos(x: number, y: number): Control;
  controlToLocal(ctrl: Control, pos: Point): Point;
  ensureLayoutUpdated(): void;
  globalToLocal(pos: Point): Point;
  hide(): void;
  hideAlias(): void;
  isAncestorOf(ctrl: Control): Boolean;
  localToControl(ctrl: Control, pos: Point): Point;
  localToGlobal(pos: Point): Point;
  localToParent(pos: Point): Point;
  logicalPixelsToPhysical(size: Number): number;
  move(pos: Point): void;
  move(x: number, y: number): void;
  parentToLocal(pos: Point): Point;
  physicalPixelsToLogical(size: Number): number;
  render(): Bitmap;
  repaint(): void;
  repaint(rect: Rect): void;
  repaint(x0: number, y0: number, x1: number, y1: number): void;
  resize(w: number, h: number): void;
  restyle(): void;
  scaledResource(filePath: String): String;
  scaledStyleSheet(cssCode: String, fontDPI?: number): String;
  scroll(d: Point): void;
  scroll(dx: number, dy: number): void;
  scroll(d: Point, rect: Rect): void;
  scroll(
    dx: number,
    dy: number,
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): void;
  sendToBack(): void;
  setCursorToParent(): void;
  setFixedHeight(h?: number): void;
  setFixedSize(w?: number, h?: number): void;
  setFixedWidth(w?: number): void;
  setMaxHeight(h?: number): void;
  setMaxSize(w?: number, h?: number): void;
  setMaxWidth(w?: number): void;
  setMinHeight(h?: number): void;
  setMinSize(w?: number, h?: number): void;
  setMinWidth(w?: number): void;
  setScaledFixedHeight(h: number): void;
  setScaledFixedSize(w: number, h: number): void;
  setScaledFixedWidth(w: number): void;
  setScaledMaxHeight(h: number): void;
  setScaledMaxSize(w: number, h: number): void;
  setScaledMaxWidth(w: number): void;
  setScaledMinHeight(h: number): void;
  setScaledMinSize(w: number, h: number): void;
  setScaledMinWidth(w: number): void;
  setVariableHeight(): void;
  setVariableSize(): void;
  setVariableWidth(): void;
  show(): void;
  showAlias(): void;
  stackUnder(ctrl: Control): void;
  update(): void;
  update(rect: Rect): void;
  update(x0: number, y0: number, x1: number, y1: number): void;
}

declare const FocusStyle_Click: 0x02;
declare const FocusStyle_NoFocus: 0x00;
declare const FocusStyle_Tab: 0x01;
declare const FocusStyle_TextListTab: 0x08;
declare const FocusStyle_Wheel: 0x04;
declare const KeyModifier_Alt: 0x04;
declare const KeyModifier_Control: 0x02;
declare const KeyModifier_Meta: 0x10;
declare const KeyModifier_Shift: 0x01;
declare const KeyModifier_SpaceBar: 0x08;
declare const MouseButton_Left: 0x01;
declare const MouseButton_Middle: 0x04;
declare const MouseButton_Right: 0x02;
declare const MouseButton_Unknown: 0;
declare const MouseButton_X1: 0x10;
declare const MouseButton_X2: 0x20;

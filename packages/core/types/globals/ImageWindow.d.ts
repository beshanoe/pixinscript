declare class ImageWindow {
  readonly aperture: number;
  readonly bitsPerSample: number;
  readonly cfaType: string;
  currentView: View;
  readonly exposure: number;
  readonly filePath: string;
  readonly fileURL: string;
  readonly focalLength: number;
  geometry: Rect;
  readonly hasAstrometricSolution: boolean;
  readonly hasMaskReferences: boolean;
  readonly hasPendingUpdates: boolean;
  height: number;
  horizontalResolution: number;
  iconic: boolean;
  readonly isACopy: boolean;
  readonly isClosed: boolean;
  readonly isComplexSample: boolean;
  readonly isFloatSample: boolean;
  readonly isModified: boolean;
  readonly isNew: boolean;
  readonly isNull: boolean;
  readonly isWindow: boolean;
  readonly isoSpeed: number;
  keywords: Array<string>;
  readonly mainView: View;
  mask: ImageWindow;
  maskEnabled: boolean;
  maskInverted: boolean;
  maskMode: number;
  maskVisible: boolean;
  metricResolution: boolean;
  readonly numberOfPreviews: number;
  position: Point;
  readonly previews: Array<View>;
  resolution: number;
  rgbWorkingSpace: RGBColorSystem;
  selectedPreview: View;
  transparencyColor: boolean;
  transparencyMode: boolean;
  transparencyVisible: boolean;
  verticalResolution: number;
  readonly viewportHeight: number;
  viewportPosition: Point;
  readonly viewportUpdateRect: Rect;
  readonly viewportWidth: number;
  visible: boolean;
  readonly visibleViewportRect: Rect;
  width: number;
  zoomFactor: number;
  static readonly activeWindow: ImageWindow;
  static readonly openWindows: Array<ImageWindow>;
  static readonly swapFilesDirectory: string;
  static readonly windows: Array<ImageWindow>;

  constructor();
  constructor(imageWindow: ImageWindow);
  constructor(
    width: number,
    height: number,
    numberOfChannels?: number,
    bitsPerSample?: number,
    floatSample?: boolean,
    color?: boolean,
    id?: string
  );

  applyColorTransformation(bmp: Bitmap, view?: View): void;
  astrometricReprojection(srcWindow: ImageWindow): void;
  astrometricReprojectionBounds(srcWindow: ImageWindow, srcRect: Rect): Rect;
  astrometricSolutionSummary(): string;
  bringToFront(): void;
  celestialToImage(
    eqDeg: Point | number,
    deltaDeg?: number
  ): Point | Array<any>;
  clearAstrometricSolution(): void;
  close(multiple?: boolean): number;
  commitPendingUpdates(): void;
  copyAstrometricSolution(source: ImageWindow): void;
  createPreview(r: Rect | number, id: string): View;
  deiconize(): void;
  deletePreview(preview: View): void;
  deletePreviews(): void;
  fitWindow(): void;
  forceClose(): void;
  go(index: number): void;
  hide(): void;
  iconize(): void;
  imageScalarToViewport(k: number): number;
  imageToCelestial(xy: Point | number, y?: number): Point | Array<any>;
  imageToViewport(p: Point): Point;
  isMaskCompatible(mask: ImageWindow): boolean;
  isMaskOf(window: ImageWindow): boolean;
  isValidView(view: View): boolean;
  modifyPreview(preview: View, r: Rect | number, id?: string): void;
  previewById(id: string): View;
  previewRect(preview: View): Rect;
  purge(
    swapFiles?: boolean,
    properties?: boolean,
    histograms?: boolean,
    statistics?: boolean,
    notify?: boolean
  ): void;
  redo(n?: number): void;
  redoAll(): void;
  regenerate(): void;
  regenerateAstrometricSolution(): void;
  removeMask(): void;
  removeMaskReferences(): void;
  save(allowMessages?: boolean, strict?: boolean): boolean;
  saveAs(
    filePath: string,
    queryOptions?: boolean,
    allowMessages?: boolean,
    strict?: boolean,
    verifyOverwrite?: boolean,
    formatHints?: string
  ): boolean;
  sendToBack(): void;
  setMask(mask: ImageWindow, invert?: boolean): void;
  setResolution(res: number): void;
  setSampleFormat(bitsPerSample: number, floatSample: boolean): void;
  setViewport(center: Point | number, y?: number, zoomFactor?: number): void;
  show(): void;
  undo(n?: number): void;
  undoAll(): void;
  updateAstrometryMetadata(): void;
  updateImageRect(
    r: Rect | number,
    y0?: number,
    x1?: number,
    y1?: number
  ): void;
  updateMaskReferences(): void;
  updateViewport(): void;
  updateViewportRect(
    r: Rect | number,
    y0?: number,
    x1?: number,
    y1?: number
  ): void;
  viewportScalarToImage(k: number): number;
  viewportToImage(p: Point): Point;
  zoomIn(): void;
  zoomOut(): void;
  zoomToFit(allowZoomIn?: boolean, animate?: boolean): void;
  zoomToOptimalFit(allowZoomIn?: boolean, animate?: boolean): void;
  static open(
    url: string,
    id?: string,
    formatHints?: string,
    asCopy?: boolean
  ): Array<ImageWindow>;
  static windowByFilePath(path: string): ImageWindow;
  static windowById(id: string): ImageWindow;
}

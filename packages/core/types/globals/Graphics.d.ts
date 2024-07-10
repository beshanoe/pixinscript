declare class Graphics {
  antialiasing: boolean;
  backgroundBrush: Brush;
  brush: Brush;
  brushOrigin: Point;
  clipRect: Rect;
  clipping: boolean;
  compositionOperator: number;
  font: Font;
  readonly isPainting: boolean;
  opacity: number;
  pen: Pen;
  smoothInterpolation: boolean;
  textAntialiasing: boolean;
  transformationEnabled: boolean;
  transformationMatrix: Matrix;
  transparentBackground: boolean;

  constructor();
  constructor(bmp: Bitmap);
  constructor(svg: SVG);
  constructor(pdf: PDF);
  constructor(ctr: Control);

  begin(bmp: Bitmap): void;
  begin(svg: SVG): void;
  begin(pdf: PDF): void;
  begin(ctr: Control): void;

  drawArc(
    center: Point,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  drawArc(
    cx: number,
    cy: number,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  drawBitmap(p: Point, bmp: Bitmap): void;
  drawBitmap(x: number, y: number, bmp: Bitmap): void;
  drawBitmapRect(p: Point, bmp: Bitmap, r: Rect): void;
  drawBitmapRect(
    x: number,
    y: number,
    bmp: Bitmap,
    x0: number,
    y0: number,
    x1: number,
    y1: number
  ): void;
  drawChord(
    center: Point,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  drawChord(
    cx: number,
    cy: number,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  drawCircle(center: Point, radius: number): void;
  drawCircle(xc: number, yc: number, radius: number): void;
  drawEllipse(r: Rect): void;
  drawEllipse(x0: number, y0: number, x1: number, y1: number): void;
  drawEllipticArc(r: Rect, startRadians: number, spanRadians: number): void;
  drawEllipticArc(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    startRadians: number,
    spanRadians: number
  ): void;
  drawEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;
  drawEllipticChord(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    startRadians: number,
    spanRadians: number
  ): void;
  drawEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;
  drawEllipticPie(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    startRadians: number,
    spanRadians: number
  ): void;
  drawLine(p0: Point, p1: Point): void;
  drawLine(x0: number, y0: number, x1: number, y1: number): void;
  drawPie(
    center: Point,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  drawPie(
    cx: number,
    cy: number,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  drawPoint(p: Point): void;
  drawPoint(x: number, y: number): void;
  drawPolygon(points: Array<Point>, fillRule?: number): void;
  drawPolyline(points: Array<Point>): void;
  drawRect(r: Rect): void;
  drawRect(x0: number, y0: number, x1: number, y1: number): void;
  drawRoundedRect(r: Rect, rx?: number, ry?: number): void;
  drawRoundedRect(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    rx?: number,
    ry?: number
  ): void;
  drawScaledBitmap(r: Rect, bmp: Bitmap): void;
  drawScaledBitmap(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    bmp: Bitmap
  ): void;
  drawScaledBitmapRect(rdst: Rect, bmp: Bitmap, rsrc: Rect): void;
  drawScaledBitmapRect(
    dx0: number,
    dy0: number,
    dx1: number,
    dy1: number,
    bmp: Bitmap,
    sx0: number,
    sy0: number,
    sx1: number,
    sy1: number
  ): void;
  drawText(p: Point, text: string): void;
  drawText(x: number, y: number, text: string): void;
  drawTextRect(r: Rect, text: string, align?: number): void;
  drawTextRect(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    text: string,
    align?: number
  ): void;
  drawTiledBitmap(r: Rect, bmp: Bitmap, origin?: Point): void;
  drawTiledBitmap(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    bmp: Bitmap,
    ox?: number,
    oy?: number
  ): void;
  end(): void;
  eraseChord(
    center: Point,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  eraseChord(
    cx: number,
    cy: number,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  eraseCircle(center: Point, radius: number): void;
  eraseCircle(xc: number, yc: number, radius: number): void;
  eraseEllipse(r: Rect): void;
  eraseEllipse(x0: number, y0: number, x1: number, y1: number): void;
  eraseEllipticChord(r: Rect, startRadians: number, spanRadians: number): void;
  eraseEllipticChord(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    startRadians: number,
    spanRadians: number
  ): void;
  eraseEllipticPie(r: Rect, startRadians: number, spanRadians: number): void;
  eraseEllipticPie(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    startRadians: number,
    spanRadians: number
  ): void;
  erasePie(
    center: Point,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  erasePie(
    cx: number,
    cy: number,
    radius: number,
    startRadians: number,
    spanRadians: number
  ): void;
  erasePolygon(points: Array<Point>, fillRule?: number): void;
  eraseRect(r: Rect): void;
  eraseRect(x0: number, y0: number, x1: number, y1: number): void;
  eraseRoundedRect(r: Rect, rx?: number, ry?: number): void;
  eraseRoundedRect(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    rx?: number,
    ry?: number
  ): void;
  fillChord(
    center: Point,
    radius: number,
    startRadians: number,
    spanRadians: number,
    brush?: Brush
  ): void;
  fillChord(
    cx: number,
    cy: number,
    radius: number,
    startRadians: number,
    spanRadians: number,
    brush?: Brush
  ): void;
  fillCircle(center: Point, radius: number, brush?: Brush): void;
  fillCircle(xc: number, yc: number, radius: number, brush?: Brush): void;
  fillEllipse(r: Rect, brush?: Brush): void;
  fillEllipse(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    brush?: Brush
  ): void;
  fillEllipticChord(
    r: Rect,
    startRadians: number,
    spanRadians: number,
    brush?: Brush
  ): void;
  fillEllipticChord(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    startRadians: number,
    spanRadians: number,
    brush?: Brush
  ): void;
  fillEllipticPie(
    r: Rect,
    startRadians: number,
    spanRadians: number,
    brush?: Brush
  ): void;
  fillEllipticPie(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    startRadians: number,
    spanRadians: number,
    brush?: Brush
  ): void;
  fillPie(
    center: Point,
    radius: number,
    startRadians: number,
    spanRadians: number,
    brush?: Brush
  ): void;
  fillPie(
    cx: number,
    cy: number,
    radius: number,
    startRadians: number,
    spanRadians: number,
    brush?: Brush
  ): void;
  fillPolygon(points: Array<Point>, fillRule?: number, brush?: Brush): void;
  fillRect(r: Rect, brush?: Brush): void;
  fillRect(x0: number, y0: number, x1: number, y1: number, brush?: Brush): void;
  fillRoundedRect(r: Rect, rx?: number, ry?: number, brush?: Brush): void;
  fillRoundedRect(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    rx?: number,
    ry?: number,
    brush?: Brush
  ): void;
  multiplyTransformation(T: Matrix): void;
  popState(): void;
  pushState(): void;
  resetTransformation(): void;
  rotateTransformation(angleRadians: number): void;
  scaleTransformation(sx: number, sy?: number): void;
  shearTransformation(sx: number, sy?: number): void;
  strokeChord(
    center: Point,
    radius: number,
    startRadians: number,
    spanRadians: number,
    pen?: Pen
  ): void;
  strokeChord(
    cx: number,
    cy: number,
    radius: number,
    startRadians: number,
    spanRadians: number,
    pen?: Pen
  ): void;
  strokeCircle(center: Point, radius: number, pen?: Pen): void;
  strokeCircle(xc: number, yc: number, radius: number, pen?: Pen): void;
  strokeEllipse(r: Rect, pen?: Pen): void;
  strokeEllipse(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    pen?: Pen
  ): void;
  strokeEllipticChord(
    r: Rect,
    startRadians: number,
    spanRadians: number,
    pen?: Pen
  ): void;
  strokeEllipticChord(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    startRadians: number,
    spanRadians: number,
    pen?: Pen
  ): void;
  strokeEllipticPie(
    r: Rect,
    startRadians: number,
    spanRadians: number,
    pen?: Pen
  ): void;
  strokeEllipticPie(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    startRadians: number,
    spanRadians: number,
    pen?: Pen
  ): void;
  strokePie(
    center: Point,
    radius: number,
    startRadians: number,
    spanRadians: number,
    pen?: Pen
  ): void;
  strokePie(
    cx: number,
    cy: number,
    radius: number,
    startRadians: number,
    spanRadians: number,
    pen?: Pen
  ): void;
  strokePolygon(points: Array<Point>, fillRule?: number, pen?: Pen): void;
  strokeRect(r: Rect, pen?: Pen): void;
  strokeRect(x0: number, y0: number, x1: number, y1: number, pen?: Pen): void;
  strokeRoundedRect(r: Rect, rx?: number, ry?: number, pen?: Pen): void;
  strokeRoundedRect(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    rx?: number,
    ry?: number,
    pen?: Pen
  ): void;
  textRect(r: Rect, text: string, align?: number): Rect;
  textRect(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    text: string,
    align?: number
  ): Rect;
  transformed(p: Point): Point;
  transformed(x: number, y: number): Point;
  translateTransformation(d: Point): void;
  translateTransformation(dx: number, dy: number): void;

  static CompositionOp_Add: number;
  static CompositionOp_Clear: number;
  static CompositionOp_ColorBurn: number;
  static CompositionOp_ColorDodge: number;
  static CompositionOp_Destination: number;
  static CompositionOp_DestinationAtop: number;
  static CompositionOp_DestinationIn: number;
  static CompositionOp_DestinationOut: number;
  static CompositionOp_DestinationOver: number;
  static CompositionOp_Difference: number;
  static CompositionOp_Exclusion: number;
  static CompositionOp_HardLight: number;
  static CompositionOp_Max: number;
  static CompositionOp_Min: number;
  static CompositionOp_Multiply: number;
  static CompositionOp_Overlay: number;
  static CompositionOp_Screen: number;
  static CompositionOp_SoftLight: number;
  static CompositionOp_Source: number;
  static CompositionOp_SourceAtop: number;
  static CompositionOp_SourceIn: number;
  static CompositionOp_SourceOut: number;
  static CompositionOp_SourceOver: number;
  static CompositionOp_Xor: number;
  static FillRule_OddEven: number;
  static FillRule_Winding: number;
}

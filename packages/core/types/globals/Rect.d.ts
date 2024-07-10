declare class Rect {
    readonly area: number;
    bottom: number;
    center: Point;
    readonly diagonal: number;
    height: number;
    readonly hypot: number;
    readonly isHorizontalLine: boolean;
    readonly isLine: boolean;
    readonly isNormal: boolean;
    readonly isOrdered: boolean;
    readonly isPoint: boolean;
    readonly isPointOrLine: boolean;
    readonly isRect: boolean;
    readonly isVerticalLine: boolean;
    left: number;
    leftBottom: Point;
    leftTop: Point;
    readonly perimeter: number;
    right: number;
    rightBottom: Point;
    rightTop: Point;
    top: number;
    width: number;
    x0: number;
    x1: number;
    y0: number;
    y1: number;

    constructor();
    constructor(x0: number, y0: number, x1: number, y1: number);
    constructor(width: number, height: number);
    constructor(d: number);
    constructor(r: Rect);

    add(r: Rect): void;
    add(p: Point): void;
    add(x: number, y?: number): void;
    add(x0: number, y0: number, x1: number, y1: number): void;

    assign(r: Rect): void;
    assign(v: number): void;
    assign(width: number, height: number): void;
    assign(x0: number, y0: number, x1: number, y1: number): void;

    clipCode(p: Point): number;
    clipCode(x: number, y: number): number;

    deflateBy(d: Point): void;
    deflateBy(dx: number, dy?: number): void;
    deflatedBy(d: Point): Rect;
    deflatedBy(dx: number, dy?: number): Rect;

    div(r: Rect): void;
    div(p: Point): void;
    div(x: number, y?: number): void;
    div(x0: number, y0: number, x1: number, y1: number): void;

    includes(p: Point): boolean;
    includes(x: number, y: number): boolean;

    inflateBy(d: Point): void;
    inflateBy(dx: number, dy?: number): void;
    inflatedBy(d: Point): Rect;
    inflatedBy(dx: number, dy?: number): Rect;

    intersect(r: Rect): void;
    intersect(x0: number, y0: number, x1: number, y1: number): void;
    intersection(r: Rect): Rect;
    intersection(x0: number, y0: number, x1: number, y1: number): Rect;

    intersects(r: Rect): boolean;
    intersects(x0: number, y0: number, x1: number, y1: number): boolean;

    isEqualTo(r: Rect): boolean;
    isEqualTo(p0: Point, p1: Point): boolean;
    isEqualTo(x0: number, y0: number, x1: number, y1: number): boolean;
    isEqualTo(scalar: number): boolean;

    isLessThan(r: Rect): boolean;
    isLessThan(p0: Point, p1: Point): boolean;
    isLessThan(x0: number, y0: number, x1: number, y1: number): boolean;
    isLessThan(scalar: number): boolean;

    moveBy(d: Point): void;
    moveBy(dx: number, dy?: number): void;
    moveTo(p: Point): void;
    moveTo(x: number, y?: number): void;
    movedBy(d: Point): Rect;
    movedBy(dx: number, dy?: number): Rect;
    movedTo(p: Point): Rect;
    movedTo(x: number, y?: number): Rect;

    mul(r: Rect): void;
    mul(p: Point): void;
    mul(x: number, y?: number): void;
    mul(x0: number, y0: number, x1: number, y1: number): void;

    order(): void;
    ordered(): Rect;

    resizeBy(d: Point): void;
    resizeBy(dx: number, dy?: number): void;
    resizeTo(width: number, height?: number): void;
    resizedBy(d: Point): Rect;
    resizedBy(dx: number, dy?: number): Rect;
    resizedTo(width: number, height?: number): Rect;

    rotate(angleRadians: number, center?: Point): void;
    rotate(sin: number, cos: number, center?: Point): void;
    rotate(angleRadians: number, xc: number, yc: number): void;
    rotate(sin: number, cos: number, xc: number, yc: number): void;
    rotated(angleRadians: number, center?: Point): Rect;
    rotated(sin: number, cos: number, center?: Point): Rect;
    rotated(angleRadians: number, xc: number, yc: number): Rect;
    rotated(sin: number, cos: number, xc: number, yc: number): Rect;

    round(n?: number): void;
    rounded(n?: number): Rect;

    sub(r: Rect): void;
    sub(p: Point): void;
    sub(x: number, y?: number): void;
    sub(x0: number, y0: number, x1: number, y1: number): void;

    symmetric(): Rect;
    symmetrize(): void;

    toArray(): Array<any>;
    toString(): string;

    transform(M: Matrix): void;
    transformed(M: Matrix): Rect;

    translate(p: Point): void;
    translate(x: number, y?: number): void;
    translateBy(d: Point): void;
    translateBy(dx: number, dy?: number): void;
    translated(p: Point): Rect;
    translated(x: number, y?: number): Rect;
    translatedBy(d: Point): Rect;
    translatedBy(dx: number, dy?: number): Rect;

    union(r: Rect): Rect;
    union(x0: number, y0: number, x1: number, y1: number): Rect;

    unite(r: Rect): void;
    unite(x0: number, y0: number, x1: number, y1: number): void;
}

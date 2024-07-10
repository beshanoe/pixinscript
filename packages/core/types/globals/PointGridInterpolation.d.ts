declare class PointGridInterpolation {
    readonly delta: number;
    readonly isValid: boolean;
    readonly referenceRect: Rect;

    constructor();
    constructor(r: Rect, Sx: SurfaceSpline, Sy: SurfaceSpline, delta?: number, verbose?: boolean);
    constructor(r: Rect, Sx: ShepardInterpolation, Sy: ShepardInterpolation, delta?: number, verbose?: boolean);
    constructor(G: PointGridInterpolation);

    assign(G: PointGridInterpolation): void;
    clear(): void;
    evaluate(x: number, y: number): Point;
    evaluate(p: Point): Point;
    evaluate(points: Array<Point>): Array<Point>;
    initialize(r: Rect, Sx: SurfaceSpline, Sy: SurfaceSpline, delta?: number, verbose?: boolean): void;
    initialize(r: Rect, Sx: ShepardInterpolation, Sy: ShepardInterpolation, delta?: number, verbose?: boolean): void;
}

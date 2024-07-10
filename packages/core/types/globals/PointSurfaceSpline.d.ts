declare class PointSurfaceSpline {
    readonly errorX: number;
    readonly errorY: number;
    incrementalFunctionEnabled: boolean;
    readonly isValid: boolean;
    linearFunction: Matrix;
    maxSplinePoints: number;
    readonly pointsX: number[];
    readonly pointsY: number[];
    simplifierRejectFraction: number;
    simplifiersEnabled: boolean;
    readonly truncatedX: boolean;
    readonly truncatedY: boolean;
    readonly valuesX: Vector;
    readonly valuesY: Vector;

    constructor();
    constructor(S: PointSurfaceSpline);

    assign(S: PointSurfaceSpline): void;
    clear(): void;
    evaluate(x: number, y: number): Point;
    evaluate(p: Point): Point;
    evaluate(points: Point[]): Point[];
    initialize(P1: number[], P2: number[], smoothness?: number, W?: Vector, order?: number, rbfType?: number, eps?: number, polynomial?: boolean): void;
}

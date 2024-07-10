declare class ShepardInterpolation {
    constructor();

    readonly isValid: boolean;

    power: number;

    radius: number;

    clear(): void;

    evaluate(x: number, y: number): number;
    evaluate(p: Point): number;
    evaluate(points: any[]): Vector;

    initialize(x: Vector, y: Vector, z: Vector): void;
    initialize(r: Rect, x: Vector, y: Vector, z: Vector): void;
}

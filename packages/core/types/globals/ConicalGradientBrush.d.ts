declare class ConicalGradientBrush extends GradientBrush {
    readonly angle: number;
    readonly center: Point;

    constructor(center: Point, angle: number, stops?: Array<any>);
}

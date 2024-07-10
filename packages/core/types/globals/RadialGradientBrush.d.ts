declare class RadialGradientBrush extends GradientBrush {
    constructor(center: Point, radius: Number, focalPoint?: Point, stops?: Array<any>, spread?: number);

    readonly center: Point;
    readonly focalPoint: Point;
    readonly radius: Number;
}

declare class StarPosition {
    alpha: number;
    declination: number;
    delta: number;
    epoch: Date;
    muAlpha: number;
    muDelta: number;
    parallax: number;
    properMotionDec: number;
    properMotionRA: number;
    radialVelocity: number;
    rightAscension: number;

    constructor(
        alpha: number,
        delta: number,
        muAlpha?: number,
        muDelta?: number,
        parallax?: number,
        radialVelocity?: number,
        epoch?: Date | string | number
    );
}

declare class Position {
    readonly CIO: number;
    readonly CIP: Vector;
    readonly CIP_ITRS: Vector;
    readonly EO: number;
    readonly ERA: number;
    readonly GAST: number;
    readonly TDB: Date;
    readonly TT: Date;
    readonly Teph: Date;
    readonly UT1: Date;
    readonly barycentricPositionOfEarth: Vector;
    readonly barycentricPositionOfSun: Vector;
    readonly barycentricVelocityOfEarth: Vector;
    readonly cioBPNMatrix: Matrix;
    readonly epsA: number;
    readonly equinoxBPNMatrix: Matrix;
    readonly heliocentricPositionOfEarth: Vector;
    readonly isTopocentric: boolean;
    observer: ObserverPosition;
    polarMotionEnabled: boolean;

    constructor(t: Date, timescale?: string);
    constructor(isoTime: String, timescale?: string);
    constructor(jd1: number, jd2?: number, timescale?: string);

    apparent(H: EphemerisHandle): Vector;
    apparent(S: StarPosition): Vector;
    apparentVisualMagnitude(H: EphemerisHandle): number | null;

    astrometric(H: EphemerisHandle): Vector;
    astrometric(S: StarPosition): Vector;

    canComputeApparentVisualMagnitude(H: EphemerisHandle): boolean;

    geometric(H: EphemerisHandle): Vector;
    geometric(S: StarPosition): Vector;

    initCIOBasedParameters(): void;
    initEquinoxBasedParameters(): void;

    intermediate(H: EphemerisHandle): Vector;
    intermediate(S: StarPosition): Vector;

    nutationAngles(): Array<any>;

    proper(H: EphemerisHandle): Vector;
    proper(S: StarPosition): Vector;

    true(H: EphemerisHandle): Vector;
    true(S: StarPosition): Vector;

    trueDistance(H: EphemerisHandle): number;
    trueDistance(S: StarPosition): number;

    static eclipticToEquatorial(r: Vector, eps: number): Vector;
    static eclipticToEquatorial(r: Vector, se: number, ce: number): Vector;

    static equatorialToEcliptic(r: Vector, eps: number): Vector;
    static equatorialToEcliptic(r: Vector, se: number, ce: number): Vector;

    static icrsEquatorialToGalactic(r: Vector): Vector;
}

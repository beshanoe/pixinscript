declare class EphemerisHandle {
  readonly B_V: number | null;
  readonly D: number | null;
  readonly G: number | null;
  readonly H: number | null;
  readonly endTime: Date;
  readonly hasDerivative: boolean;
  readonly objectId: string;
  readonly objectName: string;
  readonly originId: string;
  readonly startTime: Date;

  constructor(parent: EphemerisFile, object: string, origin?: string);

  stateVector(date: Date): Vector;
  stateVector(isoTime: string): Vector;
  stateVector(jd1: number, jd2?: number): Vector;

  stateVectors(date: Date): Vector[];
  stateVectors(isoTime: string): Vector[];
  stateVectors(jd1: number, jd2?: number): Vector[];
}

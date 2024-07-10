declare class EphemerisFile {
  readonly authors: string;
  readonly briefDescription: string;
  readonly constants: string;
  readonly copyright: string;
  readonly creationTime: Date;
  readonly creatorApplication: string;
  readonly creatorOS: string;
  readonly description: string;
  readonly endTime: Date;
  readonly filePath: string;
  readonly objects: any[];
  readonly organizationName: string;
  readonly startTime: Date;
  readonly title: string;

  static readonly asteroidEphemerides: EphemerisFile;
  static readonly asteroidEphemeridesFilePath: string;
  static readonly cipITRSDataFilePath: string;
  static readonly deltaATDataFilePath: string;
  static readonly deltaTDataFilePath: string;
  static readonly fundamentalEphemerides: EphemerisFile;
  static readonly fundamentalEphemeridesFilePath: string;
  static readonly kboEphemerides: EphemerisFile;
  static readonly kboEphemeridesFilePath: string;
  static readonly nutationModel: EphemerisFile;
  static readonly nutationModelFilePath: string;
  static readonly shortTermAsteroidEphemerides: EphemerisFile;
  static readonly shortTermAsteroidEphemeridesFilePath: string;
  static readonly shortTermFundamentalEphemerides: EphemerisFile;
  static readonly shortTermFundamentalEphemeridesFilePath: string;
  static readonly shortTermKBOEphemerides: EphemerisFile;
  static readonly shortTermKBOEphemeridesFilePath: string;
  static readonly shortTermNutationModel: EphemerisFile;
  static readonly shortTermNutationModelFilePath: string;

  constructor(filePath?: string);

  close(): void;
  constantValue(name: string): number;
  isConstantAvailable(name: string): boolean;
  isObjectAvailable(object: string, origin?: string): boolean;
  objectName(object: string, origin?: string): string;
  open(filePath: string): void;
  visibleObjects(
    window: ImageWindow,
    position: Position,
    magMax?: number,
    magMin?: number,
    rect?: Rect
  ): any[];

  static deltaAT(t: Date): number;
  static deltaAT(isoTime: string): number;
  static deltaAT(jd1: number, jd2?: number): number;
  static deltaT(t: Date): number;
  static deltaT(isoTime: string): number;
  static deltaT(jd1: number, jd2?: number): number;
}

declare class SurfaceSimplifier {
  centroidInclusionEnabled: boolean;
  rejectFraction: number;
  rejectionEnabled: boolean;
  tolerance: number;

  constructor(tolerance?: number);

  simplify(x: Vector, y: Vector, z: Vector): Array<any>;
}

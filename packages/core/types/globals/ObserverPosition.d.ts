declare class ObserverPosition {
    constructor(
        longitude: number, 
        latitude: number, 
        height?: number, 
        equatorialRadius?: number, 
        flattening?: number, 
        regionalCenter?: Vector, 
        cioBased?: boolean
    );

    cioBased: boolean;
    equatorialRadius: number;
    flattening: number;
    height: number;
    lambda: number;
    latitude: number;
    longitude: number;
    phi: number;
    regionalCenter: Vector;
}

declare class StarDetector {
    bkgDelta: number;
    hotPixelFilterRadius: number;
    invert: boolean;
    mask: Image;
    maxDistortion: number;
    noiseReductionFilterRadius: number;
    peakResponse: number;
    sensitivity: number;
    structureLayers: number;
    upperLimit: number;
    xyStretch: number;

    constructor();

    progressCallback(count: number, total: number): boolean;

    getStructureMap(map: Image): void;

    stars(image: Image): Array<any>;

    test(image: Image, createStarMaskWindow?: boolean): void;
}

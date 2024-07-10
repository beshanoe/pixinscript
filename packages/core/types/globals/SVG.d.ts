declare class SVG {
    description: string;
    readonly filePath: string;
    height: number;
    readonly isPainting: boolean;
    readonly outputData: ByteArray;
    resolution: number;
    size: Rect;
    title: string;
    viewBox: Rect;
    width: number;

    constructor(filePath: string, width?: number, height?: number);
    constructor(width?: number, height?: number);
}

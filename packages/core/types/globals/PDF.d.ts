declare class PDF {
    bottomMargin: number;
    creator: string;
    readonly filePath: string;
    readonly fullRect: Rect;
    readonly isPainting: boolean;
    landscape: boolean;
    leftMargin: number;
    margins: Rect;
    readonly maxMargins: Rect;
    readonly minMargins: Rect;
    readonly outputData: ByteArray;
    pageSize: Rect;
    readonly paintRect: Rect;
    portrait: boolean;
    resolution: number;
    rightMargin: number;
    title: string;
    topMargin: number;

    constructor(filePath?: string);
}

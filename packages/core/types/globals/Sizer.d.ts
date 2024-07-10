declare class Sizer {
    readonly displayPixelRatio: number;
    readonly isHorizontal: boolean;
    readonly isVertical: boolean;
    margin: number;
    readonly numberOfItems: number;
    readonly parentControl: Control;
    scaledMargin: number;
    scaledSpacing: number;
    spacing: number;
    unscaledMargin: number;
    unscaledSpacing: number;

    constructor(vertical?: boolean);

    add(control: Control, stretchFactor?: number, alignment?: number): void;
    add(sizer: Sizer, stretchFactor?: number): void;
    addScaledSpacing(size: number): void;
    addSpacing(size: number, autoScaling?: boolean): void;
    addStretch(stretchFactor?: number): void;
    addUnscaledSpacing(size: number): void;

    has(control: Control): boolean;
    has(sizer: Sizer): boolean;

    indexOf(control: Control): number;
    indexOf(sizer: Sizer): number;

    insert(index: number, control: Control, stretchFactor?: number, alignment?: number): void;
    insert(index: number, sizer: Sizer, stretchFactor?: number): void;
    insertScaledSpacing(index: number, size: number): void;
    insertSpacing(index: number, size: number, autoScaling?: boolean): void;
    insertStretch(index: number, stretchFactor?: number): void;
    insertUnscaledSpacing(index: number, size: number): void;

    logicalPixelsToPhysical(size: number): number;
    physicalPixelsToLogical(size: number): number;

    remove(control: Control): void;
    remove(sizer: Sizer): void;

    setAlignment(control: Control, alignment: number): void;
    setAlignment(sizer: Sizer, alignment: number): void;

    setStretchFactor(control: Control, stretch: number): void;
    setStretchFactor(sizer: Sizer, stretch: number): void;
}


declare class Brush {
    constructor(color?: number, style?: number);
    constructor(b: Brush);

    color: number;
    
    readonly isEmpty: boolean;
    
    readonly isSolid: boolean;
    
    readonly isStippled: boolean;
    
    stipple: Bitmap;
    
    style: number;

    assign(br: Brush): void;

    static BrushStyle_BackwardDiagonalHatch: number;
    static BrushStyle_ConicalGradient: number;
    static BrushStyle_CrossDiagonalHatch: number;
    static BrushStyle_CrossHatch: number;
    static BrushStyle_Dense: number;
    static BrushStyle_Empty: number;
    static BrushStyle_ForwardDiagonalHatch: number;
    static BrushStyle_HalfTone: number;
    static BrushStyle_HorizontalHatch: number;
    static BrushStyle_LinearGradient: number;
    static BrushStyle_RadialGradient: number;
    static BrushStyle_Solid: number;
    static BrushStyle_Sparse: number;
    static BrushStyle_Stipple: number;
    static BrushStyle_VerticalHatch: number;
}

//-------------------------
//--------Constants--------
//-------------------------


//-------------------------
//----------Class----------
//-------------------------
declare class ProcessContainer extends ProcessInstance {


    //-------------------------
    //-------Properties--------
    //-------------------------
    isEmpty: boolean;
    length: number;


    //-------------------------
    //------Constructors-------
    //-------------------------


    //-------------------------
    //--------Functions--------
    //-------------------------
    public add(instance: ProcessInstance): void;

    public at(index: number): ProcessInstance;

    public clear(): void;

    public delete(index: number): void;

    public disable(index: number): void;
    public disable(index: number, disable?: boolean /* true */): void;

    public disabled(index: number): boolean;

    public enable(index: number): void;
    public enable(index: number, enable?: boolean /* true */): void;

    public enabled(index: number): boolean;

    public insert(index: number, instance: ProcessInstance): void;

    public invertMask(index: number): void;
    public invertMask(index: number, invert?: boolean): void;

    public maskId(index: number): string;

    public maskInverted(index: number): boolean;

    public setMask(index: number, mask: ImageWindow): void;
    public setMask(index: number, mask: ImageWindow, invert?: boolean /* false */): void;

    public setMask(index: number, maskId: string): void;
    public setMask(index: number, maskId: string, invert?: boolean /* false */): void;



    //-------------------------
    //----static Functions-----
    //-------------------------


    //-------------------------
    //-----event-handlers------
    //-------------------------


    //-------------------------
    //----static Properties----
    //-------------------------
    static prototype: ProcessContainer;
    static length: number;
    static name: string;


    //-------------------------
    //--------constants--------
    //-------------------------
}

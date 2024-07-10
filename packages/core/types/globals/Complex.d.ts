declare class Complex {
    im: number;
    imag: number;
    re: number;
    real: number;

    constructor();
    constructor(re: number, im?: number);
    constructor(c: Complex);

    abs(): number;
    add(c: Complex): void;
    add(r: number): void;
    arg(): number;
    assign(c: Complex): void;
    assign(r: number): void;
    conj(): Complex;
    cos(): Complex;
    cosh(): Complex;
    div(c: Complex): void;
    div(r: number): void;
    exp(): Complex;
    ln(): Complex;
    log(): Complex;
    mag(): number;
    mul(c: Complex): void;
    mul(r: number): void;
    norm(): number;
    pow(c: Complex): void;
    pow(r: number): void;
    setConj(): void;
    setCos(): void;
    setCosh(): void;
    setExp(): void;
    setLn(): void;
    setLog(): void;
    setSin(): void;
    setSinh(): void;
    setSqrt(): void;
    setTan(): void;
    setTanh(): void;
    sin(): Complex;
    sinh(): Complex;
    sqrt(): Complex;
    sub(c: Complex): void;
    sub(r: number): void;
    tan(): Complex;
    tanh(): Complex;
    toArray(): any[];
    toString(): string;

    static polar(r: number, thetaRadians: number): Complex;
    static polar(r: number, sinTheta: number, cosTheta: number): Complex;
}

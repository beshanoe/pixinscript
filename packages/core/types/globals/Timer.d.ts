declare class Timer {
    readonly count: number;
    interval: number;
    readonly isRunning: boolean;
    periodic: boolean;
    singleShot: boolean;

    constructor(interval?: number, periodic?: boolean);

    onTimeout(): void;

    start(): void;
    stop(): void;
}

declare class ProcessInstance {
    constructor(instance?: ProcessInstance);

    assign(instance: ProcessInstance): void;

    canExecuteGlobal(): boolean;

    canExecuteOn(view: View): boolean;
    canExecuteOn(image: Image): boolean;

    canLaunchInterface(): boolean;
    
    canProcessGlobal(): boolean;

    canProcessImages(): boolean;

    canProcessViews(): boolean;

    description(): string;

    executeGlobal(): boolean;

    executeOn(view: View, swapFile?: boolean): boolean;
    executeOn(image: Image, hints?: string): boolean;

    executionTime(): number;

    isAssignable(): boolean;

    isHistoryUpdater(view: View): boolean;

    isMaskable(view: View, mask: ImageWindow): boolean;

    launch(): void;

    launchInterface(): boolean;

    processCategory(): string;

    processId(): string;

    readIcon(iconId: string): boolean;

    setDescription(text: string): void;

    startJD(): number;

    toSource(language?: string, varId?: string, indent?: number, flags?: number): string;

    validate(): boolean;

    writeIcon(iconId: string): boolean;

    writeInstanceAddr(instanceAddr: string): boolean;

    static fromIcon(iconId: string): ProcessInstance;

    static icons(): Array<any>;

    static iconsByProcessId(processId: string): Array<any>;

    static SourceCodeFlag_NoDescription: string;
    static SourceCodeFlag_NoExecutionTime: string;
    static SourceCodeFlag_NoReadOnlyParams: string;
    static SourceCodeFlag_NoStartTime: string;
    static SourceCodeFlag_NoTimeInfo: string;
}

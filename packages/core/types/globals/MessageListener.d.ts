declare class MessageListener {
    constructor();

    onMessage(instance: number, uniqueId: string, message: string): void;
}

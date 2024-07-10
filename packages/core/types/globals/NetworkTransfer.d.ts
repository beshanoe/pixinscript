declare class NetworkTransfer {
    readonly aborted: boolean;
    readonly bytesTransferred: number;
    readonly contentType: string;
    readonly customHTTPHeaders: Array<any>;
    readonly errorInformation: string;
    readonly ok: boolean;
    readonly proxyURL: string;
    readonly responseCode: string;
    readonly totalSpeed: number;
    readonly totalTime: number;
    readonly url: string;

    constructor();

    closeConnection(): void;
    download(): boolean;
    post(fields: string): boolean;
    setConnectionTimeout(seconds: number): void;
    setCustomHTTPHeaders(headers: Array<any>): void;
    setProxyURL(url: string, userName?: string, userPassword?: string): void;
    setSSL(useSSL?: boolean, forceSSL?: boolean, verifyPeer?: boolean, verifyHost?: boolean): void;
    setURL(url: string, userName?: string, userPassword?: string): void;
    smtp(mailFrom: string, mailRecipients: Array<any>): boolean;
    upload(uploadSize?: number): boolean;

    onDownloadDataAvailable(data: ByteArray): boolean;
    onTransferProgress(dlTotal: number, dlCurrent: number, ulTotal: number, ulCurrent: number): boolean;
    onUploadDataRequested(maxSize: number): ByteArray;
}

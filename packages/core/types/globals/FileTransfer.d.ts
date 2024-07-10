declare class FileTransfer {
  readonly bytesTransferred: number;
  readonly isDownload: boolean;
  readonly isUpload: boolean;
  readonly localFilePath: string;
  readonly ok: boolean;
  readonly remoteURL: string;
  readonly responseCode: number;
  readonly totalSpeed: number;
  readonly totalTime: number;

  perform(): boolean;
}

declare class FileDownload extends FileTransfer {
   readonly contentType: string;

   constructor(url: string, filePath: string);
}

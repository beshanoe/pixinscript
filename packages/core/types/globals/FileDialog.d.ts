declare class FileDialog {
   caption: string;
   filters: any[];
   initialPath: string;
   selectedFileExtension: string;
   execute(): boolean;
}

declare class OpenFileDialog extends FileDialog {
   readonly fileName: string;
   readonly fileNames: string[];
   multipleSelections: boolean;
   constructor();
   loadImageFilters(): void;
}

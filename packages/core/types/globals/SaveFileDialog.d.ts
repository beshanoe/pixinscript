declare class SaveFileDialog extends FileDialog {
    readonly fileName: String;
    overwritePrompt: Boolean;

    constructor();

    loadImageFilters(): void;
}

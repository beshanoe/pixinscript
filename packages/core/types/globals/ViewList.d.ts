declare class ViewList extends Control {
    currentView: View;
    excludeIdentifiersPattern: string;
    excludedView: View;
    readonly includesMainViews: boolean;
    readonly includesPreviews: boolean;

    constructor(parent?: Control);

    getAll(): void;
    getMainViews(): void;
    getPreviews(): void;
    reload(): void;
    remove(view: View): void;

    onCurrentViewUpdated(view: View): void;
    onViewSelected(view: View): void;
}

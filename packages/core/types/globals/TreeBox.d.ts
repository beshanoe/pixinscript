declare class TreeBox extends ScrollBox {
    alternateRowColor: boolean;
    currentNode: TreeBoxNode;
    headerSorting: boolean;
    headerVisible: boolean;
    iconHeight: number;
    iconWidth: number;
    indentSize: number;
    multipleSelection: boolean;
    nodeDragging: boolean;
    nodeExpansion: boolean;
    readonly numberOfChildren: number;
    numberOfColumns: number;
    rootDecoration: boolean;
    readonly selectedNodes: TreeBoxNode[];
    uniformRowHeight: boolean;

    onCurrentNodeUpdated(currentItem: TreeBoxNode, oldItem: TreeBoxNode): void;
    onNodeActivated(item: TreeBoxNode, columnIndex: number): void;
    onNodeClicked(item: TreeBoxNode, columnIndex: number): void;
    onNodeCollapsed(item: TreeBoxNode): void;
    onNodeDoubleClicked(item: TreeBoxNode, columnIndex: number): void;
    onNodeEntered(item: TreeBoxNode, columnIndex: number): void;
    onNodeExpanded(item: TreeBoxNode): void;
    onNodeSelectionUpdated(): void;
    onNodeUpdated(item: TreeBoxNode, columnIndex: number): void;

    constructor(parent?: Control);

    add(node: TreeBoxNode): void;
    adjustColumnWidthToContents(col: number): void;
    child(idx: number): TreeBoxNode;
    childIndex(node: TreeBoxNode): number;
    clear(): void;
    columnWidth(col: number): number;
    headerAlignment(col: number): number;
    headerIcon(col: number): Bitmap;
    headerText(col: number): string;
    hideColumn(col: number, hide?: boolean): void;
    insert(idx: number, node: TreeBoxNode): void;
    isColumnVisible(col: number): boolean;
    nodeByPosition(p: Point): TreeBoxNode;
    nodeByPosition(x: number, y: number): TreeBoxNode;
    nodeRect(node: TreeBoxNode): Rect;
    remove(idx: number): void;
    selectAllNodes(): void;
    setColumnWidth(col: number, width: number): void;
    setHeaderAlignment(col: number, align: number): void;
    setHeaderIcon(col: number, icon: Bitmap | string): void;
    setHeaderText(col: number, txt: string): void;
    setIconSize(width: number, height: number): void;
    setIconSize(size: number): void;
    setNodeIntoView(node: TreeBoxNode): void;
    showColumn(col: number, show?: boolean): void;
    sort(col?: number, ascending?: boolean): void;
}

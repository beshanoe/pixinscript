declare class BRQuadTree {
    constructor(objects?: Array<any>, bucketCapacity?: number);

    bucketCapacity: number;
    objects: Array<any>;
    root: QuadTreeNode;

    avgDist(rect: Rect, dx: number, dy: number, excludeRect?: Rect): number;
    build(objects: Array<any>, bucketCapacity?: number, rect?: Rect): void;
    clear(): void;
    height(): number;
    insert(obj: Object): void;
    isEmpty(): boolean;
    isTree(): boolean;
    leafNodeAt(point: Point): QuadTreeNode;
    minDist(rect: Rect, dx: number, dy: number, excludeRect?: Rect): number;
    nodeAt(point: Point): QuadTreeNode;
    numberOfLeafNodes(): number;
    numberOfNodes(): number;
    regenerate(bucketCapacity?: number, rect?: Rect): void;
    remove(obj: Object): void;
    removeAtPoint(point: Point): void;
    removeAtRect(rect: Rect): void;
    search(rect: Rect): Array<any>;
    searchWithCallback(rect: Rect, callback: Function, data?: Object): void;
    traverse(callback: Function): void;
}

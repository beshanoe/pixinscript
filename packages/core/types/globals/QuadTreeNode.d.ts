declare class QuadTreeNode {
  index: Array<any>;
  ne: QuadTreeNode;
  nw: QuadTreeNode;
  rect: Rect;
  se: QuadTreeNode;
  sw: QuadTreeNode;

  constructor(rect: Rect, index?: Array<any>);

  includes(point: Point): boolean;
  intersects(rect: Rect): boolean;
  isLeaf(): boolean;
  neRect(): Rect;
  nwRect(): Rect;
  seRect(): Rect;
  swRect(): Rect;
}

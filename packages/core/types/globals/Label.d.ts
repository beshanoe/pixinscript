declare class Label extends Frame {
  constructor(parent?: Control);

  margin: number;
  text: string;
  textAlignment: number;
  useRichText: boolean;
  wordWrapping: boolean;

  clear(): void;
}

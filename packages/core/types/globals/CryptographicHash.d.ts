declare class CryptographicHash {
  // Properties
  readonly algorithmName: string;
  readonly hashLength: number;

  // Constructor
  constructor(algorithm: number);

  // Methods
  finalize(): ByteArray;
  hash(data: ByteArray): ByteArray;
  initialize(): void;
  update(data: ByteArray): void;
}

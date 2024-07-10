declare class Compression {
  static Compression_LZ4: number;
  static Compression_LZ4HC: number;
  static Compression_ZLib: number;
  static Compression_Zstd: number;

  readonly algorithmName: string;
  byteShuffling: boolean;
  checksums: boolean;
  compressionLevel: number;
  readonly defaultCompressionLevel: number;
  itemSize: number;
  readonly maxCompressionLevel: number;
  subblockSize: number;

  constructor(algorithm: number);

  compress(
    data: string | ByteArray | Uint8Array | Uint16Array | Uint32Array
  ): Array<any>;
  uncompress(subblocks: Array<any>): ByteArray;
}

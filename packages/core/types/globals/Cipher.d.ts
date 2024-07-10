declare class Cipher {
    readonly algorithmName: String;
    readonly keyLength:number;

    constructor(algorithm:number, key: ByteArray);

    decrypt(cipherText: ByteArray): ByteArray;

    encrypt(plainText: ByteArray): ByteArray;
}

declare const Cipher_AES256: 256;

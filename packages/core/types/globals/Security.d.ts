declare class Security {
  static certifiedDevelopers(): Array<any>;
  static exportSigningKeysFile(
    outputFilePath: string,
    newPassword: string | ByteArray,
    filePath: string,
    password: string | ByteArray
  ): void;
  static generateCodeSignatureFile(
    outputFilePath: string,
    inputFilePath: string,
    developerId: string,
    publicKey: ByteArray,
    privateKey: ByteArray
  ): void;
  static generateCodeSignatureFile(
    outputFilePath: string,
    inputFilePath: string,
    keysFilePath: string,
    password: string | ByteArray
  ): void;
  static generateLocalSigningKeysFile(
    outputFilePath: string,
    password: string | ByteArray
  ): void;
  static generateScriptSignatureFile(
    outputFilePath: string,
    scriptFilePath: string,
    entitlements: Array<any>,
    developerId: string,
    publicKey: ByteArray,
    privateKey: ByteArray
  ): void;
  static generateScriptSignatureFile(
    outputFilePath: string,
    scriptFilePath: string,
    entitlements: Array<any>,
    keysFilePath: string,
    password: string | ByteArray
  ): void;
  static generateSigningKeysFile(
    outputFilePath: string,
    developerId: string,
    password: string | ByteArray
  ): void;
  static generateXMLSignature(
    filePath: string,
    developerId: string,
    publicKey: ByteArray,
    privateKey: ByteArray
  ): void;
  static generateXMLSignature(
    filePath: string,
    keysFilePath: string,
    password: string | ByteArray
  ): void;
  static getCodeSignature(filePath: string): Object;
  static getScriptSignature(filePath: string): Object;
  static getXMLSignature(filePath: string): Object;
  static haveEntitlement(entitlement: string): Boolean;
  static loadSigningKeysFile(
    filePath: string,
    password: string | ByteArray,
    publicKeyOnly?: boolean
  ): Object;
  static submitCertifiedDeveloperData(
    developerId: string,
    publicKey: ByteArray,
    contactEmail: string,
    publicEmail?: string,
    url?: string,
    name?: string,
    info?: string
  ): void;
  static submitCertifiedDeveloperDataWithSigningKeysFile(
    keysFilePath: string,
    password: string | ByteArray,
    contactEmail: string,
    publicEmail?: string,
    url?: string,
    name?: string,
    info?: string
  ): void;
  static validPassword(password: string | ByteArray): Boolean;
}

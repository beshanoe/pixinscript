declare class Error {
  constructor(message?: string, fileName?: string, lineNumber?: number);

  message: string;
  name: string;

  propertyIsEnumerable(propertyName: string): boolean;
}

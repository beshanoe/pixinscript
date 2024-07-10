declare class RegExp {
   readonly global: Boolean;
   readonly ignoreCase: Boolean;
   lastIndex: number;
   readonly multiline: Boolean;
   readonly source: String;
   readonly sticky: Boolean;

   constructor(pattern: String, flags?: String);

   [pattern: string]: any;

   exec(str?: String): Array<any>;
   propertyIsEnumerable(propertyName: String): Boolean;
   test(str?: String): Boolean;
   toLocaleString(): String;
   toSource(): String;
   toString(): String;
}

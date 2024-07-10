interface Object {
  __defineGetter__(property: string, getter: Function): void;
  __defineSetter__(property: string, setter: Function): void;
  __lookupGetter__(property: string): Function | undefined;
  __lookupSetter__(property: string): Function | undefined;
  hasOwnProperty(property: string): boolean;
  isPrototypeOf(obj: Object): boolean;
  propertyIsEnumerable(property: string): boolean;
  toLocaleString(): string;
  toSource(): string;
  toString(): string;
  unwatch(property: string): void;
  valueOf(): Object;
  watch(property: string, handler: Function): void;
}

interface ObjectConstructor {
  new (value?: any): Object;
  (): any;
  (value: any): any;

  /** A reference to the prototype for a class of objects. */
  readonly prototype: Object;

  create(proto: Object, propertiesObject?: Object): Object;
  defineProperties(obj: Object, props: Object): void;
  defineProperty(obj: Object, prop: string, descriptor: Object): void;
  freeze(obj: Object): Object;
  getOwnPropertyDescriptor(obj: Object, prop: string): Object;
  getOwnPropertyNames(obj: Object): string[];
  getPrototypeOf(obj: Object): Object;
  isExtensible(obj: Object): boolean;
  isFrozen(obj: Object): boolean;
  isSealed(obj: Object): boolean;
  keys(obj: Object): string[];
  preventExtensions(obj: Object): Object;
  seal(obj: Object): Object;
}

declare var Object: ObjectConstructor;

// @ts-nocheck
// Parameters type collides with an internal TS type defined in lib.es5.d.ts
// Please use parameterStorage instead, it's just a wrapper over Parameters

export const parameterStorage = {
  isGlobalTarget: Parameters.isGlobalTarget as readonly boolean,
  isViewTarget: Parameters.isViewTarget as readonly boolean,
  targetView: Parameters.targetView as readonly View,

  clear(): void {
    return Parameters.clear(id);
  },
  get(id: string): string {
    return Parameters.get(id);
  },
  getBoolean(id: string): string {
    return Parameters.getBoolean(id);
  },
  getInteger(id: string): string {
    return Parameters.getInteger(id);
  },
  getReal(id: string): string {
    return Parameters.getReal(id);
  },
  getString(id: string): string {
    return Parameters.getString(id);
  },
  getUInt(id: string): string {
    return Parameters.getUInt(id);
  },
  has(id: string): boolean {
    return Parameters.has(id);
  },
  remove(id: string): void {
    return Parameters.remove(id);
  },
  set(id: string, value: any): void {
    return Parameters.set(id, value);
  },
};

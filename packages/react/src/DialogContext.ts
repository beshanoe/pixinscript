import { createContext, useContext } from "react";

export const DialogContext = createContext<Dialog>(null as any);

export function useDialog() {
  return useContext(DialogContext);
}

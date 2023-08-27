// context.types.ts
import { ReactNode, SetStateAction, Dispatch } from "react";

export interface ContextTypes {
  scrollY: number;
}

export interface ContextProviderTypes {
  children: ReactNode;
}

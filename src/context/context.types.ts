// context.types.ts
import { ReactNode } from "react";

export interface ContextTypes {
  scrollY: number;
  success: any;
  error: any;
  contextHolder: any;
}

export interface ContextProviderTypes {
  children: ReactNode;
}

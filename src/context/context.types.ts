// context.types.ts
import { ReactNode } from "react";

export interface ContextTypes {
  scrollY: number;
  success: (e: string) => void;
  error: (e: string) => void;
  contextHolder: any;
  scrollPositionTop: () => void;
  darkMode: () => string;
  lightMode: () => string;
}

export interface ContextProviderTypes {
  children: ReactNode;
}

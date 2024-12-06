import { createContext } from "react";

interface ThemeContextType {
  theme: boolean;
  setTheme: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
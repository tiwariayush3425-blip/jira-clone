import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { ThemeProvider, CssBaseline } from "@mui/material";

import { lightTheme, darkTheme } from "../theme/theme";

type ThemeContextType = {
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

type Props = {
  children: React.ReactNode;
};

export function CustomThemeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () => (darkMode ? darkTheme : lightTheme),
    [darkMode]
  );

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";
import { CustomThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <CustomThemeProvider>
    <App />
    <Toaster position="top-right" />
  </CustomThemeProvider>
);